import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SavedSearchProvider } from '../../providers/saved-search/saved-search';
import { storedSearch } from '../../app/models/storedSearch';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';



@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  public storeSearchs: storedSearch[];
  public TextFromQrScanned: string;

  constructor(public navCtrl: NavController, private savedSearch: SavedSearchProvider, private barCodeScanner: BarcodeScanner , private imagePicker : ImagePicker) { }

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
    
  imagePickerBtn(){
    let options: ImagePickerOptions = {  
      quality: 100,  
      width: 600,  
      height: 600,
     outputType:1,
      maximumImagesCount: 1
      //while setting a number 15 we can load 15 images in one selection.  
  }; 
    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[i]);
      }
    }, (err) => console.error(err));
  }
}
