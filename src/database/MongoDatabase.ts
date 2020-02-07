import {DatabaseInterface} from "../types/DatabaseInterface";
import mongoose from "mongoose";
import {Config} from "../Config";

export default class MongoDatabase implements DatabaseInterface {
    /**
     * Connect to database
     */
    public connect(): void {
        mongoose.connect(`mongodb+srv://${ Config.DB_USERNAME }:${ Config.DB_PASSWORD }@cluster0-erbqg.mongodb.net/${ Config.DB_DATABASE }`, { useNewUrlParser: true, useUnifiedTopology: true }, (err: any) => {
            if (err) {
                console.log(err.message);
            } else
                console.log("Successfully connected to database");
        });
    }
}
