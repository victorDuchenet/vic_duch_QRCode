import { SavedSearchProvider } from './../../providers/saved-search/saved-search';
import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QRCodeComponent } from 'angularx-qrcode';
import { SocialSharing } from '@ionic-native/social-sharing';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public QRCodetext: string;
  public isGenerated: boolean;
  @ViewChild(QRCodeComponent) qrcodeHtml: QRCodeComponent;

  constructor(public navCtrl: NavController, public savedSearch: SavedSearchProvider, private socialSharing: SocialSharing) { }

  GenerateQRCode() {
    if (this.QRCodetext !== null || this.QRCodetext.length > 0) {
      this.isGenerated = true;
      this.savedSearch.storeSearch(this.QRCodetext, new Date());
    } else {
      this.isGenerated = false;
    }
  }

  share() {
    const imgBase64: string = this.qrcodeHtml.el.nativeElement.children[1].src;
    console.log(imgBase64);

    this.socialSharing
      .share(this.QRCodetext, null, imgBase64)
      .catch(err => {
        console.error(err);
      });
  }
}
