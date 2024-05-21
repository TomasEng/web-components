import { r as registerInstance, i as createEvent, h } from './index-d1462df2.js';

const tSaturationPickerCss = ":host{--slider-background:linear-gradient(\r\n    to right,\r\n    oklch(0.8 0 var(--t-base-colour-hue)),\r\n    oklch(0.8 0.4 var(--t-base-colour-hue))\r\n  )}";

const TSaturationPicker = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.saturationChange = createEvent(this, "saturationChange", 7);
        this.handleSliderChange = (event) => this.saturationChange.emit(event.detail);
        this.label = undefined;
        this.value = undefined;
    }
    render() {
        return h("t-slider", { key: 'fe8dde7d361241a45dc630128ff7f711c2fcc922', label: this.label, max: 0.3, min: 0, onSliderChange: this.handleSliderChange, step: 0.01, value: this.value });
    }
};
TSaturationPicker.style = tSaturationPickerCss;

export { TSaturationPicker as t_saturation_picker };

//# sourceMappingURL=t-saturation-picker.entry.js.map