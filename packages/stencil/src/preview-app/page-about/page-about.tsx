import { Component, h, Fragment } from '@stencil/core';

@Component({
  tag: 'page-about',
})
export class PageAbout {
  render() {
    return (
      <>
        <t-heading level={1}>Om</t-heading>
        <p>
          Dette er et nettsideutformingsverktøy som i utgangspunktet er laget for mine personlige prosjekter, men jeg er bare glad til om det er til nytte for noen andre.
          Komponentene er bygget som webkomponenter ved hjelp av verktøyet Stencil, men de er også tilgjengelige som React-komponenter.
        </p>
      </>
    );
  }
}
