import csvtojson from 'csvtojson';

export default class FilesReader {
    /**
     * Read CSV format file and parse it to JSON
     *
     * @param path
     * @param callback
     */
    public static ReadCSVAsJson(path: string, callback: (data: any) => boolean): void {
        csvtojson()
            .fromFile(path)
            .then((data) => {
                callback(data);
            });
    }
};
