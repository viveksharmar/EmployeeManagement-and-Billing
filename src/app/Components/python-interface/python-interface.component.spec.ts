import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonInterfaceComponent } from './python-interface.component';

describe('PythonInterfaceComponent', () => {
  let component: PythonInterfaceComponent;
  let fixture: ComponentFixture<PythonInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PythonInterfaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PythonInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
