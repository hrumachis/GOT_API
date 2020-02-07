export interface CollectionsInterface {
    BATTLES: string;
}

export class Config {
    public static DB_COLLECTIONS: CollectionsInterface = {
        BATTLES: "battles",
    };
    public static DB_DATABASE: string = "GOT";
    public static DB_USERNAME: string = "admin418";
    public static DB_PASSWORD: string = "DTrL0yyiWI955tK0";
    public static SERVER_HOST: string = "localhost";
    public static SERVER_PORT: string | number = process.env.PORT || 8080;
};
