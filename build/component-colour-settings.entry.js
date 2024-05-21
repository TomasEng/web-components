import { r as registerInstance, i as createEvent, h } from './index-d1462df2.js';

const componentColourSettingsCss = ".contrast-slider{--slider-background:linear-gradient(\n    to right,\n    transparent,\n    var(--t-full-contrast-colour)\n  )}";

const ComponentColourSettings = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.changeSettings = createEvent(this, "changeSettings", 7);
        this.handleHueChange = ({ detail: hue }) => {
            const newSettings = Object.assign(Object.assign({}, this.settings), { hue });
            this.changeSettings.emit(newSettings);
        };
        this.handleSaturationChange = ({ detail: chroma }) => {
            const newSettings = Object.assign(Object.assign({}, this.settings), { chroma });
            this.changeSettings.emit(newSettings);
        };
        this.handleNumberOfHuesChange = ({ detail: numberOfHues }) => {
            const newSettings = Object.assign(Object.assign({}, this.settings), { numberOfHues });
            this.changeSettings.emit(newSettings);
        };
        this.handleContrastChange = ({ detail: contrast }) => {
            const newSettings = Object.assign(Object.assign({}, this.settings), { contrast });
            this.changeSettings.emit(newSettings);
        };
        this.settings = undefined;
    }
    render() {
        return (h("t-fieldset", { key: '539ca1f284ed2018416e8bd19f55748474568b0c', legend: 'Innstillinger' }, h("t-column", { key: '6064b652a2dae77e56ea08a9d726a917d8be30b3' }, h("t-hue-picker", { key: '950f2ae00c408cb45c3d8e12bc25fedf94bb6b92', label: "Hovedfargetone", onHueChange: this.handleHueChange, value: this.settings.hue }), h("t-saturation-picker", { key: 'a590e2cd2d72a30a505a47fb56e73505808fc911', label: "Metning", onSaturationChange: this.handleSaturationChange, value: this.settings.chroma }), h("t-integer-picker", { key: '02e2182ef1a0af2b2220c8693b24319889b01c84', label: "Antall fargetoner", onIntegerChange: this.handleNumberOfHuesChange, value: this.settings.numberOfHues, min: 1, max: 10 }), h("t-slider", { key: '4c53ada8f73f897549f88154076f0fa91d1d8a59', class: "contrast-slider", label: "Kontrast", max: 2, min: 0, onSliderChange: this.handleContrastChange, step: 0.01, value: this.settings.contrast }))));
    }
};
ComponentColourSettings.style = componentColourSettingsCss;

export { ComponentColourSettings as component_colour_settings };

//# sourceMappingURL=component-colour-settings.entry.js.map