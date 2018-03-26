import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';

@Component({
  selector: '[app-file]',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent {
  @Input() file: any;
  @Output() go: EventEmitter<String> = new EventEmitter<String>();
  constructor() { }
  check:any = false;
  action(file: any) {
    alert(file.name);
  }

  goTo(name: String) {
    this.go.emit(name);
  }
  delete(id:string){
    this.go.emit(id)
  }
  checkFile(checkbox){
      if(this.check === false){
        this.check =true; 
        checkbox = this.check;
      }
      else{
        this.check = false;
        checkbox = this.check;
      }
      this.go.emit(checkbox);
    }
}