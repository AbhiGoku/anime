import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { $ } from 'protractor';

@Component({
  selector: 'app-dbz',
  templateUrl:  `./dbz.component.html` ,
  styleUrls: ['./dbz.component.css']
})
export class DbzComponent implements OnInit {
 

  characters=[
    {'id': 1, 
      'name' : 'Goku', 
      'img' : "https://vignette.wikia.nocookie.net/deathbattlefanon/images/2/20/C0A9B238-91F6-46AA-ABDC-3FC720228C25.png/revision/latest?cb=20171104014554",
      'about':'Initially believed to have been born on Earth, Goku later learns that he is a member of an extraterrestrial warrior race called the Saiyans'},
    
    {'id': 2,
      'name' : 'Vegeta',
      'img' : "https://vignette.wikia.nocookie.net/protagonists/images/7/7a/Vegeta_dbs_v_2_by_antoniossss-da0gjc2.png/revision/latest?cb=20180415181451",
      'about' : 'Vegeta is a member of an extraterrestrial race of warriors known as the Saiyans and is extremely vain and proud referring to his heritage and his status as the Prince of the Saiyans '},
    
    {'id': 3, 
      'name' : 'Beerus', 
      'img': "https://vignette.wikia.nocookie.net/dragon-ball-super1627/images/9/97/Beerus.png/revision/latest?cb=20160410193603",
      'about' : 'It had been stated that Beerus is a universe buster by Whis. Often seen destroying planets at a whim, Beerus two sole desires are, being quite a gourmet, enjoying food he likes to eat and fighting opponents whom he considers to be worthy. '}
  ]
  constructor( private router : Router ) { }
  link=false;
  ngOnInit() {
  }

  // google(character){
  //   console.log(character.name);
  //   this.link=!this.link;
  //   console.log(this.link);
    

  // }
  // clicked(){
  //   console.log("clicked");
    
  // }

}
