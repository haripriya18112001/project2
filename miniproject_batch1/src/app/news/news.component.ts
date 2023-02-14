import { Component } from '@angular/core';
import { news } from '../model1/news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent {
  News:news[]=[
    {
      images:"./assets/image/docure_news1 1.png",
      dis:"Docure General Hospital Sucessfully Completes NABH re-accreditation",
    },
    {
      images:"./assets/image/download 1.png",
      dis:"Covid 19,  Omricon The New Varient Rapidly spreads In India",
    },
    {
      images:"./assets/image/images 1.png",
      dis:"Doccure at the forefront of Digital Heart Failure Management System",
    },
  ]
}


