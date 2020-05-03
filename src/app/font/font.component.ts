import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-font',
  templateUrl: './font.component.html',
  styleUrls: ['../style.css']
})
export class FontComponent implements OnInit {

  url = 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAIRM8oSG6j5jUxo_FTidZN2GuDmjmV41I';
  font_name: string;
  font: any;
  link_url: string = '';

  constructor(public router: ActivatedRoute, private fontsService: HttpService) { }
  

  ngOnInit() {
  	this.router.params.subscribe(params=>this.font_name=params['fontFamily']);
  	this.fontsService.get(this.url).then( res => {
  		this.font = res.items.filter( x => x.family == this.font_name);
  		this.font = this.font[0];
  		console.info(this.font);
  	});
  }

}
