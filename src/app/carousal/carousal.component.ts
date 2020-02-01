import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.scss']
})
export class CarousalComponent implements OnInit {

  // source = "https://www.tripsavvy.com/fun-facts-about-llamas-3880940"
  carousal1 = "https://www.tripsavvy.com/thmb/4IWvLWWRR0NM1I-dfjCTndyTilw=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-520924382-58fc0d2a5f9b581d59b3970d.jpg";
  
  // source = "http://animalia.bio/llama"
  carousal2 = "https://www.thoughtco.com/thmb/l_peC_-7UyDDngBHimAD_QQ77Ig=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-468364850-657f39bc70054f1bae3649caa072a7bd.jpg";
  
  // source = "https://www.saexpeditions.com/blog/post/llama-loving-photos-and-facts"
  carousal3 = "https://i1.wp.com/petssumo.com/wp-content/uploads/2018/05/Llama-animal-.png?resize=661%2C443&ssl=1";

  constructor() { }

  ngOnInit() {
  }

}
