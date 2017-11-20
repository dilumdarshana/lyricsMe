import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// custom components
import { SearchComponent } from './components/search/search.component';
import { UserComponent } from './components/user/user.component';
import { LyricsComponent } from './components/lyrics/lyrics.component';
import { VideoComponent } from './components/video/video.component';
import { RelatedLyricsComponent } from './components/related-lyrics/related-lyrics.component';
import { HomeComponent } from './components/home/home.component';

// services
import { DataService } from './services/data.service';
import { LyricsService } from './services/lyrics.service';

// routes
const appRoutes: Routes = [
    { path: 'home', component: HomeComponent }
];

@NgModule({
    declarations: [
        UserComponent,
        SearchComponent,
        LyricsComponent,
        VideoComponent,
        RelatedLyricsComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot(appRoutes),
        NgbModule.forRoot()
    ],
    providers: [DataService, LyricsService],
    bootstrap: [SearchComponent]
})
export class AppModule { }
