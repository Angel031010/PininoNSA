import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarEncargadoTiendaComponent } from './eliminar-encargado-tienda.component';

describe('EliminarEncargadoTiendaComponent', () => {
  let component: EliminarEncargadoTiendaComponent;
  let fixture: ComponentFixture<EliminarEncargadoTiendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EliminarEncargadoTiendaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarEncargadoTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
