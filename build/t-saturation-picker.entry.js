import { r as registerInstance, e as createEvent, h } from './index-d71aeab2.js';

const tSaturationPickerCss = ":host{--slider-background:linear-gradient(\n    to right,\n    oklch(0.8 0 var(--t-base-colour-hue)),\n    oklch(0.8 0.4 var(--t-base-colour-hue))\n  )}";

const TSaturationPicker = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.saturationChange = createEvent(this, "saturationChange", 7);
        this.handleSliderChange = (event) => this.saturationChange.emit(event.detail);
        this.label = undefined;
        this.value = undefined;
    }
    render() {
        return h("t-slider", { key: '831db3f07398303a85a86ed87b7b5da9b426a2b6', label: this.label, max: 0.3, min: 0, onSliderChange: this.handleSliderChange, step: 0.01, value: this.value });
    }
};
TSaturationPicker.style = tSaturationPickerCss;

export { TSaturationPicker as t_saturation_picker };

//# sourceMappingURL=t-saturation-picker.entry.js.map