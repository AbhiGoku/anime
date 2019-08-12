import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  characters=[
    {'id': 1, 
      'name' : 'Ash', 
      'img' : "https://upload.wikimedia.org/wikipedia/en/0/09/AshXYanime.png",
      'about':'Ash Ketchum, known as Satoshi in Japan, is a fictional character in the Pokémon franchise owned by Nintendo. He is the main protagonist of the Pokémon anime'},
    
    {'id': 2,
      'name' : 'Misty',
      'img' : "https://upload.wikimedia.org/wikipedia/en/b/b1/MistyEP.png",
      'about' : 'Misty, known as Kasumi in Japan, is a fictional character in the Pokémon. She was a protagonist in the ongoing anime for the first five seasons, travelling alongside Ash Ketchum and Brock'},
    
    {'id': 3, 
      'name' : 'Brock', 
      'img': "https://upload.wikimedia.org/wikipedia/en/7/71/DP-Brock.png",
      'about' : 'Brock, known as Takeshi in Japan, is a fictional character in the Pokémon franchise owned by Nintendo. He is the Gym Leader of Pewter City and mainly uses Rock-type Pokémon.  '}
  ]
  constructor( private router : Router ) { }

  ngOnInit() {
  }

  google(character){
    console.log(character.name);
  }

}
