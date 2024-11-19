import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncargadoTiendaPageComponent } from './encargado-tienda-page.component';

describe('EncargadoTiendaPageComponent', () => {
  let component: EncargadoTiendaPageComponent;
  let fixture: ComponentFixture<EncargadoTiendaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EncargadoTiendaPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncargadoTiendaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
