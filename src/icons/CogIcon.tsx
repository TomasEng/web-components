import { h } from '@stencil/core';
import { IconProps } from './IconProps';
import { SvgTemplate } from './SvgTemplate';

const dFilled = 'M9.814 2.823a.75.75 0 0 1 .73-.573h2.913a.75.75 0 0 1 .729.573l.459 1.89c.217.08.43.167.637.265l1.675-1.02a.75.75 0 0 1 .92.11l2.056 2.054a.75.75 0 0 1 .11.92l-1.02 1.676c.097.207.185.42.264.637l1.89.46a.75.75 0 0 1 .573.728v2.914a.75.75 0 0 1-.573.729l-1.89.459a7.69 7.69 0 0 1-.265.637l1.02 1.675a.75.75 0 0 1-.11.92l-2.054 2.056a.75.75 0 0 1-.92.11l-1.676-1.02c-.207.097-.42.185-.637.264l-.46 1.89a.75.75 0 0 1-.728.573h-2.914a.75.75 0 0 1-.729-.573l-.459-1.89a7.725 7.725 0 0 1-.637-.264l-1.675 1.02a.75.75 0 0 1-.92-.11l-2.056-2.055a.75.75 0 0 1-.11-.92l1.02-1.676a7.707 7.707 0 0 1-.264-.637l-1.89-.46a.75.75 0 0 1-.573-.728v-2.914a.75.75 0 0 1 .573-.729l1.89-.459c.079-.217.167-.43.265-.637l-1.02-1.675a.75.75 0 0 1 .11-.92l2.054-2.056a.75.75 0 0 1 .92-.11l1.676 1.02c.207-.097.42-.185.637-.264l.46-1.89ZM12 10.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5Z';
const dUnfilled = 'M10.543 2.25a.75.75 0 0 0-.729.573l-.459 1.89c-.217.08-.43.167-.637.265l-1.675-1.02a.75.75 0 0 0-.92.11L4.066 6.121a.75.75 0 0 0-.11.92l1.02 1.676c-.097.207-.185.42-.264.637l-1.89.46a.75.75 0 0 0-.573.728v2.914a.75.75 0 0 0 .573.729l1.89.459c.079.217.167.43.265.637l-1.02 1.675a.75.75 0 0 0 .11.92l2.054 2.056a.75.75 0 0 0 .92.11l1.676-1.02c.207.097.42.185.637.264l.46 1.89a.75.75 0 0 0 .728.573h2.914a.75.75 0 0 0 .729-.573l.459-1.89c.217-.079.43-.167.637-.264l1.675 1.02a.75.75 0 0 0 .92-.11l2.056-2.055a.75.75 0 0 0 .11-.92l-1.02-1.676a7.69 7.69 0 0 0 .264-.637l1.89-.46a.75.75 0 0 0 .573-.728v-2.914a.75.75 0 0 0-.573-.729l-1.89-.459a7.693 7.693 0 0 0-.265-.637l1.02-1.675a.75.75 0 0 0-.11-.92l-2.054-2.056a.75.75 0 0 0-.92-.11l-1.676 1.02a7.706 7.706 0 0 0-.637-.264l-.46-1.89a.75.75 0 0 0-.728-.573h-2.914Zm.172 3.221.418-1.721h1.734l.418 1.721a.75.75 0 0 0 .513.541c.407.122.796.285 1.163.483a.75.75 0 0 0 .747-.02l1.526-.93 1.221 1.22-.93 1.527a.75.75 0 0 0-.02.747c.198.367.36.756.483 1.163a.75.75 0 0 0 .541.513l1.721.418v1.734l-1.72.418a.75.75 0 0 0-.542.513 6.207 6.207 0 0 1-.483 1.163.75.75 0 0 0 .02.747l.93 1.526-1.22 1.221-1.527-.93a.75.75 0 0 0-.747-.02 6.21 6.21 0 0 1-1.163.483.75.75 0 0 0-.513.541l-.418 1.721h-1.734l-.418-1.72a.75.75 0 0 0-.513-.542 6.21 6.21 0 0 1-1.163-.483.75.75 0 0 0-.747.02l-1.526.93-1.221-1.22.93-1.527a.75.75 0 0 0 .02-.747 6.206 6.206 0 0 1-.483-1.163.75.75 0 0 0-.541-.513l-1.721-.418v-1.734l1.721-.418a.75.75 0 0 0 .541-.513c.122-.407.285-.796.483-1.163a.75.75 0 0 0-.02-.747l-.93-1.526 1.22-1.221 1.527.93a.75.75 0 0 0 .747.02c.367-.198.756-.36 1.163-.483a.75.75 0 0 0 .513-.541ZM10.25 12a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0ZM12 8.75a3.25 3.25 0 1 0 0 6.5 3.25 3.25 0 0 0 0-6.5Z';

export const CogIcon = ({fill, ...rest}: IconProps) => (
  <SvgTemplate {...rest}>
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d={fill ? dFilled : dUnfilled}
      fill="currentColor"
    />
  </SvgTemplate>
);
