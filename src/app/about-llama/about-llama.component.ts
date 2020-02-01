import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-llama',
  templateUrl: './about-llama.component.html',
  styleUrls: ['./about-llama.component.scss']
})
export class AboutLLamaComponent implements OnInit {

  lamaFacts = ["Llamas make excellent guards for herds of small animals. They are very social and will ‘adopt’ a group of sheep or goats as their own herd. Then they will protect the herd by chasing off coyotes and other predators.",
              "Llamas are smart. They can distinguish between the neighbor’s dog and a predatory coyote.",
              "Llamas are the camel’s hippie cousins. They belong to a group of animals called camelids that also includes alpacas. All camelids spit or stick out their tongue when they are annoyed.",
              "Llamas are diabetic — sort of. The OSU College of Veterinary Medicine (CVM) is using their herd of 30 llamas and alpacas to study how certain hormones affect blood sugar. Because the metabolism of llamas is very similar to that of a human diabetic, the results of this research may provide insight into human diabetes treatment.",
              "Llamas can reach speeds up to 35mph. So let’s hope no more get loose!",
            "Llama dung makes great fuel—and fertilizer. In fact, it may have helped the Incans grow corn and survive in the Andes"]

  constructor() { }
  
  ngOnInit() {
  }
}
