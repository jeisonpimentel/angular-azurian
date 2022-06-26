import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdopcionComponent } from './create-adopcion.component';

describe('CreateAdopcionComponent', () => {
  let component: CreateAdopcionComponent;
  let fixture: ComponentFixture<CreateAdopcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAdopcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAdopcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
