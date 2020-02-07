import ExpressServer from './ExpressServer';
import MongoDatabase from './database/MongoDatabase';
import FilesReader from './FilesReader';
import { BattlesCollection } from './database/BattlesCollection';

export default class App {
    public server: ExpressServer = new ExpressServer();
    public database: MongoDatabase = new MongoDatabase();

    /**
     * Run application
     */
    public execute(): void {
        this.server.setup();
        this.server.listen();
        this.database.connect();
        this.uploadDataToDB();
    }

    /**
     * If battles collection is empty
     * Read CSV file and upload it to database
     */
    public uploadDataToDB() {
        BattlesCollection.countDocuments((err: any, count: number) => {
            if (err) return console.log(err);

            if (count <= 0) {
                FilesReader.ReadCSVAsJson(`${ __dirname }/../data/battles.csv`, (data: any) => {
                    if (data.length <= 0) return false;

                    for (const item of data) {
                        const battle = new BattlesCollection(item);

                        battle.save();
                    }

                    return true;
                });
            }
        });
    }
};
