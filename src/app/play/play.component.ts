import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit,OnDestroy {

  url: string;
  constructor(private data: DataService) { }

  ngOnInit(){
    this.data.currentUrl.subscribe(url => this.url = url);
    console.log(this.url);
  }
  
  ngOnDestroy(){

  }

}
