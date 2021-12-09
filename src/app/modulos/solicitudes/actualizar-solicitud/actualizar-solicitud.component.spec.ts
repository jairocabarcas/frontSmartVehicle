import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarSolicitudComponent } from './actualizar-solicitud.component';

describe('ActualizarSolicitudComponent', () => {
  let component: ActualizarSolicitudComponent;
  let fixture: ComponentFixture<ActualizarSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
