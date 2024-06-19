import{h as e,F as t,r as n}from"./p-0957a5e6.js";import{D as i,a as o,b as r,P as a}from"./p-fa7675be.js";import{s}from"./p-d08157a8.js";const l={text:"Klikk meg"};const m={simple:{componentName:"t-button",children:[l.text]},withIcon:{componentName:"t-button",children:[{componentName:"svg",props:{height:"1em",slot:"icon",viewBox:"0 0 24 24",width:"1em",xmlns:"http://www.w3.org/2000/svg"},children:[{componentName:"circle",props:{cx:"12",cy:"12",fill:"currentColor",r:"12"}}]},l.text]},iconOnly:{componentName:"t-button",props:{buttonAttributes:{title:l.text}},children:[{componentName:"svg",props:{height:"1em",slot:"icon",viewBox:"0 0 24 24",width:"1em",xmlns:"http://www.w3.org/2000/svg"},children:[{componentName:"circle",props:{cx:"12",cy:"12",fill:"currentColor",r:"12"}}]}]},transparent:{componentName:"t-button",props:{variant:"transparent"},children:[l.text]},link:{componentName:"t-button",props:{variant:"link"},children:[l.text]}};const c={onText:"På",offText:"Av"};const p={on:{componentName:"t-switch",props:{checked:true},children:[c.onText]},off:{componentName:"t-switch",props:{checked:false},children:[c.offText]}};const u={label:"Antall"};const d={simple:{componentName:"t-integer-picker",props:{label:u.label,value:5,min:0,max:10}}};const h={label:"Skriv inn noe"};const g={simple:{componentName:"t-textfield",props:{label:h.label}},valueChange:{componentName:"t-textfield",props:{label:h.label},events:{valueChange:e=>console.log(e.detail)}}};const v={label:"Alternativer"};const f={simple:{componentName:"t-select",props:{label:v.label,options:[{value:"1",label:"Alternativ 1"},{value:"2",label:"Alternativ 2"},{value:"3",label:"Alternativ 3"}],value:"1"}}};const b={label:"Velg",items:[{label:"Alternativ 1",logValue:"Alternativ 1 valgt"},{label:"Alternativ 2",logValue:"Alternativ 2 valgt"},{label:"Alternativ 3",logValue:"Alternativ 3 valgt"}]};const k={simple:{componentName:"t-dropdown-menu",props:{label:b.label,items:b.items.map((e=>({label:e.label,action:{type:"console-log",input:e.logValue}})))}}};const N={internalLinkText:"Intern lenke",externalLinkText:"Ekstern lenke"};const w={internal:{componentName:"t-link",props:{href:"#"},children:[N.internalLinkText]},external:{componentName:"t-link",props:{href:"#",external:true},children:[N.externalLinkText]}};const y={items:[{heading:"Fane 1",content:"Innhold 1"},{heading:"Fane 2",content:"Innhold 2"},{heading:"Fane 3",content:"Innhold 3"}]};const M={simple:{componentName:"t-tabs",children:y.items.map((e=>({componentName:"t-tab",props:{heading:e.heading},children:[e.content]})))}};const x={webArticleSource:{authors:[{forename:"Oddbjørn",surname:"Engvold"}],articleTitle:"Sola",retrievedDate:{year:2024,month:5,day:12},url:"https://snl.no/Sola",journal:"Store norske leksikon"},scientificArticleSource:{authors:[{forename:"Oliver H.",surname:"Lowry"},{forename:"Nina J.",surname:"Rosebrough"},{forename:"A. Lewis",surname:"Farr"},{forename:"Rose J.",surname:"Randall"}],articleTitle:"Protein measurement with the Folin phenol reagent",journal:"The Journal of Biological Chemistry",volume:193,pageStart:265,pageEnd:275,date:{year:1951},issue:1,doi:"10.1016/S0021-9258(19)52451-6"},bookSource:{authors:[{forename:"Robert C.",surname:"Martin"}],bookTitle:"Clean Code - A Handbook of Agile Software Craftsmanship",publisher:"Prentice Hall",date:{year:2008,month:8},isbn:"9780136083252, 0136083250"}};const S={simple:{componentName:"t-source-list",props:{sources:{"snl-sola":x.webArticleSource,pmwtfpr:x.scientificArticleSource,"clean-code":x.bookSource}}}};const q={heading:"Lorem ipsum",source1:{authors:[{forename:"Robert C.",surname:"Martin"}],title:"Clean Code - A Handbook of Agile Software Craftsmanship",publisher:"Prentice Hall",date:{year:2008,month:8},isbn:"9780136083252, 0136083250"},source1Id:"cc",source2:{authors:[{forename:"John",surname:"Doe"}],title:"Test",date:{year:2024,month:5,day:12},url:"https://example.com",journal:"Test Journal"},source2Id:"test"};const L={simple:{componentName:"t-article",props:{heading:q.heading},children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non dictum felis. Phasellus sit amet "+"dolor magna. Etiam feugiat sodales mi molestie fringilla. Curabitur ut libero sed arcu pellentesque ornare. "+"Nulla convallis metus vitae nisl semper consectetur. Aliquam viverra scelerisque lobortis. Ut eget turpis in "+"tellus suscipit lobortis. Curabitur elementum blandit vestibulum. Vestibulum ante ipsum primis in faucibus "+"orci luctus et ultrices posuere cubilia curae; Quisque elit nisl, congue ut lectus eu, efficitur malesuada "+"felis. Integer maximus mauris vitae dolor accumsan, sollicitudin aliquet nibh consequat. Integer ullamcorper "+"nibh at purus gravida lacinia."]},withSources:{componentName:"t-article",props:{heading:q.heading,publisheddate:"2022-02-01",sources:{[q.source1Id]:q.source1,[q.source2Id]:q.source2}},children:[{componentName:"p",children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit.",{componentName:"t-source-ref",props:{sourceId:q.source2Id}},"Mauris ac nisl pellentesque, tempus metus non, pretium felis. Suspendisse potenti. Nullam laoreet, neque "+"eu pharetra lobortis, diam ligula posuere augue, in imperdiet quam felis nec sem.",{componentName:"t-source-ref",props:{sourceId:q.source1Id}},"Suspendisse suscipit, dui nec volutpat porttitor, sapien turpis pharetra elit, et cursus ante nisi eu "+"nunc. Phasellus facilisis nunc arcu, eget laoreet purus vehicula sit amet. Curabitur convallis, metus "+"finibus tristique viverra, nunc sem suscipit orci, nec gravida leo risus nec orci. Aenean pretium, eros "+"eget blandit tristique, quam tellus porttitor felis, non molestie neque ipsum et leo. Etiam tincidunt, "+"massa vitae bibendum posuere, arcu orci aliquam dolor, a viverra ligula lectus at ante."]},{componentName:"p",children:["Cras iaculis sapien nec nisl luctus viverra. Integer eget dui ipsum.",{componentName:"t-source-ref",props:{sourceId:q.source2Id}},"Pellentesque vel efficitur risus. Phasellus libero ante, porttitor non consequat id, euismod quis sem. "+"Maecenas egestas mi quis est mattis, a ultricies nulla fermentum. Sed venenatis ultricies pellentesque. "+"Integer varius ipsum dolor, placerat consectetur magna blandit nec. Donec et tortor metus. Nullam libero "+"lacus, vulputate nec massa non, hendrerit sodales sapien. Aenean pellentesque sapien sed diam dapibus "+"dignissim. Morbi sodales massa ut suscipit mollis. Aliquam id velit non dui congue convallis eget eget "+"augue. Duis dignissim lectus eros, eu molestie nibh scelerisque vel. Nullam scelerisque ultrices felis id "+"euismod. Etiam enim nisi, dignissim et odio eu, tristique tempor magna."]}]}};const A={item1:{href:"#",title:"Lorem ipsum",intro:"Lorem ipsum dolor sit amet",date:{type:"date",input:"2020-01-01T12:00:00Z"}},item2:{href:"#",title:"Lorem ipsum dolor sit amet",intro:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra mauris sit amet varius sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet quam in mauris mattis sollicitudin. Maecenas interdum, tortor non congue varius, erat nibh ornare ligula, non ultricies risus mi quis ipsum. Integer efficitur quis nisl sit amet fringilla. Duis consequat congue mi, vel vehicula mauris facilisis eu. Aliquam accumsan bibendum ante quis fermentum. Aenean ac tincidunt leo. Proin id ipsum et libero posuere volutpat semper ut dolor.",date:{type:"date"}},item3:{href:"#",title:"Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse faucibus erat ut velit aliquet mattis. Nunc vitae lectus ac urna fermentum consectetur vitae quis enim. Vivamus scelerisque, neque id fermentum ultrices, diam est fermentum quam, eu ornare diam sem vel nisl. Nullam porta tortor nisi, ut aliquam est cursus id. Aliquam turpis nisl, feugiat a massa vitae, efficitur viverra sapien. Cras sed suscipit tellus. Nunc pretium massa vitae ante euismod iaculis. Praesent pellentesque at libero eu lacinia.",intro:"In hac habitasse platea dictumst. Maecenas eget justo ut velit imperdiet viverra eget vitae lectus. Curabitur at fringilla augue, ac tristique libero. Vivamus consectetur nisl a facilisis auctor. Integer sed purus nisi. Fusce in ligula convallis, auctor sapien non, mattis turpis. Morbi vitae elementum lectus, egestas suscipit nisl. Morbi imperdiet eleifend magna ac varius.",date:{type:"date"}},item4:{href:"#",title:"Morbi auctor, ligula nec malesuada ultricies, purus metus ultricies metus, nec tincidunt nunc turpis ut ligula.",intro:"Sed sit amet nunc et nunc lacinia tincidunt. Integer auctor, lorem nec ultricies ultricies, orci dui convallis purus, eget fermentum velit neque nec dui."}};const C={simple:{componentName:"t-article-list",props:{items:[A.item1,A.item2,A.item3,A.item4]}}};const j={code:"const test: string = 'test';",marginCode:`\n    |function test(): void {\n    |    console.log('test');\n    |}\n  `,blockCode:"function test(): void {\n  console.log('test');\n}"};const I={inline:{componentName:"t-code",props:{code:j.code,language:"typescript"}},block:{componentName:"t-code",props:{code:j.blockCode,language:"typescript",mode:"block"}},panel:{componentName:"t-code",props:{code:j.blockCode,language:"typescript",mode:"panel"}},trimMargin:{componentName:"t-code",props:{code:j.marginCode,language:"typescript",mode:"block",trimmargin:true}},slot:{componentName:"t-code",children:[j.code]}};const O={default:{componentName:"t-spinner"}};const T={triggerText:"Hold over meg",contentText:"Bla bla",longContentText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitor tortor nec congue elementum. Donec eget est a libero lobortis sodales in at sem. Proin ornare imperdiet leo a hendrerit. Aliquam ut porttitor erat. Donec scelerisque ligula ut posuere fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed fringilla feugiat venenatis."};const P={default:{componentName:"t-tooltip",children:[{componentName:"span",props:{slot:"trigger"},children:[T.triggerText]},{componentName:"span",props:{slot:"content"},children:[T.contentText]}]},withLongContent:{componentName:"t-tooltip",children:[{componentName:"span",props:{slot:"trigger"},children:[T.triggerText]},{componentName:"span",props:{slot:"content"},children:[T.longContentText]}]}};const H={content:"Lorem ipsum dolor sit amet.",heading:"Info"};const D={default:{componentName:"t-panel",children:[H.content]},withHeading:{componentName:"t-panel",children:[{componentName:"span",props:{slot:"heading"},children:[H.heading]},H.content]},withHeadingAndIcon:{componentName:"t-panel",children:[{componentName:"svg",props:{height:"1em",slot:"icon",viewBox:"0 0 24 24",width:"1em",xmlns:"http://www.w3.org/2000/svg"},children:[{componentName:"circle",props:{cx:"12",cy:"12",fill:"currentColor",r:"12"}}]},{componentName:"span",props:{slot:"heading"},children:[H.heading]},H.content]}};const E={item1Label:"Element 1",item2Label:"Element 2",item3Label:"Element 3",subitem21Label:"Underelement 2.1",subitem22Label:"Underelement 2.2",subsubitem211Label:"Underunderelement 2.1.1",subsubitem212Label:"Underunderelement 2.1.2",item1Href:"#1",item2Href:"#2",item3Href:"#3",subitem21Href:"#21",subitem22Href:"#22",subsubitem211Href:"#211",subsubitem212Href:"#212",mainLabel:"Overskrift"};const B={withLinks:{componentName:"t-tree",children:[{componentName:"t-tree-item",props:{label:E.item1Label,href:E.item1Href}},{componentName:"t-tree-item",props:{label:E.item2Label,href:E.item2Href},children:[{componentName:"t-tree-item",props:{label:E.subitem21Label,href:E.subitem21Href},children:[{componentName:"t-tree-item",props:{label:E.subsubitem211Label,href:E.subsubitem211Href}},{componentName:"t-tree-item",props:{label:E.subsubitem212Label,href:E.subsubitem212Href}}]},{componentName:"t-tree-item",props:{label:E.subitem22Label,href:E.subitem22Href}}]},{componentName:"t-tree-item",props:{label:E.item3Label,href:E.item3Href}}]},withLabel:{componentName:"t-tree",props:{label:E.mainLabel},children:[{componentName:"t-tree-item",props:{label:E.item1Label,href:E.item1Href}},{componentName:"t-tree-item",props:{label:E.item2Label,href:E.item2Href},children:[{componentName:"t-tree-item",props:{label:E.subitem21Label,href:E.subitem21Href},children:[{componentName:"t-tree-item",props:{label:E.subsubitem211Label,href:E.subsubitem211Href}},{componentName:"t-tree-item",props:{label:E.subsubitem212Label,href:E.subsubitem212Href}}]},{componentName:"t-tree-item",props:{label:E.subitem22Label,href:E.subitem22Href}}]},{componentName:"t-tree-item",props:{label:E.item3Label,href:E.item3Href}}]}};const F={default:{componentName:"t-table-of-contents",props:{label:"Overskrift"}},inArticle:{componentName:"t-article",props:{heading:"Lorem ipsum"},children:[{componentName:"p",children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit."]},{componentName:"t-table-of-contents",props:{label:"Innhold"}},{componentName:"t-heading",props:{level:2},children:["Morbi turpis"]},{componentName:"p",children:["Quisque venenatis nisl sit amet hendrerit malesuada."]},{componentName:"t-heading",props:{level:3},children:["Class aptent"]},{componentName:"p",children:["Nulla vulputate et lorem in viverra."]},{componentName:"t-heading",props:{level:2},children:["Nunc viverra"]},{componentName:"p",children:["Morbi in pellentesque libero."]},{componentName:"t-heading",props:{level:3},children:["Nam dignissim"]},{componentName:"p",children:["Vivamus vehicula elementum luctus."]},{componentName:"t-heading",props:{level:3},children:["Proin eu"]},{componentName:"p",children:["Aenean ligula magna, ultrices eu feugiat non, luctus sit amet est."]},{componentName:"t-heading",props:{level:2},children:["Mauris faucibus"]},{componentName:"p",children:["Sed placerat quam laoreet, accumsan augue sit amet, posuere elit."]},{componentName:"t-heading",props:{level:3},children:["Aenean viverra"]},{componentName:"p",children:["Fusce vel tortor a turpis tristique vehicula a eget mi."]},{componentName:"t-heading",props:{level:4},children:["Quisque sed"]},{componentName:"p",children:["Integer ac fermentum nibh."]},{componentName:"t-heading",props:{level:3},children:["Nunc a"]},{componentName:"p",children:["Nunc velit sapien, ullamcorper ac bibendum ac, pellentesque viverra enim."]},{componentName:"t-heading",props:{level:2},children:["Praesent dapibus"]},{componentName:"p",children:["Ut elementum finibus lacinia."]},{componentName:"t-heading",props:{level:3},children:["Nunc ut"]},{componentName:"p",children:["Etiam pulvinar felis auctor magna malesuada, ut luctus enim consequat."]},{componentName:"t-heading",props:{level:3},children:["Maecenas dapibus"]},{componentName:"p",children:["Phasellus porta elit eget nibh semper mattis. Fusce in tortor non mi ultricies lacinia vitae id nulla."]}]}};const R={srcdoc:{componentName:"t-iframe",props:{srcdoc:"<p>Lorem ipsum dolor sit amet</p>"}},resizable:{componentName:"t-iframe",props:{srcdoc:"<p>Lorem ipsum dolor sit amet</p>",resize:"both"}}};const U={allLevels:{componentName:"div",children:[{componentName:"t-heading",props:{level:1},children:["Overskrift 1"]},{componentName:"t-heading",props:{level:2},children:["Overskrift 2"]},{componentName:"t-heading",props:{level:3},children:["Overskrift 3"]},{componentName:"t-heading",props:{level:4},children:["Overskrift 4"]},{componentName:"t-heading",props:{level:5},children:["Overskrift 5"]},{componentName:"t-heading",props:{level:6},children:["Overskrift 6"]}]},withNote:{componentName:"t-heading",props:{level:1},children:["Overskrift 1",{componentName:"p",props:{slot:"note"},children:["Publisert ",{componentName:"time",children:["18. juni 2024"]}]}]}};const V={default:{componentName:"t-breadcrumbs",children:[{componentName:"li",children:[{componentName:"a",props:{href:"#"},children:["Nivå 1"]}]},{componentName:"li",children:[{componentName:"a",props:{href:"#"},children:["Nivå 2"]}]},{componentName:"li",children:[{componentName:"a",props:{href:"#"},children:["Nivå 3"]}]},{componentName:"li",children:[{componentName:"a",props:{href:"#"},children:["Nivå 4"]}]}]}};const J=({colourSettings:n,onColourSettingsChange:i})=>{const o=({detail:e})=>{i(e)};return e(t,null,e("component-colour-settings",{slot:"leftbar",settings:n,onChangeSettings:o}),e("div",{slot:"content"},e("t-heading",{level:1},"Eksempler"),e("component-documentation",{name:"Knapp",examples:[{title:"Med tekst",code:m.simple,previewMode:"hue"},{title:"Med ikon og tekst",code:m.withIcon,previewMode:"hue"},{title:"Med kun ikon",code:m.iconOnly,previewMode:"hue"},{title:"Gjennomsiktig",code:m.transparent,previewMode:"hue"},{title:"Lenkeformat",code:m.link,previewMode:"inline"}],colourSettings:n}),e("component-documentation",{name:"Lenke",examples:[{title:"Intern lenke",code:w.internal,previewMode:"inline"},{title:"Ekstern lenke",code:w.external,previewMode:"inline"}],colourSettings:n}),e("component-documentation",{name:"Overskrifter",examples:[{title:"Alle nivåer",code:U.allLevels,previewMode:"iframe"},{title:"Med tilleggsinformasjon",code:U.withNote,previewMode:"iframe"}],colourSettings:n}),e("component-documentation",{name:"Tekstfelt",examples:[{code:g.valueChange,previewMode:"hue"}],colourSettings:n}),e("component-documentation",{name:"Nedtrekksliste",examples:[{code:f.simple,previewMode:"hue"}],colourSettings:n}),e("component-documentation",{name:"Trevisning",examples:[{code:B.withLinks,previewMode:"inline"}],colourSettings:n}),e("component-documentation",{name:"Nedtrekksmeny",examples:[{code:k.simple,previewMode:"hue"}],colourSettings:n}),e("component-documentation",{name:"Brødsmulesti",examples:[{code:V.default,previewMode:"inline"}],colourSettings:n}),e("component-documentation",{name:"Tallvelger",examples:[{code:d.simple,previewMode:"hue"}],colourSettings:n}),e("component-documentation",{name:"Faner",examples:[{code:M.simple,previewMode:"inline"}],colourSettings:n}),e("component-documentation",{name:"Kildeliste",examples:[{code:S.simple,previewMode:"inline"}],colourSettings:n}),e("component-documentation",{name:"Artikkel",examples:[{code:L.withSources,previewMode:"iframe"}],colourSettings:n}),e("component-documentation",{name:"Artikkelliste",examples:[{code:C.simple,previewMode:"inline"}],colourSettings:n}),e("component-documentation",{name:"Panel",examples:[{title:"Standard",code:D.default,previewMode:"inline"},{title:"Med overskrift",code:D.withHeading,previewMode:"inline"},{title:"Med overskrift og ikon",code:D.withHeadingAndIcon,previewMode:"inline"}],colourSettings:n}),e("component-documentation",{name:"Innholdsfortegnelse",examples:[{code:F.inArticle,previewMode:"iframe"}],colourSettings:n}),e("component-documentation",{name:"Kode",examples:[{title:"Standard (på linje)",code:I.inline,previewMode:"inline"},{title:"Blokk",code:I.block,previewMode:"inline"},{title:"Panel",code:I.panel,previewMode:"inline"},{title:"Trimmet marg",code:I.trimMargin,previewMode:"inline"},{title:"Direkte",code:I.slot,previewMode:"inline"}],colourSettings:n}),e("component-documentation",{name:"Spinner",examples:[{code:O.default,previewMode:"inline"}],colourSettings:n}),e("component-documentation",{name:"Verktøyhjelp",examples:[{code:P.withLongContent,previewMode:"inline"}],colourSettings:n}),e("component-documentation",{name:"Bryter",examples:[{title:"På",code:p.on,previewMode:"hue"},{title:"Av",code:p.off,previewMode:"hue"}],colourSettings:n}),e("component-documentation",{name:"Ramme",examples:[{title:"Standard",code:R.srcdoc,previewMode:"inline"},{title:"Med mulighet for endring av størrelse",code:R.resizable,previewMode:"inline"}],colourSettings:n})))};const K=()=>e("div",{slot:"content"},e("t-heading",{level:1},"Om"),e("p",null,"Dette er et nettsideutformingsverktøy som i utgangspunktet er laget for mine personlige prosjekter, men jeg er bare glad til om det er til nytte for noen andre. Komponentene er bygget som webkomponenter ved hjelp av verktøyet ",e("t-link",{href:"https://stenciljs.com/",external:true},"Stencil"),", men de er også tilgjengelige som ",e("t-link",{href:"https://react.dev/",external:true},"React"),"-komponenter."),e("p",null,"Systemet er utviklet med fokus på følgende målsetninger:"),e("ul",null,e("li",null,"Det skal være lett for alle brukere å se hva ting er. Knapper skal se ut som knapper og faner skal se ut som faner."),e("li",null,"Navigasjonen skal være intuitiv og oversiktlig. Informasjonshierarkiet skal være tydelig og det skal være lett å se hvor man er."),e("li",null,"Det skal være tilfredsstillende kontrast mellom tekst og bakgrunn, både i lys og mørk modus. Jeg har laget ",e("t-link",{href:"https://github.com/TomasEng/Chromator",external:true},"et eget verktøy for å håndtere dette"),", slik at kontrasten alltid er lik (i henhold til WCAG-definisjonen) uansett hvilken fargetone man velger."),e("li",null,"Brukerens preferanser skal følges så langt det lar seg gjøre. Dette gjelder f.eks. tekststørrelse og fargemodus. Dersom brukeren endrer fargemodus i operativsystemet, skal nettsiden umiddelbart følge etter, med mindre brukeren har spesifisert en gitt fargemodus for nettsiden."),e("li",null,"Nettsiden skal være responsiv og fungere smertefritt på skjermstørrelser ned til moderne mobiltelefonstørrelse."),e("li",null,"Hovedinformasjonen på siden skal ta så mye plass som praktisk mulig. Det skal ikke være forstyrrende elementer som henger igjen og tar opp plass når brukeren ruller bort fra dem, spesielt ikke når det allerede er lite plass å ta av."),e("li",null,"Etablerte designidiomer skal følges så langt det lar seg gjøre. Ingen firkantede radioknapper."),e("li",null,"Det skal tas hensyn til tilgjengelighetsverkøy og søkemotoroptimalisering.")),e("p",null,"Siden systemet i utgangspunktet er ment for personlig bruk, er det dessverre ikke spesielt godt dokumentert. Ta gjerne kontakt med spørsmål hvis du som leser dette ønsker å ta det i bruk."));const Z=(e=i)=>`data:image/svg+xml;charset=utf-8,<svg aria-hidden="true" class="iconify iconify--logos" height="144" role="img" viewBox="0 0 12 12" width="144" xmlns="http://www.w3.org/2000/svg" > <style> :root { --base-colour-hue: var(--t-colour-base-app, ${e}); --opposite-colour-hue: calc(var(--base-colour-hue) + 180); } </style> <path d=" M 12 0 L 0 4 L 0 8 L 12 4 Z " style=" fill: oklch(0.5 0.5 var(--base-colour-hue) / 0.67); " /> <path d=" M 0 4 L 0 8 L 12 12 L 12 8 L 6 6 Z " style=" fill: oklch(0.5 0.5 var(--opposite-colour-hue) / 0.67); " /> <path d=" M 0 4 L 0 8 L 6 6 Z " style=" fill: oklch(0.5 0.5 var(--base-colour-hue)); " /> <path d=" M 12 4 L 6 6 L 12 8 Z " style=" fill: oklch(0.5 0.5 var(--opposite-colour-hue) / 0.33); "/> </svg>`;const Q=(e=i)=>{let t=document.querySelector('link[rel="icon"]');if(!t){t=document.createElement("link");t.rel="icon";document.head.appendChild(t)}t.type="image/svg+xml";t.href=Z(e)};const z=class{constructor(e){n(this,e);this.handleColourSettingsChange=e=>{this.baseHue=e.hue;this.baseChroma=e.chroma;this.numberOfHues=e.numberOfHues;this.contrast=e.contrast;this.hueOffsetCode=e.hueOffsetCode;this.hueOffsetVisitedLink=e.hueOffsetVisitedLink;Q(e.hue)};this.baseHue=i;this.baseChroma=o;this.numberOfHues=r;this.contrast=1;this.urlHash=window.location.hash;this.url=new URL(window.location.href);this.hueOffsetCode=180;this.hueOffsetVisitedLink=30}connectedCallback(){this.setUrlHash();this.setUrl();window.addEventListener("hashchange",(()=>{this.setUrlHash()}));window.addEventListener("popstate",(()=>{this.setUrl()}));Q()}setUrlHash(){this.urlHash=window.location.hash}setUrl(){this.url=new URL(window.location.href)}get previewIframes(){return document.querySelectorAll("preview-iframe iframe")}componentDidRender(){var e;(e=this.previewIframes)===null||e===void 0?void 0:e.forEach((e=>{const t=e.contentWindow.document.querySelector("t-context");if(t){t.basehue=this.baseHue;t.basechroma=this.baseChroma;t.selectMode(s.selectedMode).then()}}))}render(){const t=this.url.searchParams.get("s")===a;const n={hue:this.baseHue,chroma:this.baseChroma,numberOfHues:this.numberOfHues,contrast:this.contrast,hueOffsetVisitedLink:this.hueOffsetVisitedLink,hueOffsetCode:this.hueOffsetCode};return e("t-context",{key:"26c48f55fb863712ee5aaa8a2c075ab218326459",basehue:this.baseHue,basechroma:this.baseChroma,contrast:this.contrast,hueoffsetcode:this.hueOffsetCode,hueoffsetvisitedlink:this.hueOffsetVisitedLink},e("t-layout",{key:"c0dae35e76441f16f8832c6a3083da252751e647",sitetitle:"Tomas sitt designsystem",stickyleftbar:true},e("img",{key:"01fe272d8a9a30b9b5e3ea26da71b34e9a235ebe",slot:"logo",src:Z(this.baseHue),alt:"Logo"}),e("t-layout-nav",{key:"6f8b2ca031861a5cbd8e35519b988ca0fb42b1d6",slot:"nav"},e("t-layout-nav-item",{key:"db39de9f476aa9a1371ebbf9041f5f8f6e552ca8",open:!t},e("a",{key:"7196085cd8f53b546703a92fe0bb47711ec60ad5",href:"?"},"Oversikt")),e("t-layout-nav-item",{key:"94f01076883acee4f0404bf89a05e70a4a342adb",open:t},e("a",{key:"8af58718cd2c800608f2376204a0e74c76eae79d",href:"?s="+a},"Om"))),t?e(K,null):e(J,{colourSettings:n,onColourSettingsChange:this.handleColourSettingsChange})))}};export{z as preview_app};
//# sourceMappingURL=p-060c2dca.entry.js.map