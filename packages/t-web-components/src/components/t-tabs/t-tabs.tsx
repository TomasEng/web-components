import { Component, h, Element, State } from '@stencil/core';

@Component({
  tag: 't-tabs',
  styleUrl: 't-tabs.css',
  shadow: true,
})
export class TTabs {

  @State() selectedIndex: number = 0;
  @State() focusableIndex: number = 0;

  @Element() element: HTMLElement;

  private tabList: HTMLTTabElement[] = [];

  connectedCallback() {
    this.tabList = Array.from(this.element.querySelectorAll('t-tab'));
  }

  get tabs(): NodeListOf<HTMLTTabElement> {
    return this.element.shadowRoot.querySelectorAll('[role="tab"]');
  }

  selectTab(index: number) {
    this.focusableIndex = index;
    this.selectedIndex = index;
  }

  moveFocus(index: number) {
    this.focusableIndex = index;
    this.tabs[index].focus();
  }

  moveFocusLeft() {
    if (this.focusableIndex > 0) {
      this.moveFocus(this.focusableIndex - 1);
    }
  }

  moveFocusRight() {
    if (this.focusableIndex < this.tabs.length - 1) {
      this.moveFocus(this.focusableIndex + 1);
    }
  }

  handleKeyDown(event: KeyboardEvent) {
    const { key } = event;
    switch (key) {
      case 'ArrowLeft':
        event.preventDefault();
        this.moveFocusLeft();
        break;
      case 'ArrowRight':
        event.preventDefault();
        this.moveFocusRight();
        break;
    }
  }

  componentDidRender() {
    const tabPanels = this.element.shadowRoot.querySelectorAll('[role="tabpanel"]');
    this.tabList.forEach((tab, index) => {
      tabPanels[index].appendChild(tab);
    });
  }

  render() {
    return (
      <div class='t-tabs'>
        <div role='tablist'>
          {this.tabList.map((tab, index) => (
            <button
              aria-controls={index.toString()}
              aria-selected={this.selectedIndex === index ? 'true' : 'false'}
              key={'tab_'+tab.heading}
              onClick={() => this.selectTab(index)}
              onKeyDown={(event) => this.handleKeyDown(event)}
              role='tab'
              tabindex={this.focusableIndex === index ? 0 : -1}
            >
              {tab.heading}
            </button>
          ))}
        </div>
        {this.tabList.map((tab, index) => (
          <t-panel
            class={this.selectedIndex === index ? 'active' : 'inactive'}
            id={index.toString()}
            key={'panel_'+tab.heading}
            role='tabpanel'
          />
        ))}
      </div>
    );
  }
}
