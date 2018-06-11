import { enableProdMode } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule /*, {ngZone: 'noop'}*/)
  .then(modRef => {

    // TODO: this code should be scaffoled by schematic
    const elm = createCustomElement(AppComponent, { injector: modRef.injector });
    customElements.define('custom-element', elm);

  })
  .catch(err => console.log(err));
