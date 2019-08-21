import { Component, OnInit, Input ,EventEmitter,Output,ContentChild,ElementRef,AfterContentChecked,AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-regular-task',
  templateUrl: './regular-task.component.html',
  styleUrls: ['./regular-task.component.css']
})
export class RegularTaskComponent implements OnInit,AfterContentChecked,AfterContentInit {
   
  toggle=true;
  eventOnly=[];
  passval={data:''}
  value='';
  date = new Date;
  TotalEvents=null;
  count='';
  @Input('data') dataa : {name:string};
  @Output() todoData = new EventEmitter<{todoData:string,toggle:boolean}>();
  @Output() CountData = new EventEmitter<{CountData:string}>();
  @ContentChild('eventsss') eventt: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
      this.count='*';
       this.eventOnly.push(this.dataa + ' (Events)' )
        console.log('array',this.eventOnly)
        console.log('onchanges',this.dataa)
  }

  ngAfterContentInit(){
   
  } 

  ngAfterContentChecked(){
      console.log('ngContentafterinit',this.eventt.nativeElement.textContent)
      this.TotalEvents=this.eventt.nativeElement.textContent;
      this.CountData.emit(this.TotalEvents);
  }

  onAdd(data: HTMLInputElement){
    if(data.value==''){
      alert('Enter a valid event!');
    }else{
      this.toggle=false;
      this.todoData.emit({todoData:data.value,toggle:this.toggle});
    }
    
  }

}
