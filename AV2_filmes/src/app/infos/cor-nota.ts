import { Directive,  ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appCorNota]',
  standalone: true
})
export class CorNotaDiretiva implements OnChanges {
   @Input() appCorNota!: number | string;
 
    constructor(private elemento: ElementRef) {}
 
    ngOnChanges(changes: SimpleChanges) {
        if (changes['appCorNota']) {
            this.aplicarCor();
        }
    }
 
    private aplicarCor() {
        const nota = Number(this.appCorNota);
 
        if (nota <= 19) {
            this.elemento.nativeElement.style.backgroundColor = '#5B21B6';
        }
        else if (nota >= 20 && nota <= 39) {
            this.elemento.nativeElement.style.backgroundColor = 'red';
        }
        else if (nota >= 40 && nota <= 59) {
            this.elemento.nativeElement.style.backgroundColor = 'orange';
        }
        else if (nota >=60 && nota <=74) {
          this.elemento.nativeElement.style.backgroundColor = 'yellow';
        }

        else if (nota >= 75 && nota <= 89) {
            this.elemento.nativeElement.style.backgroundColor = 'green';
        }
        else if (nota >= 90 && nota <= 100) {
            this.elemento.nativeElement.style.backgroundColor = '#1B5E20';
        }
      this.elemento.nativeElement.style.color = 'white';

  this.elemento.nativeElement.style.display = 'inline-flex';
  this.elemento.nativeElement.style.alignItems = 'center';
  this.elemento.nativeElement.style.justifyContent = 'center';
  this.elemento.nativeElement.style.width = '32px';
  this.elemento.nativeElement.style.height = '32px';
  this.elemento.nativeElement.style.fontWeight = 'bold';
  this.elemento.nativeElement.style.borderRadius = '6px';
  }
    }
