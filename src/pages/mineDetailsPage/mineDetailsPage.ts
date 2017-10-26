import { Component } from '@angular/core';
import { NavParams} from 'ionic-angular';

@Component({
  selector: 'page-mineDetailsPage',
  templateUrl: 'mineDetailsPage.html',
})
export class NavigationDetailsPage {
  item;

  constructor(params: NavParams) {
    this.item = params.data.item;
  }
}
