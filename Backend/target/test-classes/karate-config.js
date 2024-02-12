function fn() {
  var env = karate.env; // get java system property 'karate.env'
  karate.log('karate.env system property was:', env);
  if (!env) {
    env = 'dev'; // a custom 'intelligent' default
  }
  var config = { // base config JSON
    appId: 'my.app.id',
    appSecret: 'my.secret',
    someUrlBase: 'https://some-host.com/v1/auth/',
    anotherUrlBase: 'https://another-host.com/v1/',
    baseUrl : 'https://gorest.co.in/public/v2/',
    accessToken :'f84b110dfc675dde968296b130fc1bdfe1772367c22d172596a3cb63713afed1'
  };

  // don't waste time waiting for a connection or if servers don't respond within 5 seconds
  karate.configure('retry', { count: 3, interval: 5000 });
  karate.configure('connectTimeout', 5000);
  karate.configure('readTimeout', 5000);
  return config;
}
