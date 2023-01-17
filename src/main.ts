import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import enviroment from './enviroments/enviroment';

if (enviroment.production) {
	enableProdMode();
}

/* eslint-disable unicorn/prefer-top-level-await */
platformBrowserDynamic()
	.bootstrapModule(AppModule)
	.catch((error) => console.error(error));
