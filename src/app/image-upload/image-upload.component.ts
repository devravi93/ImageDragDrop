import { Component, OnInit } from '@angular/core';
import { FileHandle } from '../file-handle';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css'],
})
export class ImageUploadComponent implements OnInit {
  uploadedFiles: FileHandle[];
  constructor() {}

  ngOnInit(): void {}

  filesDropped(files: FileHandle[]) {
    this.uploadedFiles = files;
  }
}
