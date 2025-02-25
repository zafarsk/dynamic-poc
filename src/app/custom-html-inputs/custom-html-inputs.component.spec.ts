import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomHtmlInputsComponent } from './custom-html-inputs.component';

describe('CustomHtmlInputsComponent', () => {
  let component: CustomHtmlInputsComponent;
  let fixture: ComponentFixture<CustomHtmlInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomHtmlInputsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomHtmlInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
