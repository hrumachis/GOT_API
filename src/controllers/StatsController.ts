import { Request, Response } from 'express';
import { BattlesCollection } from '../database/BattlesCollection';
import { Utils } from '../Utils';

export default class StatsController {
    /**
     * Returns:
     * {
     *      "most_active":{
     *          "attacker_king": "xxx",
     *           "defender_king": "xxx",
     *           "region": "xxx"
     *      },
     *      "attacker_outcome":{
     *          "win": 1000, // total win
     *          "loss": 1000 // total loss
     *      },
     *      "battle_type":[], // unique battle types
     *      "defender_size":{
     *          "average": 10,
     *          "min": 5,
     *          "max": 100
     *      }
     *  }
     *
     * @param req
     * @param res
     */
    public static res(req: Request, res: Response): void {
        BattlesCollection.find((err, data) => {
            if (err) return res.send(err);

            const attackerKings: string[] = data.map(({ attacker_king }) => attacker_king);
            const defenderKings: string[] = data.map(({ defender_king }) => defender_king);
            const regions: string[] = data.map(({ region }) => region);
            const attackerOutcomes: string[] = data.map(({ attacker_outcome }) => attacker_outcome);
            const battleTypes: string[] = data.map(({ battle_type }) => battle_type);
            const defenderSizes: number[] = data.map(({ defender_size }) => defender_size).filter(v => v !== null);

            res.send(JSON.stringify({
                most_active: {
                    attacker_king: Utils.getMostFrequentValue(attackerKings),
                    defender_king: Utils.getMostFrequentValue(defenderKings),
                    region: Utils.getMostFrequentValue(regions)
                },
                attacker_outcome: {
                    win: attackerOutcomes.filter(v => v === "win").length,
                    loss: attackerOutcomes.filter(v => v === "loss").length
                },
                battle_type: Utils.getUniques(battleTypes),
                defender_size: {
                    average: Utils.getAverage(defenderSizes),
                    min: Math.min(...defenderSizes),
                    max: Math.max(...defenderSizes)
                }
            }));
        });
    }
};
