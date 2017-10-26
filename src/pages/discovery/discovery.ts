import { Component } from '@angular/core';

import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-discovery',
  templateUrl: 'discovery.html'
})
export class DiscoveryPage {

  constructor(public navDiscoveryCtrl: AlertController) { }

  doConfirm() {
    let confirm = this.navDiscoveryCtrl.create({
      title: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the intergalactic galaxy?',
      buttons: [
        {
          text: '取消',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: '确定',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present()
  }

}
