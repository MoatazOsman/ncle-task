import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SubscriptionPageRoutingModule } from './subscription-routing.module';
import { SubscriptionPage } from './subscription.page';
import {ComponentsModule} from "../../components/components.module";
import {SubscriptionFormComponent} from "./components/subscription-form/subscription-form.component";
import {SubscriptionSummaryComponent} from "./components/subscription-summary/subscription-summary.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SubscriptionPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [SubscriptionPage, SubscriptionFormComponent, SubscriptionSummaryComponent],
  providers: [DatePipe]
})
export class SubscriptionPageModule {}
