import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(private http: HttpClient) { }
  clk() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token',
        'Accept-Encoding': 'gzip'
      })
    };
    this.http
    //.get('assets/test.json')
    .get('assets/test.json', { observe: 'response' })
    //.get('assets/test.json', {responseType: 'text'})
    .subscribe((data) => {
      console.log(data);
      /*console.log(data['name']);
      console.log(data['age']);
      console.log(data.name);
      console.log(data.age);

      console.log(data.headers);
      const keys = data.headers.keys();
      keys.forEach(key => console.log(`${key}: ${data.headers.get(key)}`));*/
    },
    error => console.log(error));
  }
}