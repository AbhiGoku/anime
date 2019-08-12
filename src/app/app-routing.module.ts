import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DbzComponent } from "./dbz/dbz.component";
import {HomeComponent} from "./home/home.component";
import { PokemonComponent } from './pokemon/pokemon.component';
import { BeybladeComponent } from './beyblade/beyblade.component';


const routes: Routes = [
  {path : "" ,component : HomeComponent },
  {path : "dbz" ,component : DbzComponent },
  {path:"pokemon",component : PokemonComponent},
  {path:"beyblade",component : BeybladeComponent}  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [DbzComponent,HomeComponent];
