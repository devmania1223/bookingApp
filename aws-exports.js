import Amplify, { Auth } from 'aws-amplify';

Amplify.configure({
    Auth: {
        userPoolId: 'eu-central-1_sXobUjqVh',
        userPoolWebClientId: "5vpqdi2hlkvqjsjqd3gsama9c8",
        region: 'eu-central-1'
/*        oauth: {
            domain: 'https://booking-user-pool-domain-customer.auth.eu-central-1.amazoncognito.com',
            scope: [ 'email', 'profile'],
            redirectSignIn: 'https://auth.expo.io/@bbehrang/Bookingdesc',
            redirectSignOut: 'https://auth.expo.io/@bbehrang/Bookingdesc',
            responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
        }}*/
}});
const currentConfig = Auth.configure();
export default currentConfig;


