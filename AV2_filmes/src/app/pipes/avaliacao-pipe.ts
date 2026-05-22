import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'avaliacao'
})
export class AvaliacaoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
