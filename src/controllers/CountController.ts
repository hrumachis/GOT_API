import { Request, Response } from 'express';
import { BattlesCollection } from '../database/BattlesCollection';

export default class CountController {
    /**
     * Returns total number of battle occurred.
     *
     * @param req
     * @param res
     */
    public static res(req: Request, res: Response): void {
        BattlesCollection.countDocuments((err: any, count: number) => {
            if (err) return res.send(err);

            res.send(JSON.stringify(count));
        });
    }
};
