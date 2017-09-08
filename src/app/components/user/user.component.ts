import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  	selector: 'app-user',
  	templateUrl: './user.component.html',
	//styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

	users: User[];

  	constructor(private dataService: DataService) { }

  	ngOnInit() {

    	this.dataService.getPosts().subscribe(users => {
			  this.users = users;
		});
		
  	}
}

interface User {
	id: number,
	name: string,
	username: string,
	email: string,
	address: Address
}

interface Address {
	street: string,
	suite: string,
	city: string,
	zipcode: string,
	geo: {
		lat: number,
		lng: number
	}
}
