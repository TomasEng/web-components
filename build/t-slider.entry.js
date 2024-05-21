import { r as registerInstance, i as createEvent, h } from './index-d1462df2.js';

const tSliderCss = "input{--height:1rem;-webkit-appearance:none;appearance:none;height:var(--height);background:var(--slider-background, grey);border-radius:calc(var(--height) / 2)}input::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:var(--height);aspect-ratio:1;background-color:transparent;border-radius:50%;cursor:pointer;box-shadow:0 0 0 2px #fff, 0 0 0 4px #000}input::-moz-range-thumb{width:var(--height);aspect-ratio:1;background-color:transparent;border-radius:50%;cursor:pointer;box-shadow:0 0 0 2px #fff, 0 0 0 4px #000}";

const TSlider = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.sliderChange = createEvent(this, "sliderChange", 7);
        this.handleInput = (event) => {
            const target = event.target;
            this.sliderChange.emit(target.valueAsNumber);
        };
        this.max = 1;
        this.min = 0;
        this.step = 0.01;
        this.label = undefined;
        this.value = undefined;
    }
    render() {
        return h("internal-input-wrapper", { key: 'f8badd178891e342e14f83198a524a39b5e10cb2' }, h("label", { key: '03b943afed61b1a42ae3516d4e43177fa30b0db7', htmlFor: inputId, slot: 'label' }, this.label), h("input", { key: 'a82fef431859475e9a84841fbf4c2cd8dae2756d', id: inputId, max: this.max, min: this.min, onInput: this.handleInput, slot: 'input', step: this.step, type: "range", value: this.value }));
    }
};
const inputId = 'input';
TSlider.style = tSliderCss;

export { TSlider as t_slider };

//# sourceMappingURL=t-slider.entry.js.map