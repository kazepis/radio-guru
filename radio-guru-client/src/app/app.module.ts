import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarqueeComponent } from './now-playing-marquee/now-playing-marquee.component';
import { NowPlayingCardComponent } from './now-playing-card/now-playing-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MarqueeComponent,
    NowPlayingCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
