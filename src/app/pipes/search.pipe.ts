import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arreglo: any[], texto: string, columna: string): any[] {

    if( texto === ''){
      return arreglo
    }

    texto.toLocaleLowerCase()

    return arreglo.filter(item => {
      return item[columna].toLowerCase().includes(texto)
    });
  }

}
