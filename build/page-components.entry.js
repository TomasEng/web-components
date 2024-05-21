import { r as registerInstance, i as createEvent, h } from './index-d1462df2.js';
import { i as integerArray } from './numberUtils-8dd27eb9.js';
import { s as state } from './store-9af57529.js';

const tButtonTestData = {
    text: 'Klikk meg'
};
const tButtonDemo = {
    simple: {
        componentName: 't-button',
        children: [tButtonTestData.text]
    }
};

const tSwitchTestData = {
    onText: 'På',
    offText: 'Av'
};
const tSwitchDemo = {
    on: {
        componentName: 't-switch',
        props: { checked: true },
        children: [tSwitchTestData.onText]
    },
    off: {
        componentName: 't-switch',
        props: { checked: false },
        children: [tSwitchTestData.offText]
    }
};

const tIntegerPickerTestData = {
    label: 'Antall'
};
const tIntegerPickerDemo = {
    simple: {
        componentName: 't-integer-picker',
        props: {
            label: tIntegerPickerTestData.label,
            value: 5,
            min: 0,
            max: 10
        },
    }
};

const tTextfieldTestData = {
    label: 'Skriv inn noe'
};
const tTextfieldDemo = {
    simple: {
        componentName: 't-textfield',
        props: {
            label: tTextfieldTestData.label,
        },
    },
    valueChange: {
        componentName: 't-textfield',
        props: {
            label: tTextfieldTestData.label,
        },
        events: {
            valueChange: (e) => console.log(e.detail)
        }
    }
};

const tSelectTestData = {
    label: "Alternativer"
};
const tSelectDemo = {
    simple: {
        componentName: 't-select',
        props: {
            label: tSelectTestData.label,
            options: [
                { value: '1', label: 'Alternativ 1' },
                { value: '2', label: 'Alternativ 2' },
                { value: '3', label: 'Alternativ 3' }
            ],
            value: '1'
        },
    },
};

const tDropdownMenuTestData = {
    label: 'Velg',
    items: [
        {
            label: 'Alternativ 1',
            action: () => console.log('Alternativ 1 valgt')
        },
        {
            label: 'Alternativ 2',
            action: () => console.log('Alternativ 2 valgt')
        },
        {
            label: 'Alternativ 3',
            action: () => console.log('Alternativ 3 valgt')
        }
    ],
};
const tDropdownMenuDemo = {
    simple: {
        componentName: 't-dropdown-menu',
        props: {
            label: tDropdownMenuTestData.label,
            items: tDropdownMenuTestData.items,
        },
    },
};

const tLinkTestData = {
    internalLinkText: 'Intern lenke',
    externalLinkText: 'Ekstern lenke',
};
const tLinkDemo = {
    internal: {
        componentName: 't-link',
        props: {
            href: '#',
        },
        children: [tLinkTestData.internalLinkText],
    },
    external: {
        componentName: 't-link',
        props: {
            href: '#',
            external: true,
        },
        children: [tLinkTestData.externalLinkText],
    },
};

const tTabsTestData = {
    items: [
        {
            heading: 'Fane 1',
            content: 'Innhold 1',
        },
        {
            heading: 'Fane 2',
            content: 'Innhold 2',
        },
        {
            heading: 'Fane 3',
            content: 'Innhold 3',
        }
    ],
};
const tTabsDemo = {
    simple: {
        componentName: 't-tabs',
        children: tTabsTestData.items.map(item => ({
            componentName: 't-tab',
            props: {
                heading: item.heading,
            },
            children: [item.content],
        })),
    },
};

const tSourceListTestData = {
    webArticleSource: {
        authors: [{ forename: 'Oddbjørn', surname: 'Engvold' }],
        articleTitle: 'Sola',
        retrievedDate: { year: 2024, month: 5, day: 12 },
        url: 'https://snl.no/Sola',
        journal: 'Store norske leksikon',
    },
    scientificArticleSource: {
        authors: [
            { forename: 'Oliver H.', surname: 'Lowry' },
            { forename: 'Nina J.', surname: 'Rosebrough' },
            { forename: 'A. Lewis', surname: 'Farr' },
            { forename: 'Rose J.', surname: 'Randall' },
        ],
        articleTitle: 'Protein measurement with the Folin phenol reagent',
        journal: 'The Journal of Biological Chemistry',
        volume: 193,
        pageStart: 265,
        pageEnd: 275,
        date: { year: 1951 },
        issue: 1,
        doi: '10.1016/S0021-9258(19)52451-6',
    },
    bookSource: {
        authors: [{ forename: 'Robert C.', surname: 'Martin' }],
        bookTitle: 'Clean Code - A Handbook of Agile Software Craftsmanship',
        publisher: 'Prentice Hall',
        date: { year: 2008, month: 8 },
        isbn: '9780136083252, 0136083250',
    },
};
const tSourceListDemo = {
    simple: {
        componentName: 't-source-list',
        props: {
            sources: {
                'snl-sola': tSourceListTestData.webArticleSource,
                'pmwtfpr': tSourceListTestData.scientificArticleSource,
                'clean-code': tSourceListTestData.bookSource,
            },
        }
    }
};

const tArticleTestData = {
    source1: {
        authors: [{ forename: 'Robert C.', surname: 'Martin' }],
        title: 'Clean Code - A Handbook of Agile Software Craftsmanship',
        publisher: 'Prentice Hall',
        date: { year: 2008, month: 8 },
        isbn: '9780136083252, 0136083250',
    },
    source1Id: 'cc',
    source2: {
        authors: [{ forename: 'John', surname: 'Doe' }],
        title: 'Test',
        date: { year: 2024, month: 5, day: 12 },
        url: 'https://example.com',
        journal: 'Test Journal',
    },
    source2Id: 'test',
};
const tArticleDemo = {
    simple: {
        componentName: 't-article',
        props: {
            heading: 'Lorem ipsum',
            sources: {
                [tArticleTestData.source1Id]: tArticleTestData.source1,
                [tArticleTestData.source2Id]: tArticleTestData.source2,
            },
        },
        children: [
            {
                componentName: 'p',
                children: [
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    {
                        componentName: 't-source-ref',
                        props: { sourceId: tArticleTestData.source2Id }
                    },
                    'Mauris ac nisl pellentesque, tempus metus non, pretium felis. Suspendisse potenti. Nullam laoreet, neque ' +
                        'eu pharetra lobortis, diam ligula posuere augue, in imperdiet quam felis nec sem.',
                    {
                        componentName: 't-source-ref',
                        props: { sourceId: tArticleTestData.source1Id }
                    },
                    'Suspendisse suscipit, dui nec volutpat porttitor, sapien turpis pharetra elit, et cursus ante nisi eu ' +
                        'nunc. Phasellus facilisis nunc arcu, eget laoreet purus vehicula sit amet. Curabitur convallis, metus ' +
                        'finibus tristique viverra, nunc sem suscipit orci, nec gravida leo risus nec orci. Aenean pretium, eros ' +
                        'eget blandit tristique, quam tellus porttitor felis, non molestie neque ipsum et leo. Etiam tincidunt, ' +
                        'massa vitae bibendum posuere, arcu orci aliquam dolor, a viverra ligula lectus at ante.'
                ],
            },
            {
                componentName: 'p',
                children: [
                    'Cras iaculis sapien nec nisl luctus viverra. Integer eget dui ipsum.',
                    {
                        componentName: 't-source-ref',
                        props: { sourceId: tArticleTestData.source2Id }
                    },
                    'Pellentesque vel efficitur risus. Phasellus libero ante, porttitor non consequat id, euismod quis sem. ' +
                        'Maecenas egestas mi quis est mattis, a ultricies nulla fermentum. Sed venenatis ultricies pellentesque. ' +
                        'Integer varius ipsum dolor, placerat consectetur magna blandit nec. Donec et tortor metus. Nullam libero ' +
                        'lacus, vulputate nec massa non, hendrerit sodales sapien. Aenean pellentesque sapien sed diam dapibus ' +
                        'dignissim. Morbi sodales massa ut suscipit mollis. Aliquam id velit non dui congue convallis eget eget ' +
                        'augue. Duis dignissim lectus eros, eu molestie nibh scelerisque vel. Nullam scelerisque ultrices felis id ' +
                        'euismod. Etiam enim nisi, dignissim et odio eu, tristique tempor magna.'
                ]
            }
        ],
    }
};

const tArticleListTestData = {
    item1: {
        href: '#',
        title: 'Lorem ipsum',
        intro: 'Lorem ipsum dolor sit amet',
        date: {
            type: 'date',
            input: '2020-01-01T12:00:00Z',
        }
    },
    item2: {
        href: '#',
        title: 'Lorem ipsum dolor sit amet',
        intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra mauris sit amet varius sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet quam in mauris mattis sollicitudin. Maecenas interdum, tortor non congue varius, erat nibh ornare ligula, non ultricies risus mi quis ipsum. Integer efficitur quis nisl sit amet fringilla. Duis consequat congue mi, vel vehicula mauris facilisis eu. Aliquam accumsan bibendum ante quis fermentum. Aenean ac tincidunt leo. Proin id ipsum et libero posuere volutpat semper ut dolor.',
        date: { type: 'date' },
    },
    item3: {
        href: '#',
        title: 'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse faucibus erat ut velit aliquet mattis. Nunc vitae lectus ac urna fermentum consectetur vitae quis enim. Vivamus scelerisque, neque id fermentum ultrices, diam est fermentum quam, eu ornare diam sem vel nisl. Nullam porta tortor nisi, ut aliquam est cursus id. Aliquam turpis nisl, feugiat a massa vitae, efficitur viverra sapien. Cras sed suscipit tellus. Nunc pretium massa vitae ante euismod iaculis. Praesent pellentesque at libero eu lacinia.',
        intro: 'In hac habitasse platea dictumst. Maecenas eget justo ut velit imperdiet viverra eget vitae lectus. Curabitur at fringilla augue, ac tristique libero. Vivamus consectetur nisl a facilisis auctor. Integer sed purus nisi. Fusce in ligula convallis, auctor sapien non, mattis turpis. Morbi vitae elementum lectus, egestas suscipit nisl. Morbi imperdiet eleifend magna ac varius.',
        date: { type: 'date' },
    },
    item4: {
        href: '#',
        title: 'Morbi auctor, ligula nec malesuada ultricies, purus metus ultricies metus, nec tincidunt nunc turpis ut ligula.',
        intro: 'Sed sit amet nunc et nunc lacinia tincidunt. Integer auctor, lorem nec ultricies ultricies, orci dui convallis purus, eget fermentum velit neque nec dui.',
    },
};
const tArticleListDemo = {
    simple: {
        componentName: 't-article-list',
        props: {
            items: [
                tArticleListTestData.item1,
                tArticleListTestData.item2,
                tArticleListTestData.item3,
                tArticleListTestData.item4,
            ],
        },
    }
};

const tCodeTestData = {
    code: "const test: string = 'test';"
};
const tCodeDemo = {
    default: {
        componentName: 't-code',
        props: {
            code: tCodeTestData.code,
            language: 'typescript'
        },
    },
    panel: {
        componentName: 't-code',
        props: {
            code: tCodeTestData.code,
            language: 'typescript',
            panel: true
        },
    }
};

const tSpinnerDemo = {
    default: {
        componentName: 't-spinner',
    },
};

const tTooltipTestData = {
    triggerText: 'Hold over meg',
    contentText: 'Bla bla'
};
const tTooltipDemo = {
    default: {
        componentName: 't-tooltip',
        children: [
            {
                componentName: 'span',
                props: { slot: 'trigger' },
                children: [tTooltipTestData.triggerText]
            },
            {
                componentName: 'span',
                props: { slot: 'content' },
                children: [tTooltipTestData.contentText]
            }
        ]
    },
};

const PageComponents = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.colourSettingsChange = createEvent(this, "colourSettingsChange", 7);
        this.handleColourSettingsChange = ({ detail }) => {
            this.colourSettingsChange.emit(detail);
        };
        this.colourSettings = undefined;
    }
    get previewIframes() {
        return document.querySelectorAll('preview-iframe iframe');
    }
    componentDidRender() {
        var _a;
        (_a = this.previewIframes) === null || _a === void 0 ? void 0 : _a.forEach(iframe => {
            const contextElement = iframe.contentWindow.document.querySelector('t-context');
            if (contextElement) {
                contextElement.baseHue = this.colourSettings.hue;
                contextElement.baseChroma = this.colourSettings.chroma;
                contextElement.selectMode(state.selectedMode).then();
            }
        });
    }
    render() {
        return (h("t-layout-main", { key: 'e0de9d59f29b3269ac4f63d1b404c2ec3d27746d', stickyLeftbar: true }, h("component-colour-settings", { key: 'e095c45bad16d064aa479b8f40c6779bf5a52543', slot: "leftbar", settings: this.colourSettings, onChangeSettings: this.handleColourSettingsChange }), h("div", { key: '1236deac6ca3ade0849891ef52a6602bc743c0d4', slot: "content" }, h("t-heading", { key: 'f1b678275d6189535e0b5260003d00cf6c5091d6', level: 1 }, "Eksempler"), h("component-documentation", { key: 'da6bd205107fb62511e274b65416311ac57a93b5', name: 'Knapp', examples: [{ code: tButtonDemo.simple, previewMode: 'hue' }], colourSettings: this.colourSettings }), h("component-documentation", { key: '08fc06450e2a6972d63837db2995daac2d3e938d', name: 'Bryter', examples: [
                { title: 'På', code: tSwitchDemo.on, previewMode: 'hue' },
                { title: 'Av', code: tSwitchDemo.off, previewMode: 'hue' },
            ], colourSettings: this.colourSettings }), h("component-documentation", { key: '4a2cedf3347374ec12092bd374d804f7d38b4ccc', name: 'Tallvelger', examples: [{ code: tIntegerPickerDemo.simple, previewMode: 'hue' }], colourSettings: this.colourSettings }), h("component-documentation", { key: '4370fc33561ac2d49646a0edecf37f882ec54bb1', name: 'Tekstfelt', examples: [{ code: tTextfieldDemo.valueChange, previewMode: 'hue' }], colourSettings: this.colourSettings }), h("component-documentation", { key: '279eda5660bfab83239e109c016d3574db4ae53a', name: 'Nedtrekksliste', examples: [{ code: tSelectDemo.simple, previewMode: 'hue' }], colourSettings: this.colourSettings }), h("component-documentation", { key: '3687f9b21ba660c7ba0fef887f244708fa769163', name: 'Nedtrekksmeny', examples: [{ code: tDropdownMenuDemo.simple, previewMode: 'hue' }], colourSettings: this.colourSettings }), h("component-documentation", { key: '5f8ff57605a0594cdfb1f46f539e954303dbbae5', name: 'Lenke', examples: [
                { title: 'Intern lenke', code: tLinkDemo.internal, previewMode: 'inline' },
                { title: 'Ekstern lenke', code: tLinkDemo.external, previewMode: 'inline' },
            ], colourSettings: this.colourSettings }), h("component-documentation", { key: 'f1849b20eb8b675ad6c52f9a96d161a9105f0b5b', name: 'Faner', examples: [{ code: tTabsDemo.simple, previewMode: 'inline' }], colourSettings: this.colourSettings }), h("component-documentation", { key: 'b1b26707bb1d862675955f9d6927a43f483caed0', name: 'Kildeliste', examples: [{ code: tSourceListDemo.simple, previewMode: 'inline' }], colourSettings: this.colourSettings }), h("component-documentation", { key: '9830349a1d099788d4b913bd0efdc5e416d50b58', name: 'Artikkel', examples: [{ code: tArticleDemo.simple, previewMode: 'iframe' }], colourSettings: this.colourSettings }), h("component-documentation", { key: '1c3db3055b2a8571bc392cd4e489d3704a3badcc', name: 'Artikkelliste', examples: [{ code: tArticleListDemo.simple, previewMode: 'inline' }], colourSettings: this.colourSettings }), h("component-documentation", { key: 'ce7f3cc2af3821da5dcef36129a1b33ecaa8bb66', name: 'Kode', examples: [
                { title: 'Standard', code: tCodeDemo.default, previewMode: 'inline' },
                { title: 'Panel', code: tCodeDemo.panel, previewMode: 'inline' },
            ], colourSettings: this.colourSettings }), h("component-documentation", { key: 'c1c1aa4995bbe7121d95a10e27eefbf44e2b4ec8', name: 'Spinner', examples: [{ code: tSpinnerDemo.default, previewMode: 'inline' }], colourSettings: this.colourSettings }), h("component-documentation", { key: 'bd79b995095599bf1d5a459e20c731d7fdcbd64e', name: 'Verkt\u00F8yhjelp', examples: [{ code: tTooltipDemo.default, previewMode: 'inline' }], colourSettings: this.colourSettings }))));
    }
    hueArray() {
        return integerArray(this.colourSettings.numberOfHues);
    }
};

export { PageComponents as page_components };

//# sourceMappingURL=page-components.entry.js.map