import { Component, Element, h } from '@stencil/core';
import { findLastIndex } from '../../utils/arrayUtils';

type Heading = {
  id?: string;
  element: HTMLTHeadingElement;
  level: number;
  parentIndex: number;
  text: string;
  treeItem?: HTMLTTreeItemElement;
}

@Component({
  tag: 't-table-of-contents',
  styleUrl: 't-table-of-contents.css',
  shadow: true,
})
export class TTableOfContents {

  @Element() element: HTMLTTableOfContentsElement;

  get tree() {
    return this.element.shadowRoot.querySelector('t-tree');
  }

  componentDidRender() {
    const headings: Heading[] = [];
    this.findHeadings().then(headingElements => {
      headingElements.forEach((headingElement, index) => {
        const id = headingElement.id || null;
        const level = headingElement.level;
        const text = headingElement.textContent;
        const parentIndex = findLastIndex(headings, heading => heading.level < level);
        const heading: Heading = { id, level, parentIndex, text, element: headingElement };
        headings.push(heading);
      });
      headings.forEach(heading => {
        const { id, text, parentIndex, element, level } = heading;
        const item = document.createElement('t-tree-item');
        item.label = text;
        if (id) {
          item.href = `#${id}`;
        } else {
          item.addEventListener('labelClick', () => {
            element.scrollIntoView();
          });
        }
        heading.treeItem = item;
        if (level > 1) {
          const parentElement = level < 3 ? this.tree : headings[parentIndex].treeItem;
          parentElement.appendChild(item);
        }
      });
    });
  }

  render() {
    return <t-tree/>;
  }

  private async findHeadings() {
    await customElements.whenDefined('t-heading');
    return Array.from(document.querySelectorAll('t-heading'));
  }
}
