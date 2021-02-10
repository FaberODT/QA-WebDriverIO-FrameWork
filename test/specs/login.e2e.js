const SplashScreen = require('../pageobjects/splash.screen');
const LoginScreen = require('../pageobjects/login.screen');

describe('Quick Nurse Application', () => {
    beforeAll('Splash screen feature execution only once before all test case', () => {
        for(var i = 0; i <= 8; i++) {
            SplashScreen.swipeThrough();
        }
        LoginScreen.clickOnBookingBtn();
    });
    beforeEach('before every test', () => {
        console.log("actions you need to perform before staring your test.!!!");
    });

    afterEach('after every test', () => {
        console.log("actions you need to perform after finishing your test.!!!");
    });
    it('Test scenario', () => {
        console.log("This is the test.!!!");
    });
});