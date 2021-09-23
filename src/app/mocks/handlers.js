import { rest } from 'msw';
import moment from 'moment';
import { generateData } from './generate-data';

const current = moment().startOf('month');
const monthes = Array.apply(null, { length: 12 }).map((_, i) => moment(current).add(i, 'month'));

const data = monthes.reduce((res, item, index) => {
    return {
        ...res,
        [item.format('YYYY-MM-DD')]: generateData(item, index)
    };
}, {});

export const handlers = [
    // Handles a GET /user request
    rest.get('/api/v1/keywords/predictions', (req, res, ctx) => {
        // If authenticated, return a mocked user details
        const from = req.url.search.split('=').pop();
        return res(
            ctx.delay(500),
            ctx.status(200),
            ctx.json(data[from])
        );
    })
];
