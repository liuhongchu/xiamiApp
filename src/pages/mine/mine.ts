import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import {NavigationDetailsPage} from '../mineDetailsPage/mineDetailsPage';

@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html'
})

export class MinePage {
  items = [];
  constructor(public navCtrl: NavController) {
    this.items = [{
        'title': 'Angular',
        'icon': 'angular',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',
        'color': '#E63135'
      },
      {
        'title': 'CSS3',
        'icon': 'css3',
        'description': 'The latest version of cascading stylesheets - the styling language of the web!',
        'color': '#0CA9EA'
      }
    ]
  }

  openNavDetailsPage(item) {
    this.navCtrl.push(NavigationDetailsPage, { item: item });
  }

}




