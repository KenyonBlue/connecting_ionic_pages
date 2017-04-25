import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CentrePage } from '../centre/centre'; 
import { CincinnatiPage } from '../cincinnati/cincinnati'; 
import { LexingtonPage } from '../lexington/lexington'; 
import { HomePage } from '../home/home';
/**
 * Generated class for the Hometab tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */
@Component({
  selector: 'page-hometab',
  templateUrl: 'hometab.html'
})

export class HometabPage {

  tab1Root: any = HomePage;
  tab2Root: any = CincinnatiPage;
  tab3Root: any = LexingtonPage;
  tab4Root: any = CentrePage;

  constructor(public navCtrl: NavController) {}

}
