import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-srcoll',
  templateUrl: './infinite-srcoll.page.html',
  styleUrls: ['./infinite-srcoll.page.scss'],
})
export class InfiniteSrcollPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  data:any = Array(20);
  constructor() { }

  ngOnInit() {
  }

  loadData(event) {3
    console.log('Cargando siguientes');

    setTimeout(()=>{

      if(this.data.length > 50) {
        event.target.complete();
        this.infiniteScroll.disabled = true
        return;
      }

      const nuevoArr = Array(20);
      this.data.push(...nuevoArr);
      event.target.complete();
    }, 1000)
    
  }

}
