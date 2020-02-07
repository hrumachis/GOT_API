import { Request, Response } from 'express';
import { BattlesCollection } from '../database/BattlesCollection';
import { Utils } from '../Utils';

export default class SearchController {
    /**
     * “/search?king=Robb Stark” - return list of battles were 'attacker_king' or 'defender_king' was 'Robb Stark'
     * Should also work for multiple queries
     * “/search?king=Robb Stark&location=Riverrun&type=siege”
     *
     * @param req
     * @param res
     */
    public static res(req: Request, res: Response): void {
        const {king, type, location, region} = req.query;

        BattlesCollection.find({}, '-_id',(err, data) => {
            if (err) return res.send(err);

            const result = data.filter((battle) => {
                if (king && (battle.attacker_king !== king && battle.defender_king !== king)) return false;
                if (type && battle.battle_type !== type) return false;
                if (location && battle.location !== location) return false;
                if (region && battle.region !== region) return false;

                return true;
            });

            res.send(JSON.stringify(result));
        });
    }
};
