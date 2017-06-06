export class Place {
	private _key: string;
	private _name: string;
	private _lat: number;
	private _lon: number;
	private _district: string;
	private _country: string;
	private _description: string;
	private _distanceText: string;
	private _durationText: string;
	private _distanceInMetersVal: number;
	private _durationInSecondsVal: number;

	constructor(name: string, lat: number, lon: number, district: string, country: string, description: string) {
		this._name = name;
		this._lat = lat;
		this._lon = lon;
		this._district = district;
		this._country = country;
		this._description = description;
		this._distanceText = "";
		this._durationText = "";
		this._durationInSecondsVal = 0;
		this._distanceInMetersVal = 0;
	}

	public get key(): string {
		return this._key;
	}

	public set key(value: string) {
		this._key = value;
	}

	public get latitude(): number {
		return this._lat;
	}

	public set latitude(value: number) {
		this._lat = value;
	}

	public get longitude(): number {
		return this._lon;
	}

	public set longitude(value: number) {
		this._lon = value;
	}

	public get distanceText(): string {
		return this._distanceText;
	}

	public set distanceText(value: string) {
		this._distanceText = value;
	}

	public get durationText(): string {
		return this._durationText;
	}

	public set durationText(value: string) {
		this._durationText = value;
	}

	public get distanceInMetersVal(): number {
		return this._distanceInMetersVal;
	}

	public set distanceInMetersVal(value: number) {
		this._distanceInMetersVal = value;
	}

	public get durationInSecondsVal(): number {
		return this._durationInSecondsVal;
	}

	public set durationInSecondsVal(value: number) {
		this._durationInSecondsVal = value;
	}

}