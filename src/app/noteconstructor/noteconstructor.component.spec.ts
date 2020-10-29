import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NoteconstructorComponent } from './noteconstructor.component';

describe('NoteconstructorComponent', () => {
  let component: NoteconstructorComponent;
  let fixture: ComponentFixture<NoteconstructorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteconstructorComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NoteconstructorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
