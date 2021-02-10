const expect = require("chai").expect;
global.tag = process.argv[3];
/**
* object containing all methods, selectors and functionality of login screen
*/
class loginScreen {
    
    // get btnSubmit () { return $('//android.widget.Button[contains(@text, "Let\'s Get Booking")]') }

    // get btnSubmit () { return $('//XCUIElementTypeOther[@name="Let\'s Get Booking"]') }

    // get btnSubmit () { return $('//*[contains(@text, "Let\'s Get Booking")]') }

    get btnSubmit () { return $('//*[contains(@text, "Let\'s Get Booking") or contains(@name, "Let\'s Get Booking")]') }

    get userNameTxtBox () { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View[3]/android.view.View/android.view.View[3]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View/android.widget.EditText')}

    get userNameTxtBoxiOS () { return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeTextField')}

    get passwordTxtBox () { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]/android.view.View[3]/android.view.View/android.view.View[4]/android.view.View[1]/android.view.View[1]/android.view.View[1]/android.view.View/android.widget.EditText')}

    get passwordTxtBoxiOS () { return $('//XCUIElementTypeOther[@name="main"]/XCUIElementTypeSecureTextField')}

    get signInBtn () { return $('//*[contains(@text, "Log In arrow forward circle outline") or contains(@name, "Log In arrow forward circle outline")]')}
   
    get sngRadioBtn () { return $('//*[contains(@text, "SNG SNG") or contains(@name, "SNG")]')}

    get sngRadioBtnIOS () { return $('//XCUIElementTypeOther[@name="SNG"]')};

    get tnsRadioBtn () { return $('//*[contains(@text, "TNS TNS") or contains(@name, "TNS")]')}

    get tnsRadioBtniOS () { return $('//XCUIElementTypeOther[@name="TNS"]')}

    clickOnBookingBtn () {
        this.btnSubmit.click(); 
    }

    enterUserName (username) {
        if(tag == "android"){
            this.userNameTxtBox.setValue(username);
        }
        else{
            this.userNameTxtBoxiOS.setValue(username);
        }
    }

    enterPassword (password) {
        if(tag == "android"){
            this.passwordTxtBox.setValue(password);
        }
        else{
            this.passwordTxtBoxiOS.setValue(password);
        }
    }

    clickOnSignInBtn () {
        this.signInBtn.click();
    }

    clickOnTNSRadioBtn () {
        if(tag == "android"){
            this.tnsRadioBtn.waitForExist({timeout: 60000});
            this.tnsRadioBtn.click();
        }
        else{
            this.tnsRadioBtniOS.waitForExist({timeout: 60000});
            this.tnsRadioBtniOS.click();
        }
    }

    clickOnSNGRadioBtn () {
        if(tag == "android"){
            this.sngRadioBtn.waitForExist({timeout: 60000});
            this.sngRadioBtn.click();
        }
        else{
            this.sngRadioBtnIOS.waitForExist({timeout: 60000});
            this.sngRadioBtnIOS.click();
        }
    }

    loginIntoApp (username, password) {
        // this.clickOnBookingBtn();
        browser.pause(2000);
        this.enterUserName(username);
        this.enterPassword(password);
        this.clickOnSignInBtn();
    }

    assertLoginScreen () {
        this.signInBtn.waitForExist({timeout: 60000});
        if(tag == "android"){
            expect(this.signInBtn.getText()).to.equal('Log In arrow forward circle outline');
        }
        else{
            expect(this.signInBtn.getAttribute('name')).to.equal('Log In arrow forward circle outline');
        }
    }
}

module.exports = new loginScreen();