import {
    getAllQuotes,
    addQuote,
} from '../controllers/controller';

const routes = (app) => {
    app.route('/allQuotes').get(getAllQuotes)

    app.route('/addQuote').post(addQuote);
}

export default routes;

