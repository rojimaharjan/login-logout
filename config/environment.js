/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'authenticate-test',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    hostURLAPI : 'http://fuseprospector-stage.elasticbeanstalk.com',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    contentSecurityPolicyHeader: 'Disabled-Content-Security-Policy',
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }
   

  ENV['simple-auth'] = {
    authenticateRoute: 'login',
    routeAfterAuthentication: 'user',
    routeIfAlreadyAuthenticated: 'user',

    authorizer: 'simple-auth-authorizer:oauth2-bearer',
    // localStorageKey: ENV.APP.sessionStorekey
  };

  ENV['simple-auth-oauth2'] = {
    serverTokenEndpoint: (ENV.hostURLAPI).trim() + '/oauth/token',
    // serverTokenEndpoint:'/oauth/token',
    // serverTokenRevocationEndpoint: (ENV.hostURLAPI).trim() + (ENV.hostNamespace ? ('/' + (ENV.hostNamespace).trim()) : '') + '/revoke',
    //  serverTokenRevocationEndpoint: (ENV.hostURLAPI+'/fuseprospector/').trim() + 'revoke',
    refreshAccessTokens: true,

    authenticationInputFormat: { //data format expected by the authenticating server
      headers: [],
      formAttributes: ['grant_type', 'username', 'password', 'client_id', 'client_secret']
    },
    authenticationResponseFormat: { //data format returned by the server
      expires_in: 'expires_in',
      refresh_token: 'refresh_token',
      access_token: 'access_token'
    }
  };
  return ENV;
};
