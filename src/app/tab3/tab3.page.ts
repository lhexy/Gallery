import { Component } from '@angular/core';
import { AlertController, NavController} from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  contName ="";
  contNumber = "";
  contacts: any = [];

  constructor(public alertCtrl: AlertController) { }

  save() {
    let contact = {
      name: this.contName,
      number: this.contNumber
    }
      this.contacts.push(contact);
      this.clearField();
    }

    clearField() {
      this.contName ="";
      this.contNumber = "";
    }

    async confirm(con){
      const confirm = await this.alertCtrl.create({
        message: 'Do you want to delete this contact?',
        buttons: [
          {
            text: 'CANCEL',
            role: 'cancel',
            handler: () => {
              }
            },
            {
              text: 'Confirm',
              handler: () => {
               let index = this.contacts.indexOf(con);
               if(index > -1){
                 this.contacts.splice(index, 1);
               }
              }
            }
          ]
        });
      await confirm.present();
    }

}
