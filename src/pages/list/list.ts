import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SavedSearchProvider } from '../../providers/saved-search/saved-search';
import { storedSearch } from '../../app/models/storedSearch';
import { Camera, CameraOptions } from '@ionic-native/camera';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  public storeSearchs: storedSearch[];
  public TextFromQrScanned: string;

  constructor(public navCtrl: NavController, private savedSearch: SavedSearchProvider, private barCodeScanner: BarcodeScanner, private camera: Camera) { }

  ngOnInit() {
    this.storeSearchs = this.savedSearch.getStoredSearch();
  }

  ScannerBtn() {
    this.barCodeScanner.scan().then(barcodeData => {
      this.TextFromQrScanned = barcodeData.text;
    }).catch(err => {
      console.log('Error', err);
    });
  }

  imagePickerBtn() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
    this.camera.getPicture(options).then((imageData) => {

      let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.error(err)
    });


  }
}
