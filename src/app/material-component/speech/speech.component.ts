import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';


@Component({
  selector: 'app-speech',
  templateUrl: './speech.component.html',
  styleUrls: ['./speech.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpeechComponent implements OnInit {

  title = 'corso angular';

  isVisibile = false;

  //07 es: string interpolation
  cani = [
    {nome:'Roger',
     razza:'meticcio',
     descrizione: `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
     from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
     originally bred for hunting.`}
  ];

  persone = [
    {nome:"nelson", cognome:"firmani", isOnLine: true, color: 'red'},
    {nome:"paola", cognome:"fidanza", isOnLine: false, color: 'green'},
    {nome:"celeste", cognome:"di pietro", isOnLine: true, color: 'yellow'},
    {nome:"marco", cognome:"evangelista", isOnLine: false, color: 'vhite'}
  ]

  numeroCase = 3;

  stringaCase = 'due';

  color = 'green';

  //08 es: property binding
  isDisabled = false;

  constructor() {
    console.log('costruttore')
   }
  //09 es: event binding
   onClick(e: any){
    console.log(e);
   };

   onInput(e: Event){
    console.log( (<HTMLInputElement>e.target).value );
   };

   //10 two way binding
   onInput2(e: Event){
    this.title = (<HTMLInputElement>e.target).value;
    console.log( (<HTMLInputElement>e.target).value );
   };

   onClick2(e: Event){
    this.title = 'ho cliccato sul bottone';
   };

  ngOnInit(): void {
    console.log('ngOnInit');

/*     setInterval(()=>{
      this.isDisabled = !this.isDisabled;
      console.log('i disable = ' + this.isDisabled);
    },1000) */
  }
}

