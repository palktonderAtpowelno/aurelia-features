import {Router} from 'aurelia-router';

export class User{

  configureRouter(config, router){
    config.map([
      { route: ['','followers'], name: 'followers', moduleId: './user-followers', nav: true, title: 'Followers' },
      { route: 'following', name: 'following', moduleId: './user-following', nav: true, title: 'Following' },
      { route: 'user/:user', name: 'user', moduleId: './user', title: 'User' }
    ]);
  
    this.router = router;
  }

  activate(input) {
    this.heading = 'Info about user: ' + input.user; 
  }
}
