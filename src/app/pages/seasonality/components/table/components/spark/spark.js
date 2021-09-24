import { useCallback, useMemo, useState } from 'react';
import Popover from '@material-ui/core/Popover';
import { Bar, BarChart, CartesianGrid, Cell, Line, LineChart, ReferenceLine, Tooltip, XAxis, YAxis } from 'recharts';
import { CustomizedLabel } from './label';
import { findMax, generateColor, tickFormatter } from './utils';
import styles from './spark..module.scss';

const anchorOrigin = {
    vertical: 'bottom',
    horizontal: 'left'
};

export function Spark({ data, name }) {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = useCallback((event) => {
        setAnchorEl(event.currentTarget);
    }, []);

    const handleClose = useCallback(() => {
        setAnchorEl(null);
    }, []);

    const chartData = useMemo(() => {
        if (!Array.isArray(data)) return null;
        const colors = generateColor(data);
        return data.map((item) => ({
            month: item.year + item.month,
            monthName: new Date(item.year, item.month - 1).toLocaleString('en-us', { month: 'short' }),
            value: item.value,
            color: colors[item.value]
        }));
    }, []);
    const max = findMax(chartData);
    return (
        <>
            <button onClick={handleClick} className={styles.btn}>
                <BarChart width={120} height={40} data={chartData}>
                    <Bar dataKey='value' >
                        {
                            chartData.map((entry, index) => (<Cell fill={ entry.color } key={`cell-${index}`} />))
                        }
                    </Bar>
                </BarChart>
            </button>
            <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={anchorOrigin}
            >
                <div className={styles.main}>
                    <header className={styles.header}>
                        <h3 className={styles.title}>{name}</h3>
                        <button onClick={handleClose} className={styles.close}><i className='far fa-times'></i></button>
                    </header>
                    <p className={styles.description}>Forecasted monthly search volume</p>

                    <LineChart
                        width={440}
                        height={200}
                        data={chartData}
                        margin={{ top: 40, right: 10, left: 5, bottom: 5 }}
                    >
                        <CartesianGrid horizontal vertical={false} />
                        <XAxis
                            dataKey='monthName'
                            minTickGap={2}
                            tickLine={false}
                        />
                        <Tooltip content={<CustomTooltip />} />
                        <YAxis axisLine={false} tickLine={false} interval='preserveStart' tickFormatter={tickFormatter} />
                        <Line type='linear' strokeWidth={3} dataKey='value' stroke='#89c32e' dot={false} />
                        <ReferenceLine
                            x={max.monthName}
                            stroke='#89c32e'
                            label={<CustomizedLabel index={max.index} />}
                        />
                    </LineChart>
                </div>
            </Popover>
        </>
    );
}

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className={styles.customTooltip}>
                <b>{`${label} : `}</b> {tickFormatter(payload[0].value) || 0}
            </div>
        );
    }

    return null;
};
