import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lifecyclehooks';

  inputText:string  = " ";
  // destroy :boolean = true;

  OnSubmit(inputEl :HTMLInputElement)
  {
    this.inputText = inputEl.value;
  }

  // DestroyComponent()
  // {
  //   this.destroy = false;
  // }
}
