import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 't-heading',
  styleUrl: 't-heading.css',
  shadow: true,
})
export class THeading {

  @Prop() level: 1 | 2 | 3 | 4 | 5 | 6 = 1;

  render() {
    switch (this.level) {
      case 1:
        return <h1><slot/></h1>;
      case 2:
        return <h2><slot/></h2>;
      case 3:
        return <h3><slot/></h3>;
      case 4:
        return <h4><slot/></h4>;
      case 5:
        return <h5><slot/></h5>;
      case 6:
        return <h6><slot/></h6>;
      default:
        return <h1><slot/></h1>;
    }
  }
}