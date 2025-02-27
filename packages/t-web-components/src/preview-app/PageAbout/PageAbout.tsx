import { h } from '@stencil/core';

export const PageAbout = () => {
  return (
    <div slot="content">
      <t-heading level={1}>Om</t-heading>
      <p>
        Dette er et nettsideutformingsverktøy som i utgangspunktet er laget for mine personlige prosjekter, men jeg
        er bare glad til om det er til nytte for noen andre.
        Komponentene er bygget som webkomponenter ved hjelp av verktøyet <t-link href="https://stenciljs.com/" external={true}>Stencil</t-link>,
        men de er også tilgjengelige som <t-link href="https://react.dev/" external={true}>React</t-link>-komponenter.
      </p>
      <p>Systemet er utviklet med fokus på følgende målsetninger:</p>
      <ul>
        <li><p>Det skal være lett for alle brukere å se hva ting er. Knapper skal se ut som knapper og faner skal se ut som faner.</p></li>
        <li><p>Navigasjonen skal være intuitiv og oversiktlig. Informasjonshierarkiet skal være tydelig og det skal være lett å se hvor man er.</p></li>
        <li><p>
          Det skal være tilfredsstillende kontrast mellom tekst og bakgrunn, både i lys og mørk modus. Jeg har laget <t-link href='https://github.com/TomasEng/Chromator' external={true}>et eget verktøy for å håndtere dette</t-link>,
          slik at kontrasten tilfredsstiller retningslinjene til WCAG uansett hvilken fargetone man velger.
        </p></li>
        <li><p>
          Brukerens preferanser skal følges så langt det lar seg gjøre. Dette gjelder for eksempel tekststørrelse og fargemodus.
          Dersom brukeren endrer fargemodus i operativsystemet, skal nettsiden umiddelbart følge etter, med mindre brukeren selv har valgt å overstyre dette ved å velge noe annet enn "automatisk" i fargemodusvelgeren.
        </p></li>
        <li><p>Nettsiden skal være responsiv og fungere smertefritt på skjermstørrelser ned til moderne mobiltelefonstørrelse.</p></li>
        <li><p>
          Hovedinformasjonen på siden skal ta så mye plass som praktisk mulig.
          Det skal ikke være forstyrrende elementer som henger igjen og tar opp plass når brukeren ruller bort fra dem, spesielt ikke når det allerede er lite plass å ta av.
        </p></li>
        <li><p>Etablerte designidiomer skal følges så langt det lar seg gjøre, slik at systemet er forutsigbart for brukerne. Ingen firkantede radioknapper eller egne løsninger for datovelgere og liknende.</p></li>
        <li><p>Det skal tas hensyn til tilgjengelighetsverkøy og søkemotoroptimalisering.</p></li>
      </ul>
      <p>
        Siden systemet i utgangspunktet er ment for personlig bruk, finnes det dessverre ikke noe mer dokumentasjon enn eksemplene på oversiktssiden.
        Ta gjerne kontakt hvis du som leser dette ønsker å ta det i bruk, så skal jeg gjøre noe med det.
      </p>
    </div>
  );
}
