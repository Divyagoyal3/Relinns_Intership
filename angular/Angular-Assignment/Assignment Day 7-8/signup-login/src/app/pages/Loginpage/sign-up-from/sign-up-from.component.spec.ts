import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpFromComponent } from './sign-up-from.component';

describe('SignUpFromComponent', () => {
  let component: SignUpFromComponent;
  let fixture: ComponentFixture<SignUpFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignUpFromComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignUpFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
