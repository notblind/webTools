import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['../style.css']
})
export class ColorComponent implements OnInit {

	hex: string = '000000';
	rgb_1: number = 0;
	rgb_2: number = 0;
	rgb_3: number = 0;

	rgbp_1: number = 0;
	rgbp_2: number = 0;
	rgbp_3: number = 0;

	color: string  = '#000000';;
  constructor() { }

  toggle: boolean;

  ngOnInit() {
  	console.info(this.rgb_1.toString(16) + 
  	this.rgb_2.toString(16) + 
  	this.rgb_3.toString(16));
  }

  changeHex(){
  	// console.info(this.hex.substring(2, 3));
  	// this.rgb_1 = Number('0x' + this.hex.substring(0, 2));
  	// this.rgb_2 = Number('0x' + this.hex.substring(2, 4));
  	// this.rgb_3 = Number('0x' + this.hex.substring(4, 6));
  	// console.info(Number('0x' + this.hex));
  	if (this.hex.length == 6) {
			this.rgb_1 = Number('0x' + this.hex.substring(0, 2));
	  	this.rgb_2 = Number('0x' + this.hex.substring(2, 4));
	  	this.rgb_3 = Number('0x' + this.hex.substring(4, 6));
  	}
  	if (this.hex.length == 3) {
			this.rgb_1 = Number('0x' + this.hex.substring(0, 1) + this.hex.substring(0, 1));
	  	this.rgb_2 = Number('0x' + this.hex.substring(1, 2) + this.hex.substring(1, 2));
	  	this.rgb_3 = Number('0x' + this.hex.substring(2, 3) + this.hex.substring(2, 3));
  	}
  	this.color = '#' + this.hex;
		this.procent_rgb();

  }
  changeRba(){
  	let r = Number(this.rgb_1);
  	let g = Number(this.rgb_2);
  	let b = Number(this.rgb_3);

  	let r_1;
  	let g_1;
  	let b_1;

  	if ( r < 10){
  		r_1 = '0' + r.toString(16);
  	}else{
  		r_1 = r.toString(16);
  	}
  	if ( g < 10){
  		g_1 = '0' + g.toString(16);
  	}else{
  		g_1 = g.toString(16);
  	}
  	if ( b < 10){
  		b_1 = '0' + b.toString(16);
  	}else{
  		b_1 = b.toString(16);
  	}

  	this.hex = r_1 + g_1 + b_1;
  	this.color = '#' + this.hex;
  	this.procent_rgb();
  }
  procent_rgb(){
  	this.rgbp_1 = (this.rgb_1 * 100) / 255;
  	this.rgbp_2 = (this.rgb_2 * 100) / 255;
  	this.rgbp_3 = (this.rgb_3 * 100) / 255;
  }


}
