import { useCallback, useEffect } from 'react';
import { useNavigationParams, useRequest } from 'cond-app-core/resource';
import { useNamedHistory } from 'cond-app-core/router';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { HeaderContainer, TableContainer } from './components';

const current = moment().startOf('month');
const monthes = Array.apply(null, { length: 12 }).map((_, i) => moment(current).add(i, 'month'));

const API_DATE_FORMAT = 'DD-MM-YY';
export function Seasonality() {
    const { from } = useNavigationParams();
    const { push } = useNamedHistory();
    const getData = useRequest({ endpoint: 'v1/keywords/predictions', namespace: 'forecast', queries: ['from'] });

    useEffect(() => {
        getData({ from: moment(from, 'DD-MM-YY').format(API_DATE_FORMAT) || current.format(API_DATE_FORMAT) });
        if (!from) {
            push('seasonality', { search: { from: current.format('DD-MM-YY') } });
        }
    }, []);

    const handleChange = useCallback((index) => {
        getData({ from: monthes[index].format(API_DATE_FORMAT) });
    }, []);
    return (
        <>
            <HeaderContainer
                from={from}
                monthes={monthes}
                getNewMonth={handleChange}
            />
            <TableContainer />
        </>
    );
}
