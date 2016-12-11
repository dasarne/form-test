import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {routing} from "./app.routing";
import {EntryModule} from "./entry/entry.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  //Place Modules here
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    routing,
    EntryModule,
  ],
  //Place Services here
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
