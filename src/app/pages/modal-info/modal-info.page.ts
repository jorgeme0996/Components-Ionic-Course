import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input() nombre;
  @Input() pais;

  constructor(private modalCtlr: ModalController) { }

  ngOnInit() {
  }

  salirSinArgumentos() {
    this.modalCtlr.dismiss();
    console.log('Cierra Modal sin argumentos')
  }

  salirConArgumentos() {
    this.modalCtlr.dismiss({
      nombre: 'Felipe',
      pais: 'España'
    });
    console.log('Cierra Modal con argumentos')
  }
}
