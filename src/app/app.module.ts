import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ProfileImageComponent} from './components/profile-image/profile-image.component';
import {ContentHeadingComponent} from './components/content-heading/content-heading.component';
import {ContentComponent} from './components/content/content.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
@NgModule({
	declarations: [
		AppComponent,
		ProfileImageComponent,
		ContentHeadingComponent,
		ContentComponent,
	],
	imports: [BrowserModule, BrowserAnimationsModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
