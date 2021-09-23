import { useMemo } from 'react';
import { Link } from 'cond-app-core/router';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import styles from './header.module.scss';

const classes = {
    indicator: styles.indicator
};
const tabClasses = {
    selected: styles.active
};

export function HeaderView({ monthes, value, handleChange }) {
    const buttons = useMemo(() => {
        return monthes.map((item) => (
            <Tab
                key={item.toString()}
                className={styles.tab}
                classes={tabClasses}
                disableRipple
                label={
                    <Link
                        className={styles.link}
                        to='seasonality'
                        search={{
                            from: item.format('DD-MM-YY')
                        }}
                    >
                        {item.format('MMMM')}
                    </Link>
                }
            />
        ));
    }, []);

    return (
        <header className={styles.header}>
            <p className={styles.title}>Peak Search Demand In…</p>
            <Tabs
                className={styles.buttons}
                value={value}
                onChange={handleChange}
                classes={classes}
            >
                {buttons}
            </Tabs>
        </header>
    );
}
