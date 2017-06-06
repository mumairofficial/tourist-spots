export class Point {
    private _lat: number;
    private _lon: number;

	constructor(lat: number, lon: number) {
		this._lat = lat;
		this._lon = lon;
	}

	public get lat(): number {
		return this._lat;
	}

	public set lat(value: number) {
		this._lat = value;
	}

	public get lon(): number {
		return this._lon;
	}

	public set lon(value: number) {
		this._lon = value;
	}
    
}