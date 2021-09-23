import styles from './table.module.scss';
import { useNavigationParams, useResourceData } from 'cond-app-core/resource';
import { TableView } from './table-view';
import moment from 'moment';

export function TableContainer() {
    const { from } = useNavigationParams();
    const { data, isLoading } = useResourceData('forecast');
    return (
        <TableView
            month={moment(from, 'DD-MM-YY').format('MMMM')}
            data={data}
            isLoading={isLoading}
        />
    );
}
