import {ServerInterface} from './types/ServerInterface';
import express from 'express';
import {Config} from './Config';
import ListController from './controllers/ListController';
import CountController from './controllers/CountController';
import StatsController from './controllers/StatsController';
import SearchController from './controllers/SearchController';

export default class ExpressServer implements ServerInterface {
    public server: express.Application = express();

    /**
     * Setup functions
     */
    public setup(): void {
        this.setRoutes();
    }

    /**
     * Listen to express http server
     */
    public listen(): void {
        this.server.listen(Config.SERVER_PORT, () => {
            console.log(`Server listening at ${ Config.SERVER_HOST }:${ Config.SERVER_PORT }`);
        });
    }

    /**
     * Set routes
     */
    public setRoutes(): void {
        this.server.get('/list', ListController.res);
        this.server.get('/count', CountController.res);
        this.server.get('/stats', StatsController.res);
        this.server.get('/search', SearchController.res);
    }
};
