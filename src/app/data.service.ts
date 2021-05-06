import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private urlSource = new BehaviorSubject('default url');
  currentUrl = this.urlSource.asObservable();
  radioObject = {
    "Vybez station": "http://us2.internet-radio.com:8281/live"
    ,
    "Radio Retro": "http://64.71.79.181:5124/;stream/1"
    ,
    "Hits Of Bollywood": "http://50.7.77.115:8174/;"
    ,
    "Non Stop Hindi": "http://198.178.123.14:8216/;stream/1"
    ,
    "Shripad Radio": "http://144.217.203.184:8112/;stream/1"
    ,
    "Sada Bahar Bollywood": "http://192.240.102.133:8512/;stream/1"
    ,
    "Desi Music Mix": "http://66.23.234.242:8012/;stream/1"
    ,
    "Punjabi": "http://192.99.8.192:3224/;"
    ,
    "Masala Radio": "http://198.178.123.23:7354/;stream/1"
    ,
    "Arijit Singh": "https://stream.zenolive.com/rfpf8qec94zuv.aac"
    ,
    "AR Rahman": "http://212.83.138.48:8708/;stream/1"
    ,
    "DesiZone Radio": "http://www.desizone.nl:8000/;"
    ,
    "RadioCity": "http://prclive1.listenon.in:9960/"
    ,
    "Pakfunchat Radio": "http://149.56.147.197:8226/"
    ,
    "JOSH FM": "http://stream.zenolive.com/cm1fkgbv1ceuv"
    ,
    "Radio City Bollywood Mix": "http://prclive1.listenon.in:9928/"
    ,
    "Kishore Kumar": "https://node-11.zeno.fm/0ghtfp8ztm0uv.aac"
    ,
    "Mirchi": "http://peridot.streamguys.com:7150/Mirchi"
    ,
    "Tune India Radio(Australia)": "http://s2.radio.co/se5e166e2f/listen"
    ,
    "Radio HSL": "http://50.7.68.251:7064/stream"
    ,
    "Radio City Indipop": "http://prclive1.listenon.in:9910/"
    ,
    "Suno 1024": "http://50.7.71.27:9693/;"
    ,
    "Radio Dil": "http://50.22.253.45/radiodil"
    ,
    "City 1016": "http://19393.live.streamtheworld.com:3690/ARNCITYAAC_SC?DIST=TuneIn&TGT=TuneIn&maxServers=2&gender=m & ua=RadioTime& ttag=RadioTime"
    ,
    "Evergreen Hits": "http://192.240.102.133:11454/stream"
    ,
    "Hot 89.9": "http://newcap.leanstream.co/CIHTFM?args=tunein_02"
    ,
    "Go 96.3": "http://18863.live.streamtheworld.com:3690/KTWNFM_SC?DIST=TuneIn&TGT=TuneIn&maxServers=2&gender=m&ua= RadioTime & ttag=RadioTime"
    ,
    "Hits 99.9": "http://17263.live.streamtheworld.com:3690/KIOAHD2_SC?DIST=TuneIn&TGT=TuneIn&maxServers=2&tdtok=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImtpZCI6ImZTeXA4In0.eyJpc3MiOiJ0aXNydiIsInN1YiI6I"
    ,
    "Hot 97.7": "http://192.211.51.158:5353/stream"
    ,
    "Radio New York Live": "https://streaming.radiostreamlive.com/radionylive_devices"
    ,
    "Radio City Ghazals": "http://prclive1.listenon.in:8860/"
    ,
    "Calm Radio": "http://streams.calmradio.com/api/295/128/stream"
    ,
    "Indian Link": "http://50.7.70.58:8819/;"
    ,
    "Punjab Rocks Radio": "http://192.151.153.234:9988/;"
    ,
    "BBC Radio 1": "http://bbcmedia.ic.llnwd.net/stream/bbcmedia_radio1_mf_p?s=1537811543&e=1537825943&h=8bb6982447152d93034e47cfae54e7d1"
    ,
    "NDTV India": "http://stream1.ndtv.com:8080/on-ndtvindia"
    ,
    "BBC News": "http://ice66.securenetsystems.net/SPRLIVE"
    ,
    "Bollywood Dil Se": "http://103.16.47.70:7333/;stream.nsv"
    ,
    "Love Guru": "https://prclive4.listenon.in/Ishq"
    ,
    "90s Bollywood": "http://103.16.47.70:7444/;stream.nsv"
    ,
    "Radio Mirchi": "http://peridot.streamguys.com:7150/Mirchi"
    ,
    "Red FM": "http://14013.live.streamtheworld.com/CKYRFM_SC"
    ,
    "Big FM": "https://radioindia.net/radio/sc-bb/icecast.audio"
    ,
    "Fresh Bollywood": "http://103.16.47.70:7222/;stream.nsv"
    ,
    "Mukesh": "http://prclive1.listenon.in:9308/;"
    ,
    "Lata Mangeshkar": "http://prclive1.listenon.in:8832/"
    ,
    // "Mohd. Rafi": "http://stream.zenolive.com/161u376u2gruv"
    "Mohd. Rafi":"https://node-19.zeno.fm/2xx62x8ztm0uv.aac"
    ,
    "Hindi Retro": "http://192.111.151.2:5124/stream"
    ,
    "FM Gold": "https://onlineradiofm.in/apii.php?url=https://radioindia.net/radio/fm_gold/icecast.audio"
    ,
    "FM Rainbow": "https://onlineradiofm.in/apii.php?url=https://radioindia.net/radio/rainbow_radio/icecast.audio"
    ,
    "Vividh Bharti": "https://onlineradiofm.in/apii.php?url=https://radioindia.net/radio/vividhbharti/icecast.audio"
    ,
    "Asha": "http://prclive1.listenon.in:8812/;"
    ,
    "Talat Mahmood": "http://ec2-34-217-86-229.us-west-2.compute.amazonaws.com:9600/talat.ogg"
    ,
    "Ustad Ahmed & Mohammad Hussain": "http://ec2-34-217-86-229.us-west-2.compute.amazonaws.com:9601/hussain.ogg"
    ,
    "106.2-Big FM": "https://eu1.fastcast4u.com/proxy/dzcwbfih_eu?mp=/1"
    ,
    "Radio Umang": "https://streaming.radio.co/s3aaa20a5e/listen"
    ,
    "Radio Olive": "https://playerservices.streamtheworld.com/api/livestream-redirect/OLIVE1063.mp3"
    ,
    "Ujala Radio": "https://server4.ujala.nl/stream/2/listen.mp3"
    ,
    "Radio Namkin": "https://stream.zenolive.com/kgfzrtfbaw5tv.aac"
    ,
    "Desi Bollywood": "https://astro4.rastream.com/india"
    ,
    "Awaz Fm": "https://node-21.zeno.fm/vbrs8s6zetzuv?rj-ttl=5&rj-tok=AAABc6yrqgkAtI3dZzNfSNXtsg"
    ,
    "Bolly bop": "https://stream.radio.co/s2562b6e3a/listen"
    ,
    "Tune India Radio": "https://s2.radio.co/se5e166e2f/listen"
    ,
    "Radio 90.5": "https://ice42.securenetsystems.net/CR90?type=.mp3"
    ,
    "Sayaji Fm": "https://eapps-cs.herokuapp.com/http://comet.shoutca.st:8437/stream"
    ,
    "Radio City Hip Hop": "https://prclive4.listenon.in/HipHop"
    ,
    "Radio Madhuban": "https://icecast.bkwsu.eu:8443/radiomadhuban.ogg"
    ,
    "Hungama Punjabi": "https://radioindia.net/radio/hungamapunjabi/icecast.audio"
    ,
    "Virgin Radio": "http://stream.zeno.fm/agtp9c146qzuv"
    ,
    "Fox Fm": "http://stream.zeno.fm/vu6rzanzetzuv"
    ,
    "Radio City Dance": "https://prclive4.listenon.in/Dance"
    ,
    "CNA News Radio": "http://playerservices.streamtheworld.com/api/livestream-redirect/938NOWAAC_SC"
    ,
    "VDESI": "https://stream.radio.co/s42e977b6c/listen"
    ,
    "FNF Fm": "https://usa1.fastcast4u.com/proxy/qrekthei?mp=/;"
  }
    ;
  private nameSource = new BehaviorSubject('');
  currentName = this.nameSource.asObservable();
  constructor() { }
  changeTheUrl(url: string) {
    let au = this.radioObject[url];
    this.urlSource.next(au);
  }
  changeControl(name: string) {
    this.nameSource.next(name);
  }
}