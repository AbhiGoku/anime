import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-beyblade',
  templateUrl: './beyblade.component.html',
  styleUrls: ['./beyblade.component.css']
})
export class BeybladeComponent implements OnInit {
  characters=[
    {'id': 1, 
      'name' : 'Tyson', 
      'img' : "https://vignette.wikia.nocookie.net/beyblade/images/7/75/TysonSeason1.jpg/revision/latest?cb=20181223183109",
      'about':'He is the #1 Beyblader in the World, having won three world championships in a row, winning the first with the Bladebreakers, the second one with Max Tate and the third one with BBA Revolution.'},
    
    {'id': 2,
      'name' : 'Kai',
      'img' : "https://vignette.wikia.nocookie.net/beyblade/images/0/05/KaiHiwatari%282000%29.jpg/revision/latest?cb=20190109000136",
      'about' : " Kai is a proud and a very confident blader who is willing to sacrifice everything to get what he wants. He doesn't mind crushing people on the way up though he would much prefer earning things through hard work."},
    
    {'id': 3, 
      'name' : 'Max', 
      'img': "https://vignette.wikia.nocookie.net/p__/images/1/10/MaxSeason1.jpg/revision/latest?cb=20180515000348&path-prefix=protagonist",
      'about' : 'Max is a happy, good-natured kid who always sees the best in everything and everyone. Max is a highly skilled beyblader specializing in a defensive style. '},
    { 'id': 4, 
    'name' : 'Ray', 
    'img': "https://vignette.wikia.nocookie.net/beyblade/images/3/31/RAY_KON_2000_PROMO.png/revision/latest?cb=20160411033253",
    'about' : ' Ray is generally depicted as calm and open-minded. He is portrayed as a powerful and confident competitor. Throughout the first season, Ray is looked to for advice about battles.'}
]
  
  constructor(private router : Router) { }

  ngOnInit() {
  }

}
