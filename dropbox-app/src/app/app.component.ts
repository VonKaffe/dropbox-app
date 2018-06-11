
import { Component } from '@angular/core';
const key = "ZmrQAnZTaxAAAAAAAAAAHB6ylBPAKPlvmESb0wlz_fQcDSs0uFlM8JvzYp8m1xH7"

require('isomorphic-fetch'); // or another library of choice.
var Dropbox = require('dropbox').Dropbox;
var dbx = new Dropbox({ accessToken: key });

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  entries = [];
  constructor () {
    dbx.filesListFolder({path: ''})
      .then(function(response) {
        console.log(response);
        this.entries = response.entries;

      })
      .catch(function(error) {
        console.log(error);
      });
  }
}
