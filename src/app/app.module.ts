import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { FeedComponent } from './components/feed/feed.component';
import { LeftNavComponent } from './components/left-nav/left-nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ThumbnailComponent } from './components/feed/thumbnail/thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    LeftNavComponent,
    FeedComponent,
    ThumbnailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
