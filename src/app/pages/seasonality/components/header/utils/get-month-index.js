export function getMonthIndex(from, monthes) {
    if (!Array.isArray(monthes) || !from) return 0;

    return monthes.findIndex((item) => item.format('DD-MM-YY') === from);
}
