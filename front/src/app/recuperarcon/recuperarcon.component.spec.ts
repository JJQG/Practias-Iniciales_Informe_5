import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarconComponent } from './recuperarcon.component';

describe('RecuperarconComponent', () => {
  let component: RecuperarconComponent;
  let fixture: ComponentFixture<RecuperarconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecuperarconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperarconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
