import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarEncargadoTiendaComponent } from './actualizar-encargado-tienda.component';

describe('ActualizarEncargadoTiendaComponent', () => {
  let component: ActualizarEncargadoTiendaComponent;
  let fixture: ComponentFixture<ActualizarEncargadoTiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActualizarEncargadoTiendaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarEncargadoTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
