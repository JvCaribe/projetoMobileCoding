import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appCorClassificacao]',
  standalone: true
})
export class CorClassificacaoDiretiva implements OnChanges {
  @Input() appCorClassificacao!: string;

  constructor(private elemento: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['appCorClassificacao']) {
      this.aplicarCor();
    }
  }
  private aplicarCor() {
    const rated = this.appCorClassificacao;
    let cor = '';

    if (rated === 'G' || rated === 'TV-Y' || rated === 'TV-G' || rated === 'TV-Y7') {
      cor = '#3DAA5C';
    }
    else if (rated === 'PG' || rated === 'TV-PG') {
      cor = '#6AAFD6';
    }
    else if (rated === 'PG-13') {
      cor = '#F5A623';
    }
    else if (rated === 'TV-14') {
      cor = '#E8671A';
    }
    else if (rated === 'R') {
      cor = '#D93025';
    }
    else if (rated === 'NC-17' || rated === 'TV-MA') {
      cor = '#1A1A1A';
    }
    else {
      return;
}
this.elemento.nativeElement.style.backgroundColor = cor;
    this.elemento.nativeElement.style.color = 'white';
    this.elemento.nativeElement.style.display = 'inline-flex';
    this.elemento.nativeElement.style.alignItems = 'center';
    this.elemento.nativeElement.style.justifyContent = 'center';
    this.elemento.nativeElement.style.padding = '4px, 10px';
    this.elemento.nativeElement.style.fontWeight = 'bold';
    this.elemento.nativeElement.style.borderRadius = '6px';
}
}
