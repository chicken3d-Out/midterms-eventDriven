import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    GalleryComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    RouterModule.forRoot([
      { path: 'home', component: ProfileComponent },
      { path: 'contacts', component: ContactsComponent },
      { path: 'gallery', component: GalleryComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
