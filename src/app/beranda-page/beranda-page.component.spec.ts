import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerandaPageComponent } from './beranda-page.component';

describe('BerandaPageComponent', () => {
  let component: BerandaPageComponent;
  let fixture: ComponentFixture<BerandaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BerandaPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BerandaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
