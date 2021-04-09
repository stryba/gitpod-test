import { HttpClient } from '@angular/common/http';
import { Component, Inject, InjectionToken } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

export const URL_TOKEN = new InjectionToken("url");

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

  readonly testBackend$ = this.httpClient.get<{x:string}>(this.url).pipe(
    map(value=>value.x),
    catchError(error => of("ERROR:" + error?.message)),
  );

  constructor(
    private readonly httpClient: HttpClient,
    @Inject(URL_TOKEN) private readonly url: string,
  ) {
  }
}
