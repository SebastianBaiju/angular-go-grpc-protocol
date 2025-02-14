import { inject, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ImageService {
  private _toaster = inject(ToastrService)
  constructor() { }

  createUrl(data?: Uint8Array) {
    const blob = new Blob([data ?? new Uint8Array()], { type: "image/jpeg" });
    const urlCreator = window.URL || window.webkitURL;
    return urlCreator.createObjectURL(blob);
  }

  uploadImage(target: HTMLInputElement, allowedTypes: string[] = ['image/jpeg', 'image/png']) {
    return new Promise<{
      filename: string;
      data: Uint8Array
    }>((resolve, reject) => {
      const file = target.files?.[0];
      const maxSize = 1 * 1024 * 1024;
      file?.type

      if (file && file.size > maxSize) {
        this._toaster.error('The file size must not exceed 1MB.')
        reject({
          filename: '',
          data: new Uint8Array()
        });
      }
      if (file && !allowedTypes.includes(file?.type ?? '')) {
        this._toaster.error('Please upload allowed type: png or jpeg')
        reject({
          filename: '',
          data: new Uint8Array()
        });
      }
      if (file) {
        file?.arrayBuffer().then(buff => {
          const uint8Array = new Uint8Array(buff); // x is your uInt8Array
          // perform all required operations with x here.
          resolve({
            filename: file?.name ?? '',
            data: uint8Array
          })
        });
      } else {
        resolve({
          filename: '',
          data: new Uint8Array()
        });
      }

    })

  }
}
