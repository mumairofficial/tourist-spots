export class Place {
    private _name: string;
    private _lat: number;
    private _lon: number;
    private _district: string;
    private _country: string;
    private _description: string;


	constructor(name: string, lat: number, lon: number, district: string, country: string, description: string) {
		this._name = name;
		this._lat = lat;
		this._lon = lon;
		this._district = district;
		this._country = country;
		this._description = description;
	}
    
}