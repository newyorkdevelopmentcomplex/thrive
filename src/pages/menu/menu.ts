import { Tab5Page } from './../tab5/tab5';
import { Tab4Page } from './../tab4/tab4';
import { Tab3Page } from './../tab3/tab3';
import { Tab2Page } from './../tab2/tab2';
import { Tab1Page } from './../tab1/tab1';
import { TabsPage } from './../tabs/tabs';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, Nav } from 'ionic-angular';
 
export interface PageInterface {
  title: string;
  pageName: string;
  tabComponent?: any;
  index?: number;
  icon: string;
}
 
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  // Basic root for our content view
  rootPage = 'TabsPage';
 
  // Reference to the app's root nav
  @ViewChild(Nav) nav: Nav;
 
  pages: PageInterface[] = [
    { title: 'Tab 1', pageName: 'TabsPage', tabComponent: 'Tab1Page', index: 0, icon: 'home' },
    { title: 'Tab 2', pageName: 'TabsPage', tabComponent: 'Tab2Page', index: 1, icon: 'contacts' },
    { title: 'Tab 3', pageName: 'TabsPage', tabComponent: 'Tab3Page', index: 0, icon: 'share' },
    { title: 'Tab 4', pageName: 'TabsPage', tabComponent: 'Tab4Page', index: 0, icon: 'add' },
    { title: 'Tab 5', pageName: 'TabsPage', tabComponent: 'Tab5Page', index: 0, icon: 'send' },
    { title: 'Special', pageName: 'SpecialPage', icon: 'shuffle' },
  ];
 
  constructor(public navCtrl: NavController) { }
 
  openPage(page: PageInterface) {
    let params = {};
 
    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
    }
 
    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNav() && page.index != undefined) {
      this.nav.getActiveChildNav().select(page.index);
    } else {
      // Tabs are not active, so reset the root page 
      // In this case: moving to or from SpecialPage
      this.nav.setRoot(page.pageName, params);
    }
  }
 
  isActive(page: PageInterface) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNav();
 
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }
 
    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.pageName) {
      return 'primary';
    }
    return;
  }
 
}