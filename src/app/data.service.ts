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
    
      "Arijit Singh": "http://212.83.138.48:8740/;stream/1"
    ,
      "AR Rahman": "http://212.83.138.48:8708/;stream/1"
    ,
    
      "DesiZone Radio": "http://www.desizone.nl:8000/;"
    ,
      "RadioCity": "http://208.115.222.203:9998/;"
    }
  ;

  constructor() { }
  changeTheUrl(url: string){
    let au = this.radioObject[url];
    this.urlSource.next(au);
  }



}
