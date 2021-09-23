import { render } from 'react-dom';
import App from './App';
import { setupWorker } from 'msw';
import { handlers } from './mocks/handlers';

const worker = setupWorker(...handlers);

if (process.env.MOCK) {
    worker.start({
        serviceWorker: {
        // Generated service worker in located under public folder
            url: new URL('../../public/mockServiceWorker.js', import.meta.url).pathname
        }
    });
}

render(<App />, document.getElementById('root'));
