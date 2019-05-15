import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  headerTxt: string = '';
  constructor(public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role:'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Botón Cancelar');
          }
        },
        {
          text: 'Ok',
          handler: (blah) => {
            console.log('Botón Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'Prompt!',
      backdropDismiss: false,
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Ingresa tu nombre'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            console.log(data.name);
            this.headerTxt = data.name;
          }
        }
      ]
    });

    await alert.present();
  }

}
