import { a as getRenderingRef, f as forceUpdate } from './index-d71aeab2.js';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function getDefaultExportFromNamespaceIfPresent (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') ? n['default'] : n;
}

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

function getAugmentedNamespace(n) {
	if (n.__esModule) return n;
	var a = Object.defineProperty({}, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

function commonjsRequire (path) {
	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}

var dist = {};

var Chromator$1 = {};

var colourCodeToHsla$1 = {};

var xyz$1 = {};

var utils$2 = {};

var isOnFormat$1 = {};

var colourFormatRegex = {};

"use strict";
Object.defineProperty(colourFormatRegex, "__esModule", { value: true });
var colourFormatRegex_1$1 = colourFormatRegex.colourFormatRegex = void 0;
colourFormatRegex_1$1 = colourFormatRegex.colourFormatRegex = {
    hsl: /^hsl\s*\(\s*(?<hue>(-?\d*\.?\d*(|deg|turn|rad|grad))|none)\s*,\s*(?<saturation>(\d*\.?\d*%?)|none)\s*,\s*(?<lightness>(\d*\.?\d*%?)|none)\s*\)$/i,
    hsla: /^hsla\s*\(\s*(?<hue>(-?\d*\.?\d*(|deg|turn|rad|grad))|none)\s*,\s*(?<saturation>(\d*\.?\d*%?)|none)\s*,\s*(?<lightness>(\d*\.?\d*%?)|none)\s*,\s*(?<alpha>\d*\.?\d*%?)\s*\)$/i,
    lab: /^lab\s*\(\s*(?<L>(\d*\.?\d*%?)|none)\s+(?<a>(-?\d*\.?\d*%?)|none)\s+(?<b>(-?\d*\.?\d*%?)|none)\s*(\/\s*(?<alpha>(\+?\d*\.?\d*%?)|none)\s*)?\)$/i,
    lch: /^lch\s*\(\s*(?<L>(\d*\.?\d*%?)|none)\s+(?<chroma>(\d*\.?\d*%?)|none)\s+(?<hue>(-?\d*\.?\d*(|deg|turn|grad|rad))|none)\s*(\/\s*(?<alpha>(\+?\d*\.?\d*%?)|none)\s*)?\)$/i,
    oklab: /^oklab\s*\(\s*(?<l>(\+?\d*\.?\d*%?)|none)\s+(?<a>([+-]?\d*\.?\d*%?)|none)\s+(?<b>([+-]?\d*\.?\d*%?)|none)\s*(\/\s*(?<alpha>(\+?\d*\.?\d*%?)|none)\s*)?\)$/i,
    oklch: /^oklch\s*\(\s*(?<l>(\+?\d*\.?\d*%?)|none)\s+(?<chroma>(\+?\d*\.?\d*%?)|none)\s+(?<hue>([+-]?\d*\.?\d*(|deg|turn|grad|rad))|none)\s*(\/\s*(?<alpha>(\+?\d*\.?\d*%?)|none)\s*)?\)$/i,
    namedColour: /[\w-]+/i,
    namedTransparent: /transparent/i,
    rgbDecimal: /^rgb\s*\(\s*(?<red>\d*\.?\d*)\s*,\s*(?<green>\d*\.?\d*)\s*,\s*(?<blue>\d*\.?\d*)\s*\)$/i,
    rgbHexLongWithHash: /^#[0-9a-fA-F]{6}$/i,
    rgbHexLongWithoutHash: /^[0-9a-fA-F]{6}$/i,
    rgbHexShortWithHash: /^#[0-9a-f]{3}$/i,
    rgbHexShortWithoutHash: /^[0-9a-f]{3}$/i,
    rgbaDecimal: /^rgba\s*\(\s*(?<red>\d*\.?\d*)\s*,\s*(?<green>\d*\.?\d*)\s*,\s*(?<blue>\d*\.?\d*)\s*,\s*(?<alpha>\d*\.?\d*%?)\s*\)$/i,
    rgbaHexLongWithHash: /^#[0-9a-f]{8}$/i,
    rgbaHexLongWithoutHash: /^[0-9a-f]{8}$/i,
    rgbaHexShortWithHash: /^#[0-9a-fA-F]{4}$/i,
    rgbaHexShortWithoutHash: /^[0-9a-fA-F]{4}$/i
};

var stringFormatValidators$1 = {};

var namedColours = {};

"use strict";
Object.defineProperty(namedColours, "__esModule", { value: true });
var namedColours_1$1 = namedColours.namedColours = void 0;
namedColours_1$1 = namedColours.namedColours = {
    aliceblue: { red: 240, green: 248, blue: 255 },
    antiquewhite: { red: 250, green: 235, blue: 215 },
    aqua: { red: 0, green: 255, blue: 255 },
    aquamarine: { red: 127, green: 255, blue: 212 },
    azure: { red: 240, green: 255, blue: 255 },
    beige: { red: 245, green: 245, blue: 220 },
    bisque: { red: 255, green: 228, blue: 196 },
    black: { red: 0, green: 0, blue: 0 },
    blanchedalmond: { red: 255, green: 235, blue: 205 },
    blue: { red: 0, green: 0, blue: 255 },
    blueviolet: { red: 138, green: 43, blue: 226 },
    brown: { red: 165, green: 42, blue: 42 },
    burlywood: { red: 222, green: 184, blue: 135 },
    cadetblue: { red: 95, green: 158, blue: 160 },
    chartreuse: { red: 127, green: 255, blue: 0 },
    chocolate: { red: 210, green: 105, blue: 30 },
    coral: { red: 255, green: 127, blue: 80 },
    cornflowerblue: { red: 100, green: 149, blue: 237 },
    cornsilk: { red: 255, green: 248, blue: 220 },
    crimson: { red: 220, green: 20, blue: 60 },
    cyan: { red: 0, green: 255, blue: 255 },
    darkblue: { red: 0, green: 0, blue: 139 },
    darkcyan: { red: 0, green: 139, blue: 139 },
    darkgoldenrod: { red: 184, green: 134, blue: 11 },
    darkgray: { red: 169, green: 169, blue: 169 },
    darkgreen: { red: 0, green: 100, blue: 0 },
    darkgrey: { red: 169, green: 169, blue: 169 },
    darkkhaki: { red: 189, green: 183, blue: 107 },
    darkmagenta: { red: 139, green: 0, blue: 139 },
    darkolivegreen: { red: 85, green: 107, blue: 47 },
    darkorange: { red: 255, green: 140, blue: 0 },
    darkorchid: { red: 153, green: 50, blue: 204 },
    darkred: { red: 139, green: 0, blue: 0 },
    darksalmon: { red: 233, green: 150, blue: 122 },
    darkseagreen: { red: 143, green: 188, blue: 143 },
    darkslateblue: { red: 72, green: 61, blue: 139 },
    darkslategray: { red: 47, green: 79, blue: 79 },
    darkslategrey: { red: 47, green: 79, blue: 79 },
    darkturquoise: { red: 0, green: 206, blue: 209 },
    darkviolet: { red: 148, green: 0, blue: 211 },
    deeppink: { red: 255, green: 20, blue: 147 },
    deepskyblue: { red: 0, green: 191, blue: 255 },
    dimgray: { red: 105, green: 105, blue: 105 },
    dimgrey: { red: 105, green: 105, blue: 105 },
    dodgerblue: { red: 30, green: 144, blue: 255 },
    firebrick: { red: 178, green: 34, blue: 34 },
    floralwhite: { red: 255, green: 250, blue: 240 },
    forestgreen: { red: 34, green: 139, blue: 34 },
    fuchsia: { red: 255, green: 0, blue: 255 },
    gainsboro: { red: 220, green: 220, blue: 220 },
    ghostwhite: { red: 248, green: 248, blue: 255 },
    gold: { red: 255, green: 215, blue: 0 },
    goldenrod: { red: 218, green: 165, blue: 32 },
    gray: { red: 128, green: 128, blue: 128 },
    green: { red: 0, green: 128, blue: 0 },
    greenyellow: { red: 173, green: 255, blue: 47 },
    grey: { red: 128, green: 128, blue: 128 },
    honeydew: { red: 240, green: 255, blue: 240 },
    hotpink: { red: 255, green: 105, blue: 180 },
    indianred: { red: 205, green: 92, blue: 92 },
    indigo: { red: 75, green: 0, blue: 130 },
    ivory: { red: 255, green: 255, blue: 240 },
    khaki: { red: 240, green: 230, blue: 140 },
    lavender: { red: 230, green: 230, blue: 250 },
    lavenderblush: { red: 255, green: 240, blue: 245 },
    lawngreen: { red: 124, green: 252, blue: 0 },
    lemonchiffon: { red: 255, green: 250, blue: 205 },
    lightblue: { red: 173, green: 216, blue: 230 },
    lightcoral: { red: 240, green: 128, blue: 128 },
    lightcyan: { red: 224, green: 255, blue: 255 },
    lightgoldenrodyellow: { red: 250, green: 250, blue: 210 },
    lightgray: { red: 211, green: 211, blue: 211 },
    lightgreen: { red: 144, green: 238, blue: 144 },
    lightgrey: { red: 211, green: 211, blue: 211 },
    lightpink: { red: 255, green: 182, blue: 193 },
    lightsalmon: { red: 255, green: 160, blue: 122 },
    lightseagreen: { red: 32, green: 178, blue: 170 },
    lightskyblue: { red: 135, green: 206, blue: 250 },
    lightslategray: { red: 119, green: 136, blue: 153 },
    lightslategrey: { red: 119, green: 136, blue: 153 },
    lightsteelblue: { red: 176, green: 196, blue: 222 },
    lightyellow: { red: 255, green: 255, blue: 224 },
    lime: { red: 0, green: 255, blue: 0 },
    limegreen: { red: 50, green: 205, blue: 50 },
    linen: { red: 250, green: 240, blue: 230 },
    magenta: { red: 255, green: 0, blue: 255 },
    maroon: { red: 128, green: 0, blue: 0 },
    mediumaquamarine: { red: 102, green: 205, blue: 170 },
    mediumblue: { red: 0, green: 0, blue: 205 },
    mediumorchid: { red: 186, green: 85, blue: 211 },
    mediumpurple: { red: 147, green: 112, blue: 219 },
    mediumseagreen: { red: 60, green: 179, blue: 113 },
    mediumslateblue: { red: 123, green: 104, blue: 238 },
    mediumspringgreen: { red: 0, green: 250, blue: 154 },
    mediumturquoise: { red: 72, green: 209, blue: 204 },
    mediumvioletred: { red: 199, green: 21, blue: 133 },
    midnightblue: { red: 25, green: 25, blue: 112 },
    mintcream: { red: 245, green: 255, blue: 250 },
    mistyrose: { red: 255, green: 228, blue: 225 },
    moccasin: { red: 255, green: 228, blue: 181 },
    navajowhite: { red: 255, green: 222, blue: 173 },
    navy: { red: 0, green: 0, blue: 128 },
    oldlace: { red: 253, green: 245, blue: 230 },
    olive: { red: 128, green: 128, blue: 0 },
    olivedrab: { red: 107, green: 142, blue: 35 },
    orange: { red: 255, green: 165, blue: 0 },
    orangered: { red: 255, green: 69, blue: 0 },
    orchid: { red: 218, green: 112, blue: 214 },
    palegoldenrod: { red: 238, green: 232, blue: 170 },
    palegreen: { red: 152, green: 251, blue: 152 },
    paleturquoise: { red: 175, green: 238, blue: 238 },
    palevioletred: { red: 219, green: 112, blue: 147 },
    papayawhip: { red: 255, green: 239, blue: 213 },
    peachpuff: { red: 255, green: 218, blue: 185 },
    peru: { red: 205, green: 133, blue: 63 },
    pink: { red: 255, green: 192, blue: 203 },
    plum: { red: 221, green: 160, blue: 221 },
    powderblue: { red: 176, green: 224, blue: 230 },
    purple: { red: 128, green: 0, blue: 128 },
    rebeccapurple: { red: 102, green: 51, blue: 153 },
    red: { red: 255, green: 0, blue: 0 },
    rosybrown: { red: 188, green: 143, blue: 143 },
    royalblue: { red: 65, green: 105, blue: 225 },
    saddlebrown: { red: 139, green: 69, blue: 19 },
    salmon: { red: 250, green: 128, blue: 114 },
    sandybrown: { red: 244, green: 164, blue: 96 },
    seagreen: { red: 46, green: 139, blue: 87 },
    seashell: { red: 255, green: 245, blue: 238 },
    sienna: { red: 160, green: 82, blue: 45 },
    silver: { red: 192, green: 192, blue: 192 },
    skyblue: { red: 135, green: 206, blue: 235 },
    slateblue: { red: 106, green: 90, blue: 205 },
    slategray: { red: 112, green: 128, blue: 144 },
    slategrey: { red: 112, green: 128, blue: 144 },
    snow: { red: 255, green: 250, blue: 250 },
    springgreen: { red: 0, green: 255, blue: 127 },
    steelblue: { red: 70, green: 130, blue: 180 },
    tan: { red: 210, green: 180, blue: 140 },
    teal: { red: 0, green: 128, blue: 128 },
    thistle: { red: 216, green: 191, blue: 216 },
    tomato: { red: 255, green: 99, blue: 71 },
    turquoise: { red: 64, green: 224, blue: 208 },
    violet: { red: 238, green: 130, blue: 238 },
    wheat: { red: 245, green: 222, blue: 179 },
    white: { red: 255, green: 255, blue: 255 },
    whitesmoke: { red: 245, green: 245, blue: 245 },
    yellow: { red: 255, green: 255, blue: 0 },
    yellowgreen: { red: 154, green: 205, blue: 50 }
};

(function (exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidUnitIntervalOrPercentageValue = exports.isValidUnitIntervalValue = exports.isValid255ScaleValue = exports.isValidPercentageValue = exports.isValidDegreeValue = exports.isValidTransparentName = exports.isValidColourName = exports.isValidRgba255String = exports.isValidRgb255String = exports.isValidHslaString = exports.isValidHslString = void 0;
var colourFormatRegex_1 = colourFormatRegex;
var namedColours_1 = namedColours;
var isValidHslString = function (value) {
    var regex = colourFormatRegex_1.colourFormatRegex.hsl;
    var trimmed = value.trim().toLowerCase();
    var hasExpectedFormat = regex.test(trimmed);
    if (!hasExpectedFormat)
        return false;
    var _a = regex.exec(trimmed).groups, hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness;
    return ((hue === 'none' || (0, exports.isValidDegreeValue)(hue)) &&
        (saturation === 'none' || (0, exports.isValidUnitIntervalOrPercentageValue)(saturation)) &&
        (lightness === 'none' || (0, exports.isValidUnitIntervalOrPercentageValue)(lightness)));
};
exports.isValidHslString = isValidHslString;
var isValidHslaString = function (value) {
    var regex = colourFormatRegex_1.colourFormatRegex.hsla;
    var trimmed = value.trim().toLowerCase();
    var hasExpectedFormat = regex.test(trimmed);
    if (!hasExpectedFormat)
        return false;
    var _a = regex.exec(trimmed).groups, hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness, alpha = _a.alpha;
    return ((hue === 'none' || (0, exports.isValidDegreeValue)(hue)) &&
        (saturation === 'none' || (0, exports.isValidUnitIntervalOrPercentageValue)(saturation)) &&
        (lightness === 'none' || (0, exports.isValidUnitIntervalOrPercentageValue)(lightness)) &&
        (0, exports.isValidUnitIntervalOrPercentageValue)(alpha));
};
exports.isValidHslaString = isValidHslaString;
var isValidRgb255String = function (value) {
    var regex = colourFormatRegex_1.colourFormatRegex.rgbDecimal;
    var trimmed = value.trim().toLowerCase();
    var hasExpectedFormat = regex.test(trimmed);
    if (!hasExpectedFormat)
        return false;
    var _a = regex.exec(trimmed).groups, red = _a.red, green = _a.green, blue = _a.blue;
    return ((0, exports.isValid255ScaleValue)(red) &&
        (0, exports.isValid255ScaleValue)(green) &&
        (0, exports.isValid255ScaleValue)(blue));
};
exports.isValidRgb255String = isValidRgb255String;
var isValidRgba255String = function (value) {
    var regex = colourFormatRegex_1.colourFormatRegex.rgbaDecimal;
    var trimmed = value.trim().toLowerCase();
    var hasExpectedFormat = regex.test(trimmed);
    if (!hasExpectedFormat)
        return false;
    var _a = regex.exec(trimmed).groups, red = _a.red, green = _a.green, blue = _a.blue, alpha = _a.alpha;
    return ((0, exports.isValid255ScaleValue)(red) &&
        (0, exports.isValid255ScaleValue)(green) &&
        (0, exports.isValid255ScaleValue)(blue) &&
        (0, exports.isValidUnitIntervalOrPercentageValue)(alpha));
};
exports.isValidRgba255String = isValidRgba255String;
var isValidColourName = function (value) {
    var trimmed = value.trim().toLowerCase();
    return Object.keys(namedColours_1.namedColours).includes(trimmed);
};
exports.isValidColourName = isValidColourName;
var isValidTransparentName = function (value) {
    var trimmed = value.trim().toLowerCase();
    return trimmed === 'transparent';
};
exports.isValidTransparentName = isValidTransparentName;
var isValidDegreeValue = function (value) {
    return /^[-+]?(\d+|\d*(\.\d+))(|deg|turn|rad|grad)$/.test(value);
};
exports.isValidDegreeValue = isValidDegreeValue;
var isValidPercentageValue = function (value) {
    return /^((((\d{1,2}(\.\d+)?)|(100(\.0+)?)|(\.\d+))%)|0)$/.test(value);
};
exports.isValidPercentageValue = isValidPercentageValue;
var isValid255ScaleValue = function (value) {
    return /^((((1?\d{1,2})|(2([01234]\d|5[01234])))(\.\d+)?)|255(\.0+)?|\.\d+)$/.test(value);
};
exports.isValid255ScaleValue = isValid255ScaleValue;
var isValidUnitIntervalValue = function (value) {
    return /^\+?(0|0\.\d+|\.\d+|1(\.0+)?)$/.test(value);
};
exports.isValidUnitIntervalValue = isValidUnitIntervalValue;
var isValidUnitIntervalOrPercentageValue = function (value) {
    return (0, exports.isValidUnitIntervalValue)(value) || (0, exports.isValidPercentageValue)(value);
};
exports.isValidUnitIntervalOrPercentageValue = isValidUnitIntervalOrPercentageValue;

}(stringFormatValidators$1));

const stringFormatValidators = /*@__PURE__*/getDefaultExportFromCjs(stringFormatValidators$1);

"use strict";
Object.defineProperty(isOnFormat$1, "__esModule", { value: true });
var isOnFormat_2 = isOnFormat$1.isOnFormat = void 0;
var colourFormatRegex_1 = colourFormatRegex;
var stringFormatValidators_1 = stringFormatValidators$1;
var isOnFormat = function (value, format) {
    switch (format) {
        case 'hsl':
            return (0, stringFormatValidators_1.isValidHslString)(value);
        case 'hsla':
            return (0, stringFormatValidators_1.isValidHslaString)(value);
        case 'namedColour':
            return (0, stringFormatValidators_1.isValidColourName)(value);
        case 'rgbDecimal':
            return (0, stringFormatValidators_1.isValidRgb255String)(value);
        case 'rgbaDecimal':
            return (0, stringFormatValidators_1.isValidRgba255String)(value);
        default:
            return colourFormatRegex_1.colourFormatRegex[format].test(value);
    }
};
isOnFormat_2 = isOnFormat$1.isOnFormat = isOnFormat;

(function (exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findInputToAlwaysIncreasingFunc = exports.roundTo0Or1IfCloseEnough = exports.ensureWithinUnitInterval = exports.evaluateFormat = exports.floor = exports.round = exports.modulo = void 0;
var isOnFormat_1 = isOnFormat$1;
var colourFormatRegex_1 = colourFormatRegex;
var modulo = function (dividend, divisor) { return ((dividend % divisor) + divisor) % divisor; }; // This should be used in favor of the % operator when dealing with negative numbers, since the % operator does not handle negative numbers correctly.
exports.modulo = modulo;
var round = function (value, precision) {
    if (precision === void 0) { precision = 0; }
    return Math.round(value * Math.pow(10, precision)) / Math.pow(10, precision);
};
exports.round = round;
var floor = function (value, precision) {
    if (precision === void 0) { precision = 0; }
    return Math.floor(value * Math.pow(10, precision)) / Math.pow(10, precision);
};
exports.floor = floor;
var evaluateFormat = function (value) {
    var formatKeys = Object.keys(colourFormatRegex_1.colourFormatRegex);
    for (var _i = 0, formatKeys_1 = formatKeys; _i < formatKeys_1.length; _i++) {
        var format = formatKeys_1[_i];
        if ((0, isOnFormat_1.isOnFormat)(value, format))
            return format;
    }
    return undefined;
};
exports.evaluateFormat = evaluateFormat;
var ensureWithinUnitInterval = function (value) {
    if (value < 0)
        return 0;
    if (value > 1)
        return 1;
    return value;
};
exports.ensureWithinUnitInterval = ensureWithinUnitInterval;
var roundTo0Or1IfCloseEnough = function (value, threshold) {
    if (threshold === void 0) { threshold = Number.EPSILON; }
    if (Math.abs(value) <= threshold)
        return 0;
    if (Math.abs(value - 1) <= threshold)
        return 1;
    return value;
};
exports.roundTo0Or1IfCloseEnough = roundTo0Or1IfCloseEnough;
/**
 * Runs the given function recursively within the given interval until an output value close to the target output is found.
 * It is assumed that the function is always increasing and that an answer exists within the given interval.
 * @param fun The function to find the input value to.
 * @param targetOutput The desired output value.
 * @param precision The maximum difference between the target output and the output of the function.
 * @param interval The interval within which the input value is assumed to exist.
 */
var findInputToAlwaysIncreasingFunc = function (fun, targetOutput, precision, interval) {
    if (interval === void 0) { interval = { start: 0, end: 1 }; }
    var input = middleOfInterval(interval);
    var currentResult = fun(input);
    if (Math.abs(currentResult - targetOutput) <= precision)
        return input;
    if (currentResult < targetOutput)
        interval.start = input;
    else
        interval.end = input;
    return (0, exports.findInputToAlwaysIncreasingFunc)(fun, targetOutput, precision, interval);
};
exports.findInputToAlwaysIncreasingFunc = findInputToAlwaysIncreasingFunc;
var middleOfInterval = function (interval) { return (interval.start + interval.end) / 2; };

}(utils$2));

const utils$1 = /*@__PURE__*/getDefaultExportFromCjs(utils$2);

var rgb$1 = {};

var HueRegion$1 = {};

"use strict";
Object.defineProperty(HueRegion$1, "__esModule", { value: true });
var HueRegion_2 = HueRegion$1.HueRegion = void 0;
var HueRegion;
(function (HueRegion) {
    HueRegion["RedYellow"] = "RedYellow";
    HueRegion["YellowGreen"] = "YellowGreen";
    HueRegion["GreenCyan"] = "GreenCyan";
    HueRegion["CyanBlue"] = "CyanBlue";
    HueRegion["BlueMagenta"] = "BlueMagenta";
    HueRegion["MagentaRed"] = "MagentaRed";
})(HueRegion || (HueRegion_2 = HueRegion$1.HueRegion = HueRegion = {}));

var utils = {};

"use strict";
Object.defineProperty(utils, "__esModule", { value: true });
var rgb255ToRgb1_1 = utils.rgb255ToRgb1 = rgb1ToRgb255_1 = utils.rgb1ToRgb255 = void 0;
var rgb1ToRgb255 = function (rgb1) {
    var red = rgb1.red, green = rgb1.green, blue = rgb1.blue;
    return {
        red: red * 255,
        green: green * 255,
        blue: blue * 255
    };
};
var rgb1ToRgb255_1 = utils.rgb1ToRgb255 = rgb1ToRgb255;
var rgb255ToRgb1 = function (rgb255) {
    var red = rgb255.red, green = rgb255.green, blue = rgb255.blue;
    return {
        red: red / 255,
        green: green / 255,
        blue: blue / 255
    };
};
rgb255ToRgb1_1 = utils.rgb255ToRgb1 = rgb255ToRgb1;

(function (exports) {
"use strict";
var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (commonjsGlobal && commonjsGlobal.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rgbaToHsla = exports.hslaToRgba = exports.hslToRgb = exports.rgbToHsl = void 0;
var utils_1 = utils$2;
var HueRegion_1 = HueRegion$1;
var utils_2 = utils;
var rgbToHsl = function (rgb) {
    var rgb1 = (0, utils_2.rgb255ToRgb1)(rgb);
    var red = rgb1.red, green = rgb1.green, blue = rgb1.blue;
    var max = Math.max(red, green, blue);
    var min = Math.min(red, green, blue);
    var chroma = max - min;
    var lightness = (max + min) / 2;
    var saturation = chroma <= Number.EPSILON ? 0 : chroma / (1 - Math.abs(2 * lightness - 1));
    var hue1 = chroma === 0 ? 0 : calculateHue(red, green, blue, max, chroma);
    var hue = (0, utils_1.modulo)(hue1 * 60, 360);
    return {
        hue: hue,
        saturation: saturation,
        lightness: lightness
    };
};
exports.rgbToHsl = rgbToHsl;
var calculateHue = function (red, green, blue, max, chroma) {
    switch (max) {
        case red:
            return (green - blue) / chroma;
        case green:
            return (blue - red) / chroma + 2;
        case blue:
            return (red - green) / chroma + 4;
        default:
            return 0;
    }
};
var hslToRgb = function (hsl) {
    var hue = hsl.hue, saturation = hsl.saturation, lightness = hsl.lightness;
    var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
    var huePrime = hue / 60;
    var x = chroma * (1 - Math.abs(huePrime % 2 - 1));
    var m = lightness - chroma / 2;
    var rgb1WithoutLightness = findRgb1FromHue(hue, chroma, x);
    var rgb1 = addToRgb(rgb1WithoutLightness, m);
    return (0, utils_2.rgb1ToRgb255)(rgb1);
};
exports.hslToRgb = hslToRgb;
var findRgb1FromHue = function (hue, chroma, x) {
    switch (findHueRegion(hue)) {
        case HueRegion_1.HueRegion.RedYellow:
            return { red: chroma, green: x, blue: 0 };
        case HueRegion_1.HueRegion.YellowGreen:
            return { red: x, green: chroma, blue: 0 };
        case HueRegion_1.HueRegion.GreenCyan:
            return { red: 0, green: chroma, blue: x };
        case HueRegion_1.HueRegion.CyanBlue:
            return { red: 0, green: x, blue: chroma };
        case HueRegion_1.HueRegion.BlueMagenta:
            return { red: x, green: 0, blue: chroma };
        case HueRegion_1.HueRegion.MagentaRed:
            return { red: chroma, green: 0, blue: x };
    }
};
var findHueRegion = function (hue) {
    var hue360 = (0, utils_1.modulo)(hue, 360);
    if (hue360 >= 0 && hue360 < 60) {
        return HueRegion_1.HueRegion.RedYellow;
    }
    else if (hue360 >= 60 && hue360 < 120) {
        return HueRegion_1.HueRegion.YellowGreen;
    }
    else if (hue360 >= 120 && hue360 < 180) {
        return HueRegion_1.HueRegion.GreenCyan;
    }
    else if (hue360 >= 180 && hue360 < 240) {
        return HueRegion_1.HueRegion.CyanBlue;
    }
    else if (hue360 >= 240 && hue360 < 300) {
        return HueRegion_1.HueRegion.BlueMagenta;
    }
    else {
        return HueRegion_1.HueRegion.MagentaRed;
    }
};
var addToRgb = function (rgb, value) {
    var red = rgb.red, green = rgb.green, blue = rgb.blue;
    return {
        red: red + value,
        green: green + value,
        blue: blue + value
    };
};
var hslaToRgba = function (hsla) {
    var alpha = hsla.alpha, hsl = __rest(hsla, ["alpha"]);
    var rgb = (0, exports.hslToRgb)(hsl);
    return __assign(__assign({}, rgb), { alpha: alpha });
};
exports.hslaToRgba = hslaToRgba;
var rgbaToHsla = function (rgba) {
    var alpha = rgba.alpha, rgb = __rest(rgba, ["alpha"]);
    var hsl = (0, exports.rgbToHsl)(rgb);
    return __assign(__assign({}, hsl), { alpha: alpha });
};
exports.rgbaToHsla = rgbaToHsla;

}(rgb$1));

const rgb = /*@__PURE__*/getDefaultExportFromCjs(rgb$1);

(function (exports) {
"use strict";
var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.whitePoint = exports.isXyzWithinSrgb = exports.cieXyzToSrgb = exports.cieXyzToHsl = exports.cieXyzaToHsla = exports.relativeLuminanceFromHsl = exports.rgbToCieXyz = exports.hslToCieXyz = exports.hslaToCieXyza = void 0;
var utils_1 = utils$2;
var rgb_1 = rgb$1;
var utils_2 = utils;
var hslaToCieXyza = function (hsla) {
    var hue = hsla.hue, saturation = hsla.saturation, lightness = hsla.lightness, alpha = hsla.alpha;
    var hsl = { hue: hue, saturation: saturation, lightness: lightness };
    var xyz = (0, exports.hslToCieXyz)(hsl);
    return __assign(__assign({}, xyz), { alpha: alpha });
};
exports.hslaToCieXyza = hslaToCieXyza;
var hslToCieXyz = function (hsl) {
    var rgb = (0, rgb_1.hslToRgb)(hsl);
    return (0, exports.rgbToCieXyz)(rgb);
};
exports.hslToCieXyz = hslToCieXyz;
var rgbToCieXyz = function (rgb) {
    var rgb1 = (0, utils_2.rgb255ToRgb1)(rgb);
    var _a = gammaExpandedRgb(rgb1), red = _a.red, green = _a.green, blue = _a.blue;
    var x = red * 0.4124564 + green * 0.3575761 + blue * 0.1804375;
    var y = red * 0.2126729 + green * 0.7151522 + blue * 0.072175;
    var z = red * 0.0193339 + green * 0.119192 + blue * 0.9503041;
    return { x: x, y: y, z: z };
};
exports.rgbToCieXyz = rgbToCieXyz;
var relativeLuminanceFromHsl = function (hsl) {
    var rgb = (0, rgb_1.hslToRgb)(hsl);
    return relativeLuminanceFromRgb(rgb);
};
exports.relativeLuminanceFromHsl = relativeLuminanceFromHsl;
var relativeLuminanceFromRgb = function (rgb) {
    var rgb1 = (0, utils_2.rgb255ToRgb1)(rgb);
    var _a = gammaExpandedRgb(rgb1), red = _a.red, green = _a.green, blue = _a.blue;
    return red * 0.2126729 + green * 0.7151522 + blue * 0.072175;
};
var gammaExpandedRgb = function (srgb) {
    var red = srgb.red, green = srgb.green, blue = srgb.blue;
    return {
        red: gammaExpand(red),
        green: gammaExpand(green),
        blue: gammaExpand(blue)
    };
};
var gammaExpand = function (value) {
    return value <= 0.04045 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4);
};
var cieXyzaToHsla = function (xyz) {
    var x = xyz.x, y = xyz.y, z = xyz.z, alpha = xyz.alpha;
    var hsl = (0, exports.cieXyzToHsl)({ x: x, y: y, z: z });
    return __assign(__assign({}, hsl), { alpha: alpha });
};
exports.cieXyzaToHsla = cieXyzaToHsla;
var cieXyzToHsl = function (xyz) {
    var rgb = (0, exports.cieXyzToSrgb)(xyz);
    return (0, rgb_1.rgbToHsl)(rgb);
};
exports.cieXyzToHsl = cieXyzToHsl;
var cieXyzToSrgb = function (xyz) {
    var compressedRgb = cieXyzToRgbInUnitInterval(xyz);
    var boundedRgb = ensureRgbWithinUnitScale(compressedRgb);
    return (0, utils_2.rgb1ToRgb255)(boundedRgb);
};
exports.cieXyzToSrgb = cieXyzToSrgb;
var cieXyzToRgbInUnitInterval = function (xyz) {
    var x = xyz.x, y = xyz.y, z = xyz.z;
    var red = x * xyzToRgbRedX + y * xyzToRgbRedY + z * xyzToRgbRedZ;
    var green = x * xyzToRgbGreenX + y * xyzToRgbGreenY + z * xyzToRgbGreenZ;
    var blue = x * xyzToRgbBlueX + y * xyzToRgbBlueY + z * xyzToRgbBlueZ;
    var gammaCompressed = gammaCompressedRgb({ red: red, green: green, blue: blue });
    return clearTooSmallValues(gammaCompressed);
};
var ensureRgbWithinUnitScale = function (rgb) {
    var red = rgb.red, green = rgb.green, blue = rgb.blue;
    return {
        red: (0, utils_1.ensureWithinUnitInterval)(red),
        green: (0, utils_1.ensureWithinUnitInterval)(green),
        blue: (0, utils_1.ensureWithinUnitInterval)(blue)
    };
};
var gammaCompressedRgb = function (linearRgb) {
    var red = linearRgb.red, green = linearRgb.green, blue = linearRgb.blue;
    return {
        red: gammaCompress(red),
        green: gammaCompress(green),
        blue: gammaCompress(blue)
    };
};
var clearTooSmallValues = function (rgb) {
    var red = rgb.red, green = rgb.green, blue = rgb.blue;
    return {
        red: (0, utils_1.roundTo0Or1IfCloseEnough)(red, 0.0000005),
        green: (0, utils_1.roundTo0Or1IfCloseEnough)(green, 0.0000005),
        blue: (0, utils_1.roundTo0Or1IfCloseEnough)(blue, 0.0000005)
    };
};
var gammaCompress = function (value) {
    return value <= 0.0031308 ? value * 12.92 : 1.055 * Math.pow(value, 1 / 2.4) - 0.055;
};
var isXyzWithinSrgb = function (xyz) {
    var _a = cieXyzToRgbInUnitInterval(xyz), red = _a.red, green = _a.green, blue = _a.blue;
    return red >= 0 && red <= 1 && green >= 0 && green <= 1 && blue >= 0 && blue <= 1;
};
exports.isXyzWithinSrgb = isXyzWithinSrgb;
var xyzToRgbRedX = 3.2404542;
var xyzToRgbRedY = -1.5371385;
var xyzToRgbRedZ = -0.4985314;
var xyzToRgbGreenX = -0.969266;
var xyzToRgbGreenY = 1.8760108;
var xyzToRgbGreenZ = 0.041556;
var xyzToRgbBlueX = 0.0556434;
var xyzToRgbBlueY = -0.2040259;
var xyzToRgbBlueZ = 1.0572252;
exports.whitePoint = (0, exports.rgbToCieXyz)({ red: 255, blue: 255, green: 255 });

}(xyz$1));

const xyz = /*@__PURE__*/getDefaultExportFromCjs(xyz$1);

var stringToHsl$1 = {};

var stringToNumber$1 = {};

(function (exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hueDegreesFromString = exports.numberFromScaledPercentage = exports.numberFromScaledPercentageOrScale = exports.numberFromPercentage = exports.numberFromPercentageOrUnitInterval = exports.cssStringToNumber = exports.shortHexToDecimal = exports.hexPairToDecimal = void 0;
var stringFormatValidators_1 = stringFormatValidators$1;
var utils_1 = utils$2;
var hexPairToDecimal = function (value) { return parseInt(value, 16); };
exports.hexPairToDecimal = hexPairToDecimal;
var shortHexToDecimal = function (value) { return (0, exports.hexPairToDecimal)(value + value); };
exports.shortHexToDecimal = shortHexToDecimal;
var cssStringToNumber = function (value, options) {
    if (options === void 0) { options = {}; }
    if (value === '' || value.toLowerCase() === 'none')
        return 0;
    var _a = options.percentageScale, percentageScale = _a === void 0 ? 1 : _a, _b = options.max, max = _b === void 0 ? Infinity : _b, _c = options.min, min = _c === void 0 ? -Infinity : _c;
    var num = (0, exports.numberFromScaledPercentageOrScale)(value, percentageScale);
    return Math.max(min, Math.min(max, num));
};
exports.cssStringToNumber = cssStringToNumber;
var numberFromPercentageOrUnitInterval = function (value) {
    return (0, stringFormatValidators_1.isValidUnitIntervalValue)(value) ? parseFloat(value) : (0, exports.numberFromPercentage)(value);
};
exports.numberFromPercentageOrUnitInterval = numberFromPercentageOrUnitInterval;
var numberFromPercentage = function (value) {
    var percentage = percentageRegex.exec(value)[0];
    return parseFloat(percentage) / 100;
};
exports.numberFromPercentage = numberFromPercentage;
/** When 100% corresponds to another number than 1 for some reason */
var numberFromScaledPercentageOrScale = function (value, scale) {
    return value.endsWith('%') ? (0, exports.numberFromScaledPercentage)(value, scale) : parseFloat(value);
};
exports.numberFromScaledPercentageOrScale = numberFromScaledPercentageOrScale;
var numberFromScaledPercentage = function (value, scale) {
    var percentage = percentageRegex.exec(value)[0];
    return (parseFloat(percentage) / 100) * scale;
};
exports.numberFromScaledPercentage = numberFromScaledPercentage;
var percentageRegex = /-?\d*\.?\d*(?=%)/;
var hueDegreesFromString = function (value) {
    if (!hueRegex.test(value) || value === 'none')
        return 0;
    var scales = {
        deg: 1,
        turn: 360,
        grad: 0.9,
        rad: 180 / Math.PI
    };
    for (var unit in scales) {
        if (value.endsWith(unit)) {
            var numberString = value.replace(unit, '');
            var number = parseFloatOr0(numberString) * scales[unit];
            return (0, utils_1.modulo)(number, 360);
        }
    }
    return (0, utils_1.modulo)(parseFloatOr0(value), 360);
};
exports.hueDegreesFromString = hueDegreesFromString;
var hueRegex = /^(-?\d*\.?\d*(|deg|turn|grad|rad))|none$/i;
var parseFloatOr0 = function (value) {
    var parsed = parseFloat(value);
    return isNaN(parsed) ? 0 : parsed;
};

}(stringToNumber$1));

const stringToNumber = /*@__PURE__*/getDefaultExportFromCjs(stringToNumber$1);

var stringToRgb$1 = {};

(function (exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortHexWithoutHashToRgba = exports.shortHexWithHashToRgba = exports.shortHexWithoutHashToRgb = exports.shortHexWithHashToRgb = exports.hexWithoutHashToRgba = exports.hexWithHashToRgba = exports.hexWithoutHashToRgb = exports.hexWithHashToRgb = exports.rgba255StringToRgba = exports.rgb255StringToRgb = void 0;
var colourFormatRegex_1 = colourFormatRegex;
var string_to_number_1 = stringToNumber$1;
var rgb255StringToRgb = function (value) {
    var regex = colourFormatRegex_1.colourFormatRegex.rgbDecimal;
    var _a = regex.exec(value).groups, red = _a.red, green = _a.green, blue = _a.blue;
    return {
        red: parseFloat(red),
        green: parseFloat(green),
        blue: parseFloat(blue)
    };
};
exports.rgb255StringToRgb = rgb255StringToRgb;
var rgba255StringToRgba = function (value) {
    var regex = colourFormatRegex_1.colourFormatRegex.rgbaDecimal;
    var _a = regex.exec(value).groups, red = _a.red, green = _a.green, blue = _a.blue, alpha = _a.alpha;
    return {
        red: parseFloat(red),
        green: parseFloat(green),
        blue: parseFloat(blue),
        alpha: (0, string_to_number_1.numberFromPercentageOrUnitInterval)(alpha)
    };
};
exports.rgba255StringToRgba = rgba255StringToRgba;
var hexWithHashToRgb = function (value) { return (0, exports.hexWithoutHashToRgb)(value.substring(1)); };
exports.hexWithHashToRgb = hexWithHashToRgb;
var hexWithoutHashToRgb = function (value) {
    var red = (0, string_to_number_1.hexPairToDecimal)(value.substring(0, 2));
    var green = (0, string_to_number_1.hexPairToDecimal)(value.substring(2, 4));
    var blue = (0, string_to_number_1.hexPairToDecimal)(value.substring(4, 6));
    return { red: red, green: green, blue: blue };
};
exports.hexWithoutHashToRgb = hexWithoutHashToRgb;
var hexWithHashToRgba = function (value) { return (0, exports.hexWithoutHashToRgba)(value.substring(1)); };
exports.hexWithHashToRgba = hexWithHashToRgba;
var hexWithoutHashToRgba = function (value) {
    var _a = (0, exports.hexWithoutHashToRgb)(value), red = _a.red, green = _a.green, blue = _a.blue;
    var alpha = (0, string_to_number_1.hexPairToDecimal)(value.substring(6, 8)) / 255;
    return { red: red, green: green, blue: blue, alpha: alpha };
};
exports.hexWithoutHashToRgba = hexWithoutHashToRgba;
var shortHexWithHashToRgb = function (value) { return (0, exports.shortHexWithoutHashToRgb)(value.substring(1)); };
exports.shortHexWithHashToRgb = shortHexWithHashToRgb;
var shortHexWithoutHashToRgb = function (value) {
    var red = (0, string_to_number_1.shortHexToDecimal)(value.substring(0, 1));
    var green = (0, string_to_number_1.shortHexToDecimal)(value.substring(1, 2));
    var blue = (0, string_to_number_1.shortHexToDecimal)(value.substring(2, 3));
    return { red: red, green: green, blue: blue };
};
exports.shortHexWithoutHashToRgb = shortHexWithoutHashToRgb;
var shortHexWithHashToRgba = function (value) { return (0, exports.shortHexWithoutHashToRgba)(value.substring(1)); };
exports.shortHexWithHashToRgba = shortHexWithHashToRgba;
var shortHexWithoutHashToRgba = function (value) {
    var _a = (0, exports.shortHexWithoutHashToRgb)(value), red = _a.red, green = _a.green, blue = _a.blue;
    var alpha = (0, string_to_number_1.shortHexToDecimal)(value.substring(3, 4)) / 255;
    return { red: red, green: green, blue: blue, alpha: alpha };
};
exports.shortHexWithoutHashToRgba = shortHexWithoutHashToRgba;

}(stringToRgb$1));

const stringToRgb = /*@__PURE__*/getDefaultExportFromCjs(stringToRgb$1);

var lab$1 = {};

(function (exports) {
"use strict";
var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (commonjsGlobal && commonjsGlobal.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLabWithinSrgb = exports.relativeLuminanceFromLab = exports.labaToHsla = exports.hslaToLaba = exports.labToHsl = exports.hslToLab = void 0;
var xyz_1 = xyz$1;
var hslToLab = function (hsl) {
    var _a = (0, xyz_1.hslToCieXyz)(hsl), x = _a.x, y = _a.y, z = _a.z;
    return xyzToLab({ x: x, y: y, z: z });
};
exports.hslToLab = hslToLab;
var xyzToLab = function (_a) {
    var x = _a.x, y = _a.y, z = _a.z;
    var xr = x / xyz_1.whitePoint.x;
    var yr = y / xyz_1.whitePoint.y;
    var zr = z / xyz_1.whitePoint.z;
    var L = 116 * f(yr) - 16;
    var a = 500 * (f(xr) - f(yr));
    var b = 200 * (f(yr) - f(zr));
    return { L: L, a: a, b: b };
};
var f = function (t) {
    return t > epsilon ? Math.cbrt(t) : ((kappa * t + 16) / 116);
};
var epsilon = 0.008856;
var kappa = 903.3;
var labToHsl = function (lab) {
    var _a = labToXyz(lab), x = _a.x, y = _a.y, z = _a.z;
    return (0, xyz_1.cieXyzToHsl)({ x: x, y: y, z: z });
};
exports.labToHsl = labToHsl;
var labToXyz = function (lab) {
    var x = xr(lab) * xyz_1.whitePoint.x;
    var y = yr(lab) * xyz_1.whitePoint.y;
    var z = zr(lab) * xyz_1.whitePoint.z;
    return { x: x, y: y, z: z };
};
var xr = function (lab) {
    var fxResult = fx(lab);
    var fx3 = Math.pow(fxResult, 3);
    return fx3 > epsilon
        ? fx3
        : ((116 * fxResult - 16) / kappa);
};
var yr = function (lab) { return lab.L > kappa * epsilon
    ? Math.pow(((lab.L + 16) / 116), 3)
    : lab.L / kappa; };
var zr = function (lab) {
    var fzResult = fz(lab);
    var fz3 = Math.pow(fzResult, 3);
    return fz3 > epsilon
        ? fz3
        : ((116 * fzResult - 16) / kappa);
};
var fx = function (lab) { return lab.a / 500 + fy(lab); };
var fy = function (_a) {
    var L = _a.L;
    return (L + 16) / 116;
};
var fz = function (lab) { return fy(lab) - lab.b / 200; };
var hslaToLaba = function (hsla) {
    var alpha = hsla.alpha, hsl = __rest(hsla, ["alpha"]);
    var lab = (0, exports.hslToLab)(hsl);
    return __assign(__assign({}, lab), { alpha: alpha });
};
exports.hslaToLaba = hslaToLaba;
var labaToHsla = function (laba) {
    var alpha = laba.alpha, lab = __rest(laba, ["alpha"]);
    var hsl = (0, exports.labToHsl)(lab);
    return __assign(__assign({}, hsl), { alpha: alpha });
};
exports.labaToHsla = labaToHsla;
var relativeLuminanceFromLab = function (lab) {
    var y = labToXyz(lab).y;
    return y;
};
exports.relativeLuminanceFromLab = relativeLuminanceFromLab;
var isLabWithinSrgb = function (lab) {
    var xyz = labToXyz(lab);
    return (0, xyz_1.isXyzWithinSrgb)(xyz);
};
exports.isLabWithinSrgb = isLabWithinSrgb;

}(lab$1));

const lab = /*@__PURE__*/getDefaultExportFromCjs(lab$1);

var lch$1 = {};

var cartesianToPolar$1 = {};

(function (exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartesianToPolarInDegrees = exports.cartesianToPolar = void 0;
var utils_1 = utils$2;
var cartesianToPolar = function (_a) {
    var x = _a.x, y = _a.y;
    return ({
        radius: Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)),
        angle: (0, utils_1.modulo)(Math.atan2(y, x), 2 * Math.PI)
    });
};
exports.cartesianToPolar = cartesianToPolar;
var cartesianToPolarInDegrees = function (_a) {
    var x = _a.x, y = _a.y;
    var _b = (0, exports.cartesianToPolar)({ x: x, y: y }), radius = _b.radius, angle = _b.angle;
    return { radius: radius, angle: angle * (180 / Math.PI) };
};
exports.cartesianToPolarInDegrees = cartesianToPolarInDegrees;

}(cartesianToPolar$1));

const cartesianToPolar = /*@__PURE__*/getDefaultExportFromCjs(cartesianToPolar$1);

var polarToCartesian$1 = {};

"use strict";
Object.defineProperty(polarToCartesian$1, "__esModule", { value: true });
var polarInDegreesToCartesian_1 = polarToCartesian$1.polarInDegreesToCartesian = polarToCartesian_2 = polarToCartesian$1.polarToCartesian = void 0;
var polarToCartesian = function (_a) {
    var radius = _a.radius, angle = _a.angle;
    return ({
        x: radius * Math.cos(angle),
        y: radius * Math.sin(angle)
    });
};
var polarToCartesian_2 = polarToCartesian$1.polarToCartesian = polarToCartesian;
var polarInDegreesToCartesian = function (_a) {
    var radius = _a.radius, angle = _a.angle;
    return ({
        x: radius * Math.cos(angle * (Math.PI / 180)),
        y: radius * Math.sin(angle * (Math.PI / 180))
    });
};
polarInDegreesToCartesian_1 = polarToCartesian$1.polarInDegreesToCartesian = polarInDegreesToCartesian;

var constants = {};

"use strict";
Object.defineProperty(constants, "__esModule", { value: true });
var CHROMA_REDUCTION_ALGORITHM_PRECISION = constants.CHROMA_REDUCTION_ALGORITHM_PRECISION = RELATIVE_LUMINANCE_ALGORITHM_PRECISION = constants.RELATIVE_LUMINANCE_ALGORITHM_PRECISION = void 0;
var RELATIVE_LUMINANCE_ALGORITHM_PRECISION = constants.RELATIVE_LUMINANCE_ALGORITHM_PRECISION = 0.000001;
CHROMA_REDUCTION_ALGORITHM_PRECISION = constants.CHROMA_REDUCTION_ALGORITHM_PRECISION = 0.000001;

(function (exports) {
"use strict";
var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (commonjsGlobal && commonjsGlobal.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLchWithinSrgb = exports.clampLchChromaWithinSrgb = exports.relativeLuminanceFromLch = exports.adjustLchLightnessForRelativeLuminance = exports.lchaToHsla = exports.hslaToLcha = exports.lchToHsl = exports.hslToLch = void 0;
var lab_1 = lab$1;
var cartesianToPolar_1 = cartesianToPolar$1;
var polarToCartesian_1 = polarToCartesian$1;
var constants_1 = constants;
var utils_1 = utils$2;
var hslToLch = function (hsl) {
    var lab = (0, lab_1.hslToLab)(hsl);
    return labToLch(lab);
};
exports.hslToLch = hslToLch;
var labToLch = function (lab) {
    var L = lab.L, a = lab.a, b = lab.b;
    var _a = (0, cartesianToPolar_1.cartesianToPolarInDegrees)({ x: a, y: b }), hue = _a.angle, chroma = _a.radius;
    return { L: L, chroma: chroma, hue: hue };
};
var lchToHsl = function (lch) {
    var lab = lchToLab(lch);
    return (0, lab_1.labToHsl)(lab);
};
exports.lchToHsl = lchToHsl;
var lchToLab = function (_a) {
    var L = _a.L, chroma = _a.chroma, hue = _a.hue;
    var _b = (0, polarToCartesian_1.polarInDegreesToCartesian)({ radius: chroma, angle: hue }), a = _b.x, b = _b.y;
    return { L: L, a: a, b: b };
};
var hslaToLcha = function (hsla) {
    var alpha = hsla.alpha, hsl = __rest(hsla, ["alpha"]);
    var lch = (0, exports.hslToLch)(hsl);
    return __assign(__assign({}, lch), { alpha: alpha });
};
exports.hslaToLcha = hslaToLcha;
var lchaToHsla = function (lcha) {
    var alpha = lcha.alpha, lch = __rest(lcha, ["alpha"]);
    var hsl = (0, exports.lchToHsl)(lch);
    return __assign(__assign({}, hsl), { alpha: alpha });
};
exports.lchaToHsla = lchaToHsla;
var adjustLchLightnessForRelativeLuminance = function (lch, luminance) {
    var chroma = lch.chroma, hue = lch.hue;
    var lumFunc = function (L) {
        lch = (0, exports.clampLchChromaWithinSrgb)({ L: L, chroma: chroma, hue: hue });
        return (0, exports.relativeLuminanceFromLch)(lch);
    };
    (0, utils_1.findInputToAlwaysIncreasingFunc)(lumFunc, luminance, constants_1.RELATIVE_LUMINANCE_ALGORITHM_PRECISION, {
        start: -50,
        end: 150
    });
    return lch;
};
exports.adjustLchLightnessForRelativeLuminance = adjustLchLightnessForRelativeLuminance;
var relativeLuminanceFromLch = function (lch) {
    var lab = lchToLab(lch);
    return (0, lab_1.relativeLuminanceFromLab)(lab);
};
exports.relativeLuminanceFromLch = relativeLuminanceFromLch;
/**
 * Reduces the chroma of the given colour if it is outside the SRGB gamut, returning the closest colour within the gamut without changing the hue nor the lightness.
 */
var clampLchChromaWithinSrgb = function (lch) {
    if (lch.L === 0)
        return __assign(__assign({}, lch), { chroma: 0 });
    if (lch.L === 100)
        return __assign(__assign({}, lch), { chroma: 0 });
    var chromaFunc = function (chroma) { return (0, exports.isLchWithinSrgb)(__assign(__assign({}, lch), { chroma: chroma })); };
    if (chromaFunc(lch.chroma))
        return lch;
    var low = 0;
    var high = lch.chroma;
    var middle = (low + high) / 2;
    while (high - low > constants_1.CHROMA_REDUCTION_ALGORITHM_PRECISION) {
        if (chromaFunc(middle))
            low = middle;
        else
            high = middle;
        middle = (low + high) / 2;
    }
    return __assign(__assign({}, lch), { chroma: middle });
};
exports.clampLchChromaWithinSrgb = clampLchChromaWithinSrgb;
var isLchWithinSrgb = function (lch) {
    var lab = lchToLab(lch);
    return (0, lab_1.isLabWithinSrgb)(lab);
};
exports.isLchWithinSrgb = isLchWithinSrgb;

}(lch$1));

const lch = /*@__PURE__*/getDefaultExportFromCjs(lch$1);

var oklab$1 = {};

(function (exports) {
"use strict";
var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (commonjsGlobal && commonjsGlobal.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOklabWithinSrgb = exports.relativeLuminanceFromOklab = exports.oklabaToHsla = exports.oklabToHsl = exports.hslaToOklaba = exports.hslToOklab = void 0;
var xyz_1 = xyz$1;
var hslToOklab = function (hsl) {
    var xyz = (0, xyz_1.hslToCieXyz)(hsl);
    return xyzToOklab(xyz);
};
exports.hslToOklab = hslToOklab;
var xyzToOklab = function (_a) {
    var x = _a.x, y = _a.y, z = _a.z;
    var L = 0.8189330101 * x + 0.3618667424 * y - 0.1288597137 * z;
    var M = 0.0329845436 * x + 0.9293118715 * y + 0.0361456387 * z;
    var S = 0.0482003018 * x + 0.2643662691 * y + 0.6338517070 * z;
    var L_ = Math.cbrt(L);
    var M_ = Math.cbrt(M);
    var S_ = Math.cbrt(S);
    var l = 0.2104542553 * L_ + 0.7936177850 * M_ - 0.0040720468 * S_;
    var a = 1.9779984951 * L_ - 2.4285922050 * M_ + 0.4505937099 * S_;
    var b = 0.0259040371 * L_ + 0.7827717662 * M_ - 0.8086757660 * S_;
    return { l: l, a: a, b: b };
};
var hslaToOklaba = function (hsla) {
    var alpha = hsla.alpha, hsl = __rest(hsla, ["alpha"]);
    var oklab = (0, exports.hslToOklab)(hsl);
    return __assign(__assign({}, oklab), { alpha: alpha });
};
exports.hslaToOklaba = hslaToOklaba;
var oklabToHsl = function (oklab) {
    var xyz = oklabToXyz(oklab);
    return (0, xyz_1.cieXyzToHsl)(xyz);
};
exports.oklabToHsl = oklabToHsl;
var oklabToXyz = function (_a) {
    var l = _a.l, a = _a.a, b = _a.b;
    var L_ = l + 0.3963377774 * a + 0.2158037573 * b;
    var M_ = l - 0.1055613458 * a - 0.0638541728 * b;
    var S_ = l - 0.0894841775 * a - 1.2914855480 * b;
    var L = Math.pow(L_, 3);
    var M = Math.pow(M_, 3);
    var S = Math.pow(S_, 3);
    var x = 1.2270138511 * L - 0.5577999807 * M + 0.2812561490 * S;
    var y = -0.0405801784 * L + 1.1122568696 * M - 0.0716766787 * S;
    var z = -0.0763812845 * L - 0.4214819784 * M + 1.5861632204 * S;
    return { x: x, y: y, z: z };
};
var oklabaToHsla = function (oklaba) {
    var alpha = oklaba.alpha, oklab = __rest(oklaba, ["alpha"]);
    var hsl = (0, exports.oklabToHsl)(oklab);
    return __assign(__assign({}, hsl), { alpha: alpha });
};
exports.oklabaToHsla = oklabaToHsla;
var relativeLuminanceFromOklab = function (oklab) {
    var y = oklabToXyz(oklab).y;
    return y;
};
exports.relativeLuminanceFromOklab = relativeLuminanceFromOklab;
var isOklabWithinSrgb = function (oklab) {
    var xyz = oklabToXyz(oklab);
    return (0, xyz_1.isXyzWithinSrgb)(xyz);
};
exports.isOklabWithinSrgb = isOklabWithinSrgb;

}(oklab$1));

const oklab = /*@__PURE__*/getDefaultExportFromCjs(oklab$1);

var oklch$1 = {};

(function (exports) {
"use strict";
var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (commonjsGlobal && commonjsGlobal.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOklchWithinSrgb = exports.clampOklchChromaWithinSrgb = exports.relativeLuminanceFromOklch = exports.adjustOklchLightnessForRelativeLuminance = exports.oklchaToHsla = exports.oklchToHsl = exports.hslaToOklcha = exports.hslToOklch = void 0;
var cartesianToPolar_1 = cartesianToPolar$1;
var oklab_1 = oklab$1;
var polarToCartesian_1 = polarToCartesian$1;
var constants_1 = constants;
var utils_1 = utils$2;
var hslToOklch = function (hsl) {
    var oklab = (0, oklab_1.hslToOklab)(hsl);
    return oklabToOklch(oklab);
};
exports.hslToOklch = hslToOklch;
var oklabToOklch = function (_a) {
    var l = _a.l, a = _a.a, b = _a.b;
    var _b = (0, cartesianToPolar_1.cartesianToPolarInDegrees)({ x: a, y: b }), hue = _b.angle, chroma = _b.radius;
    return { l: l, chroma: chroma, hue: hue };
};
var hslaToOklcha = function (hsla) {
    var alpha = hsla.alpha, hsl = __rest(hsla, ["alpha"]);
    var oklch = (0, exports.hslToOklch)(hsl);
    return __assign(__assign({}, oklch), { alpha: alpha });
};
exports.hslaToOklcha = hslaToOklcha;
var oklchToHsl = function (oklch) {
    var oklab = oklchToOklab(oklch);
    return (0, oklab_1.oklabToHsl)(oklab);
};
exports.oklchToHsl = oklchToHsl;
var oklchToOklab = function (_a) {
    var l = _a.l, chroma = _a.chroma, hue = _a.hue;
    var _b = (0, polarToCartesian_1.polarInDegreesToCartesian)({ radius: chroma, angle: hue }), a = _b.x, b = _b.y;
    return { l: l, a: a, b: b };
};
var oklchaToHsla = function (oklcha) {
    var alpha = oklcha.alpha, oklch = __rest(oklcha, ["alpha"]);
    var hsl = (0, exports.oklchToHsl)(oklch);
    return __assign(__assign({}, hsl), { alpha: alpha });
};
exports.oklchaToHsla = oklchaToHsla;
var adjustOklchLightnessForRelativeLuminance = function (oklch, luminance) {
    var chroma = oklch.chroma, hue = oklch.hue;
    var lumFunc = function (l) {
        oklch = (0, exports.clampOklchChromaWithinSrgb)({ l: l, chroma: chroma, hue: hue });
        return (0, exports.relativeLuminanceFromOklch)(oklch);
    };
    (0, utils_1.findInputToAlwaysIncreasingFunc)(lumFunc, luminance, constants_1.RELATIVE_LUMINANCE_ALGORITHM_PRECISION, { start: -0.5, end: 1.5 });
    return oklch;
};
exports.adjustOklchLightnessForRelativeLuminance = adjustOklchLightnessForRelativeLuminance;
var relativeLuminanceFromOklch = function (oklch) {
    var oklab = oklchToOklab(oklch);
    return (0, oklab_1.relativeLuminanceFromOklab)(oklab);
};
exports.relativeLuminanceFromOklch = relativeLuminanceFromOklch;
/**
 * Reduces the chroma of the given colour if it is outside the SRGB gamut, returning the closest colour within the gamut without changing the hue nor the lightness.
 */
var clampOklchChromaWithinSrgb = function (oklch) {
    var chromaFunc = function (chroma) { return (0, exports.isOklchWithinSrgb)(__assign(__assign({}, oklch), { chroma: chroma })); };
    if (chromaFunc(oklch.chroma)) {
        return oklch;
    }
    var low = 0;
    var high = oklch.chroma;
    var middle = (low + high) / 2;
    while (high - low > constants_1.CHROMA_REDUCTION_ALGORITHM_PRECISION) {
        if (chromaFunc(middle))
            low = middle;
        else
            high = middle;
        middle = (low + high) / 2;
    }
    return __assign(__assign({}, oklch), { chroma: middle });
};
exports.clampOklchChromaWithinSrgb = clampOklchChromaWithinSrgb;
var isOklchWithinSrgb = function (oklch) {
    var oklab = oklchToOklab(oklch);
    return (0, oklab_1.isOklabWithinSrgb)(oklab);
};
exports.isOklchWithinSrgb = isOklchWithinSrgb;

}(oklch$1));

const oklch = /*@__PURE__*/getDefaultExportFromCjs(oklch$1);

(function (exports) {
"use strict";
var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (commonjsGlobal && commonjsGlobal.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortHexWithHashToHsla = exports.shortHexWithoutHashToHsla = exports.shortHexWithHashToHsl = exports.shortHexWithoutHashToHsl = exports.hexWithHashToHsla = exports.hexWithoutHashToHsla = exports.hexWithHashToHsl = exports.hexWithoutHashToHsl = exports.rgba255StringToHsla = exports.rgb255StringToHsl = exports.oklchStringToOklcha = exports.oklchStringToHsla = exports.oklabStringToOklaba = exports.oklabStringToHsla = exports.lchStringToLcha = exports.lchStringToHsla = exports.labStringToLaba = exports.labStringToHsla = exports.hslaStringToHsla = exports.hslStringToHsl = void 0;
var colourFormatRegex_1 = colourFormatRegex;
var string_to_number_1 = stringToNumber$1;
var rgb_1 = rgb$1;
var string_to_rgb_1 = stringToRgb$1;
var lab_1 = lab$1;
var lch_1 = lch$1;
var oklab_1 = oklab$1;
var oklch_1 = oklch$1;
var hslStringToHsl = function (value) {
    var regex = colourFormatRegex_1.colourFormatRegex.hsl;
    var _a = regex.exec(value).groups, hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness;
    return {
        hue: (0, string_to_number_1.hueDegreesFromString)(hue),
        saturation: (0, string_to_number_1.cssStringToNumber)(saturation, { min: 0, max: 1 }),
        lightness: (0, string_to_number_1.cssStringToNumber)(lightness, { min: 0, max: 1 })
    };
};
exports.hslStringToHsl = hslStringToHsl;
var hslaStringToHsla = function (value) {
    var regex = colourFormatRegex_1.colourFormatRegex.hsla;
    var _a = regex.exec(value).groups, hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness, alpha = _a.alpha;
    return {
        hue: (0, string_to_number_1.hueDegreesFromString)(hue),
        saturation: (0, string_to_number_1.cssStringToNumber)(saturation, { min: 0, max: 1 }),
        lightness: (0, string_to_number_1.cssStringToNumber)(lightness, { min: 0, max: 1 }),
        alpha: (0, string_to_number_1.cssStringToNumber)(alpha, { min: 0, max: 1 })
    };
};
exports.hslaStringToHsla = hslaStringToHsla;
var labStringToHsla = function (value) {
    return (0, lab_1.labaToHsla)((0, exports.labStringToLaba)(value));
};
exports.labStringToHsla = labStringToHsla;
var labStringToLaba = function (value) {
    var regex = colourFormatRegex_1.colourFormatRegex.lab;
    var _a = regex.exec(value).groups, L = _a.L, a = _a.a, b = _a.b, alpha = _a.alpha;
    var LNumber = (0, string_to_number_1.cssStringToNumber)(L, { percentageScale: 100, min: 0, max: 100 });
    var aNumber = (0, string_to_number_1.cssStringToNumber)(a, { percentageScale: 125 });
    var bNumber = (0, string_to_number_1.cssStringToNumber)(b, { percentageScale: 125 });
    var alphaNumber = alpha === undefined ? 1 : (0, string_to_number_1.cssStringToNumber)(alpha);
    return { L: LNumber, a: aNumber, b: bNumber, alpha: alphaNumber };
};
exports.labStringToLaba = labStringToLaba;
var lchStringToHsla = function (value) {
    return (0, lch_1.lchaToHsla)((0, exports.lchStringToLcha)(value));
};
exports.lchStringToHsla = lchStringToHsla;
var lchStringToLcha = function (value) {
    var regex = colourFormatRegex_1.colourFormatRegex.lch;
    var _a = regex.exec(value).groups, L = _a.L, chroma = _a.chroma, hue = _a.hue, alpha = _a.alpha;
    return {
        L: (0, string_to_number_1.cssStringToNumber)(L, { percentageScale: 100, min: 0, max: 100 }),
        chroma: (0, string_to_number_1.cssStringToNumber)(chroma, { percentageScale: 150, min: 0 }),
        hue: (0, string_to_number_1.hueDegreesFromString)(hue),
        alpha: alpha === undefined ? 1 : (0, string_to_number_1.cssStringToNumber)(alpha)
    };
};
exports.lchStringToLcha = lchStringToLcha;
var oklabStringToHsla = function (value) {
    return (0, oklab_1.oklabaToHsla)((0, exports.oklabStringToOklaba)(value));
};
exports.oklabStringToHsla = oklabStringToHsla;
var oklabStringToOklaba = function (value) {
    var regex = colourFormatRegex_1.colourFormatRegex.oklab;
    var _a = regex.exec(value).groups, l = _a.l, a = _a.a, b = _a.b, alpha = _a.alpha;
    return {
        l: (0, string_to_number_1.cssStringToNumber)(l, { min: 0, max: 1 }),
        a: (0, string_to_number_1.cssStringToNumber)(a, { percentageScale: 0.4 }),
        b: (0, string_to_number_1.cssStringToNumber)(b, { percentageScale: 0.4 }),
        alpha: alpha === undefined ? 1 : (0, string_to_number_1.cssStringToNumber)(alpha, { min: 0, max: 1 })
    };
};
exports.oklabStringToOklaba = oklabStringToOklaba;
var oklchStringToHsla = function (value) {
    return (0, oklch_1.oklchaToHsla)((0, exports.oklchStringToOklcha)(value));
};
exports.oklchStringToHsla = oklchStringToHsla;
var oklchStringToOklcha = function (value) {
    var regex = colourFormatRegex_1.colourFormatRegex.oklch;
    var _a = regex.exec(value).groups, l = _a.l, chroma = _a.chroma, hue = _a.hue, alpha = _a.alpha;
    return {
        l: (0, string_to_number_1.cssStringToNumber)(l, { min: 0, max: 1 }),
        chroma: (0, string_to_number_1.cssStringToNumber)(chroma, { min: 0, percentageScale: 0.4 }),
        hue: (0, string_to_number_1.hueDegreesFromString)(hue),
        alpha: alpha === undefined ? 1 : (0, string_to_number_1.cssStringToNumber)(alpha, { min: 0, max: 1 })
    };
};
exports.oklchStringToOklcha = oklchStringToOklcha;
var rgb255StringToHsl = function (value) {
    return (0, rgb_1.rgbToHsl)((0, string_to_rgb_1.rgb255StringToRgb)(value));
};
exports.rgb255StringToHsl = rgb255StringToHsl;
var rgba255StringToHsla = function (value) {
    var _a = (0, string_to_rgb_1.rgba255StringToRgba)(value), alpha = _a.alpha, rgb = __rest(_a, ["alpha"]);
    var hsl = (0, rgb_1.rgbToHsl)(rgb);
    return __assign(__assign({}, hsl), { alpha: alpha });
};
exports.rgba255StringToHsla = rgba255StringToHsla;
var hexWithoutHashToHsl = function (value) { return (0, rgb_1.rgbToHsl)((0, string_to_rgb_1.hexWithoutHashToRgb)(value)); };
exports.hexWithoutHashToHsl = hexWithoutHashToHsl;
var hexWithHashToHsl = function (value) { return (0, rgb_1.rgbToHsl)((0, string_to_rgb_1.hexWithHashToRgb)(value)); };
exports.hexWithHashToHsl = hexWithHashToHsl;
var hexWithoutHashToHsla = function (value) { return (0, rgb_1.rgbaToHsla)((0, string_to_rgb_1.hexWithoutHashToRgba)(value)); };
exports.hexWithoutHashToHsla = hexWithoutHashToHsla;
var hexWithHashToHsla = function (value) { return (0, rgb_1.rgbaToHsla)((0, string_to_rgb_1.hexWithHashToRgba)(value)); };
exports.hexWithHashToHsla = hexWithHashToHsla;
var shortHexWithoutHashToHsl = function (value) { return (0, rgb_1.rgbToHsl)((0, string_to_rgb_1.shortHexWithoutHashToRgb)(value)); };
exports.shortHexWithoutHashToHsl = shortHexWithoutHashToHsl;
var shortHexWithHashToHsl = function (value) { return (0, rgb_1.rgbToHsl)((0, string_to_rgb_1.shortHexWithHashToRgb)(value)); };
exports.shortHexWithHashToHsl = shortHexWithHashToHsl;
var shortHexWithoutHashToHsla = function (value) { return (0, rgb_1.rgbaToHsla)((0, string_to_rgb_1.shortHexWithoutHashToRgba)(value)); };
exports.shortHexWithoutHashToHsla = shortHexWithoutHashToHsla;
var shortHexWithHashToHsla = function (value) { return (0, rgb_1.rgbaToHsla)((0, string_to_rgb_1.shortHexWithHashToRgba)(value)); };
exports.shortHexWithHashToHsla = shortHexWithHashToHsla;

}(stringToHsl$1));

const stringToHsl = /*@__PURE__*/getDefaultExportFromCjs(stringToHsl$1);

var objectValidators = {};

"use strict";
Object.defineProperty(objectValidators, "__esModule", { value: true });
var isOklcha_1 = objectValidators.isOklcha = isOklch_1 = objectValidators.isOklch = isOklaba_1 = objectValidators.isOklaba = isOklab_1 = objectValidators.isOklab = isLcha_1 = objectValidators.isLcha = isLch_1 = objectValidators.isLch = isLaba_1 = objectValidators.isLaba = isLab_1 = objectValidators.isLab = isXyza_1 = objectValidators.isXyza = isXyz_1 = objectValidators.isXyz = isHsva_1 = objectValidators.isHsva = isHsv_1 = objectValidators.isHsv = isHsla_1 = objectValidators.isHsla = isHsl_1 = objectValidators.isHsl = isRgba_1 = objectValidators.isRgba = isRgb_1 = objectValidators.isRgb = void 0;
var isRgb = function (value) {
    return value.red !== undefined &&
        value.green !== undefined &&
        value.blue !== undefined &&
        value.alpha === undefined;
};
var isRgb_1 = objectValidators.isRgb = isRgb;
var isRgba = function (value) {
    return value.red !== undefined &&
        value.green !== undefined &&
        value.blue !== undefined &&
        value.alpha !== undefined;
};
var isRgba_1 = objectValidators.isRgba = isRgba;
var isHsl = function (value) {
    return value.hue !== undefined &&
        value.saturation !== undefined &&
        value.lightness !== undefined &&
        value.alpha === undefined;
};
var isHsl_1 = objectValidators.isHsl = isHsl;
var isHsla = function (value) {
    return value.hue !== undefined &&
        value.saturation !== undefined &&
        value.lightness !== undefined &&
        value.alpha !== undefined;
};
var isHsla_1 = objectValidators.isHsla = isHsla;
var isHsv = function (value) {
    return value.hue !== undefined &&
        value.saturation !== undefined &&
        value.value !== undefined &&
        value.alpha === undefined;
};
var isHsv_1 = objectValidators.isHsv = isHsv;
var isHsva = function (value) {
    return value.hue !== undefined &&
        value.saturation !== undefined &&
        value.value !== undefined &&
        value.alpha !== undefined;
};
var isHsva_1 = objectValidators.isHsva = isHsva;
var isXyz = function (value) {
    return value.x !== undefined &&
        value.y !== undefined &&
        value.z !== undefined &&
        value.alpha === undefined;
};
var isXyz_1 = objectValidators.isXyz = isXyz;
var isXyza = function (value) {
    return value.x !== undefined &&
        value.y !== undefined &&
        value.z !== undefined &&
        value.alpha !== undefined;
};
var isXyza_1 = objectValidators.isXyza = isXyza;
var isLab = function (value) {
    return value.L !== undefined &&
        value.a !== undefined &&
        value.b !== undefined &&
        value.alpha === undefined;
};
var isLab_1 = objectValidators.isLab = isLab;
var isLaba = function (value) {
    return value.L !== undefined &&
        value.a !== undefined &&
        value.b !== undefined &&
        value.alpha !== undefined;
};
var isLaba_1 = objectValidators.isLaba = isLaba;
var isLch = function (value) {
    return value.L !== undefined &&
        value.chroma !== undefined &&
        value.hue !== undefined &&
        value.alpha === undefined;
};
var isLch_1 = objectValidators.isLch = isLch;
var isLcha = function (value) {
    return value.L !== undefined &&
        value.chroma !== undefined &&
        value.hue !== undefined &&
        value.alpha !== undefined;
};
var isLcha_1 = objectValidators.isLcha = isLcha;
var isOklab = function (value) {
    return value.l !== undefined &&
        value.a !== undefined &&
        value.b !== undefined &&
        value.alpha === undefined;
};
var isOklab_1 = objectValidators.isOklab = isOklab;
var isOklaba = function (value) {
    return value.l !== undefined &&
        value.a !== undefined &&
        value.b !== undefined &&
        value.alpha !== undefined;
};
var isOklaba_1 = objectValidators.isOklaba = isOklaba;
var isOklch = function (value) {
    return value.l !== undefined &&
        value.chroma !== undefined &&
        value.hue !== undefined &&
        value.alpha === undefined;
};
var isOklch_1 = objectValidators.isOklch = isOklch;
var isOklcha = function (value) {
    return value.l !== undefined &&
        value.chroma !== undefined &&
        value.hue !== undefined &&
        value.alpha !== undefined;
};
isOklcha_1 = objectValidators.isOklcha = isOklcha;

var hsv$1 = {};

(function (exports) {
"use strict";
var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (commonjsGlobal && commonjsGlobal.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hslaToHsva = exports.hslToHsv = exports.hsvaToHsla = exports.hsvToHsl = void 0;
var hsvToHsl = function (hsv) {
    var hue = hsv.hue, saturation = hsv.saturation, value = hsv.value;
    var chroma = value * saturation;
    var lightness = (2 - saturation) * value / 2;
    var saturationPrime = chroma === 0 ? 0 : chroma / (1 - Math.abs(2 * lightness - 1));
    return {
        hue: hue,
        saturation: saturationPrime,
        lightness: lightness
    };
};
exports.hsvToHsl = hsvToHsl;
var hsvaToHsla = function (hsva) {
    var alpha = hsva.alpha, hsv = __rest(hsva, ["alpha"]);
    var hsl = (0, exports.hsvToHsl)(hsv);
    return __assign(__assign({}, hsl), { alpha: alpha });
};
exports.hsvaToHsla = hsvaToHsla;
var hslToHsv = function (hsl) {
    var hue = hsl.hue, saturation = hsl.saturation, lightness = hsl.lightness;
    var chroma = (1 - Math.abs(2 * lightness - 1)) * saturation;
    var value = lightness + chroma / 2;
    var saturationPrime = value === 0 ? 0 : chroma / value;
    return {
        hue: hue,
        saturation: saturationPrime,
        value: value
    };
};
exports.hslToHsv = hslToHsv;
var hslaToHsva = function (hsla) {
    var alpha = hsla.alpha, hsl = __rest(hsla, ["alpha"]);
    var hsv = (0, exports.hslToHsv)(hsl);
    return __assign(__assign({}, hsv), { alpha: alpha });
};
exports.hslaToHsva = hslaToHsva;

}(hsv$1));

const hsv = /*@__PURE__*/getDefaultExportFromCjs(hsv$1);

"use strict";
var __assign$1 = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign$1 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
};
Object.defineProperty(colourCodeToHsla$1, "__esModule", { value: true });
var colourCodeToHsla_2 = colourCodeToHsla$1.colourCodeToHsla = void 0;
var xyz_1$1 = xyz$1;
var namedColours_1 = namedColours;
var utils_1$3 = utils$2;
var string_to_hsl_1 = stringToHsl$1;
var objectValidators_1 = objectValidators;
var rgb_1$1 = rgb$1;
var hsv_1$1 = hsv$1;
var lab_1$1 = lab$1;
var lch_1$1 = lch$1;
var oklab_1$1 = oklab$1;
var oklch_1$1 = oklch$1;
var colourCodeToHsla = function (code) {
    if (typeof code === 'string')
        return stringToHsla(code);
    if ((0, objectValidators_1.isHsla)(code))
        return code;
    if ((0, objectValidators_1.isHsl)(code))
        return __assign$1(__assign$1({}, code), { alpha: 1 });
    if ((0, objectValidators_1.isRgb)(code))
        return __assign$1(__assign$1({}, (0, rgb_1$1.rgbToHsl)(code)), { alpha: 1 });
    if ((0, objectValidators_1.isRgba)(code))
        return (0, rgb_1$1.rgbaToHsla)(code);
    if ((0, objectValidators_1.isHsv)(code))
        return __assign$1(__assign$1({}, (0, hsv_1$1.hsvToHsl)(code)), { alpha: 1 });
    if ((0, objectValidators_1.isHsva)(code))
        return (0, hsv_1$1.hsvaToHsla)(code);
    if ((0, objectValidators_1.isXyz)(code))
        return __assign$1(__assign$1({}, (0, xyz_1$1.cieXyzToHsl)(code)), { alpha: 1 });
    if ((0, objectValidators_1.isXyza)(code))
        return (0, xyz_1$1.cieXyzaToHsla)(code);
    if ((0, objectValidators_1.isLab)(code))
        return __assign$1(__assign$1({}, (0, lab_1$1.labToHsl)(code)), { alpha: 1 });
    if ((0, objectValidators_1.isLaba)(code))
        return (0, lab_1$1.labaToHsla)(code);
    if ((0, objectValidators_1.isLch)(code))
        return __assign$1(__assign$1({}, (0, lch_1$1.lchToHsl)(code)), { alpha: 1 });
    if ((0, objectValidators_1.isLcha)(code))
        return (0, lch_1$1.lchaToHsla)(code);
    if ((0, objectValidators_1.isOklab)(code))
        return __assign$1(__assign$1({}, (0, oklab_1$1.oklabToHsl)(code)), { alpha: 1 });
    if ((0, objectValidators_1.isOklaba)(code))
        return (0, oklab_1$1.oklabaToHsla)(code);
    if ((0, objectValidators_1.isOklch)(code))
        return __assign$1(__assign$1({}, (0, oklch_1$1.oklchToHsl)(code)), { alpha: 1 });
    if ((0, objectValidators_1.isOklcha)(code))
        return (0, oklch_1$1.oklchaToHsla)(code);
    throw new Error('The passed object is not a valid colour code.');
};
colourCodeToHsla_2 = colourCodeToHsla$1.colourCodeToHsla = colourCodeToHsla;
var stringToHsla = function (value) {
    var format = (0, utils_1$3.evaluateFormat)(value);
    switch (format) {
        case 'hsl':
            return __assign$1(__assign$1({}, (0, string_to_hsl_1.hslStringToHsl)(value)), { alpha: 1 });
        case 'hsla':
            return (0, string_to_hsl_1.hslaStringToHsla)(value);
        case 'lab':
            return (0, string_to_hsl_1.labStringToHsla)(value);
        case 'lch':
            return (0, string_to_hsl_1.lchStringToHsla)(value);
        case 'oklab':
            return (0, string_to_hsl_1.oklabStringToHsla)(value);
        case 'oklch':
            return (0, string_to_hsl_1.oklchStringToHsla)(value);
        case 'rgbDecimal':
            return __assign$1(__assign$1({}, (0, string_to_hsl_1.rgb255StringToHsl)(value)), { alpha: 1 });
        case 'rgbaDecimal':
            return (0, string_to_hsl_1.rgba255StringToHsla)(value);
        case 'rgbHexLongWithHash':
            return __assign$1(__assign$1({}, (0, string_to_hsl_1.hexWithHashToHsl)(value)), { alpha: 1 });
        case 'rgbHexLongWithoutHash':
            return __assign$1(__assign$1({}, (0, string_to_hsl_1.hexWithoutHashToHsl)(value)), { alpha: 1 });
        case 'rgbHexShortWithHash':
            return __assign$1(__assign$1({}, (0, string_to_hsl_1.shortHexWithHashToHsl)(value)), { alpha: 1 });
        case 'rgbHexShortWithoutHash':
            return __assign$1(__assign$1({}, (0, string_to_hsl_1.shortHexWithoutHashToHsl)(value)), { alpha: 1 });
        case 'rgbaHexLongWithHash':
            return (0, string_to_hsl_1.hexWithHashToHsla)(value);
        case 'rgbaHexLongWithoutHash':
            return (0, string_to_hsl_1.hexWithoutHashToHsla)(value);
        case 'rgbaHexShortWithHash':
            return (0, string_to_hsl_1.shortHexWithHashToHsla)(value);
        case 'rgbaHexShortWithoutHash':
            return (0, string_to_hsl_1.shortHexWithoutHashToHsla)(value);
        case 'namedColour':
            return __assign$1(__assign$1({}, (0, rgb_1$1.rgbToHsl)(namedColours_1.namedColours[value])), { alpha: 1 });
        case 'namedTransparent':
            return { hue: 0, saturation: 0, lightness: 0, alpha: 0 };
        default:
            throw new Error("Invalid colour code: ".concat(value));
    }
};

var objectToString = {};

var numberToString = {};

"use strict";
Object.defineProperty(numberToString, "__esModule", { value: true });
var numberToPercentage_1 = numberToString.numberToPercentage = decimalToHexPair_1 = numberToString.decimalToHexPair = void 0;
var utils_1$2 = utils$2;
var decimalToHexPair = function (decimal) {
    var hex = (0, utils_1$2.round)(decimal).toString(16).toUpperCase();
    return hex.length === 1 ? "0".concat(hex) : hex;
};
var decimalToHexPair_1 = numberToString.decimalToHexPair = decimalToHexPair;
var numberToPercentage = function (value) { return "".concat(value * 100, "%"); };
numberToPercentage_1 = numberToString.numberToPercentage = numberToPercentage;

"use strict";
Object.defineProperty(objectToString, "__esModule", { value: true });
var oklchaObjectToOklchString_1 = objectToString.oklchaObjectToOklchString = oklabaObjectToOklabString_1 = objectToString.oklabaObjectToOklabString = lchaObjectToLchString_1 = objectToString.lchaObjectToLchString = labaObjectToLabString_1 = objectToString.labaObjectToLabString = rgbaObjectToRgbHexString_1 = objectToString.rgbaObjectToRgbHexString = rgbaObjectToRgbDecimalString_1 = objectToString.rgbaObjectToRgbDecimalString = hslaObjectToHslString_1 = objectToString.hslaObjectToHslString = void 0;
var number_to_string_1 = numberToString;
var utils_1$1 = utils$2;
var hslaObjectToHslString = function (hsla) {
    var hue = hsla.hue, saturation = hsla.saturation, lightness = hsla.lightness, alpha = hsla.alpha;
    var hueRounded = (0, utils_1$1.round)(hue);
    var saturationRounded = (0, utils_1$1.round)(saturation, 2);
    var lightnessRounded = (0, utils_1$1.round)(lightness, 2);
    var saturationAsPercentage = (0, number_to_string_1.numberToPercentage)(saturationRounded);
    var lightnessAsPercentage = (0, number_to_string_1.numberToPercentage)(lightnessRounded);
    if (alpha === 1) {
        return "hsl(".concat(hueRounded, "deg, ").concat(saturationAsPercentage, ", ").concat(lightnessAsPercentage, ")");
    }
    else {
        var alphaRounded = (0, utils_1$1.round)(alpha, 2);
        return "hsla(".concat(hueRounded, "deg, ").concat(saturationAsPercentage, ", ").concat(lightnessAsPercentage, ", ").concat(alphaRounded, ")");
    }
};
var hslaObjectToHslString_1 = objectToString.hslaObjectToHslString = hslaObjectToHslString;
var rgbaObjectToRgbDecimalString = function (rgba) {
    var red = rgba.red, green = rgba.green, blue = rgba.blue, alpha = rgba.alpha;
    var redRounded = (0, utils_1$1.round)(red);
    var greenRounded = (0, utils_1$1.round)(green);
    var blueRounded = (0, utils_1$1.round)(blue);
    if (alpha === 1) {
        return "rgb(".concat(redRounded, ", ").concat(greenRounded, ", ").concat(blueRounded, ")");
    }
    else {
        var alphaRounded = (0, utils_1$1.round)(alpha, 2);
        return "rgba(".concat(redRounded, ", ").concat(greenRounded, ", ").concat(blueRounded, ", ").concat(alphaRounded, ")");
    }
};
var rgbaObjectToRgbDecimalString_1 = objectToString.rgbaObjectToRgbDecimalString = rgbaObjectToRgbDecimalString;
var rgbaObjectToRgbHexString = function (rgba) {
    var red = rgba.red, green = rgba.green, blue = rgba.blue, alpha = rgba.alpha;
    var redHex = (0, number_to_string_1.decimalToHexPair)(red);
    var greenHex = (0, number_to_string_1.decimalToHexPair)(green);
    var blueHex = (0, number_to_string_1.decimalToHexPair)(blue);
    var alphaHex = alpha === 1 ? '' : (0, number_to_string_1.decimalToHexPair)((0, utils_1$1.round)(alpha * 255));
    return "#".concat(redHex).concat(greenHex).concat(blueHex).concat(alphaHex);
};
var rgbaObjectToRgbHexString_1 = objectToString.rgbaObjectToRgbHexString = rgbaObjectToRgbHexString;
var labaObjectToLabString = function (laba) {
    var L = laba.L, a = laba.a, b = laba.b, alpha = laba.alpha;
    var LRounded = (0, utils_1$1.round)(L, 0);
    var aRounded = (0, utils_1$1.round)(a, 0);
    var bRounded = (0, utils_1$1.round)(b, 0);
    if (alpha === 1) {
        return "lab(".concat(LRounded, " ").concat(aRounded, " ").concat(bRounded, ")");
    }
    else {
        var alphaRounded = (0, utils_1$1.round)(alpha, 2);
        return "lab(".concat(LRounded, " ").concat(aRounded, " ").concat(bRounded, " / ").concat(alphaRounded, ")");
    }
};
var labaObjectToLabString_1 = objectToString.labaObjectToLabString = labaObjectToLabString;
var lchaObjectToLchString = function (lcha) {
    var L = lcha.L, chroma = lcha.chroma, hue = lcha.hue, alpha = lcha.alpha;
    var LRounded = (0, utils_1$1.round)(L, 0);
    var chromaRounded = (0, utils_1$1.round)(chroma, 0);
    var hueRounded = (0, utils_1$1.round)(hue, 0);
    if (alpha === 1) {
        return "lch(".concat(LRounded, " ").concat(chromaRounded, " ").concat(hueRounded, "deg)");
    }
    else {
        var alphaRounded = (0, utils_1$1.round)(alpha, 2);
        return "lch(".concat(LRounded, " ").concat(chromaRounded, " ").concat(hueRounded, "deg / ").concat(alphaRounded, ")");
    }
};
var lchaObjectToLchString_1 = objectToString.lchaObjectToLchString = lchaObjectToLchString;
var oklabaObjectToOklabString = function (oklaba) {
    var l = oklaba.l, a = oklaba.a, b = oklaba.b, alpha = oklaba.alpha;
    var lRounded = (0, utils_1$1.round)(l, 2);
    var aRounded = (0, utils_1$1.round)(a, 2);
    var bRounded = (0, utils_1$1.round)(b, 2);
    if (alpha === 1) {
        return "oklab(".concat(lRounded, " ").concat(aRounded, " ").concat(bRounded, ")");
    }
    else {
        var alphaRounded = (0, utils_1$1.round)(alpha, 2);
        return "oklab(".concat(lRounded, " ").concat(aRounded, " ").concat(bRounded, " / ").concat(alphaRounded, ")");
    }
};
var oklabaObjectToOklabString_1 = objectToString.oklabaObjectToOklabString = oklabaObjectToOklabString;
var oklchaObjectToOklchString = function (oklcha) {
    var l = oklcha.l, chroma = oklcha.chroma, hue = oklcha.hue, alpha = oklcha.alpha;
    var lRounded = (0, utils_1$1.round)(l, 2);
    var chromaRounded = (0, utils_1$1.round)(chroma, 2);
    var hueRounded = (0, utils_1$1.round)(hue, 0);
    if (alpha === 1) {
        return "oklch(".concat(lRounded, " ").concat(chromaRounded, " ").concat(hueRounded, "deg)");
    }
    else {
        var alphaRounded = (0, utils_1$1.round)(alpha, 2);
        return "oklch(".concat(lRounded, " ").concat(chromaRounded, " ").concat(hueRounded, "deg / ").concat(alphaRounded, ")");
    }
};
oklchaObjectToOklchString_1 = objectToString.oklchaObjectToOklchString = oklchaObjectToOklchString;

"use strict";
var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(Chromator$1, "__esModule", { value: true });
var Chromator_2 = Chromator$1.Chromator = void 0;
var colourCodeToHsla_1 = colourCodeToHsla$1;
var xyz_1 = xyz$1;
var object_to_string_1 = objectToString;
var utils_1 = utils$2;
var rgb_1 = rgb$1;
var hsv_1 = hsv$1;
var lab_1 = lab$1;
var lch_1 = lch$1;
var oklab_1 = oklab$1;
var oklch_1 = oklch$1;
var constants_1 = constants;
var Chromator = /** @class */ (function () {
    function Chromator(code) {
        var _a = (0, colourCodeToHsla_1.colourCodeToHsla)(code), hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness, alpha = _a.alpha;
        this.hsl = {
            hue: hue,
            saturation: saturation,
            lightness: lightness
        };
        this.alpha = alpha;
    }
    /**
       * Returns a new Chromator instance with the same colour.
       */
    Chromator.prototype.copy = function () {
        return new Chromator(this.getHsla());
    };
    /**
       * Returns the HSL representation of the colour. Ignores the alpha value.
       */
    Chromator.prototype.getHsl = function () {
        return this.hsl;
    };
    /**
       * Returns the alpha value of the colour on a scale from 0 (completely transparent) to 1 (no transparency).
       */
    Chromator.prototype.getAlpha = function () {
        return this.alpha;
    };
    /**
       * Returns the HSLA representation of the colour.
       */
    Chromator.prototype.getHsla = function () {
        return __assign(__assign({}, this.hsl), { alpha: this.alpha });
    };
    /**
       * Returns the RGB representation of the colour. Ignores the alpha value.
       */
    Chromator.prototype.getRgb = function () {
        return (0, rgb_1.hslToRgb)(this.hsl);
    };
    /**
       * Returns the RGBA representation of the colour.
       */
    Chromator.prototype.getRgba = function () {
        return (0, rgb_1.hslaToRgba)(this.getHsla());
    };
    /**
       * Returns the HSV representation of the colour. Ignores the alpha value.
       */
    Chromator.prototype.getHsv = function () {
        return (0, hsv_1.hslToHsv)(this.hsl);
    };
    /**
       * Returns the HSVA representation of the colour.
       */
    Chromator.prototype.getHsva = function () {
        return (0, hsv_1.hslaToHsva)(this.getHsla());
    };
    /**
       * Returns the CIE XYZ representation of the colour.
       */
    Chromator.prototype.getCieXyz = function () {
        return (0, xyz_1.hslToCieXyz)(this.hsl);
    };
    /**
       * Returns the CIE XYZ representation of the colour including the alpha value.
       */
    Chromator.prototype.getCieXyza = function () {
        return (0, xyz_1.hslaToCieXyza)(this.getHsla());
    };
    /**
       * Returns the CIE L*a*b* representation of the colour.
       */
    Chromator.prototype.getLab = function () {
        return (0, lab_1.hslToLab)(this.hsl);
    };
    /**
       * Returns the CIE L*a*b* representation of the colour including the alpha value.
       */
    Chromator.prototype.getLaba = function () {
        return (0, lab_1.hslaToLaba)(this.getHsla());
    };
    /**
       * Returns the CIE LCH representation of the colour.
       */
    Chromator.prototype.getLch = function () {
        return (0, lch_1.hslToLch)(this.hsl);
    };
    /**
       * Returns the CIE LCH representation of the colour including the alpha value.
       */
    Chromator.prototype.getLcha = function () {
        return (0, lch_1.hslaToLcha)(this.getHsla());
    };
    /**
       * Returns the Oklab representation of the colour.
       */
    Chromator.prototype.getOklab = function () {
        return (0, oklab_1.hslToOklab)(this.getHsl());
    };
    /**
       * Returns the Oklab representation of the colour including the alpha value.
       */
    Chromator.prototype.getOklaba = function () {
        return (0, oklab_1.hslaToOklaba)(this.getHsla());
    };
    /**
       * Returns the Oklch representation of the colour.
       */
    Chromator.prototype.getOklch = function () {
        return (0, oklch_1.hslToOklch)(this.getHsla());
    };
    /**
       * Returns the Oklch representation of the colour including the alpha value.
       */
    Chromator.prototype.getOklcha = function () {
        return (0, oklch_1.hslaToOklcha)(this.getHsla());
    };
    /**
       * Returns the RGB CSS code of the colour.
       * @example
       * const red = new Chromator('red');
       * red.getRgbCode(); // 'rgb(255, 0, 0)'
       */
    Chromator.prototype.getRgbCode = function () {
        return (0, object_to_string_1.rgbaObjectToRgbDecimalString)(this.getRgba());
    };
    /**
       * Returns the hexadecimal CSS code of the colour.
       * @example
       * const red = new Chromator('green');
       * red.getHexCode(); // '#00FF00'
       */
    Chromator.prototype.getHexCode = function () {
        return (0, object_to_string_1.rgbaObjectToRgbHexString)(this.getRgba());
    };
    /**
       * Returns the HSL CSS code of the colour.
       * @example
       * const red = new Chromator('blue');
       * red.getHslCode(); // 'hsl(240, 100%, 50%)'
       */
    Chromator.prototype.getHslCode = function () {
        return (0, object_to_string_1.hslaObjectToHslString)(this.getHsla());
    };
    /**
       * Returns the CIE L*a*b* CSS code of the colour.
       * @example
       * const red = new Chromator('blue');
       * red.getLabCode(); // 'lab(53 80 67)'
       */
    Chromator.prototype.getLabCode = function () {
        return (0, object_to_string_1.labaObjectToLabString)(this.getLaba());
    };
    /**
       * Returns the CIE LCH CSS code of the colour.
       * @example
       * const blue = new Chromator('blue');
       * blue.getLchCode(); // 'lch(32 134 306deg)'
       */
    Chromator.prototype.getLchCode = function () {
        return (0, object_to_string_1.lchaObjectToLchString)(this.getLcha());
    };
    /**
       * Returns the Oklab CSS code of the colour.
       * @example
       * const blue = new Chromator('blue');
       * blue.getOklabCode(); // 'oklab(0.45 -0.03 -0.31)'
       */
    Chromator.prototype.getOklabCode = function () {
        return (0, object_to_string_1.oklabaObjectToOklabString)(this.getOklaba());
    };
    /**
       * Returns the Oklch CSS code of the colour.
       * @example
       * const blue = new Chromator('blue');
       * blue.getOklchCode(); // 'oklch(0.45 0.31 264deg)'
       */
    Chromator.prototype.getOklchCode = function () {
        return (0, object_to_string_1.oklchaObjectToOklchString)(this.getOklcha());
    };
    /**
       * Lightens the colour by a given amount.
       * @param amount - The amount of which to increase the lightness on a scale from 0 (nothing) to 1 (white).
       */
    Chromator.prototype.lighten = function (amount) {
        var currentLightness = this.hsl.lightness;
        var distanceFromWhite = 1 - currentLightness;
        this.hsl.lightness = currentLightness + distanceFromWhite * amount;
        return this;
    };
    /**
       * Darkens the colour by a given amount.
       * @param amount - The amount of which to decrease the lightness on a scale from 0 (nothing) to 1 (black).
       */
    Chromator.prototype.darken = function (amount) {
        var currentLightness = this.hsl.lightness;
        this.hsl.lightness = currentLightness * (1 - amount);
        return this;
    };
    /**
       * Inverts the lightness of the colour.
       * @example
       * const hsl = { hue: 302, saturation: 0.59, lightness: 0.65 };
       * const colour = new Chromator({ hue: 302, saturation: 0.59, lightness: 0.65 });
       * colour.invertLightness();
       * const invertedHsl = colour.getHsl(); // { hue: 302, saturation: 0.59, lightness: 0.35 }
       */
    Chromator.prototype.invertLightness = function () {
        this.hsl.lightness = 1 - this.hsl.lightness;
        return this;
    };
    /**
       * Adds the given amount to the hue.
       * @param amount The amount in degrees to add to the hue.
       */
    Chromator.prototype.addHue = function (amount) {
        this.hsl.hue = (0, utils_1.modulo)(this.hsl.hue + amount, 360);
        return this;
    };
    /**
       * Subtracts the given amount from the hue.
       * @param amount The amount in degrees to subtract from the hue.
       */
    Chromator.prototype.subtractHue = function (amount) {
        this.hsl.hue = (0, utils_1.modulo)(this.hsl.hue - amount, 360);
        return this;
    };
    /**
       * Transforms the colour to its complementary colour.
       */
    Chromator.prototype.complementarise = function () {
        this.addHue(180);
        return this;
    };
    /**
       * Inverts the colour.
       */
    Chromator.prototype.invert = function () {
        this.complementarise().invertLightness();
        return this;
    };
    /**
       * Returns the relative luminance of the colour.
       */
    Chromator.prototype.getRelativeLuminance = function () {
        var cieXyz = this.getCieXyz();
        return cieXyz.y;
    };
    /**
       * Transforms the lightness of the colour in order to obtain the given relative luminance.
       * Does not change the hue or chroma/saturation, unless if the colour is outside the SRGB gamut.
       * Then the chroma is adjusted so that it is within the SRGB gamut.
       * @param luminance - The relative luminance to obtain. Must be between 0 and 1.
       * @param profile - The colour profile to use for the transformation. Valid profiles are 'hsl', 'lch', and 'oklch'. Default is 'hsl'.
       */
    Chromator.prototype.setRelativeLuminance = function (luminance, profile) {
        if (profile === void 0) { profile = 'hsl'; }
        if (luminance < 0 || luminance > 1) {
            throw new Error('Relative luminance must be between 0 and 1. Received ' + luminance + '.');
        }
        if (luminance === 1) {
            this.hsl.lightness = 1;
            return this;
        }
        if (luminance === 0) {
            this.hsl.lightness = 0;
            return this;
        }
        switch (profile) {
            case 'hsl':
                return this.setRelativeLuminanceByAdjustingHSLLightness(luminance);
            case 'lch':
                return this.setRelativeLuminanceByAdjustingLchLightness(luminance);
            case 'oklch':
                return this.setRelativeLuminanceByAdjustingOklabLightness(luminance);
        }
    };
    Chromator.prototype.setRelativeLuminanceByAdjustingHSLLightness = function (luminance) {
        var _this = this;
        var lumFunc = function (lightness) {
            var hsl = __assign(__assign({}, _this.hsl), { lightness: lightness });
            return (0, xyz_1.relativeLuminanceFromHsl)(hsl);
        };
        this.hsl.lightness = (0, utils_1.findInputToAlwaysIncreasingFunc)(lumFunc, luminance, constants_1.RELATIVE_LUMINANCE_ALGORITHM_PRECISION, {
            start: -0.5,
            end: 1.5
        });
        return this;
    };
    Chromator.prototype.setRelativeLuminanceByAdjustingLchLightness = function (luminance) {
        var lch = (0, lch_1.adjustLchLightnessForRelativeLuminance)(this.getLch(), luminance);
        var hsl = (0, lch_1.lchToHsl)(lch);
        return this.updateHsl(hsl);
    };
    Chromator.prototype.setRelativeLuminanceByAdjustingOklabLightness = function (luminance) {
        var oklch = (0, oklch_1.adjustOklchLightnessForRelativeLuminance)(this.getOklch(), luminance);
        var hsl = (0, oklch_1.oklchToHsl)(oklch);
        return this.updateHsl(hsl);
    };
    Chromator.prototype.updateHsl = function (hsl) {
        this.hsl.hue = hsl.hue;
        this.hsl.saturation = hsl.saturation;
        this.hsl.lightness = hsl.lightness;
        return this;
    };
    /**
     * Finds the contrast between this colour and another colour based on the relative luminance and some offset value.
     * contrast = (lightest colour luminance + offset) / (darkest colour luminance + offset)
     * @param otherColour The colour to compare with.
     * @param offset The offset to use for the relative luminance. Defaults to 0.05, which is the value used by the WCAG definition of contrast.
     * @returns The contrast between the two colours. The minimum value is 1, which means that the colours have the same luminance. With an offset of 0.05, the maximum contrast is 21 (1.05/0.05).
     */
    Chromator.prototype.findContrast = function (otherColour, offset) {
        if (offset === void 0) { offset = 0.05; }
        if (offset === 0)
            throw Error('Offset must be non-zero.');
        var otherChromator = Chromator.getChromatorObject(otherColour);
        var thisRelativeLuminanceWithOffset = this.getRelativeLuminance() + offset;
        var otherRelativeLuminanceWithOffset = otherChromator.getRelativeLuminance() + offset;
        var lightest = Math.max(thisRelativeLuminanceWithOffset, otherRelativeLuminanceWithOffset);
        var darkest = Math.min(thisRelativeLuminanceWithOffset, otherRelativeLuminanceWithOffset);
        return lightest / darkest;
    };
    /**
     * Increases the luminance of the colour by a given contrast value.
     * @param contrast The target contrast of the new colour compared to the current colour. Must be greater than 1.
     * @param profile The colour profile to use for the transformation. Valid profiles are 'hsl', 'lch', and 'oklch'. Default is 'hsl'. The hue of the given profile will be kept constant. So will the saturation/chroma, given that it is possible within the SRGB gamut.
     * @param offset The offset value to use for the contrast calculation. Defaults to 0.05, which is the value used by the WCAG definition of contrast.
     * @returns The Chromator instance with the increased luminance. If the target luminance is greater than 1, undefined is returned.
     */
    Chromator.prototype.increaseLuminanceByContrast = function (contrast, profile, offset) {
        if (profile === void 0) { profile = 'hsl'; }
        if (offset === void 0) { offset = 0.05; }
        if (contrast < 1)
            throw Error('Contrast must be greater than or equal to 1.');
        if (offset === 0)
            throw Error('Offset must be non-zero.');
        var targetLuminance = contrast * (this.getRelativeLuminance() + offset) - offset;
        if (targetLuminance > 1)
            return undefined;
        return this.setRelativeLuminance(targetLuminance, profile);
    };
    /**
     * Decreases the luminance of the colour by a given contrast value.
     * @param contrast The target contrast of the new colour compared to the current colour. Must be greater than 1.
     * @param profile The colour profile to use for the transformation. Valid profiles are 'hsl', 'lch', and 'oklch'. Default is 'hsl'. The hue of the given profile will be kept constant. So will the saturation/chroma, given that it is possible within the SRGB gamut.
     * @param offset The offset value to use for the contrast calculation. Defaults to 0.05, which is the value used by the WCAG definition of contrast.
     * @returns The Chromator instance with the decreased luminance. If the target luminance is less than 0, undefined is returned.
     */
    Chromator.prototype.decreaseLuminanceByContrast = function (contrast, profile, offset) {
        if (profile === void 0) { profile = 'hsl'; }
        if (offset === void 0) { offset = 0.05; }
        if (contrast < 1)
            throw Error('Contrast must be greater than or equal to 1.');
        if (offset === 0)
            throw Error('Offset must be non-zero.');
        var targetLuminance = (this.getRelativeLuminance() + offset) / contrast - offset;
        if (targetLuminance < 0)
            return undefined;
        return this.setRelativeLuminance(targetLuminance, profile);
    };
    Chromator.getChromatorObject = function (colour) {
        return colour instanceof Chromator ? colour : new Chromator(colour);
    };
    return Chromator;
}());
Chromator_2 = Chromator$1.Chromator = Chromator;

(function (exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chromator = void 0;
var Chromator_1 = Chromator$1;
Object.defineProperty(exports, "Chromator", { enumerable: true, get: function () { return Chromator_1.Chromator; } });

}(dist));

const index = /*@__PURE__*/getDefaultExportFromCjs(dist);

function asPercents(n) {
    return `${(n * 100).toFixed()}%`;
}

const LIGHT_MODE_BACKGROUND_LUMINANCE = 1;
const DARK_MODE_BACKGROUND_LUMINANCE = 0.02;
const DEFAULT_BORDER_TO_BACKGROUND_CONTRAST = 5;
const BASE_COLOUR_LUMINANCE_LIGHT_MODE = 0.6;
const BASE_COLOUR_LUMINANCE_DARK_MODE = 0.12;
const INPUT_FIELD_TO_PAGE_CONTRAST = 1.2;
const GRADIENT_FACTOR_DARK_MODE = 0.2;
const GRADIENT_FACTOR_LIGHT_MODE = 0.1;

const getIncreasedLuminanceByContrastFromColour = (colour, contrast) => {
    const luminance = colour.getRelativeLuminance();
    return getIncreasedLuminanceByContrast(luminance, contrast);
};
const getIncreasedLuminanceByContrast = (baseLuminance, contrast) => {
    const targetLuminance = contrast * (baseLuminance + 0.05) - 0.05;
    return targetLuminance > 1 ? undefined : targetLuminance;
};
const getDecreasedLuminanceByContrastFromColour = (colour, contrast) => {
    const luminance = colour.getRelativeLuminance();
    return getDecreasedLuminanceByContrast(luminance, contrast);
};
const getDecreasedLuminanceByContrast = (baseLuminance, contrast) => {
    const targetLuminance = (baseLuminance + 0.05) / contrast - 0.05;
    return targetLuminance < 0 ? undefined : targetLuminance;
};
const calculateContrast = (colour1, colour2) => {
    const luminance1 = colour1.getRelativeLuminance();
    const luminance2 = colour2.getRelativeLuminance();
    const lighter = Math.max(luminance1, luminance2);
    const darker = Math.min(luminance1, luminance2);
    return (lighter + 0.05) / (darker + 0.05);
};
const componentHue = (baseHueInDegrees, offsetInTurns) => {
    const offsetInDegrees = offsetInTurns * 360;
    return hueOffsetInDegrees(baseHueInDegrees, offsetInDegrees);
};
const hueOffsetInDegrees = (hue1, hue2) => {
    const sum = hue1 + hue2;
    return sum % 360;
};

const appendToMap = (map, propName, value) => {
    const items = map.get(propName);
    if (!items) {
        map.set(propName, [value]);
    }
    else if (!items.includes(value)) {
        items.push(value);
    }
};
const debounce = (fn, ms) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            timeoutId = 0;
            fn(...args);
        }, ms);
    };
};

/**
 * Check if a possible element isConnected.
 * The property might not be there, so we check for it.
 *
 * We want it to return true if isConnected is not a property,
 * otherwise we would remove these elements and would not update.
 *
 * Better leak in Edge than to be useless.
 */
const isConnected = (maybeElement) => !('isConnected' in maybeElement) || maybeElement.isConnected;
const cleanupElements = debounce((map) => {
    for (let key of map.keys()) {
        map.set(key, map.get(key).filter(isConnected));
    }
}, 2000);
const stencilSubscription = () => {
    if (typeof getRenderingRef !== 'function') {
        // If we are not in a stencil project, we do nothing.
        // This function is not really exported by @stencil/core.
        return {};
    }
    const elmsToUpdate = new Map();
    return {
        dispose: () => elmsToUpdate.clear(),
        get: (propName) => {
            const elm = getRenderingRef();
            if (elm) {
                appendToMap(elmsToUpdate, propName, elm);
            }
        },
        set: (propName) => {
            const elements = elmsToUpdate.get(propName);
            if (elements) {
                elmsToUpdate.set(propName, elements.filter(forceUpdate));
            }
            cleanupElements(elmsToUpdate);
        },
        reset: () => {
            elmsToUpdate.forEach((elms) => elms.forEach(forceUpdate));
            cleanupElements(elmsToUpdate);
        },
    };
};

const unwrap = (val) => (typeof val === 'function' ? val() : val);
const createObservableMap = (defaultState, shouldUpdate = (a, b) => a !== b) => {
    const unwrappedState = unwrap(defaultState);
    let states = new Map(Object.entries(unwrappedState !== null && unwrappedState !== void 0 ? unwrappedState : {}));
    const handlers = {
        dispose: [],
        get: [],
        set: [],
        reset: [],
    };
    const reset = () => {
        var _a;
        // When resetting the state, the default state may be a function - unwrap it to invoke it.
        // otherwise, the state won't be properly reset
        states = new Map(Object.entries((_a = unwrap(defaultState)) !== null && _a !== void 0 ? _a : {}));
        handlers.reset.forEach((cb) => cb());
    };
    const dispose = () => {
        // Call first dispose as resetting the state would
        // cause less updates ;)
        handlers.dispose.forEach((cb) => cb());
        reset();
    };
    const get = (propName) => {
        handlers.get.forEach((cb) => cb(propName));
        return states.get(propName);
    };
    const set = (propName, value) => {
        const oldValue = states.get(propName);
        if (shouldUpdate(value, oldValue, propName)) {
            states.set(propName, value);
            handlers.set.forEach((cb) => cb(propName, value, oldValue));
        }
    };
    const state = (typeof Proxy === 'undefined'
        ? {}
        : new Proxy(unwrappedState, {
            get(_, propName) {
                return get(propName);
            },
            ownKeys(_) {
                return Array.from(states.keys());
            },
            getOwnPropertyDescriptor() {
                return {
                    enumerable: true,
                    configurable: true,
                };
            },
            has(_, propName) {
                return states.has(propName);
            },
            set(_, propName, value) {
                set(propName, value);
                return true;
            },
        }));
    const on = (eventName, callback) => {
        handlers[eventName].push(callback);
        return () => {
            removeFromArray(handlers[eventName], callback);
        };
    };
    const onChange = (propName, cb) => {
        const unSet = on('set', (key, newValue) => {
            if (key === propName) {
                cb(newValue);
            }
        });
        // We need to unwrap the defaultState because it might be a function.
        // Otherwise we might not be sending the right reset value.
        const unReset = on('reset', () => cb(unwrap(defaultState)[propName]));
        return () => {
            unSet();
            unReset();
        };
    };
    const use = (...subscriptions) => {
        const unsubs = subscriptions.reduce((unsubs, subscription) => {
            if (subscription.set) {
                unsubs.push(on('set', subscription.set));
            }
            if (subscription.get) {
                unsubs.push(on('get', subscription.get));
            }
            if (subscription.reset) {
                unsubs.push(on('reset', subscription.reset));
            }
            if (subscription.dispose) {
                unsubs.push(on('dispose', subscription.dispose));
            }
            return unsubs;
        }, []);
        return () => unsubs.forEach((unsub) => unsub());
    };
    const forceUpdate = (key) => {
        const oldValue = states.get(key);
        handlers.set.forEach((cb) => cb(key, oldValue, oldValue));
    };
    return {
        state,
        get,
        set,
        on,
        onChange,
        use,
        dispose,
        reset,
        forceUpdate,
    };
};
const removeFromArray = (array, item) => {
    const index = array.indexOf(item);
    if (index >= 0) {
        array[index] = array[array.length - 1];
        array.length--;
    }
};

const createStore = (defaultState, shouldUpdate) => {
    const map = createObservableMap(defaultState, shouldUpdate);
    map.use(stencilSubscription());
    return map;
};

const { state } = createStore({
    darkMode: false,
    baseHue: 160,
    baseChroma: 0.4,
});

export { BASE_COLOUR_LUMINANCE_DARK_MODE as B, DARK_MODE_BACKGROUND_LUMINANCE as D, GRADIENT_FACTOR_DARK_MODE as G, INPUT_FIELD_TO_PAGE_CONTRAST as I, LIGHT_MODE_BACKGROUND_LUMINANCE as L, asPercents as a, BASE_COLOUR_LUMINANCE_LIGHT_MODE as b, DEFAULT_BORDER_TO_BACKGROUND_CONTRAST as c, dist as d, getDecreasedLuminanceByContrast as e, GRADIENT_FACTOR_LIGHT_MODE as f, getIncreasedLuminanceByContrast as g, state as s };

//# sourceMappingURL=store-bc9fba1a.js.map