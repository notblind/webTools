import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-fonts',
  templateUrl: './fonts.component.html',
  styleUrls: ['../style.css']
})
export class FontsComponent implements OnInit {

  fonts: any;
  url = 'https://www.googleapis.com/webfonts/v1/webfonts?key=&sort=popularity';
  f: any;
  searchText: string = '';
  example: string = 'Yesterday, all my troubles seemed so far away, Now it looks as though they’re here to stay,  Mm mm mm mm mm.';
  types_font: any;
  family_font: string;
  order: string;
  type_smth: string;
  constructor(private fontsService: HttpService) { }

  ngOnInit() {
  	this.fontsService.get(this.url).then( res => {
  		this.fonts = res.items;
  		this.f = this.fonts[0].files.regular;
      this.fonts = this.fonts.splice(0,201);
      // console.info(this.fonts);
  	});
  }

  shift_fonts(){

  }

  view_font(font: any){
  	this.types_font = font.files;
  	this.family_font = font.family;
  }

  change(){
    this.example = this.type_smth;
  }
}
        