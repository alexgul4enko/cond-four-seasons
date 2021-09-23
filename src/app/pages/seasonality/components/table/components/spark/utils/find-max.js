export function findMax(data) {
    if (!Array.isArray(data)) return null;
    let max = { ...data[0], index: 0 };

    data.forEach((item, index) => {
        if (item.value > max.value) {
            max = { ...item, index };
        }
    });
    return max;
}
