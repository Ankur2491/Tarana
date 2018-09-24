import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit,OnDestroy {

  url: string;
  sub;
  audio;

  @Input() station: string;
  constructor(private data: DataService, private ar: ActivatedRoute) { }

  ngOnInit(){
    //this.data.currentUrl.subscribe(url => this.url = url);
    this.sub = this.ar.params.subscribe(params =>{
      console.log("Params:",params['channel'])
      this.url = params['channel'];
    })
    
    console.log(this.url);
  }
  
  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
