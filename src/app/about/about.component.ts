import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

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

	inputComment= {date:null, message:""};

  	constructor() { }

  	ngOnInit() {
  	}

  	onAddComment(inputMessage) {
  		inputMessage.date = new Date()
  		this.comments.push(inputMessage)
  		this.inputComment.message=""
  	}

}