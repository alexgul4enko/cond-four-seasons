import dataset from './data';
import moment from 'moment';
export function generateData(month, index) {
    const data = dataset.entities.splice(index * 20, 10).map((item) => {
        const localMonthlySearches = randomInteger();
        return {
            search: {
                rankSourceId: item.rankSourceId,
                rankSourceName: item.rankSourceDescription,
                device: item.deviceDescription,
                locode: item.localeDescription,
                queryPhrase: item.keyword
            },
            localMonthlySearches,
            costPerClick: 2.123177,
            competition: 0.53985367731998,
            source: null,
            trend: generateTrend(month, localMonthlySearches)
        };
    });
    return data;
}

function generateTrend(month, localMonthlySearches) {
    const month_ = moment().startOf('month');
    return Array.apply(null, { length: 12 }).map((_, i) => {
        const mm = moment(month_).add(i, 'month');
        return {
            year: mm.year(),
            month: mm.month(),
            value: randomInteger(1, localMonthlySearches)
        };
    });
}

function randomInteger(min = 10, max = 100) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
