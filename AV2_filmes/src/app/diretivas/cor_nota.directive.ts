import {
    Directive,
    ElementRef,
    Input,
    OnInit

} from '@angular/core';

@Directive({
    selector: '[appCorNota]'


})

export class CorNotaDirective implements OnInit{

    @Input() appCorNota!: number;

    constructor(private elemento: ElementRef) {}

    ngOnInit() {
        const nota = Number(this.appCorNota);

        if (nota <= 19 ) {
            this.elemento.nativeElement.style.color ='darkpurple';
        }
        else if (nota >= 20 && nota <= 39){
            this.elemento.nativeElement.style.color ='red';
        }
        else if (nota >=40 && nota <=60){
            this.elemento.nativeElement.style.color = 'orange';
        }
        else if (nota >=61 && nota <=80){
            this.elemento.nativeElement.style.color = 'green';
        }
        else if (nota >=81 && nota <=100){
            this.elemento.nativeElement.style.color = 'darkgreen';
        }
    }
        
    }