import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-noteconstructor',
  templateUrl: './noteconstructor.component.html',
  styleUrls: ['./noteconstructor.component.scss'],
})
export class NoteconstructorComponent implements OnInit {

  @Output() notes = new EventEmitter<any>();
  @Output() close = new EventEmitter<any>();
 
  title: string; 
  description: string

  constructor() { }

  ngOnInit() {}

  validate(){
    this.notes.emit({title :this.title, description: this.description});
    this.close.emit(true);
  }

}
