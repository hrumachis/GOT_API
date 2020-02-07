import * as mongoose from "mongoose";
import {Config} from "../Config";

export interface BattlesInterface extends mongoose.Document {
    name: string;
    year: number;
    battle_number: number;
    attacker_king: string;
    defender_king: string;
    attacker_1: string;
    attacker_2: string;
    attacker_3: string;
    attacker_4: string;
    defender_1: string;
    defender_2: string;
    defender_3: string;
    defender_4: string;
    attacker_outcome: string;
    battle_type: string;
    major_death: number;
    major_capture: number;
    attacker_size: number;
    defender_size: number;
    attacker_commander: string;
    defender_commander: string;
    summer: number;
    location: string;
    region: string;
    note: string;
}

export const BattlesSchema = new mongoose.Schema({
    name: { type: String, required: true },
    year: { type: Number, required: true },
    battle_number: { type: Number, required: true },
    attacker_king: { type: String, required: false },
    defender_king: { type: String, required: false },
    attacker_1: { type: String, required: false },
    attacker_2: { type: String, required: false },
    attacker_3: { type: String, required: false },
    attacker_4: { type: String, required: false },
    defender_1: { type: String, required: false },
    defender_2: { type: String, required: false },
    defender_3: { type: String, required: false },
    defender_4: { type: String, required: false },
    attacker_outcome: { type: String, required: false },
    battle_type: { type: String, required: false },
    major_death: { type: Number, required: false },
    major_capture: { type: Number, required: false },
    attacker_size: { type: Number, required: false },
    defender_size: { type: Number, required: false },
    attacker_commander: { type: String, required: false },
    defender_commander: { type: String, required: false },
    summer: { type: Number, required: false },
    location: { type: String, required: false },
    region: { type: String, required: false },
    note: { type: String, required: false },
});

export const BattlesCollection = mongoose.model<BattlesInterface>(Config.DB_COLLECTIONS.BATTLES, BattlesSchema);
