import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';

import { DataService } from './services/data.service';
import { HttpModule } from '@angular/http';
import { SearchComponent } from './components/search/search.component';
import { LyricsComponent } from './components/lyrics/lyrics.component';
import { VideoComponent } from './components/video/video.component';
import { RelatedLyricsComponent } from './components/related-lyrics/related-lyrics.component';

@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        SearchComponent,
        LyricsComponent,
        VideoComponent,
        RelatedLyricsComponent
    ],
    imports: [
        BrowserModule,
        HttpModule
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
