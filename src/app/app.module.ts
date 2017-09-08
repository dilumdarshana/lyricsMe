import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

import { DataService } from './services/data.service';
import { LyricsService } from './services/lyrics.service';

import { HttpModule } from '@angular/http';
import { SearchComponent } from './components/search/search.component';
import { LyricsComponent } from './components/lyrics/lyrics.component';
import { VideoComponent } from './components/video/video.component';
import { RelatedLyricsComponent } from './components/related-lyrics/related-lyrics.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        SearchComponent,
        LyricsComponent,
        VideoComponent,
        RelatedLyricsComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [DataService, LyricsService],
    bootstrap: [AppComponent]
})
export class AppModule { }
