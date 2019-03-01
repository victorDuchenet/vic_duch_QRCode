import { StoreSearchProvider } from './../../providers/store-search/store-search';
import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
//import { SocialSharing } from '@ionic-native/social-sharing';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public QRCodetext: string;
  public isGenerated: boolean;

  constructor(public navCtrl: NavController/*, private socialSharing: SocialSharing*/,private store: StoreSearchProvider) { }

  GenerateQRCode() {
    if (this.QRCodetext !== null && this.QRCodetext.length > 0) {
      this.isGenerated = true;
    
    } else {
      this.isGenerated = false;
    }
  }

  share() {
    const ee: string = this.convertQRCodeIntoUrl();
    console.log(ee);
    let to: string[] = new Array();
    to.push("victorduchenet@gmail.com")
    //this.socialSharing.shareWithOptions();
  }

  convertQRCodeIntoUrl(): string {
    const svg: string = document.getElementById("qrCodeElement").innerHTML;
    console.log("inner element" + svg);
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const url: string = URL.createObjectURL(blob);
    console.log("url" + url);
    return url;
  }
}
