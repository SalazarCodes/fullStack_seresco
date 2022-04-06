import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfesoresComponent } from './edit-profesores.component';

describe('EditProfesoresComponent', () => {
  let component: EditProfesoresComponent;
  let fixture: ComponentFixture<EditProfesoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProfesoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
