import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { DbzComponent } from './dbz/dbz.component';
import { HomeComponent } from './home/home.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { BeybladeComponent } from './beyblade/beyblade.component';

@NgModule({
  declarations: [
    AppComponent,
    DbzComponent,
    routingComponents,
    HomeComponent,
    PokemonComponent,
    BeybladeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
