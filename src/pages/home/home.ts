import { SavedSearchProvider } from './../../providers/saved-search/saved-search';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { SocialSharing } from '@ionic-native/social-sharing';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public QRCodetext: string;
  public isGenerated: boolean;

  constructor(public navCtrl: NavController, public savedSearch: SavedSearchProvider) { }

  GenerateQRCode() {
    if (this.QRCodetext !== null || this.QRCodetext.length > 0) {
      this.isGenerated = true;
      this.savedSearch.storeSearch(this.QRCodetext, new Date());
    } else {
      this.isGenerated = false;
    }
  }

  share() {
    const ee: string = this.convertQRCodeIntoUrl();
    console.log(ee);

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
