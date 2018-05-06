import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { SkillListComponent } from './components/skill-list/skill-list.component';
import { SocialIconsComponent } from './components/social-icons/social-icons.component';
import { ImageComponent } from './components/image/image.component';
import { WorkEducationComponent } from './components/work-education/work-education.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    SkillListComponent,
    SocialIconsComponent,
    ImageComponent,
    WorkEducationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
