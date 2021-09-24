import { useMemo } from 'react';
import moment from 'moment';
import styles from './table.module.scss';

function findMaxIndex(data) {
    if (!Array.isArray(data)) return null;
    let max = data[0];
    let index = 0;
    data.forEach((item, ind) => {
        if (item.value > max.value) {
            max = item;
            index = ind;
        }
    });
    return index;
}

export function Trend({ data, month }) {
    const trend = useMemo(() => {
        if (!Array.isArray(data)) return null;

        const index = data.findIndex(
            (item) => moment([item.year, item.month, 1]).format('MMMM') === month
        );
        const item = data[index];
        const maxIndex = findMaxIndex(data);
        const icon = maxIndex === index
            ? <>🔥</>
            : (<i className={`fak fa-rise ${styles.icon} ${maxIndex < index ? styles.revert : ''}`}></i>);
        return <span>{item && item.value && item.value.toLocaleString()} {icon}</span>;
    }, [data, month]);

    return trend;
}
