import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ProfileImageComponent} from './components/profile-image/profile-image.component';

@NgModule({
	declarations: [AppComponent, ProfileImageComponent],
	imports: [BrowserModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
