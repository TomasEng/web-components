import { r as registerInstance, i as createEvent, h } from './index-d1462df2.js';

const tHuePickerCss = ":host{--chroma:0.4;--lightness:0.8;--slider-background:linear-gradient(\r\n    to right,\r\n    oklch(var(--lightness) var(--chroma) 0),\r\n    oklch(var(--lightness) var(--chroma) 30),\r\n    oklch(var(--lightness) var(--chroma) 60),\r\n    oklch(var(--lightness) var(--chroma) 90),\r\n    oklch(var(--lightness) var(--chroma) 120),\r\n    oklch(var(--lightness) var(--chroma) 150),\r\n    oklch(var(--lightness) var(--chroma) 180),\r\n    oklch(var(--lightness) var(--chroma) 210),\r\n    oklch(var(--lightness) var(--chroma) 240),\r\n    oklch(var(--lightness) var(--chroma) 270),\r\n    oklch(var(--lightness) var(--chroma) 300),\r\n    oklch(var(--lightness) var(--chroma) 330),\r\n    oklch(var(--lightness) var(--chroma) 360)\r\n  )}";

const THuePicker = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.hueChange = createEvent(this, "hueChange", 7);
        this.handleSliderChange = (event) => this.hueChange.emit(event.detail);
        this.label = undefined;
        this.value = undefined;
    }
    render() {
        return h("t-slider", { key: '3f66d5d5225b1d77057763afb91806b414b14058', label: this.label, max: 360, min: 0, onSliderChange: this.handleSliderChange, step: 1, value: this.value });
    }
};
THuePicker.style = tHuePickerCss;

export { THuePicker as t_hue_picker };

//# sourceMappingURL=t-hue-picker.entry.js.map