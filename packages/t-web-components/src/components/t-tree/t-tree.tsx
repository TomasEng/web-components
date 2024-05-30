import { Component, h, Method, Element, Fragment, Prop } from '@stencil/core';

@Component({
  tag: 't-tree',
  styleUrl: 't-tree.css',
  shadow: true,
})
export class TTree {

  @Element() element: HTMLElement;

  @Prop() label?: string;

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
    const allItems = await this.getAllItems();
    await Promise.all(
      Array.from(allItems).map(async item => {
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
    return this.makeFirstItemFocusable();
  }

  @Method() async makeFirstItemFocusable() {
    this.getAllVisibleItems().then(async items => {
      if (items.length > 0) {
        await this.resetTabindex();
        await items[0].setFocusable(true);
      }
    });
  }

  render() {
    const additionalAttributes = this.label ? { 'aria-labelledby': labelId } : {};
    return (
      <>
        {this.label && <span id={labelId}>{this.label}</span>}
        <ul role='tree' {...additionalAttributes}>
          <slot></slot>
        </ul>
      </>
    );
  }
}

const labelId = 'tree-label';
