import { Component, Element, h, Method, Prop, State, Fragment, Event, EventEmitter } from '@stencil/core';
import { CaretRightIcon } from '../../icons/CaretRightIcon';
import { TLinkOrButtonCustomEvent } from '../../components';

@Component({
  tag: 't-tree-item',
  styleUrl: 't-tree-item.css',
  shadow: true,
})
export class TTreeItem {

  @Element() element: HTMLTTreeItemElement;

  @Prop() label: string;
  @Prop() href: string | null = null;

  @State() expanded = true;
  @State() hasChildren: boolean = false;

  @Event() labelClick: EventEmitter<MouseEvent>;

  @Method() async isExpanded(): Promise<boolean> {
    await customElements.whenDefined('t-tree-item');
    return this.expanded;
  }

  @Method() async isVisible(): Promise<boolean> {
    const isTopLevel = await this.isTopLevel();
    if (isTopLevel) {
      return true;
    } else {
      const parent = this.element.parentElement as HTMLTTreeItemElement;
      const isParentVisible = await parent.isVisible();
      if (!isParentVisible) return false;
      return await parent.isExpanded();
    }
  }

  @Method() async isFocusable(): Promise<boolean> {
    await customElements.whenDefined('t-link');
    return this.linkOrButton.focusable;
  }

  @Method() async isTopLevel(): Promise<boolean> {
    await customElements.whenDefined('t-tree-item');
    return this.element.parentElement.tagName === 'T-TREE';
  }

  @Method() async focusOnLink() {
    await Promise.all([
      customElements.whenDefined('t-link'),
      customElements.whenDefined('t-tree-item'),
    ]);
    await this.linkOrButton.focusOnElement();
  }

  @Method() async getNextVisibleItem(): Promise<HTMLTTreeItemElement | null> {
    const root = await this.getRoot();
    const allVisibleItems = await root.getAllVisibleItems();
    const index = Array.from(allVisibleItems).indexOf(this.element);
    const nextIndex = index + 1;
    return allVisibleItems[nextIndex] || null;
  }

  @Method() async getPreviousVisibleItem(): Promise<HTMLTTreeItemElement | null> {
    const root = await this.getRoot();
    const allVisibleItems = await root.getAllVisibleItems();
    const index = Array.from(allVisibleItems).indexOf(this.element);
    const previousIndex = index - 1;
    return allVisibleItems[previousIndex] || null;
  }

  @Method() async getLastVisibleSubItem(): Promise<HTMLTTreeItemElement | null> {
    await customElements.whenDefined('t-tree-item');
    const visibleSubItems = await this.getVisibleSubItems();
    if (visibleSubItems.length > 0) {
      return visibleSubItems[visibleSubItems.length - 1];
    } else {
      return null;
    }
  }

  @Method() async getVisibleSubItems(): Promise<HTMLTTreeItemElement[]> {
    await customElements.whenDefined('t-tree-item');
    if (this.expanded && this.hasChildren) {
      return Array
        .from(this.subItems)
        .filter(async (subItem) => await subItem.isVisible());
    } else {
      return [];
    }
  }

  @Method() async getSubItems() {
    await customElements.whenDefined('t-tree-item');
    return this.subItems;
  }

  @Method() async setFocusable(focusable: boolean) {
    await customElements.whenDefined('t-link-or-button');
    return this.linkOrButton.focusable = focusable;
  }

  @Method() async getRoot(): Promise<HTMLTTreeElement> {
    await customElements.whenDefined('t-tree');
    return this.element.closest('t-tree');
  }

  get linkOrButton(): HTMLTLinkOrButtonElement {
    return this.element.shadowRoot.querySelector('t-link-or-button');
  }

  get subItems(): NodeListOf<HTMLTTreeItemElement> {
    return this.element.querySelectorAll('t-tree-item');
  }

  private close() {
    this.expanded = false;
  }

  private open() {
    this.expanded = true;
  }

  private toggleExpanded() {
    this.expanded = !this.expanded;
  }

  componentDidRender() {
    customElements.whenDefined('t-tree-item').then(() => {
      this.hasChildren = this.element.querySelector('t-tree-item') !== null;
    });
  }

  private async handleKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowRight':
        event.preventDefault();
        await this.handleArrowRight();
        break;
      case 'ArrowLeft':
        event.preventDefault();
        await this.handleArrowLeft();
        break;
      case 'ArrowUp':
        event.preventDefault();
        await this.handleArrowUp();
        break;
      case 'ArrowDown':
        event.preventDefault();
        await this.handleArrowDown();
        break;
      case 'Home':
        event.preventDefault();
        await this.handleHome();
        break;
      case 'End':
        event.preventDefault();
        await this.handleEnd();
        break;
    }
  }

  private async handleArrowRight() {
    if (this.hasChildren) {
      if (this.expanded) {
        await this.moveFocusDown();
      } else {
        this.open();
      }
    }
  }

  private async handleArrowLeft() {
    if (this.hasChildren && this.expanded) {
      this.close();
    } else {
      const isTopLevel = await this.isTopLevel();
      if (!isTopLevel) await this.moveFocusToParent();
    }
  }

  private async handleArrowUp() {
    await this.moveFocusUp();
  }

  private async handleArrowDown() {
    await this.moveFocusDown();
  }

  private async handleHome() {
    await this.moveFocusToStart();
  }

  private async handleEnd() {
    await this.moveFocusToEnd();
  }

  private async moveFocusUp() {
    const previousItem = await this.getPreviousVisibleItem();
    if (previousItem) {
      await this.setFocusable(false);
      await previousItem.setFocusable(true);
      await previousItem.focusOnLink();
    }
  }

  private async moveFocusDown() {
    const nextItem = await this.getNextVisibleItem();
    if (nextItem) {
      await this.setFocusable(false);
      await nextItem.setFocusable(true);
      await nextItem.focusOnLink();
    }
  }

  private async moveFocusToParent() {
    const isTopLevel = await this.isTopLevel();
    if (isTopLevel) return;
    const parent = this.element.parentElement as HTMLTTreeItemElement;
    await this.setFocusable(false);
    await parent.setFocusable(true);
    await parent.focusOnLink();
  }

  private async moveFocusToStart() {
    const root = await this.getRoot();
    const allVisibleItems = await root.getAllVisibleItems();
    const firstItem = allVisibleItems[0];
    await this.setFocusable(false);
    await firstItem.setFocusable(true);
    await firstItem.focusOnLink();
  }

  private async moveFocusToEnd() {
    const root = await this.getRoot();
    const allVisibleItems = await root.getAllVisibleItems();
    const lastItem = allVisibleItems[allVisibleItems.length - 1];
    await this.setFocusable(false);
    await lastItem.setFocusable(true);
    await lastItem.focusOnLink();
  }

  private async handleClick(event: MouseEvent) {
    if (this.hasChildren) {
      const root = await this.getRoot();
      await root.resetTabindex();
      await this.setFocusable(true);
    }
    this.labelClick.emit(event);
  }

  render() {
    return (
      <li
        aria-expanded={this.expanded ? 'true' : 'false'}
        class={this.expanded ? 'expanded' : 'collapsed'}
        role='treeitem'
        title={this.label}
      >
        {this.renderLink()}
        {this.hasChildren && (
          <div class='collapsible'>
            <ul role='group'>
              <slot></slot>
            </ul>
          </div>
        )}
      </li>
    );
  }

  private renderLink() {
    return (
      <t-link-or-button
        href={this.href}
        onElementClick={(e: TLinkOrButtonCustomEvent<MouseEvent>) => this.handleClick(e.detail)}
        onKeyDown={(e) => this.handleKeyDown(e)}
      >
        {this.renderLabel()}
      </t-link-or-button>
    );
  }

  private renderLabel() {
    return (<>
      {this.hasChildren && (
        <CaretRightIcon
          fill
          onClick={(e) => this.handleArrowClick(e)}
        />
      )}
      <span class='label'>{this.label}</span>
    </>);
  }

  private handleArrowClick(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.toggleExpanded();
  }
}
