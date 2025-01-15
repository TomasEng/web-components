[![Built With Stencil](https://img.shields.io/badge/-Built%20With%20Stencil-16161d.svg?logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjIuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI%2BCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI%2BCgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU%2BCjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MjQuNywzNzMuOWMwLDM3LjYtNTUuMSw2OC42LTkyLjcsNjguNkgxODAuNGMtMzcuOSwwLTkyLjctMzAuNy05Mi43LTY4LjZ2LTMuNmgzMzYuOVYzNzMuOXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQyNC43LDI5Mi4xSDE4MC40Yy0zNy42LDAtOTIuNy0zMS05Mi43LTY4LjZ2LTMuNkgzMzJjMzcuNiwwLDkyLjcsMzEsOTIuNyw2OC42VjI5Mi4xeiIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDI0LjcsMTQxLjdIODcuN3YtMy42YzAtMzcuNiw1NC44LTY4LjYsOTIuNy02OC42SDMzMmMzNy45LDAsOTIuNywzMC43LDkyLjcsNjguNlYxNDEuN3oiLz4KPC9zdmc%2BCg%3D%3D&colorA=16161d&style=flat-square)](https://stenciljs.com)

# Tomas' designsystem

Designsystem med webkomponenter bygget ved hjelp av Stencil. Systemet består av to pakker:
- [t-web-components](https://www.npmjs.com/package/t-web-components): Webkomponenter som kan brukes direkte i HTML-kode
- [t-web-components-react](https://www.npmjs.com/package/t-web-components-react): De samme komponentene eksportert som React-komponenter, for bruk i React-applikasjoner

## Demo
Se https://tomaseng.github.io/web-components/.

## Installasjon

### Ren HTML/Javascript
```bash
npm install t-web-components
```

### React
```bash
npm install t-web-components t-web-components-react
```

## Bruk
Komponentene blir tilgjengliggjort ved hjelp av funksjonen `defineCustomElements`.
Denne må kjøres før komponentene kan tas i bruk.
```javascript
import {defineCustomElements} from "t-web-components/loader";
defineCustomElements();
```

For at komponentene skal se riktige ut, må alt brukes inne i komponenten `t-context` (eller `TContext` i React).
Dette vil blant annet tilgjengeliggjøre globale CSS-variabler.
Eksempel:

```html
<t-context>
  <t-button>Knapp</t-button>
</t-context>
```

## Lokal utvikling
Node og Yarn må være installert.
Ved første gangs kjøring, kjør `yarn install` i rotmappen for å installere avhengigheter.
For å kjøre opp prosjektet lokalt, kjør `yarn start` enten i rotmappen eller i `packages/t-web-components`.
Det vil starte demoapplikasjonen på `http://localhost:3333`.
Den skal oppdatere seg av seg selv når man lagrer, men det kan være man må gi det noen forsøk for at det skal fungere, i hvert fall når man jobber med CSS.

### Testing
Det er satt opp automatiserte tester for Jest og Playwright.
Playwright brukes til ende-til-ende-testing av komponentene, mens Jest brukes til enhetstesting av interne funksjoner.
Jeg har valgt å bruke Playwight fremfor Stencils innebygde testverktøy siden Playwright støtter rollebaserte selektorer (`getByRole` osv.), noe som gjør testene mer brukerfokuserte, og tester med flere nettlesere.
Testene kan kjøres ved hjelp av følgende kommandoer i `t-web-components`-mappen:

#### Enhetstester med Jest
```bash
yarn run test:jest
```

#### Ende-til-ende-tester med Playwright
Forutsetter at løsningen kjører på `http://localhost:3333`. Se ingress.
```bash
yarn run test:playwright
```

#### Alle tester
```bash
yarn run test
```

### Bygging og generering av React-komponenter
Pakkene blir bygget ved å kjøre `yarn run build` i mappen til pakken det gjelder.
Når man bygger `t-web-components`, blir også React-komponentene automatisk generert og lagret i `t-web-components-react`.

### Kobling med andre prosjekter
Pakken kan tas i bruk lokalt i andre prosjekter uten å publisere ny versjon. Det gjøres ved å følge følgende instruksjoner:
1. Kjør `yarn link` i `packages/t-web-components`.
2. Kjør `yarn link t-web-components` i det andre prosjektet.
3. Kjør `yarn run build` i `packages/t-web-components` hver gang det er gjort en endring som skal gjenspeiles i det andre prosjektet.

Det samme gjelder `packages/t-web-components-react` hvis denne er i bruk.

__Dette vil ikke fungere hvis Stencil kjører i utviklingsmodus samtidig.__

## Publisering
Prosjektet bruker verktøyet Lerna til å håndtere publisering av pakkene.
Ved å følge følgende instruksjoner, blir begge pakkene oppdatert med ny patchversjon og publisert til Npm-registret.
Alle kommandoer kjøres i rotmappen.
1. Kjør `yarn run build` for å bygge pakkene. Dette må gjøres først for å kjøre genereringsskriptene til Stencil.
2. Hvis noen filer har blitt endret, utfør en endringstransaksjon med endringene.
3. Kjør `yarn run publish` for å bygge nye versjoner og publisere pakkene til Npm-registret. (Siden Lerna håndterer publiseringsprosessen, vil ikke `npm publish` fungere.) Av ukjent grunn kan det hende at det kommer en feilmelding knyttet til publisering av React-pakken selv om pakken faktisk blir publisert.

## Utrulling av demoapplikasjon
Når `t-web-components` bygges, blir det generert en mappe som heter `www` i pakkemappen.
Det er denne som innholder demoapplikasjonen som kjører på Github Pages.
Denne kan rulles ut ved å kjøre `yarn run deploy-demo` i rotmappen.

## Filstruktur
Hver komponent har en egen mappe med komponentens navn i mappen `packages/t-web-components/src/components`. Videre har hver komponent forskjellige filer med ulike prefikser:

### `.tsx`
Hovedfilen til komponenten. Denne skal inneholde kompoentens klasse med Stencils `@Component`-annotasjon.

### `.css`
Komponentens CSS-fil. Dersom komponenten har skygge-DOM, blir innholdet av denne filen plassert i skyggens `<style>`-element.

### `.ete.ts`
Playwright-tester for komponenten.

### `.demo.ts`
Oppsett for testdata som brukes både i tester og i listen over eksempler.

### `.text.ts`
Eksporerter et objekt med standard tekstinnhold som brukes i komponenten og en type for dette objektet. Komponenter med slik tekst skal ha et attributt hvor man kan overstyre standardtekstene.

### `.context.css`
CSS-fil som brukes til å definere stilinformasjon for slissede elementer dypere ned enn på øverste nivå, ettersom dette ikke er mulig med `::slotted`. Denne filen må inkluderes i `t-context`-komponenten samt i komponenter som benytter seg av komponenten i skygge-DOM-en.