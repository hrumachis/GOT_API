import { Request, Response } from 'express';
import { BattlesCollection } from '../database/BattlesCollection';
import { Utils } from '../Utils';

export default class ListController {
    /**
     * Returns list(array) of all the places where battle has taken place.
     *
     * @param req
     * @param res
     */
    public static res(req: Request, res: Response): void {
        BattlesCollection.find({}, 'location -_id', (err, data) => {
            if (err) return res.send(err);

            const locations: string[] = data.map(({ location }) => location);

            res.send(Utils.getUniques(locations));
        });
    }
};
