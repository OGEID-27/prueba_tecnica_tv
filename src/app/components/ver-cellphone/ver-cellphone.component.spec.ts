import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCellphoneComponent } from './ver-cellphone.component';

describe('VerCellphoneComponent', () => {
  let component: VerCellphoneComponent;
  let fixture: ComponentFixture<VerCellphoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerCellphoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerCellphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
