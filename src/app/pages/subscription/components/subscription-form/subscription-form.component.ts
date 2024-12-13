import {Component} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";

const EMAIL_REGEX = '^[A-Za-z0-9\\._%+-]*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$';

export enum GENDER {
  BOY,
  GIRL
}

export enum GRADE {
  GRADE1,
  GRADE2,
  GRADE3,
  GRADE4,
  GRADE5,
  GRADE6,
}

export enum TOPIC {
  ARABIC,
  ISLAMIC,
  ENGLISH,
  HISTORY,
  SPORTS,
}

type GradeType = { value: GRADE, label: string };
type TopicsType = { value: TOPIC, label: string };

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.scss'],
})
export class SubscriptionFormComponent {

  public subscriptionForm: FormGroup;
  public genderEnum = GENDER;
  public grades: GradeType[];
  public topics: TopicsType[];
  public submitted: boolean;

  constructor(private formBuilder: FormBuilder) {
    this.subscriptionForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(EMAIL_REGEX),]],
      childFullName: ['', [Validators.required]],
      birthDateDay: ['', [Validators.required,]],
      birthDateMonth: ['', [Validators.required,]],
      birthDateYear: ['', [Validators.required,]],
      grade: ['', [Validators.required,]],
      gender: ['', [Validators.required,]],
      selectedTopics: [[], [Validators.required,]]
    });

    this.grades = [
      {
        value: GRADE.GRADE1,
        label: 'Grade 1'
      },
      {
        value: GRADE.GRADE2,
        label: 'Grade 2'
      },
      {
        value: GRADE.GRADE3,
        label: 'Grade 3'
      },
      {
        value: GRADE.GRADE4,
        label: 'Grade 4'
      },
      {
        value: GRADE.GRADE5,
        label: 'Grade 5'
      },
      {
        value: GRADE.GRADE6,
        label: 'Grade 6'
      },
    ];

    this.topics = [
      {
        value: TOPIC.ARABIC,
        label: 'Arabic'
      },
      {
        value: TOPIC.ISLAMIC,
        label: 'Islamic'
      },
      {
        value: TOPIC.ENGLISH,
        label: 'English'
      },
      {
        value: TOPIC.HISTORY,
        label: 'History'
      },
      {
        value: TOPIC.SPORTS,
        label: 'Sports'
      },
    ];
    this.submitted = false;
  }

  onSelectGender = (selectedGender: GENDER) => {
    this.gender.setValue(selectedGender);
  }

  onToggleTopic = (topic: TOPIC) => {
    if (this.selectedTopics.value.includes(topic)) {
      this.selectedTopics.setValue([...this.selectedTopics.value.filter((selectedTopic: TOPIC) => selectedTopic !== topic)]);
    } else {
      this.selectedTopics.setValue([...this.selectedTopics.value, topic]);

    }
  }

  submitForm = () => {
    this.submitted = true;
  }


  get name(): AbstractControl {
    return this.subscriptionForm.get('name')!;
  };

  get birthDateDay(): AbstractControl {
    return this.subscriptionForm.get('birthDateDay')!;
  };

  get birthDateMonth(): AbstractControl {
    return this.subscriptionForm.get('birthDateMonth')!;
  };

  get birthDateYear(): AbstractControl {
    return this.subscriptionForm.get('birthDateYear')!;
  };

  get gender(): AbstractControl {
    return this.subscriptionForm.get('gender')!;
  };

  get selectedTopics(): AbstractControl {
    return this.subscriptionForm.get('selectedTopics')!;
  };

}
