import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient,Router)
export class Users {
  heading = 'Github Users with Card Component';
  users = [];

  constructor(http,router) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://api.github.com/');
    });

    this.http = http;
    this.router = router;
  }

  cardClicked(event){
    let user = event.detail;
    this.router.navigateToRoute('user', { user: user.login });
  }

  activate() {
    return this.http.fetch('users')
      .then(response => response.json())
      .then(users => this.users = users);
  }
}
