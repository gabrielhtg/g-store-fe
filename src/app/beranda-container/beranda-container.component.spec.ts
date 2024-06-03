import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerandaContainerComponent } from './beranda-container.component';

describe('BerandaContainerComponent', () => {
  let component: BerandaContainerComponent;
  let fixture: ComponentFixture<BerandaContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BerandaContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BerandaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
