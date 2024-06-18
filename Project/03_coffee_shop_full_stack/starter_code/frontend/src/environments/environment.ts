/* @TODO replace with your variables
 * ensure all variables on this page match your project
 */

export const environment = {
  production: false,
  apiServerUrl: 'http://127.0.0.1:5000', // the running FLASK api server url
  auth0: {
    url: 'dev-l7y874wy5w0hw7eg.jp', // the auth0 domain prefix
    audience: 'drink-api-uda', // the audience set for the auth0 app
    clientId: 'OxC0TxZEPDUOfJeLPq0TRGZHaAvH3deT', // the client id generated for the auth0 app
    callbackURL: 'https://127.0.0.1:4200', // the base url of the running ionic application. 
  }
};
