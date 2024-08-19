import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetregistrationComponent } from './petregistration.component';

describe('PetregistrationComponent', () => {
  let component: PetregistrationComponent;
  let fixture: ComponentFixture<PetregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetregistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PetregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
