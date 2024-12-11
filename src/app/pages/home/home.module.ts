import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {ComponentsModule} from "../../components/components.module";
import {SurpriseBoxComponent} from "./components/surprise-box/surprise-box.component";
import {ReceiveSurpriseStepsComponent} from "./components/receive-surprise-steps/receive-surprise-steps.component";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        ComponentsModule
    ],
  declarations: [HomePage, SurpriseBoxComponent, ReceiveSurpriseStepsComponent]
})
export class HomePageModule {}
