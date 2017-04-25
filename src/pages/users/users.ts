import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { KenyonPage } from '../users/kenyon/kenyon';



@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})


export class UsersPage {
    
    constructor(public navCtrl: NavController, public navParams: NavParams) {}
    
   
    
    onLoadUser(name: string){
        this.navCtrl.push(KenyonPage, {kenyonName: name});
    }
    
   /* kenyonPage(){
    this.navCtrl.push(KenyonPage);
    } */
     
    }


