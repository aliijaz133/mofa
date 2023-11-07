import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { timeInterval } from 'rxjs';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {

  showLoader = false;

  currentTime?: number;

  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef;
  userImageSrc: string = '../../../assets/image/new_user_avatar.jpg';

  constructor() {
    setInterval(() => {
      this.currentTime = Date.now();
    }, 1);
  }

  ngOnInit(): void {

    this.showLoader = true;

    setTimeout(() => {
      this.showLoader = false;
    });

  }

  openImageChange() {

    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const files = inputElement.files;

    if (files && files.length > 0) {

      const selectedFile = files[0];

      if (selectedFile) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.userImageSrc = e.target.result;
        };
        reader.readAsDataURL(selectedFile);
      }
    }
  }
}
