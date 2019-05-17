import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopInfoComponent } from 'src/app/components/pop-info/pop-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popoverCtlr: PopoverController) { }

  ngOnInit() {
  }

  async mostrarPop(event){
    const popover = await this.popoverCtlr.create({
      component: PopInfoComponent,
      event,
      mode: 'ios',
      backdropDismiss: false
    });

    await popover.present();

    const { data } = await popover.onWillDismiss();
    console.log('Padre:', data);
    
  }

}
