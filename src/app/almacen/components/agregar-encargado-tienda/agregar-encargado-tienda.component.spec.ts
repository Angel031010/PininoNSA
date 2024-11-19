import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEncargadoTiendaComponent } from './agregar-encargado-tienda.component';

describe('AgregarEncargadoTiendaComponent', () => {
  let component: AgregarEncargadoTiendaComponent;
  let fixture: ComponentFixture<AgregarEncargadoTiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarEncargadoTiendaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEncargadoTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
