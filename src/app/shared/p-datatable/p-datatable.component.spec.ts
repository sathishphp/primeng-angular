import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PDatatableComponent } from './p-datatable.component';

describe('PDatatableComponent', () => {
  let component: PDatatableComponent;
  let fixture: ComponentFixture<PDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PDatatableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
