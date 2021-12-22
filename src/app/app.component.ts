import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data$: Observable<any>;

  constructor(private http: HttpClient) {
    this.data$ = this.http.get(environment.apiUrl);
  }
}
