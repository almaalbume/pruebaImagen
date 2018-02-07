import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
import { File } from '@ionic-native/file';
import * as $ from "jquery";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private file: File) {

  }

  generatePdf() {
    //console.log(document.querySelector("#capture"))

    html2canvas(document.querySelector("#capture")).then(canvas => {
      //   console.log(canvas)

      var doc = new jsPDF("p", "mm", "a4");
      let imgData = canvas.toDataURL("image/PNG");
      console.log(imgData)
      //doc.addImage(imgData, 'PNG', 20, 20);
      
      //let pdfOutput = doc.output();
      
      //   let buffer = new ArrayBuffer(pdfOutput.length);
      //   let array = new Uint8Array(buffer);

      //   for (var i = 0; i < pdfOutput.length; i++) {
      //     array[i] = pdfOutput.charCodeAt(i);
      //   }

      // const directory = this.file.externalApplicationStorageDirectory;


      // const fileName = "example.pdf";


      // this.file.writeFile(directory, fileName, buffer)
      //   .then((success) => console.log("File created Succesfully" + JSON.stringify(success)))
      //   .catch((error) => console.log("Cannot Create File " + JSON.stringify(error)));




    });
  }

}
