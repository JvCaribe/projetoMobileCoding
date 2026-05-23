import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'classificacao'
})

export class ClassificacaoPipe implements PipeTransform {

  transform(rated: string): string {

      if (rated === 'G') {
        return 'Livre';
      }

      if (rated === 'PG') {
        return '10 anos';
      }

      if (rated === 'PG-13') {
        return '12 anos';
      }

      if (rated === 'R') {
        return '16 anos';
      }

      if (rated === 'NC-17') {
        return '18 anos';
      }

      if(rated === 'TV-Y') {
        return 'Livre';
      }

      if(rated === 'TV-G') {
        return 'Livre';
      }

      if(rated === 'TV-Y7') {
        return '7 anos';
      }

      if(rated === 'TV-PG') {
        return '10 anos';
      }

      if(rated === 'TV-14') {
        return '14 anos';
      }

      if(rated === 'TV-MA') {
        return '18 anos';
      }

    return 'Indisponível';
  }

}
