import { useMemo } from 'react';
import isEmpty from 'lodash/isEmpty';
import MUITable from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import Zoom from '@material-ui/core/Zoom';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Spark } from './components';
import { Trend } from './trend';
import moment from 'moment';
import styles from './table.module.scss';

const recomentation = ['Create new content', 'Consolidate pages', "None; you're #1!", 'Optimize page'];

function getRecomendation() {
    const index = Math.floor(Math.random() * (4)) + 0;
    return recomentation[index];
}

const current = moment().startOf('month');
const mm = `${current.format('MMM')}-${moment(current).add(11, 'month').format('MMM')}`;
export function TableView({ month, data, isLoading }) {
    const rows = useMemo(() => {
        if (isEmpty(data) || !Array.isArray(data)) return null;

        return data.map((item) => {
            return (
                <TableRow key={item.search.queryPhrase}>
                    <TableCell>{item.search.queryPhrase}</TableCell>
                    <TableCell><Trend data={item.trend} month={month} /></TableCell>
                    <TableCell><Spark data={item.trend} name={item.search.queryPhrase} /></TableCell>
                    <TableCell>{getRecomendation()}</TableCell>
                </TableRow>
            );
        });
    }, [data]);
    return (
        <div className={styles.main}>
            <h3 className={styles.title}>Keywords with peak search demand in {month}</h3>
            <div className={styles.tableWrapper}>
                <Zoom in={isLoading}>
                    <div className={styles.loader}>
                        <CircularProgress className={styles.circle} />
                    </div>
                </Zoom>
                <MUITable sx={{ minWidth: 500 }} aria-label='keywords table' className={styles.table}>
                    <TableHead className={styles.head}>
                        <TableRow>
                            <TableCell className={styles.headerCell}>
                                Keyword
                            </TableCell>

                            <TableCell className={styles.headerCell}>
                                {month} Search Volume Forecast
                            </TableCell>

                            <TableCell className={styles.headerCell}>
                                <span>Monthly Search Volume Trend</span>
                                <p className={styles.mm}>{mm}</p>
                            </TableCell>
                            <TableCell className={styles.headerCell}>
                                Recommendation
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className={styles.body}>
                        {rows}
                    </TableBody>
                </MUITable>
            </div>
        </div>
    );
}
