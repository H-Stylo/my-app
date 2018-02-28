import { Component, OnInit } from '@angular/core';
import "rxjs/add/operator/map";
import { GalleryService } from '../services/gallery.service';

@Component({
  	selector: 'app-gallery',
  	templateUrl: './gallery.component.html',
  	styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

	pagePictures:any;

	inputSearch: string = "";

	currentPage:number = 1;

	pageSize:number = 12;

	pages:Array<Number>=[];

	totalPages:number;

  	constructor(private galleryService:GalleryService) { }

  	ngOnInit() {
  	}

  	/**
  	* Search pictures fromPixabay API
  	* @param {string} Searched theme to find
  	*/
  	onSearchPictures(dataForm) {
  		this.onGoToPage(1);
  	}

  	/**
  	*
  	* @param {number} Page number selected
  	*/
  	onGoToPage(numPage) {
  		this.currentPage = numPage;
  		this.galleryService.getPicturesJson(this.inputSearch, this.pageSize, this.currentPage)
  			.subscribe(data=>{
  				this.pagePictures = data;
  				this.totalPages = Math.round(Number(data.totalHits)/this.pageSize);
  				this.pages = new Array(this.totalPages);
  			},err=>{
  				console.log(err);
  			});


  	}

}
