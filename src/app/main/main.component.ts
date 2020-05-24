import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['../style.css']
})
export class MainComponent implements OnInit {

	toggle: boolean;
  but: boolean = false;
	color_1: string = "#1c4ebb";
	color_2: string = "#1c4ebb";
	color_3: string = "#1c4ebb";
	color_4: string = "#1c4ebb";
	color_5: string = "#1c4ebb";

	step = "first";

  constructor() { }

  ngOnInit() {
  	this.color_1 = this.new_color();
  	this.color_2 = this.new_color();
  	this.color_3 = this.new_color();
  	this.color_4 = this.new_color();
  	this.color_5 = this.new_color();
  }

  new_color(){
  	let red = Number(this.random_number());
  	let green = Number(this.random_number());
  	let blue = Number(this.random_number());

  	let red_1;
  	let green_1;
  	let blue_1;
  	if ( red < 10){
  		red_1 = '0' + red.toString(16);
  	}else{
  		red_1 = red.toString(16);
  	}
  	if ( green < 10){
  		green_1 = '0' + green.toString(16);
  	}else{
  		green_1 = green.toString(16);
  	}
  	if ( blue < 10){
  		blue_1 = '0' + blue.toString(16);
  	}else{
  		blue_1 = blue.toString(16);
  	}

  	return '#' + red_1 + green_1 + blue_1;
  }	

  random_number(){
  	let rand = 0 + Math.random() * (255 + 1 - 0);
  	return Math.floor(rand);
  }

}
