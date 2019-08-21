import { Component,ElementRef,ViewChild,OnInit,SimpleChanges,AfterViewInit,AfterViewChecked,OnDestroy } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewChecked{
  list=[];
  event=[];
  act={name:''}
  title = 'to-do';
  disabble=true;
  important=" - Event"
  togg;
  texxt='';
  // Evnt = 'Daily scrum meeting at 12:00 pm';
  importantVisibility=false;
  visiblemain=false;
  msg;
  bool=false;
  head1='Events';
  EventCount=null;
  cc=null;
  @ViewChild('action') action : ElementRef;
  constructor(private cdr : ChangeDetectorRef){

  }

  ngOnInit(){
    this.event.push('Daily scrum meeting at 12:00 pm');
    this.event.push(' Town hall meeting on 23-3-2019');
    this.list.push('Angular task on Routers');
  }
  
  onAddAction(){
     if(this.action.nativeElement.value==''){
      alert("Please enter something to add")
    }else{
      this.act.name=this.action.nativeElement.value;
    this.list.push(this.act.name);
    this.action.nativeElement.value='';
    console.log('length',this.list.length)
    
    }
  }
  addImp(){
    this.importantVisibility=!this.importantVisibility;
    if(!this.togg){
    this.visiblemain=!this.visiblemain;
    if(this.visiblemain){
      this.head1='Add Tasks'
    }else{
      this.head1='Add Events'
    }
    }
  }

  onAdd(data){
    this.event.push(data.value);
    this.EventCount=this.event.length;
    console.log('eveeee',this.event)
    console.log('praaanth',data.value)
    }
  
  
  //  ngAfterViewInit(){
  //    if(this.action.nativeElement.value===''){
  //     this.msg='Start adding';
  //     this.cdr.detectChanges()
  //    }
    

  //  }
   ngAfterViewChecked(){
       if(this.list.length > 0 && this.disabble===true){
      this.disabble=false;
      this.msg='';
      this.cdr.detectChanges();
    }
   }

  onDelete(act){
    for(let i = 0;i<this.list.length;i++){
      if(act==this.list[i]){
        this.list.splice(i,1)
      }
    }
    if(this.list.length ===0){
      this.disabble=true;
    }
  }
  decision(){
   var random= this.list[Math.floor(Math.random()*this.list.length)];
   alert(random);
  }
  totalEvents(count){
  this.cc=count;
  }

  onClean(){
 this.list=[];
   }

  ngOnDestroy(){
    console.log('destory called')
  }
}
