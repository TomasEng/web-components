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
npm install t-web-components-react
```

## Bruk
Komponentene blir tilgjengliggjort ved hjelp av funksjonen `defineCustomElements`.
Denne må kjøres før komponentene kan tas i bruk.

I ren Javascript:
```javascript
import {defineCustomElements} from "t-web-components";
defineCustomElements();
```

I React:
```javascript
import {defineCustomElements} from "t-web-components-react";
defineCustomElements();
```

For at komponentene skal se riktige ut, må alt brukes inne i komponenten `t-context` (eller `TContext` i React).
Eksempel:

```html
<t-context>
  <t-button>Knapp</t-button>
</t-context>
```

## Lokal utvikling
For å kjøre opp prosjektet lokalt, kjør `npm start` enten i rotmappen eller i `packages/t-web-components`.
Det vil starte demoapplikasjonen på `http://localhost:3333`.
Den skal oppdatere seg av seg selv når man lagrer, men det kan være man må gi det noen forsøk for at det skal fungere.

### Testing
Det er satt opp automatiserte tester for Jest og Playwright.
Playwright brukes til ende-til-ende-testing av komponentene, mens Jest brukes til enhetstesing av interne funksjoner.
Testene kan kjøres ved hjelp av følgende kommandoer i `t-web-components`-mappen:

#### Enhetstester med Jest
```bash
npm run test:jest
```

#### Ende-til-ende-tester med Playwright
```bash
npm run test:playwright
```

#### Alle tester
```bash
npm run test
```

### Bygging og generering av React-komponenter
Pakkene blir bygget ved å kjøre `npm run build` i mappen til pakken det gjelder.
Når man bygger `t-web-components`, blir også React-komponentene automatisk generert og lagret i `t-web-components-react`.

## Publisering
Prosjektet bruker verktøyet Lerna til å håndtere publisering av pakkene.
Ved å følge følgende instruksjoner, blir begge pakkene oppdatert med ny patchversjon og publisert til Npm-registret.
Alle kommandoer kjøres i rotmappen.
1. Kjør `npm run build` for å bygge pakkene. Dette må gjøres først for å kjøre genereringsskriptene til Stencil.
2. Hvis noen filer har blitt endret, commit endringene.
3. Kjør `npm run patch` for å øke versjonsnummeret til pakkene.
4. Kjør `npm run build` igjen for å bygge pakkene med nytt versjonsnummer.
5. Kjør `npm run publish` for å publisere pakkene til Npm-registret. (`npm publish` vil ikke fungere, da Lerna håndterer publiseringen.)