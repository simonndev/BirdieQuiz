import { Component, OnInit } from '@angular/core';

@Component({
  /**
   * The selector is what angular internally uses
   * for `document.querySelectorAll(selector)` in our index.html
   * where, in this case, selector is the string 'home'.
   */
  selector: 'home',  // <home></home>
  /**
   * Every Angular template is first compiled by the browser before Angular runs it's compiler.
   */
  templateUrl: './home.template.html'
})
export class HomeComponent implements OnInit {
  public ngOnInit() {
    console.log('Home initialized.')
  }
}
