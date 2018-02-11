import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
import { File } from '@ionic-native/file';
import * as $ from "jquery";

declare var cordova: any;


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private file: File) {

  }

  generatePdf() {
    const div = document.getElementById("capture");
    const options = { background: "white", height: div.clientHeight, width: div.clientWidth };

    console.log(div);

    html2canvas(div, options).then((canvas) => {
      let imgData = canvas.toDataURL("image/PNG");
      console.log(imgData)
      let html = ' <img src="' + imgData + '"/>';
      cordova.plugins.pdf.htmlToPDF({
        data: html,
        documentSize: "A4",
        landscape: "portrait",
        type: "share"
      }, (sucess) =>
          $('#rawH').html(sucess),
        (error) => console.log('error:', error));
    })
  }

}
