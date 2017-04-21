import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { KenyonPage } from '../users/kenyon/kenyon';


@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})


export class UsersPage {
    constructor(public navCtrl: NavController) {}
    
    
    kenyonPage(){
    this.navCtrl.push(KenyonPage);
    }
     
    }


