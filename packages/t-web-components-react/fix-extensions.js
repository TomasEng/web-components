/*
 * This script fixes the imports in the dist folder to include the file extension, because directory imports are not supported.
 */

const fs = require('fs');
const path = require('path');

function fixImports(dir) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.lstatSync(filePath);

    if (stat.isDirectory()) {
      fixImports(filePath);
    } else if (file.endsWith('.js')) {
      let content = fs.readFileSync(filePath, 'utf8');

      content = content.replace(/from\s+'(\.[^']*)';/g, (match, p1) => {
        const resolvedPath = path.resolve(path.dirname(filePath), p1);

        if (fs.existsSync(resolvedPath) && fs.lstatSync(resolvedPath).isDirectory()) {
          // If the path is a directory, append '/index.js'
          return `from '${p1}/index.js';`;
        } else if (!p1.endsWith('.js') && !p1.endsWith('.json')) {
          // If the path doesn't end in .js or .json, append .js
          return `from '${p1}.js';`;
        }

        // Otherwise, return the path unchanged
        return match;
      });

      fs.writeFileSync(filePath, content, 'utf8');
    }
  });
}

fixImports(path.join(__dirname, 'dist'));
