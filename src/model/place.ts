export class Place {
    private _name: string;
    private _lat: number;
    private _lon: number;

    constructor(private name: string, private lat: number, private lon: number) {
        this._name = name;
        this._lat = lat;
        this._lon = lon;
    }
}