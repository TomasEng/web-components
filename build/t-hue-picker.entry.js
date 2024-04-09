import { r as registerInstance, e as createEvent, h } from './index-d71aeab2.js';

const tHuePickerCss = ":host{--chroma:0.4;--lightness:0.8;--slider-background:linear-gradient(\n    to right,\n    oklch(var(--lightness) var(--chroma) 0),\n    oklch(var(--lightness) var(--chroma) 30),\n    oklch(var(--lightness) var(--chroma) 60),\n    oklch(var(--lightness) var(--chroma) 90),\n    oklch(var(--lightness) var(--chroma) 120),\n    oklch(var(--lightness) var(--chroma) 150),\n    oklch(var(--lightness) var(--chroma) 180),\n    oklch(var(--lightness) var(--chroma) 210),\n    oklch(var(--lightness) var(--chroma) 240),\n    oklch(var(--lightness) var(--chroma) 270),\n    oklch(var(--lightness) var(--chroma) 300),\n    oklch(var(--lightness) var(--chroma) 330),\n    oklch(var(--lightness) var(--chroma) 360)\n  )}";

const THuePicker = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.hueChange = createEvent(this, "hueChange", 7);
        this.handleSliderChange = (event) => this.hueChange.emit(event.detail);
        this.label = undefined;
        this.value = undefined;
    }
    render() {
        return h("t-slider", { key: 'fd45678eba22f7d24997c5e46fb46d98f36764b5', label: this.label, max: 360, min: 0, onSliderChange: this.handleSliderChange, step: 1, value: this.value });
    }
};
THuePicker.style = tHuePickerCss;

export { THuePicker as t_hue_picker };

//# sourceMappingURL=t-hue-picker.entry.js.map