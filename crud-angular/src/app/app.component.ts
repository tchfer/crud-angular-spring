import { Component, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crud-angular';

  @HostBinding('class') className = '';

  public toggleControl= new FormControl(false);

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe(val => {
      this.className = val ? 'dark-mode' : '';
    });
  }
}
