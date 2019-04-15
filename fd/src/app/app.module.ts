import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataService } from './data.Service';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';  
import { appRoutes, routingComponents } from './routerConfig';



import { AppComponent } from './app.component';
// import { FirstcComponent } from './firstc/firstc.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
