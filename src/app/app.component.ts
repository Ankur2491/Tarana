import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { DataService } from './data.service';
import { PlayComponent } from './play/play.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
  pauseMap = { "paused": null, "showPause": null };
  selectedStation: string;
  constructor(private data: DataService) { }
  radioObject = [
    {
      "name": "Vividh Bharti",
      "url": "http://51.15.208.163:8081/radio/vividhbharati/icecast.audio"
    },
    {
      "name": "FM Rainbow",
      "url": "http://51.15.208.163:8081/radio/fmrainbow/icecast.audio"
    },
    {
      "name": "FM Gold",
      "url": "http://51.15.208.163:8081/radio/fmgold/icecast.audio"
    },
    // {
    //   "name": "Thumri",
    //   "url": "http://ec2-54-244-2-94.us-west-2.compute.amazonaws.com:9600/thumri.ogg"
    // },
    {
      "name": "Mohd. Rafi",
      // "url": "http://stream.zenolive.com/161u376u2gruv"
      "url": "https://node-19.zeno.fm/2xx62x8ztm0uv.aac"
    },
    // {
    //   "name": "Lata Mangeshkar",
    //   "url": "http://prclive1.listenon.in:8832/"
    // },
    // {
    //   "name": "Asha",
    //   "url": "http://prclive1.listenon.in:8812/;"
    // },
    // {
    //   "name": "Mukesh",
    //   "url": "http://prclive1.listenon.in:9308/;"
    // },
    // {
    //   "name": "Talat Mahmood",
    //   "url": "http://ec2-34-217-86-229.us-west-2.compute.amazonaws.com:9600/talat.ogg"
    // },
    // {
    //   "name": "Ustad Ahmed & Mohammad Hussain",
    //   "url" : "http://ec2-34-217-86-229.us-west-2.compute.amazonaws.com:9601/hussain.ogg"
    // },
    {
      "name": "Hindi Retro",
      "url": "http://192.111.151.2:5124/stream"
    },
    {
      "name": "Fresh Bollywood",
      "url": "http://103.16.47.70:7222/;stream.nsv"
    },
    {
      "name": "Big FM",
      "url": "http://sc-bb.1.fm:8017/"
    },
    {
      "name": "106.2-Big FM",
      "url": "https://eu1.fastcast4u.com/proxy/dzcwbfih_eu?mp=/1"
    },
    {
      "name": "Radio Umang",
      "url": "https://streaming.radio.co/s3aaa20a5e/listen"
    },
    // {
    //   "name": "Red FM",
    //   "url": "http://14013.live.streamtheworld.com/CKYRFM_SC"
    // },
    {
      "name": "Radio Mirchi",
      "url": "http://peridot.streamguys.com:7150/Mirchi"
    },
    {
      "name": "90s Bollywood",
      "url": "http://103.16.47.70:7444/;stream.nsv"
    },
    {
      "name": "Love Guru",
      "url": "https://prclive4.listenon.in/Ishq"
    },
    {
      "name": "Bollywood Dil Se",
      "url": "http://103.16.47.70:7333/;stream.nsv"
    },
    {
      "name": "JOSH FM",
      "url": "http://stream.zenolive.com/cm1fkgbv1ceuv"
    },
    // {
    //   "name": "Radio City Bollywood Mix",
    //   "url": "http://prclive1.listenon.in:9928/"
    // },
    {
      "name": "Radio Olive",
      "url": "https://playerservices.streamtheworld.com/api/livestream-redirect/OLIVE1063.mp3"
    },
    // {
    //   "name": "Kishore Kumar",
    //   "url": "http://prclive1.listenon.in:8834/"
    // },
    {
      "name": "Ujala Radio",
      "url": "https://server4.ujala.nl/stream/2/listen.mp3"
    },
    {
      "name": "Mirchi",
      "url": "http://peridot.streamguys.com:7150/Mirchi"
    },
    {
      "name": "Tune India Radio(Australia)",
      "url": "http://s2.radio.co/se5e166e2f/listen"
    },
    // {
    //   "name": "Radio HSL",
    //   "url": "http://50.7.68.251:7064/stream"
    // },
    {
      "name": "Radio Namkin",
      "url": "https://stream.zenolive.com/kgfzrtfbaw5tv.aac"
    },
    // {
    //   "name": "Radio City Indipop",
    //   "url": "http://prclive1.listenon.in:9910/"
    // },
    {
      "name": "Desi Bollywood",
      "url": "https://astro4.rastream.com/india"
    },
    // {
    //   "name": "Suno 1024",
    //   "url": "http://50.7.71.27:9693/;"
    // },
    {
      "name": "Bolly bop",
      "url": "https://stream.radio.co/s2562b6e3a/listen"
    },
    // {
    //   "name": "Radio Dil",
    //   "url": "http://50.22.253.45/radiodil"
    // },
    {
      "name": "Tune India Radio",
      "url": "https://s2.radio.co/se5e166e2f/listen"
    },
    // {
    //   "name": "City 1016",
    //   "url": "http://19393.live.streamtheworld.com:3690/ARNCITYAAC_SC?DIST=TuneIn&TGT=TuneIn&maxServers=2&gender=m&ua=RadioTime&ttag=RadioTime"
    // },
    {
      "name": "Radio 90.5",
      "url": "https://ice42.securenetsystems.net/CR90?type=.mp3"
    },
    {
      "name": "Radio Retro",
      "url": "http://64.71.79.181:5124/;stream/1"
    },
    // {
    //   "name": "Hits Of Bollywood",
    //   "url": "http://50.7.77.115:8174/;"
    // },
    {
      "name": "Sayaji Fm",
      "url": "https://eapps-cs.herokuapp.com/http://comet.shoutca.st:8437/stream"
    },
    {
      "name": "Non Stop Hindi",
      "url": "http://198.178.123.14:8216/;stream/1"
    },
    {
      "name": "Shripad Radio",
      "url": "http://144.217.203.184:8112/;stream/1"
    },
    // {
    //   "name": "Sada Bahar Bollywood",
    //   "url": "http://192.240.102.133:8512/;stream/1"
    // },
    {
      "name": "Radio City Hip Hop",
      "url": "https://prclive4.listenon.in/HipHop"
    },
    // {
    //   "name": "Desi Music Mix",
    //   "url": "http://66.23.234.242:8012/;stream/1"
    // },
    {
      "name": "Radio Madhuban",
      "url": "https://icecast.bkwsu.eu:8443/radiomadhuban.ogg"
    },
    // {
    //   "name": "Punjabi",
    //   "url": "http://192.99.8.192:3224/;"
    // },
    {
      "name": "Hungama Punjabi",
      "url": "https://radioindia.net/radio/hungamapunjabi/icecast.audio"
    },
    {
      "name": "Masala Radio",
      "url": "http://198.178.123.23:7354/;stream/1"
    },
    {
      "name": "Arijit Singh",
      "url": "https://stream.zenolive.com/rfpf8qec94zuv.aac"
    },
    // {
    //   "name": "AR Rahman",
    //   "url": "http://212.83.138.48:8708/;stream/1"
    // },
    {
      "name": "DesiZone Radio",
      "url": "http://www.desizone.nl:8000/;"
    },
    {
      "name": "RadioCity",
      "url": "http://prclive1.listenon.in:9960/"
    },
    // {
    //   "name": "Hot 89.9",
    //   "url": "http://newcap.leanstream.co/CIHTFM?args=tunein_02"
    // },
    {
      "name": "Virgin Radio",
      "url": "http://stream.zeno.fm/agtp9c146qzuv"
    },
    // {
    //   "name": "Go 96.3",
    //   "url": "http://18863.live.streamtheworld.com:3690/KTWNFM_SC?DIST=TuneIn&TGT=TuneIn&maxServers=2&gender=m&ua=RadioTime&ttag=RadioTime"
    // },
    {
      "name": "Fox Fm",
      "url": "http://stream.zeno.fm/vu6rzanzetzuv"
    },
    // {
    //   "name": "Hits 99.9",
    //   "url": "http://17263.live.streamtheworld.com:3690/KIOAHD2_SC?DIST=TuneIn&TGT=TuneIn&maxServers=2&tdtok=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImtpZCI6ImZTeXA4In0.eyJpc3MiOiJ0aXNydiIsInN1YiI6I"
    // },
    {
      "name": "Radio City Dance",
      "url": "https://prclive4.listenon.in/Dance"
    },
    // {
    //   "name": "Hot 97.7",
    //   "url": "http://192.211.51.158:5353/stream"
    // },
    {
      "name": "CNA News Radio",
      "url": "http://playerservices.streamtheworld.com/api/livestream-redirect/938NOWAAC_SC"
    },
    {
      "name": "Radio New York Live",
      "url": "https://streaming.radiostreamlive.com/radionylive_devices"
    },
    {
      "name": "Radio City Ghazals",
      "url": "http://prclive1.listenon.in:8860/"
    },
    {
      "name": "Calm Radio",
      "url": "http://streams.calmradio.com/api/295/128/stream"
    },
    // {
    //   "name": "Indian Link",
    //   "url": "http://50.7.70.58:8819/;"
    // },
    {
      "name": "VDESI",
      "url": "https://stream.radio.co/s42e977b6c/listen"
    },
    // {
    //   "name": "Punjab Rocks Radio",
    //   "url": "http://192.151.153.234:9988/;"
    // },
    {
      "name": "FNF Fm",
      "url": "https://usa1.fastcast4u.com/proxy/qrekthei?mp=/;"
    },
    {
      "name": "BBC Radio 1",
      "url": "http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio1_mf_p?s=1537811543&e=1537825943&h=8bb6982447152d93034e47cfae54e7d1"
    },
    // {
    //   "name": "NDTV India",
    //   "url": "http://stream1.ndtv.com:8080/on-ndtvindia"
    // },
    {
      "name": "BBC News",
      "url": "http://ice66.securenetsystems.net/SPRLIVE"
    }
  ];
  changeUrl(str) {
    if (str == this.nowPlaying && this.pauseMap["paused"] !== str) {
      //console.log("Pausing")
      this.pauseMap.paused = str;
      //console.log("PM:",this.pauseMap);
      this.audio.pause();
      this.pauseMap.showPause = '';
    }
    else if (str == this.nowPlaying && this.pauseMap["paused"] === str) {
      //console.log("Playing");
      this.pauseMap.paused = '';
      this.audio.play();
      this.pauseMap.showPause = str;

    }
    else {
      //console.log("else");
      this.data.changeControl(str);
      this.data.changeTheUrl(str);
      this.audio.src = this.url;
      this.audio.load();
      this.audio.play();
      this.pauseMap.showPause = str;
    }

  }
  ngOnInit() {
    // this.radioObject.sort((obj1, obj2)=>{return obj1.name<obj2.name?-1:1})
    this.audio = new Audio();
    this.nameSub = this.data.currentName.subscribe(name => this.nowPlaying = name);
    this.urlSub = this.data.currentUrl.subscribe(url => this.url = url);
  }

}
