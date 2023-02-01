import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { Pagina1Component } from './pagina1.component';

describe('Pagina1Component', () => {
  let component: Pagina1Component;
  let fixture: ComponentFixture<Pagina1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pagina1Component ],
      imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pagina1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  // CALCULO
  it('Testing de CALCULO', () => {
    component.n1 =7;
    component.n2 =0;
    component.op = "+"
    const btnEnviar = fixture.debugElement.query(By.css('#btnEnviar'));
    btnEnviar.nativeElement.click();
    // Prueba
     expect(component.r).toEqual(7);
    });

    


        
});
