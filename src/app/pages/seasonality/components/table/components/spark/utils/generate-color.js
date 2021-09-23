export function generateColor(data) {
    if (!Array.isArray(data)) return null;
    return data.map(({ value }) => parseInt(value, 10)).sort((a, b) => a - b).reverse().reduce((res, item, index) => {
        return {
            ...res,
            [item]: `rgba(137,195,46, ${1 - index * 0.07})`
        };
    }, {});
}
