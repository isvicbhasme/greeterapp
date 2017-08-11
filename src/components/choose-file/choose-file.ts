import { Component, Output, EventEmitter } from '@angular/core';
import { FileChooser } from '@ionic-native/file-chooser';
import { Base64 } from '@ionic-native/base64';

@Component({
  selector: 'choose-file',
  templateUrl: 'choose-file.html'
})
export class ChooseFileComponent {

  @Output() fileselected = new EventEmitter();

  constructor(private fileChooser: FileChooser,
              private base64: Base64) {  }

  ngOnInit() {
    this.fileChooser.open()
    .then(uri => {
      this.base64.encodeFile(uri).then((base64File: string) => {
        console.log(base64File);
        this.fileselected.emit({'file': base64File});
      }, (err) => {
        console.log(err);
      });
    })
    .catch(e => console.log(e));
  }

}
