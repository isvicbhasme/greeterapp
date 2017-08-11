import { Injectable } from '@angular/core';

import * as firebaseStorage from 'firebase/storage';

@Injectable()
export class MembersDbModelProvider {

  constructor() {
    console.log('Hello MembersDbModelProvider Provider');
  }

  saveProfilePhotoOnDb(file: any) {
    let refStr = "profile-pic/"+file.name;
    let ref = firebaseStorage.storage().ref().child(refStr);
    this.deleteFile(refStr)
    .then(() => {
      ref.putString(file.data, 'base64').then(console.log("File uploaded successfully")).catch( e => console.log("Error uploading file: "+JSON.stringify(e)))
    });
  }

  deleteFile(refStr: string) : Promise<any> {
    return new Promise((resolve, reject) => {
      var ref = firebaseStorage.storage().ref().child(refStr);
      ref.delete()
      .then(resolve())
      .catch(resolve());
    });
  }

}
