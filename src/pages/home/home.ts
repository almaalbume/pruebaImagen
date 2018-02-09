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


    let html = '<div id="capture" name="capture" style="padding: 10px; background: #f5da55"><h4 style="color: #000; ">Hello world!</h4></div>';

    cordova.plugins.pdf.htmlToPDF({
      data: html,
      documentSize: "A4",
      landscape: "portrait",
      type: "share"
    }, (sucess) =>
        $('#rawH').html(sucess),
      (error) => console.log('error:', error));

  }

}
