const findUniqueIndex = (array, value) => {
    const unique = uniqueItems(array);
    return unique.indexOf(value);
};
const uniqueItems = (array) => [...new Set(array)];

export { findUniqueIndex as f, uniqueItems as u };

//# sourceMappingURL=arrayUtils-fdd6bbb6.js.map