import styles from './layout.module.scss';

const COPYRIGHT_YEAR = new Date().getFullYear();

export function Layout({ children }) {
    return (
        <main className={styles.main}>
            <header className={styles.header}>
                Seasonal Demand Forecaster
            </header>
            <main className={styles.content}>{children}</main>
            <footer className={styles.footer}>
                Copyright {COPYRIGHT_YEAR} Conductor, Inc. All rights reserved.
            </footer>
        </main>
    );
}
