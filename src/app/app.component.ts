import { IfStmt } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Counter App';
  count: number = 0;

  IncreaseCounter = () => {

    if(this.count < 10)
    {
      this.count = this.count + 1;
    }
    
  }

  DecreaseCounter = () => {
    
    if(this.count > 0)
    {
      this.count = this.count - 1;
    }

  }

  ResetCounter = () => {
    this.count = 0;
  }
}


//########### TASK #####
// iNCREASE COUNTER MAX LIMIT TILL 10
// DECREASE COUNTER MIN LIMIT TILL 0