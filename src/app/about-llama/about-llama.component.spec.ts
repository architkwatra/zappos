import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutLLamaComponent } from './about-llama.component';

describe('AboutLLamaComponent', () => {
  let component: AboutLLamaComponent;
  let fixture: ComponentFixture<AboutLLamaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutLLamaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutLLamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
