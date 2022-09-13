import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styles: [
    ` 
        .nav{ clear: both;}
        a {float: left;}
        .active a { color: red;}
    `,
  ],
  template: `<div>
                    <ul class="nav">
                        <li routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">
                            <a routerLink="">Main Page</a>
                        </li>
                        <li routerLinkActive="active">
                            <a routerLink="/CategoryList">Category List</a>
                        </li>
                    </ul>
                    <router-outlet></router-outlet>
               </div>`,
})
export class AppComponent {}
