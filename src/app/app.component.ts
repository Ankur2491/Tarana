import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { DataService } from './data.service';
import { PlayComponent } from './play/play.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  @ViewChild(PlayComponent) playref;
  title = 'tarana';
  loadComponent: boolean;
  url: string;
  audio;
  showPlay = true;
  showPause = false;
  nowPlaying;
  nameSub;
  urlSub;
  pauseMap={"paused":null,"showPause":null};
  selectedStation: string;
  constructor(private data: DataService){}
  radioObject = [
    {
      "name": "Vybez station",
      "url": "http://us2.internet-radio.com:8281/live"
    },
    {
      "name": "Pakfunchat Radio",
      "url": "http://149.56.147.197:8226/"
    },
    {
      "name": "JOSH FM",
      "url": "http://stream.zenolive.com/cm1fkgbv1ceuv"
    },
    {
      "name": "Radio City Bollywood Mix",
      "url":  "http://prclive1.listenon.in:9928/"
    },
    {
      "name": "Kishore Kumar",
      "url": "http://prclive1.listenon.in:8834/"
    },
    {
      "name": "Mirchi",
      "url": "http://peridot.streamguys.com:7150/Mirchi"
    },
    {
      "name": "Tune India Radio(Australia)",
      "url": "http://s2.radio.co/se5e166e2f/listen"
    },
    {
      "name": "Radio HSL",
      "url": "http://50.7.68.251:7064/stream"
    },
    {
      "name": "Radio City Indipop",
      "url": "http://prclive1.listenon.in:9910/"
    },
    {
      "name": "Suno 1024",
      "url": "http://50.7.71.27:9693/;"
    },
    {
      "name": "Radio Dil",
      "url": "http://50.22.253.45/radiodil"
    },
    {
      "name": "City 1016",
      "url": "http://19393.live.streamtheworld.com:3690/ARNCITYAAC_SC?DIST=TuneIn&TGT=TuneIn&maxServers=2&gender=m&ua=RadioTime&ttag=RadioTime"
    },
    {
      "name": "Evergreen Hits",
      "url": "http://192.240.102.133:11454/stream"
    },

    {
      "name": "Radio Retro",
      "url": "http://64.71.79.181:5124/;stream/1"
    },
    {
      "name": "Hits Of Bollywood",
      "url": "http://50.7.77.115:8174/;"
    },
    {
      "name": "Non Stop Hindi",
      "url": "http://198.178.123.14:8216/;stream/1"
    },
    {
      "name": "Shripad Radio",
      "url": "http://144.217.203.184:8112/;stream/1"
    },
    {
      "name": "Sada Bahar Bollywood",
      "url": "http://192.240.102.133:8512/;stream/1"
    },
    {
      "name": "Desi Music Mix",
      "url": "http://66.23.234.242:8012/;stream/1"
    },
    {
      "name": "Punjabi",
      "url": "http://192.99.8.192:3224/;"
    },
    {
      "name": "Masala Radio",
      "url": "http://198.178.123.23:7354/;stream/1"
    },
    {
      "name": "Arijit Singh",
      "url": "http://212.83.138.48:8740/;stream/1"
    },
    {
      "name": "AR Rahman",
      "url": "http://212.83.138.48:8708/;stream/1"
    },
    {
      "name": "DesiZone Radio",
      "url": "http://www.desizone.nl:8000/;"
    },
    {
      "name": "RadioCity",
      "url": "http://prclive1.listenon.in:9960/"
    }
  ];

  changeUrl(str){
  if(str == this.nowPlaying && this.pauseMap["paused"] !== str){
    //console.log("Pausing")
    this.pauseMap.paused=str;
    //console.log("PM:",this.pauseMap);
    this.audio.pause();
    this.pauseMap.showPause='';
  }
  else if(str == this.nowPlaying && this.pauseMap["paused"] === str){
    //console.log("Playing");
    this.pauseMap.paused='';
    this.audio.play();
    this.pauseMap.showPause=str;

  }
  else{
  //console.log("else");
  this.data.changeControl(str);
  this.data.changeTheUrl(str);
  this.audio.src = this.url;
  this.audio.load();
  this.audio.play();
  this.pauseMap.showPause=str;
  }

}
ngOnInit(){
this.audio = new Audio();
this.nameSub = this.data.currentName.subscribe(name => this.nowPlaying = name);
this.urlSub = this.data.currentUrl.subscribe(url => this.url = url);
}
  
}
