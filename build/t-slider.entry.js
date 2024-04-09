import { r as registerInstance, e as createEvent, h } from './index-d71aeab2.js';

const tSliderCss = ".wrapper{display:flex;flex-direction:column;gap:var(--t-spacing-in-group);width:min-content}input{--height:1rem;-webkit-appearance:none;appearance:none;height:var(--height);background:var(--slider-background, grey);border-radius:calc(var(--height) / 2)}input::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;width:var(--height);aspect-ratio:1;background-color:transparent;border-radius:50%;cursor:pointer;box-shadow:0 0 0 2px #fff, 0 0 0 4px #000}input::-moz-range-thumb{width:var(--height);aspect-ratio:1;background-color:transparent;border-radius:50%;cursor:pointer;box-shadow:0 0 0 2px #fff, 0 0 0 4px #000}";

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
        return h("div", { key: '87e593df5f0b88903a5fdb387b4a9200c8cc5295', class: 'wrapper' }, h("label", { key: '622dd3a39a67840b8292dbfe03e161b91133ba50', htmlFor: inputId }, this.label), h("input", { key: 'c4ae05a7cc18b90935d55da4ca2dae9296203af8', id: inputId, max: this.max, min: this.min, onInput: this.handleInput, step: this.step, type: "range", value: this.value }));
    }
};
const inputId = 'input';
TSlider.style = tSliderCss;

export { TSlider as t_slider };

//# sourceMappingURL=t-slider.entry.js.map