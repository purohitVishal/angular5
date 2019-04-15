import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-firstc',
  templateUrl: './firstc.component.html',
  styleUrls: ['./firstc.component.css']
})
export class FirstcComponent implements OnInit {

  constructor(private adataservice: DataService) {  }

  ngOnInit() {

  	console.log("worked");
  	this.adataservice.getCall();
  }

}
