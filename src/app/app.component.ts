import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'birdie-quiz-app',
  encapsulation: ViewEncapsulation.None,
  templateUrl: 'app.template.html'
})
export class AppComponent implements OnInit {



  public ngOnInit() {
    console.log('Initializing BirdieQuiz app...');
  }
}
