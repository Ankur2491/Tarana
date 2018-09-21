import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tarana';
  radioObject = [
    {
      "name": "Vybez station",
      "url": "http://us2.internet-radio.com:8281/live"
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
      "url": "http://208.115.222.203:9998/;"
    }
  ];
  

}
