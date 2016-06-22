export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia Features';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' },
      { route: 'react',         name: 'react',        moduleId: 'react-in-aurelia/react-in-aurelia',        nav: true, title: 'React in Aurelia' },
     // { route: 'welcome-validation', name: 'welcome-validation', moduleId: 'welcome-validation/welcome-validation', nav: true, title: 'Welcome (validated)' },
     // { route: 'users-comp',    name: 'users-comp',   moduleId: './users-comp/users', nav: true, title: 'Github Users (comp)' },
     // { route: 'users-comp/user/:user', name: 'user', moduleId: './users-comp/user', title: 'User' }
    ]);

    this.router = router;
  }
}
