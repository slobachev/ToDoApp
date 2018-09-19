import OktaAuth from '@okta/okta-auth-js'

const org = '{{your okta url}}',
      clientId = '{{your okta app client id}}}',
      redirectUri = 'http://localhost:5000',
      authorizationServer = 'default'

const oktaAuthClient = new OktaAuth({
  url: org,
  issuer: authorizationServer,
  clientId,
  redirectUri
})

export default {
  client: oktaAuthClient
}