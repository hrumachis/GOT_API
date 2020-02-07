export class Utils {
    /**
     * Find most frequent value in array
     *
     * @param array
     * @return most frequent value
     */
    public static getMostFrequentValue(array: any[]): any {
        if (array.length === 0) return null;

        const counted = array.reduce((acc, curr) => {
            if (curr in acc) {
                acc[curr]++;
            } else {
                acc[curr] = 1;
            }

            return acc;
        }, {});

        const mode = Object.keys(counted).reduce((a, b) => counted[a] > counted[b] ? a : b);

        return mode;
    }

    /**
     * Filter array to array of unique values
     *
     * @param array
     * @return array of unique values
     */
    public static getUniques(array: any[]): any[] {
        if (array.length === 0) return null;

        const uniques: string[] = [];

        array.forEach((value) => {
            if (uniques.includes(value)) return false;
            uniques.push(value);
        });

        return uniques;
    }

    /**
     * Add all values from array and calculate average sum
     *
     * @param array
     * @return average number
     */
    public static getAverage(array: any[]): number {
        if (array.length === 0) return null;

        let sum: number = 0;
        let length: number = 0;

        for (const numb of array) {
            if (numb !== null) {
                sum += parseInt(numb, 0);
                length++;
            };
        }

        return Math.round(sum/length);
    }
}