import { FC } from 'react';
import { Link } from 'cond-app-core/router';
import styles from './not-found.module.scss';

// TODO: 404 page
export const NotFound: FC = () => (
    <main className={styles.main}>
        <h1>.404</h1>
        <p>The page you are trying to reach does not exist, or has been moved.</p>
        <Link className='link' to='root' data-test-id='link'>
            Go to homepage
        </Link>
    </main>
);
