import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-load',
  templateUrl: './load.page.html',
  styleUrls: ['./load.page.scss'],
})
export class LoadPage implements OnInit {

  loading:any;
  constructor( private loadingCtrl: LoadingController ) { }

  ngOnInit() {
    this.presentLoading('Espere');

      setTimeout(()=>{
        this.loading.dismiss();
        console.log('termina loading');
      }, 1500)
  }

  async presentLoading( message:string) {
    this.loading = await this.loadingCtrl.create({
      message,
      //duration: 2000
    })
    console.log('inicia loading');
    return await this.loading.present();
  }

}
