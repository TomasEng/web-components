import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 't-details',
  styleUrl: 't-details.css',
  shadow: true,
})
export class TDetails {

  @Prop() summary: string;
  @Prop() openSummary?: string;

  @State() open: boolean = false;

  handleToggle(event: ToggleEvent) {
    switch (event.newState) {
      case 'open':
        this.open = true;
        break;
      case 'closed':
        this.open = false;
        break;
    }
  }

  summaryText(): string {
    return this.openSummary && this.open ? this.openSummary : this.summary;
  }

  render() {
    return (
      <Host>
        <details onToggle={(e) => this.handleToggle(e as ToggleEvent)} open={this.open}>
          <summary>
            {this.summaryText()}
          </summary>
          <slot/>
        </details>
      </Host>
    );
  }

}
