import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarCellphoneComponent } from './agregar-editar-cellphone.component';

describe('AgregarEditarCellphoneComponent', () => {
  let component: AgregarEditarCellphoneComponent;
  let fixture: ComponentFixture<AgregarEditarCellphoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarEditarCellphoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEditarCellphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
