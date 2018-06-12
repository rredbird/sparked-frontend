import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend-service/backend.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
  providers: [BackendService]
})
export class FileUploadComponent implements OnInit {

  constructor(private backendService:BackendService) { }

  ngOnInit() {
  }

  fileToUpload: File = null;

  handleFileInput(files: FileList) {
      this.fileToUpload = files.item(0);
  }

  uploadFileToActivity() {
    console.log("pause me");
    console.log(this.fileToUpload);
    this.backendService.postFile(this.fileToUpload).subscribe(data => {
      // do something, if upload success
      }, error => {
        console.log(error);
      });
  }
}

