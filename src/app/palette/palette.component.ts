import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['../style.css']
})


//563492ad6f917000010000012a5a845007334e278a961ad3625ecb89
export class PaletteComponent implements OnInit {

  url: string = '';
  images: any[] = [];

  page: number = 1;
  faSearch: any;
  search: string = '';
  max_pages: number = 0;
  orientation: string = 'horizontal';

  constructor(private fontsService: HttpService) { }

  ngOnInit() {
    this.faSearch = faSearch;
    this.getImages();
  }

  makeUrl(): string{
    let url = this.url + this.orientation.toString() + '&page=' + this.page.toString();
    if (this.search){
      url = url + '&q='+ this.search.toString()
    }
    return url
  }

  getImages(){
    this.fontsService.get(this.makeUrl()).then( res => {
      this.images = res.hits;
      this.max_pages = Math.ceil(res.total/30)
      console.info(res);
    });
  }

  inc_page(){
    this.page = this.page + 1;
    this.getImages();
  }

  dec_page(){
    if (this.page > 1){
      this.page = this.page - 1;
      this.getImages();
    }
  }

  changeOri(ori: string){
      this.orientation =  ori;
      this.getImages();
  }

}
