import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['../style.css']
})
export class ImageComponent implements OnInit {

	id_image: number;
	image: any;
	url: string = '';

  constructor(public router: ActivatedRoute, private fontsService: HttpService) { }

  ngOnInit() {
  	this.router.params.subscribe(params=>this.id_image=params['idImage']);
  	this.fontsService.get(this.url + this.id_image.toString()).then( res => {
      this.image = res.hits[0];
      console.info(res);
    });
  }

}
