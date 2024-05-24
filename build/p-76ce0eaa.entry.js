import{r as e,h as t,c as n,g as r}from"./p-223dec8c.js";import{s as o,a}from"./p-cec991d6.js";import{a as i,d as s,g as l,b as c}from"./p-ad0c5656.js";import{B as d,c as u,d as m,L as p,H as b,I as g}from"./p-27213a84.js";import{S as f}from"./p-ab9dbb64.js";import"./p-cb65c223.js";const h=class{constructor(t){e(this,t)}render(){return t("t-layout-main",{key:"c1359da5fa41e1cd456eb536706303909b22154d"},t("div",{key:"030512b8b2c053b2e7bda744fc1b4bd27ebc555d",slot:"content"},t("t-heading",{key:"f0fafe53262ca780fa09749f40b529a281845583",level:1},"Om"),t("p",{key:"50e683aa6101accf11300b90eb9676499a90999b"},"Dette er et nettsideutformingsverktøy som i utgangspunktet er laget for mine personlige prosjekter, men jeg er bare glad til om det er til nytte for noen andre. Komponentene er bygget som webkomponenter ved hjelp av verktøyet ",t("t-link",{key:"952e1c4048b85611bdd4a88f758be512580244ed",href:"https://stenciljs.com/",external:true},"Stencil"),", men de er også tilgjengelige som ",t("t-link",{key:"b86eba7d47bff5d98f7f47d874b28603db780bf1",href:"https://react.dev/",external:true},"React"),"-komponenter."),t("p",{key:"5beb9f59aa535bd0c69879463f0f175be862b110"},"Systemet er utviklet med fokus på følgende målsetninger:"),t("ul",{key:"243637285e8d461a58200f9d1c3c071f80dd6b0b"},t("li",{key:"4b3cb06889935bba4a182f407c2699cca12f025f"},"Det skal være lett for alle brukere å se hva ting er. Knapper skal se ut som knapper og faner skal se ut som faner."),t("li",{key:"b3318ac5c874450fe0ddf1423a1ab1e1525d7735"},"Navigasjonen skal være intuitiv og oversiktlig. Informasjonshierarkiet skal være tydelig og det skal være lett å se hvor man er."),t("li",{key:"ce03c39f0eab52033cd4b17b2a5d61260db0aa21"},"Det skal være tilfredsstillende kontrast mellom tekst og bakgrunn, både i lys og mørk modus. Jeg har laget ",t("t-link",{key:"34e683bea7d6238c05087545ccfd33ec42ffaa3e",href:"https://github.com/TomasEng/Chromator",external:true},"et eget verktøy for å håndtere dette"),", slik at kontrasten alltid er lik (i henhold til WCAG-definisjonen) uansett hvilken fargetone man velger."),t("li",{key:"66d09ace794a6e1915600e77b8218ab9aa44d4b0"},"Brukerens preferanser skal følges så langt det lar seg gjøre. Dette gjelder f.eks. tekststørrelse og fargemodus. Dersom brukeren endrer fargemodus i operativsystemet, skal nettsiden umiddelbart følge etter, med mindre brukeren har spesifisert en gitt fargemodus for nettsiden."),t("li",{key:"f956c42c19a5c7bf9327d4ed74d2e853ebf5ee6d"},"Nettsiden skal være responsiv og fungere smertefritt på skjermstørrelser ned til moderne mobiltelefonstørrelse."),t("li",{key:"2db8c898ad8cad17bcfceb6a5463e12400d30bf8"},"Hovedinformasjonen på siden skal ta så mye plass som praktisk mulig. Det skal ikke være forstyrrende elementer som henger igjen og tar opp plass når brukeren ruller bort fra dem, spesielt ikke når det allerede er lite plass å ta av."),t("li",{key:"cb27f6b3ebaedd50a506de5b9e907aaa8fec2f23"},"Etablerte designidiomer skal følges så langt det lar seg gjøre. Ingen firkantede radioknapper."),t("li",{key:"22100e6d41617a2b1574253cf3151e1d98cb21d8"},"Det skal tas hensyn til tilgjengelighetsverkøy og søkemotoroptimalisering.")),t("p",{key:"33a2b61ee75dbd86c5db03abf99bb333b5b3444b"},"Siden systemet i utgangspunktet er ment for personlig bruk, er det dessverre ikke spesielt godt dokumentert. Ta gjerne kontakt med spørsmål hvis du som leser dette ønsker å ta det i bruk.")))}};const v={text:"Klikk meg"};const k={simple:{componentName:"t-button",children:[v.text]},withIcon:{componentName:"t-button",children:[{componentName:"svg",props:{height:"1em",slot:"icon",viewBox:"0 0 24 24",width:"1em",xmlns:"http://www.w3.org/2000/svg"},children:[{componentName:"circle",props:{cx:"12",cy:"12",fill:"currentColor",r:"12"}}]},v.text]},iconOnly:{componentName:"t-button",props:{buttonAttributes:{title:v.text}},children:[{componentName:"svg",props:{height:"1em",slot:"icon",viewBox:"0 0 24 24",width:"1em",xmlns:"http://www.w3.org/2000/svg"},children:[{componentName:"circle",props:{cx:"12",cy:"12",fill:"currentColor",r:"12"}}]}]},transparent:{componentName:"t-button",props:{variant:"transparent"},children:[v.text]}};const y={onText:"På",offText:"Av"};const x={on:{componentName:"t-switch",props:{checked:true},children:[y.onText]},off:{componentName:"t-switch",props:{checked:false},children:[y.offText]}};const w={label:"Antall"};const N={simple:{componentName:"t-integer-picker",props:{label:w.label,value:5,min:0,max:10}}};const M={label:"Skriv inn noe"};const j={simple:{componentName:"t-textfield",props:{label:M.label}},valueChange:{componentName:"t-textfield",props:{label:M.label},events:{valueChange:e=>console.log(e.detail)}}};const S={label:"Alternativer"};const C={simple:{componentName:"t-select",props:{label:S.label,options:[{value:"1",label:"Alternativ 1"},{value:"2",label:"Alternativ 2"},{value:"3",label:"Alternativ 3"}],value:"1"}}};const q={label:"Velg",items:[{label:"Alternativ 1",logValue:"Alternativ 1 valgt"},{label:"Alternativ 2",logValue:"Alternativ 2 valgt"},{label:"Alternativ 3",logValue:"Alternativ 3 valgt"}]};const A={simple:{componentName:"t-dropdown-menu",props:{label:q.label,items:q.items.map((e=>({label:e.label,action:{type:"console-log",input:e.logValue}})))}}};const L={internalLinkText:"Intern lenke",externalLinkText:"Ekstern lenke"};const I={internal:{componentName:"t-link",props:{href:"#"},children:[L.internalLinkText]},external:{componentName:"t-link",props:{href:"#",external:true},children:[L.externalLinkText]}};const z={items:[{heading:"Fane 1",content:"Innhold 1"},{heading:"Fane 2",content:"Innhold 2"},{heading:"Fane 3",content:"Innhold 3"}]};const T={simple:{componentName:"t-tabs",children:z.items.map((e=>({componentName:"t-tab",props:{heading:e.heading},children:[e.content]})))}};const O={webArticleSource:{authors:[{forename:"Oddbjørn",surname:"Engvold"}],articleTitle:"Sola",retrievedDate:{year:2024,month:5,day:12},url:"https://snl.no/Sola",journal:"Store norske leksikon"},scientificArticleSource:{authors:[{forename:"Oliver H.",surname:"Lowry"},{forename:"Nina J.",surname:"Rosebrough"},{forename:"A. Lewis",surname:"Farr"},{forename:"Rose J.",surname:"Randall"}],articleTitle:"Protein measurement with the Folin phenol reagent",journal:"The Journal of Biological Chemistry",volume:193,pageStart:265,pageEnd:275,date:{year:1951},issue:1,doi:"10.1016/S0021-9258(19)52451-6"},bookSource:{authors:[{forename:"Robert C.",surname:"Martin"}],bookTitle:"Clean Code - A Handbook of Agile Software Craftsmanship",publisher:"Prentice Hall",date:{year:2008,month:8},isbn:"9780136083252, 0136083250"}};const D={simple:{componentName:"t-source-list",props:{sources:{"snl-sola":O.webArticleSource,pmwtfpr:O.scientificArticleSource,"clean-code":O.bookSource}}}};const B={source1:{authors:[{forename:"Robert C.",surname:"Martin"}],title:"Clean Code - A Handbook of Agile Software Craftsmanship",publisher:"Prentice Hall",date:{year:2008,month:8},isbn:"9780136083252, 0136083250"},source1Id:"cc",source2:{authors:[{forename:"John",surname:"Doe"}],title:"Test",date:{year:2024,month:5,day:12},url:"https://example.com",journal:"Test Journal"},source2Id:"test"};const P={simple:{componentName:"t-article",props:{heading:"Lorem ipsum",sources:{[B.source1Id]:B.source1,[B.source2Id]:B.source2}},children:[{componentName:"p",children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit.",{componentName:"t-source-ref",props:{sourceId:B.source2Id}},"Mauris ac nisl pellentesque, tempus metus non, pretium felis. Suspendisse potenti. Nullam laoreet, neque "+"eu pharetra lobortis, diam ligula posuere augue, in imperdiet quam felis nec sem.",{componentName:"t-source-ref",props:{sourceId:B.source1Id}},"Suspendisse suscipit, dui nec volutpat porttitor, sapien turpis pharetra elit, et cursus ante nisi eu "+"nunc. Phasellus facilisis nunc arcu, eget laoreet purus vehicula sit amet. Curabitur convallis, metus "+"finibus tristique viverra, nunc sem suscipit orci, nec gravida leo risus nec orci. Aenean pretium, eros "+"eget blandit tristique, quam tellus porttitor felis, non molestie neque ipsum et leo. Etiam tincidunt, "+"massa vitae bibendum posuere, arcu orci aliquam dolor, a viverra ligula lectus at ante."]},{componentName:"p",children:["Cras iaculis sapien nec nisl luctus viverra. Integer eget dui ipsum.",{componentName:"t-source-ref",props:{sourceId:B.source2Id}},"Pellentesque vel efficitur risus. Phasellus libero ante, porttitor non consequat id, euismod quis sem. "+"Maecenas egestas mi quis est mattis, a ultricies nulla fermentum. Sed venenatis ultricies pellentesque. "+"Integer varius ipsum dolor, placerat consectetur magna blandit nec. Donec et tortor metus. Nullam libero "+"lacus, vulputate nec massa non, hendrerit sodales sapien. Aenean pellentesque sapien sed diam dapibus "+"dignissim. Morbi sodales massa ut suscipit mollis. Aliquam id velit non dui congue convallis eget eget "+"augue. Duis dignissim lectus eros, eu molestie nibh scelerisque vel. Nullam scelerisque ultrices felis id "+"euismod. Etiam enim nisi, dignissim et odio eu, tristique tempor magna."]}]}};const F={item1:{href:"#",title:"Lorem ipsum",intro:"Lorem ipsum dolor sit amet",date:{type:"date",input:"2020-01-01T12:00:00Z"}},item2:{href:"#",title:"Lorem ipsum dolor sit amet",intro:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra mauris sit amet varius sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet quam in mauris mattis sollicitudin. Maecenas interdum, tortor non congue varius, erat nibh ornare ligula, non ultricies risus mi quis ipsum. Integer efficitur quis nisl sit amet fringilla. Duis consequat congue mi, vel vehicula mauris facilisis eu. Aliquam accumsan bibendum ante quis fermentum. Aenean ac tincidunt leo. Proin id ipsum et libero posuere volutpat semper ut dolor.",date:{type:"date"}},item3:{href:"#",title:"Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse faucibus erat ut velit aliquet mattis. Nunc vitae lectus ac urna fermentum consectetur vitae quis enim. Vivamus scelerisque, neque id fermentum ultrices, diam est fermentum quam, eu ornare diam sem vel nisl. Nullam porta tortor nisi, ut aliquam est cursus id. Aliquam turpis nisl, feugiat a massa vitae, efficitur viverra sapien. Cras sed suscipit tellus. Nunc pretium massa vitae ante euismod iaculis. Praesent pellentesque at libero eu lacinia.",intro:"In hac habitasse platea dictumst. Maecenas eget justo ut velit imperdiet viverra eget vitae lectus. Curabitur at fringilla augue, ac tristique libero. Vivamus consectetur nisl a facilisis auctor. Integer sed purus nisi. Fusce in ligula convallis, auctor sapien non, mattis turpis. Morbi vitae elementum lectus, egestas suscipit nisl. Morbi imperdiet eleifend magna ac varius.",date:{type:"date"}},item4:{href:"#",title:"Morbi auctor, ligula nec malesuada ultricies, purus metus ultricies metus, nec tincidunt nunc turpis ut ligula.",intro:"Sed sit amet nunc et nunc lacinia tincidunt. Integer auctor, lorem nec ultricies ultricies, orci dui convallis purus, eget fermentum velit neque nec dui."}};const H={simple:{componentName:"t-article-list",props:{items:[F.item1,F.item2,F.item3,F.item4]}}};const E={code:"const test: string = 'test';",marginCode:`\n    |function test() {\n    |    console.log('test');\n    |}\n  `};const R={default:{componentName:"t-code",props:{code:E.code,language:"typescript"}},panel:{componentName:"t-code",props:{code:E.code,language:"typescript",mode:"panel"}},trimMargin:{componentName:"t-code",props:{code:E.marginCode,language:"typescript",mode:"block",trimmargin:true}}};const V={default:{componentName:"t-spinner"}};const J={triggerText:"Hold over meg",contentText:"Bla bla"};const K={default:{componentName:"t-tooltip",children:[{componentName:"span",props:{slot:"trigger"},children:[J.triggerText]},{componentName:"span",props:{slot:"content"},children:[J.contentText]}]}};const _={content:"Lorem ipsum dolor sit amet.",heading:"Info"};const Z={default:{componentName:"t-panel",children:[_.content]},withHeading:{componentName:"t-panel",children:[{componentName:"span",props:{slot:"heading"},children:[_.heading]},_.content]},withHeadingAndIcon:{componentName:"t-panel",children:[{componentName:"svg",props:{height:"1em",slot:"icon",viewBox:"0 0 24 24",width:"1em",xmlns:"http://www.w3.org/2000/svg"},children:[{componentName:"circle",props:{cx:"12",cy:"12",fill:"currentColor",r:"12"}}]},{componentName:"span",props:{slot:"heading"},children:[_.heading]},_.content]}};const G=class{constructor(t){e(this,t);this.colourSettingsChange=n(this,"colourSettingsChange",7);this.handleColourSettingsChange=({detail:e})=>{this.colourSettingsChange.emit(e)};this.colourSettings=undefined}get previewIframes(){return document.querySelectorAll("preview-iframe iframe")}componentDidRender(){var e;(e=this.previewIframes)===null||e===void 0?void 0:e.forEach((e=>{const t=e.contentWindow.document.querySelector("t-context");if(t){t.baseHue=this.colourSettings.hue;t.baseChroma=this.colourSettings.chroma;t.selectMode(o.selectedMode).then()}}))}render(){return t("t-layout-main",{key:"0c61103d7130bdee1cc07e4c67a9a68238a5f3b7",stickyLeftbar:true},t("component-colour-settings",{key:"e3883c2c995b1d1945a929661212fd274da547e2",slot:"leftbar",settings:this.colourSettings,onChangeSettings:this.handleColourSettingsChange}),t("div",{key:"9a3c247a7c100d33fd0d470d7335425ef698ccd4",slot:"content"},t("t-heading",{key:"baa7627d2669bbeac47936cedecb725378de5e75",level:1},"Eksempler"),t("component-documentation",{key:"984fc6d9fcfb2878584826c5d30225e08656d8fa",name:"Knapp",examples:[{title:"Med tekst",code:k.simple,previewMode:"hue"},{title:"Med ikon og tekst",code:k.withIcon,previewMode:"hue"},{title:"Med kun ikon",code:k.iconOnly,previewMode:"hue"},{title:"Gjennomsiktig",code:k.transparent,previewMode:"hue"}],colourSettings:this.colourSettings}),t("component-documentation",{key:"ac3d5faa24cedc55dd586441ca40aaeacc0602ff",name:"Bryter",examples:[{title:"På",code:x.on,previewMode:"hue"},{title:"Av",code:x.off,previewMode:"hue"}],colourSettings:this.colourSettings}),t("component-documentation",{key:"e82511666be01fd3fb3b432f3b90a23c835aa06a",name:"Tallvelger",examples:[{code:N.simple,previewMode:"hue"}],colourSettings:this.colourSettings}),t("component-documentation",{key:"a3088c6fe982e8fe562d450435432c04f602f9c8",name:"Tekstfelt",examples:[{code:j.valueChange,previewMode:"hue"}],colourSettings:this.colourSettings}),t("component-documentation",{key:"9ec19a32ea961e88361dd0043bdf73c407d21d74",name:"Nedtrekksliste",examples:[{code:C.simple,previewMode:"hue"}],colourSettings:this.colourSettings}),t("component-documentation",{key:"26ff63cd1967db2b61785c503f5c034a176d9251",name:"Nedtrekksmeny",examples:[{code:A.simple,previewMode:"hue"}],colourSettings:this.colourSettings}),t("component-documentation",{key:"daa5307c1fa9439daf99c51758773886faffd2cf",name:"Lenke",examples:[{title:"Intern lenke",code:I.internal,previewMode:"inline"},{title:"Ekstern lenke",code:I.external,previewMode:"inline"}],colourSettings:this.colourSettings}),t("component-documentation",{key:"3a1d58708c354118ba4bd7fd709cc825e4bbb744",name:"Faner",examples:[{code:T.simple,previewMode:"inline"}],colourSettings:this.colourSettings}),t("component-documentation",{key:"0bea8f848403260178de06ce9075b03c2f4a76f1",name:"Kildeliste",examples:[{code:D.simple,previewMode:"inline"}],colourSettings:this.colourSettings}),t("component-documentation",{key:"80ec26ec4a62d5718d09fdfc7985aea211827e67",name:"Artikkel",examples:[{code:P.simple,previewMode:"iframe"}],colourSettings:this.colourSettings}),t("component-documentation",{key:"c76a3395693e7f524caf447e142abed4c8225cfc",name:"Artikkelliste",examples:[{code:H.simple,previewMode:"inline"}],colourSettings:this.colourSettings}),t("component-documentation",{key:"2d71a10556fe100fbf0c582e4996af232f2be5d3",name:"Panel",examples:[{title:"Standard",code:Z.default,previewMode:"inline"},{title:"Med overskrift",code:Z.withHeading,previewMode:"inline"},{title:"Med overskrift og ikon",code:Z.withHeadingAndIcon,previewMode:"inline"}],colourSettings:this.colourSettings}),t("component-documentation",{key:"b25a43316add29890eda47c60f5be016c6058215",name:"Kode",examples:[{title:"Standard",code:R.default,previewMode:"inline"},{title:"Panel",code:R.panel,previewMode:"inline"},{title:"Trimmet marg",code:R.trimMargin,previewMode:"inline"}],colourSettings:this.colourSettings}),t("component-documentation",{key:"be93a65decd00f24ed64432ff4e2e141867eb1b8",name:"Spinner",examples:[{code:V.default,previewMode:"inline"}],colourSettings:this.colourSettings}),t("component-documentation",{key:"b24d750bf8ab5d9c98de11278796a9f3e3adc72a",name:"Verktøyhjelp",examples:[{code:K.default,previewMode:"inline"}],colourSettings:this.colourSettings})))}};const W=".root{--t-base-border-colour:unset;--t-base-colour-hue:unset;--t-base-colour-lightness:unset;--t-base-colour-saturation:unset;--t-base-colour-chroma:unset;--t-offset-base-colour-hue:calc(var(--t-base-colour-hue) + var(--t-base-colour-hue-offset, 0) * 1turn);--t-base-colour:oklch(\r\n    var(--t-base-colour-lightness)\r\n    var(--t-base-colour-chroma)\r\n    var(--t-offset-base-colour-hue)\r\n  );--t-background-background-colour:color-mix(in oklab, var(--t-page-background-colour) 90%, black);--t-base-contrast-colour:unset;--t-base-fill-colour:var(--t-base-border-colour);--t-base-low-contrast-colour:unset;--t-border-radius-default:6px;--t-clickable-area-size:44px;--t-default-font-size:1rem;--t-font-colour-default:var(--t-full-contrast-colour);--t-heading-size-1:2em;--t-heading-size-2:1.5em;--t-heading-size-3:1.25em;--t-heading-size-4:1.125em;--t-heading-size-5:1.0625em;--t-heading-size-6:1em;--t-heading-spacing-bottom-1:1rem;--t-heading-spacing-bottom-2:0.75rem;--t-heading-spacing-bottom-3:0.5rem;--t-heading-spacing-bottom-4:0.25rem;--t-heading-spacing-bottom-5:0.125rem;--t-heading-spacing-bottom-6:0.0625rem;--t-heading-spacing-top-1:0;--t-heading-spacing-top-2:1rem;--t-heading-spacing-top-3:0.75rem;--t-heading-spacing-top-4:0.5rem;--t-heading-spacing-top-5:0.25rem;--t-heading-spacing-top-6:0.125rem;--t-input-field-background-colour:color-mix(in oklab, var(--t-full-contrast-colour) 5%, transparent);--t-navbar-item-border-radius:8px;--t-page-background-colour:unset;--t-page-max-width:1200px;--t-panel-background-colour:color-mix(in oklab, var(--t-base-colour) 12%, var(--t-small-contrast-colour));--t-popover-alpha:0.75;--t-popover-backdrop-filter:blur(8px);--t-popover-background-colour-base:color-mix(in oklab, var(--t-small-contrast-colour) calc(var(--t-popover-alpha) * 100%), transparent);--t-popover-border-radius:var(--t-border-radius-default);--t-popover-shadow:#000c 0 4px 12px;--t-selection-background-colour:var(--t-base-fill-colour);--t-selection-font-colour:var(--t-font-colour-default);--t-small-contrast-colour:color-mix(in oklab, var(--t-page-background-colour) 95%, var(--t-full-contrast-colour));--t-spacing-default:1rem;--t-spacing-in-group:0.5rem;--t-spacing-inline:0.25rem;--t-spacing-large:2rem;--t-transition-duration-long:0.4s;--t-transition-duration-medium:0.2s;--t-transition-duration-short:0.1s;--t-z-index-dropdown-menu:200;--t-z-index-tooltip:100;color:var(--t-font-colour-default);font-family:Calibri, Arial, sans-serif;font-size:var(--t-default-font-size);min-height:100vh}@media (prefers-reduced-motion){.root{--t-transition-duration-short:0}}.root *::selection{background-color:var(--t-selection-background-colour);color:var(--t-selection-font-colour)}.root.light{--t-selection-font-colour:white;--t-full-contrast-colour:black;--t-mode-colour-scaling:1}.root.dark{--t-selection-font-colour:black;--t-full-contrast-colour:white;--t-mode-colour-scaling:-1}";const $=W;const Q=class{constructor(t){e(this,t);this.baseHue=263;this.baseChroma=.4;this.contrast=1}async selectMode(e){a(e)}componentWillRender(){o.baseHue=this.baseHue;o.baseChroma=this.baseChroma;o.contrast=this.contrast}render(){const e=o.mode;const n=this.baseColour();const{hue:r,chroma:a,l:s}=n.getOklch();this.setCssVariable("--t-base-colour-hue",r.toFixed()+"deg");this.setCssVariable("--t-base-colour-chroma",a.toFixed(2));this.setCssVariable("--t-page-background-colour",this.pageBackgroundColour().getHexCode());this.setCssVariable("--t-base-colour",n.getOklchCode());this.setCssVariable("--t-base-colour-lightness",i(s));this.setCssVariable("--t-base-border-colour",this.baseBorderColour().getHexCode());this.setCssVariable("--t-input-field-background-colour",this.inputFieldColour().getHexCode());this.element.style.setProperty("filter",`contrast(${this.contrast})`);return t("div",{key:"34ab3e59c627c5f0b93d45cfa59801db94da09f1",class:"root "+e},t("slot",{key:"47cae4464a641c7a25dcca401a7532fac4f96dde"}))}baseColour(){const e=o.baseHue;const t=o.baseChroma;const n={hue:e,chroma:t,l:.5};return new s.Chromator(n).setRelativeLuminance(this.baseColourLuminance(),"oklch")}baseColourLuminance(){return this.isDarkMode()?d:u}isDarkMode(){return o.mode==="dark"}pageBackgroundColour(){const e=new s.Chromator("#fff");e.setRelativeLuminance(this.pageBackgroundLuminance(),"oklch");return e}pageBackgroundLuminance(){return this.isDarkMode()?m:p}baseBorderColour(){return this.baseColour().copy().setRelativeLuminance(this.baseBorderColourLuminance(),"oklch")}baseBorderColourLuminance(){return this.isDarkMode()?l(m,b):c(p,b)}inputFieldColour(){const e=new s.Chromator("#fff");e.setRelativeLuminance(this.inputFieldColourLuminance(),"oklch");return e}inputFieldColourLuminance(){return this.isDarkMode()?l(m,g):c(p,g)}setCssVariable(e,t){this.element.style.setProperty(e,t)}get element(){return r(this)}};Q.style=$;const U=".wrapper{width:100%;background-color:oklch(\r\n    calc(0.5 + var(--t-mode-colour-scaling) * 0.3)\r\n    calc(var(--t-base-colour-chroma) * 0.1)\r\n    var(--t-base-colour-hue)\r\n  )}.layout{--background-base:var(--t-page-background-colour);--main-background:color-mix(in oklch, var(--background-base) 90%, var(--t-background-background-colour));--top-shadow:inset color-mix(in oklch, var(--background-base) 90%, white) 0 1px 0;--bottom-shadow:inset color-mix(in oklch, var(--background-base) 90%, black) 0 -1px 0;--back-shadow:#0003 0 0 4rem;box-sizing:border-box;color:var(--t-font-colour-default);margin:0 auto;max-width:var(--t-page-max-width);min-height:100vh;padding-top:1rem;padding-bottom:2rem}@media (max-width: 900px){.layout{padding-top:0}}";const X=U;const Y=class{constructor(t){e(this,t)}render(){return t("div",{key:"54c031d523d42d11113fa837092884d7c730551c",class:"wrapper"},t("div",{key:"6419b198ae012be826718b87795c8b90b23d7275",class:"layout"},t("slot",{key:"b8b59167bc019a1a4e3a7760510fa0529f6b4632",name:"header"}),t("slot",{key:"9fbd6bd4610f9f84b5d82f6f1d2846cbdff06042",name:"main"})))}};Y.style=X;var ee=undefined&&undefined.__rest||function(e,t){var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0)n[r]=e[r];if(e!=null&&typeof Object.getOwnPropertySymbols==="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++){if(t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o]))n[r[o]]=e[r[o]]}return n};const te=e=>{var n=ee(e,["fill"]);return t(f,Object.assign({},n),t("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2.75 6a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 0 1.5h-17A.75.75 0 0 1 2.75 6Zm0 6a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 0 1.5h-17a.75.75 0 0 1-.75-.75Zm.75 5.25a.75.75 0 0 0 0 1.5h17a.75.75 0 0 0 0-1.5h-17Z",fill:"currentColor"}))};var ne=undefined&&undefined.__rest||function(e,t){var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0)n[r]=e[r];if(e!=null&&typeof Object.getOwnPropertySymbols==="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++){if(t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o]))n[r[o]]=e[r[o]]}return n};const re=e=>{var n=ne(e,["fill"]);return t(f,Object.assign({},n),t("path",{d:"M6.53 5.47a.75.75 0 0 0-1.06 1.06L10.94 12l-5.47 5.47a.75.75 0 1 0 1.06 1.06L12 13.06l5.47 5.47a.75.75 0 1 0 1.06-1.06L13.06 12l5.47-5.47a.75.75 0 0 0-1.06-1.06L12 10.94 6.53 5.47Z",fill:"currentColor"}))};const oe='header {\r\n  display: grid;\r\n  grid-template-columns: auto 1fr;\r\n  grid-template-areas: "title hcontent";\r\n  align-items: stretch;\r\n  box-sizing: border-box;\r\n  gap: 0 1rem;\r\n\r\n  .title {\r\n    grid-area: title;\r\n    font-size: 1.5rem;\r\n    padding: 1rem 0;\r\n  }\r\n\r\n  .collapsible-content {\r\n    grid-area: hcontent;\r\n    flex: 1;\r\n  }\r\n\r\n  .collapsible-content-inner {\r\n    height: 100%;\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    box-sizing: border-box;\r\n\r\n    .nav {\r\n      align-self: stretch;\r\n\r\n      ul {\r\n        display: flex;\r\n        flex-direction: row;\r\n        list-style: none;\r\n        margin: 0;\r\n        padding: 0;\r\n        height: 100%;\r\n        gap: 4px;\r\n\r\n        li {\r\n          height: 100%;\r\n\r\n          a {\r\n            align-items: center;\r\n            background-color: var(--main-background);\r\n            border-top-left-radius: var(--t-navbar-item-border-radius);\r\n            border-top-right-radius: var(--t-navbar-item-border-radius);\r\n            box-shadow: var(--top-shadow);\r\n            box-sizing: border-box;\r\n            color: var(--t-base-border-colour);\r\n            display: flex;\r\n            font-weight: 500;\r\n            height: calc(100% + 2px);\r\n            padding: 1rem;\r\n            text-decoration: none;\r\n\r\n            &:hover {\r\n              text-decoration: underline;\r\n            }\r\n          }\r\n\r\n          &.open a {\r\n            color: var(--t-font-colour-default);\r\n            position: relative;\r\n            z-index: 2;\r\n          }\r\n\r\n          &:not(.open) a:hover {\r\n            background-color: color-mix(in oklab, var(--t-page-background-colour) 90%, white);\r\n            color: var(--t-font-colour-default);\r\n          }\r\n        }\r\n      }\r\n    }\r\n\r\n    .toolbar {\r\n      flex: 1;\r\n      display: flex;\r\n      justify-content: flex-end;\r\n    }\r\n  }\r\n\r\n  .nav-toggle {\r\n    grid-area: toggle;\r\n    display: none;\r\n    align-self: center;\r\n  }\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n  header {\r\n    padding-left: 1rem;\r\n    padding-right: 1rem;\r\n  }\r\n}\r\n\r\n@media (max-width: 900px) {\r\n\r\n  header {\r\n    display: grid;\r\n    grid-template-areas: "title toggle" "hcontent hcontent";\r\n    transition: background-color var(--t-transition-duration-medium);\r\n    padding: 0;\r\n\r\n    .title {\r\n      grid-area: title;\r\n      margin-left: 1rem;\r\n    }\r\n\r\n    .collapsible-content {\r\n      grid-area: hcontent;\r\n      display: grid;\r\n      grid-template-rows: 1fr; /* To make height transition work */\r\n      transition: grid-template-rows var(--t-transition-duration-medium);\r\n\r\n      .collapsible-content-inner {\r\n        display: flex;\r\n        flex-direction: column-reverse;\r\n        overflow: hidden;\r\n\r\n        .toolbar {\r\n          align-self: flex-start;\r\n          padding: 0 1rem;\r\n        }\r\n\r\n        .nav {\r\n\r\n          ul {\r\n            flex-direction: column;\r\n            gap: 0;\r\n\r\n            li {\r\n\r\n              a {\r\n                box-sizing: border-box;\r\n                width: 100vw;\r\n                border-radius: 0;\r\n                box-shadow: none;\r\n                height: auto;\r\n                padding: 0.5rem 1rem;\r\n                background-color: transparent;\r\n\r\n                &:hover {\r\n                  box-shadow: var(--top-shadow), var(--bottom-shadow);\r\n                }\r\n              }\r\n\r\n              &:not(.open) a:hover {\r\n                background-color: color-mix(in oklab, var(--t-page-background-colour) 95%, var(--t-full-contrast-colour));\r\n              }\r\n\r\n              &.open a {\r\n                background-color: color-mix(in oklch, var(--t-base-colour) 75%, transparent);\r\n                --top-shadow: inset color-mix(in oklab, var(--t-base-colour) 85%, white) 0 1px 0;\r\n                --bottom-shadow: inset color-mix(in oklab, var(--t-base-colour) 85%, black) 0 -1px 0;\r\n              }\r\n            }\r\n          }\r\n        }\r\n      }\r\n    }\r\n\r\n    .nav-toggle {\r\n      display: flex;\r\n      justify-content: flex-end;\r\n      grid-area: toggle;\r\n      margin-right: 1rem;\r\n    }\r\n\r\n    &.nav-closed {\r\n      .collapsible-content {\r\n        grid-template-rows: 0fr;\r\n      }\r\n    }\r\n\r\n    &.nav-open {\r\n      width: 100%;\r\n      z-index: 100;\r\n      position: relative;\r\n      background-color: var(--t-page-background-colour);\r\n      box-shadow: var(--t-page-background-colour) 0 -100px, var(--bottom-shadow);\r\n    }\r\n  }\r\n}\r\n';const ae=oe;const ie=class{constructor(t){e(this,t);this.siteTitle=undefined;this.navItems=[];this.navOpen=false}expandNav(){this.navOpen=true}collapseNav(){this.navOpen=false}render(){return t("header",{key:"bf1a8f96e2731343990b2fde84dd73543859c2f9",class:this.navOpen?"nav-open":"nav-closed"},t("div",{key:"ab4b06439b97b4379b817630c4587ded73536650",class:"title"},this.siteTitle),t("div",{key:"bd42f474575b0b677e0533d16c9917dc8a743146",class:"collapsible-content"},t("div",{key:"d845bd79c27556b0f177955d97d1eeda9e8e6dfc",class:"collapsible-content-inner"},t(se,{key:"644e8182c9babf3855d1e54de91baf6a8e4be452",items:this.navItems}),t("div",{key:"24b2d36401cc08c59bdfa84cad7c43cc33e98e5a",class:"toolbar"},t("t-mode-switcher",{key:"f44a23b7a1c5793f7ff22217992069e8723726a3",label:"Fargemodus"})))),t("div",{key:"19d93f1039160084133da9202f4ead4c011114cf",class:"nav-toggle",onClick:()=>this.navOpen?this.collapseNav():this.expandNav()},t("t-button",{key:"a97e0892bc4f685de77f441d1d10423348575805",buttonAttributes:{title:this.navOpen?"Lukk":"Meny"}},this.navOpen?t(re,null):t(te,null))))}get el(){return r(this)}};const se=({items:e})=>t("nav",{class:"nav"},t("ul",null,e.map((e=>t("li",{class:e.open?"open":"",key:e.href},t("a",{href:e.href},t("span",null,e.label)))))));ie.style=ae;export{h as page_about,G as page_components,Q as t_context,Y as t_layout,ie as t_layout_header};
//# sourceMappingURL=p-76ce0eaa.entry.js.map