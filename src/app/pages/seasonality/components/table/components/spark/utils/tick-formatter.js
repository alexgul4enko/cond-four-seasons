export function tickFormatter(value) {
    if (value) {
        return parseInt(value, 10).toLocaleString();
    }
    return '';
}
