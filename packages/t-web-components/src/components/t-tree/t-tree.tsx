import { Component, h, Method, Element } from '@stencil/core';

@Component({
  tag: 't-tree',
  styleUrl: 't-tree.css',
  shadow: true,
})
export class TTree {

  @Element() element: HTMLElement;

  @Method() async getAllItems(): Promise<NodeListOf<HTMLTTreeItemElement>> {
    await customElements.whenDefined('t-tree-item');
    return this.element.querySelectorAll('t-tree-item');
  }

  @Method() async getAllVisibleItems(): Promise<HTMLTTreeItemElement[]> {
    const items = await this.getAllItems();
    return (await Promise.all(
      Array
        .from(items)
        .map(async item => ({
          include: await item.isVisible(),
          item,
        }))
    )).filter(({ include }) => include).map(({ item }) => item);
  }

  @Method() async resetTabindex() {
    const focusableItems = await this.getFocusableItems();
    await Promise.all(
      focusableItems.map(async item => {
        await item.setFocusable(false);
      })
    );
  }

  private async getFocusableItems(): Promise<HTMLTTreeItemElement[]> {
    const items = await this.getAllItems();
    const focusableItems: HTMLTTreeItemElement[] = [];
    await Promise.all(
      Array.from(items).map(async item => {
        if (await item.isFocusable()) {
          focusableItems.push(item);
        }
      })
    );
    return focusableItems;
  }

  componentDidLoad() {
    this.getAllVisibleItems().then(async items => {
      if (items.length > 0) {
        await this.resetTabindex();
        await items[0].setFocusable(true);
      }
    });
  }

  render() {
    return (
      <ul role='tree'>
        <slot></slot>
      </ul>
    );
  }
}
