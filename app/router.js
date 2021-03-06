import EmberRouter from '@ember/routing/router';
import config from 'map-application/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('map');
  this.route('country-layer-page');
  this.route('city-layer-page');
  this.route('about');
});
