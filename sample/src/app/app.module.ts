import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AppComponent],
  bootstrap: [],
  entryComponents:[AppComponent]
})
export class AppModule {

  // XX either `ngDoBoostrap()` or `bootstrap` must be defined
  /*
    Error: The module AppModule was bootstrapped, but it does not
    declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method.
    Please define one of these.
  */
  ngDoBootstrap() {}
}
