import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-kenyon',
  templateUrl: 'kenyon.html'
})


export class KenyonPage {
    
    name: string = this.navParams.get('name'); 
    
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.name = this.navParams.get('kenyonName');
    }
    
               onGoBack(){
               
                //this.navCtrl.pop();
                this.navCtrl.popToRoot();
               }
    }