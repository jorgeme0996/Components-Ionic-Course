import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  usuarios: Observable<any>;
  @ViewChild('lista') lista: IonList;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsers();
  }

  favorite(item) {
    console.log('favorite:', item);
    this.lista.closeSlidingItems();
  }

  share(item) {
    console.log('share:', item);
    this.lista.closeSlidingItems();
  }

  delete(item) {
    console.log('delete:', item);
    
  }
}
