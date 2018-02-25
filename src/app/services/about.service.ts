import { Injectable } from '@angular/core';

@Injectable()
export class AboutService {

	info= {
		name:'Stylo',
		email: 'Stylo@gmail.com',
		age: 24
	};

	comments= [
		{date: new Date(), message: 'Yep'},
		{date: new Date(), message: 'Yop'},
		{date: new Date(), message: 'Youp'}
	];

  	constructor() { }

  	addComment(comment) {
  		comment.date = new Date()
  		this.comments.push(comment);
  	}

  	getAllComments() {
  		return this.comments;
  	}

  	getInfo() {
  		return this.info;
  	}

}
