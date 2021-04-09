import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="testBackend$ | async as value;else loading">
      {{ value }}
    </div>
    <ng-template #loading>
      Loading...
    </ng-template>
  `,
})
export class AppComponent {

  readonly testBackend$ = this.httpClient.get<string>("https://8080-teal-seahorse-2qhoeafp.ws-eu03.gitpod.io");

  constructor(private readonly httpClient:HttpClient) {
  }
}
