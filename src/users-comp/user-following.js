import {inject,useView} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient,Router)
@useView('./users.html')
export class UserFollowing {
  heading = 'Following';
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

  activate(input) {
    this.user = input.user;
    let resource = 'users/' + this.user + '/following';
    return this.http.fetch(resource)
      .then(response => response.json())
      .then(users => this.users = users);
  }
}