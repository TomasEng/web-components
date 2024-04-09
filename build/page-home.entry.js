import { r as registerInstance, h, F as Fragment } from './index-d71aeab2.js';

const integerArray = (length) => Array.from({ length }, (_, i) => i);

const PageHome = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.handleSetDarkMode = ({ detail }) => {
            this.darkMode = detail;
        };
        this.handleHueChange = ({ detail }) => {
            this.baseHue = detail;
        };
        this.handleSaturationChange = ({ detail }) => {
            this.baseChroma = detail;
        };
        this.handleNumberOfHuesChange = ({ detail }) => {
            this.numberOfHues = detail;
        };
        this.darkMode = false;
        this.baseHue = 160;
        this.baseChroma = 0.3;
        this.numberOfHues = 3;
    }
    render() {
        return (h("t-context", { key: 'ac3fbb1ced435b4b00fb41da1d15ac8de69dcebc', darkMode: this.darkMode, baseHue: this.baseHue, baseChroma: this.baseChroma }, h("t-layout", { key: '0670b0b47f54229e225fd30e2877f2703288c2c8' }, h("t-heading", { key: 'e14a4ee8d2c21d61803f33943e05f715d5af5d4b', level: 1 }, "Tomas sitt designsystem"), h("t-heading", { key: '65dc52ddc9555e8c13a0dbabe219365cf886a8c9', level: 2 }, "Innstillinger"), h("t-row", { key: '6f9e52102db13fc74af9aa9c904be05fd4b1c1dc' }, h("t-switch", { key: '89f4abcada9f8601fe2df1913fe667750c85523a', onSwitch: this.handleSetDarkMode, checked: this.darkMode }, "M\u00F8rk modus"), h("t-hue-picker", { key: '9c8d0c827c883766cd778e48b1da2dc4aca45665', label: "Hovedfargetone", onHueChange: this.handleHueChange, value: this.baseHue }), h("t-saturation-picker", { key: '2b4f10905521d96b051c85e847f8c1a49fb4773c', label: "Metning", onSaturationChange: this.handleSaturationChange, value: this.baseChroma }), h("t-integer-picker", { key: 'd4bac3b4878d042bb101e44ba1c47d13e3441dd7', label: "Antall fargetoner", onIntegerChange: this.handleNumberOfHuesChange, value: this.numberOfHues, min: 1, max: 10 })), h("t-heading", { key: 'b6d5a2d0b70c6b76c38e7f4a8d832c67ac4bfdee', level: 2 }, "Komponenter"), this.renderPreview(hue => h("t-button", { hue: hue }, "Klikk meg"), 'Knapp'), this.renderPreview(hue => h("t-column", null, h("t-switch", { hue: hue, checked: true }, "P\u00E5"), h("t-switch", { hue: hue, checked: false }, "Av")), 'Bryter'), this.renderPreview(hue => h("t-integer-picker", { hue: hue, label: "Antall", value: 5, min: 0, max: 10 }), 'Tallvelger'), this.renderPreview(hue => h("t-textfield", { hue: hue, label: "Test" }), 'Tekstfelt'), this.renderPreview(hue => {
            const options = [
                { value: '1', label: 'Alternativ 1' },
                { value: '2', label: 'Alternativ 2' },
                { value: '3', label: 'Alternativ 3' },
            ];
            return h("t-select", { hue: hue, label: "Alternativer", options: options, value: "1" });
        }, 'Nedtrekksliste'))));
    }
    hueArray() {
        return integerArray(this.numberOfHues);
    }
    renderPreview(component, title) {
        return (h(Fragment, null, h("t-heading", { level: 3 }, title), h("t-row", null, this.hueArray().map(hue => component(hue / this.numberOfHues)))));
    }
};

export { PageHome as page_home };

//# sourceMappingURL=page-home.entry.js.map