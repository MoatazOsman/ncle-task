import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReceiveSurpriseStepsComponent } from './receive-surprise-steps.component';

describe('ReceiveSurpriseStepsComponent', () => {
  let component: ReceiveSurpriseStepsComponent;
  let fixture: ComponentFixture<ReceiveSurpriseStepsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiveSurpriseStepsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReceiveSurpriseStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
