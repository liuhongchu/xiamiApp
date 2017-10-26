import { Component } from '@angular/core';

import { CirclePage } from '../circle/circle';
import { MinePage } from '../mine/mine';
import { HomePage } from '../home/home';
import { DiscoveryPage} from '../discovery/discovery';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = DiscoveryPage;
  tab3Root = CirclePage;
  tab4Root = MinePage;

  constructor() {

  }
}
