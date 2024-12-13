import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {IonicModule} from '@ionic/angular';

import {GENDER, GRADE, SubscriptionFormComponent, TOPIC} from './subscription-form.component';
import {AbstractControl} from "@angular/forms";

describe('SubscriptionFormComponent', () => {
  let component: SubscriptionFormComponent;
  let fixture: ComponentFixture<SubscriptionFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SubscriptionFormComponent],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SubscriptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Form should contains name field', () => {
    const form = component.subscriptionForm;
    expect(form.contains('name')).toBeTruthy();
  });

  it('Form should contains email field', () => {
    const form = component.subscriptionForm;
    expect(form.contains('email')).toBeTruthy();
  });

  it('Form should contains childFullName field', () => {
    const form = component.subscriptionForm;
    expect(form.contains('childFullName')).toBeTruthy();
  });

  it('Form should contains birthDateDay field', () => {
    const form = component.subscriptionForm;
    expect(form.contains('birthDateDay')).toBeTruthy();
  });

  it('Form should contains birthDateMonth field', () => {
    const form = component.subscriptionForm;
    expect(form.contains('birthDateMonth')).toBeTruthy();
  });

  it('Form should contains birthDateYear field', () => {
    const form = component.subscriptionForm;
    expect(form.contains('birthDateYear')).toBeTruthy();
  });

  it('Form should contains grade field', () => {
    const form = component.subscriptionForm;
    expect(form.contains('grade')).toBeTruthy();
  });

  it('Form should contains gender field', () => {
    const form = component.subscriptionForm;
    expect(form.contains('gender')).toBeTruthy();
  });

  it('Form should contains selectedTopics field', () => {
    const form = component.subscriptionForm;
    expect(form.contains('selectedTopics')).toBeTruthy();
  });

  // we should apply the below 2 test cases for all form controls
  it('Should make the name control is required', () => {
    const control = component.subscriptionForm.get('name');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });

  it('Should Populates gender when select it', () => {
    const control = component.subscriptionForm.get('gender');
    component.onSelectGender(GENDER.BOY);
    expect(control?.value).toEqual(GENDER.BOY);
  });

  it('Should return name as AbstractControl', () => {
    const control: AbstractControl<any, any> = component.subscriptionForm.get('name') as AbstractControl;
    expect(component.name as AbstractControl).toEqual(control);
  });

  it('Should make submitted true when click submitForm', () => {
    component.submitForm();
    expect(component.submitted).toEqual(true);
  });

  it('Should add topic to selectedTopics', () => {
    component.onToggleTopic(TOPIC.ENGLISH);
    expect(component.selectedTopics.value).toContain(TOPIC.ENGLISH);
  });

  it('Should remove topic from selectedTopics when exist', () => {
    component.onToggleTopic(TOPIC.ENGLISH);
    component.onToggleTopic(TOPIC.ENGLISH);
    expect(component.selectedTopics.value).not.toContain(TOPIC.ENGLISH);
  });

  it('Should make form invalid if name control is not filled', () => {
    const form = component.subscriptionForm;
    const control = component.subscriptionForm.get('name');
    control?.setValue('');
    expect(form?.valid).toBeFalsy();
  });

  it('Should make form valid if all controls is filled', () => {
    const form = component.subscriptionForm;
    const nameControl = component.subscriptionForm.get('name');
    nameControl?.setValue('Moataz');
    const emailControl = component.subscriptionForm.get('email');
    emailControl?.setValue('moataz@test.com');
    const childFullNameControl = component.subscriptionForm.get('childFullName');
    childFullNameControl?.setValue('Mohamed Moataz');
    const birthDateDayControl = component.subscriptionForm.get('birthDateDay');
    birthDateDayControl?.setValue('04');
    const birthDateMonthControl = component.subscriptionForm.get('birthDateMonth');
    birthDateMonthControl?.setValue('12');
    const birthDateYearControl = component.subscriptionForm.get('birthDateYear');
    birthDateYearControl?.setValue('1993');
    const gradeControl = component.subscriptionForm.get('grade');
    gradeControl?.setValue(GRADE.GRADE1);
    const genderControl = component.subscriptionForm.get('gender');
    genderControl?.setValue(GENDER.BOY);
    const selectedTopicsControl = component.subscriptionForm.get('selectedTopics');
    selectedTopicsControl?.setValue([TOPIC.ARABIC, TOPIC.ENGLISH, TOPIC.ISLAMIC]);

    expect(form?.valid).toBeTruthy();
  });

});
