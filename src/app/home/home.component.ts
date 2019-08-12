import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  a:boolean = true;
  constructor() { }

  ngOnInit() {
  }

  clicked(){
    this.a=!this.a;
    console.log(this.a);
  }

  animes=[
    {
      'id' : 1,
      'name': 'Dragon Ball Z',
      'about': 'Dragon Ball Z continues the adventures of Goku, who, along with his companions, defend the Earth against villains',
      'img' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Dragon_Ball_Z_Logo.png/330px-Dragon_Ball_Z_Logo.png',
      'url':'dbz'
    },
    {
      'id' : 2,
      'name' : 'Beyblade',
      'about' : "A young man named Tyson (Takao Kinomiya) enters the Japan Regional Beyblade Qualifying Tournament, where he encounters Ray Kon (Rei Kon) and Kai Hiwatari,they formed a team called as 'BladeBreakers'",
      'img':'https://www.pinclipart.com/picdir/middle/50-501396_beyblade-logo-clipart.png',
      'url': 'beyblade'
    },
    {
      'id' : 3,
      'name' : 'Pokemon',
      'about' : ' Ash Ketchum (known as Satoshi in Japan), a Pokémon Master in training he and a small group of friends travel around the world of Pokémon along with their Pokémon partners',
      'img' : 'https://cdn.shopify.com/s/files/1/0598/5581/products/pokemonLogo-01_1024x1024.jpg?v=1527194275',
      'url' :'pokemon'
    }
   
  ]

}
