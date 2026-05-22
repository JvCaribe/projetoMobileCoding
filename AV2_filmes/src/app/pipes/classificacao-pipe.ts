import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'classificacao'
})

export class ClassificacaoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
