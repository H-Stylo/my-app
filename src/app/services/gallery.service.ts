import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GalleryService {

  	constructor(private http:Http) { }

  	/**
  	* 
  	* @param {number} Page number selected
  	*/
  	getPicturesJson(theme:string, pageSize:number, page:number) {
  		return this.http.get("https://pixabay.com/api/?key=8175390-412773850fb12f3a83478c92e&q="+theme+"&per_page="+pageSize+"&page="+page)
  			.map(resp=>resp.json());
  	}

}
