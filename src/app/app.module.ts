import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { MyworkComponent } from './mywork/mywork.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ImpressumComponent,
    DataProtectionComponent,
    HomeComponent,
    SkillsComponent,
    MyworkComponent,
    AboutMeComponent,
    FooterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
