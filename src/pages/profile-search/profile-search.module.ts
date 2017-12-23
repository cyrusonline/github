import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileSearchPage } from './profile-search';
import {ComponentsModule} from '../../components/components.module';

@NgModule({
  declarations: [
    ProfileSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileSearchPage),
  ],
})
export class ProfileSearchPageModule {}
