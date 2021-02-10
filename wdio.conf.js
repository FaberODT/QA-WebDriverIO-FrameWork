//the following line will fetch the parameter passed at run time
global.tag = process.argv[3];

//following if-else loop has been initialized to distiguish between the platforms, 
// we are passing parametr run time and the above line will help to fetch the passed paramter and based on that
// passed paramter platform specific details will be passed in config.
let platformNameValue, platformVersionValue, appValue; 
if(tag == "android"){
  platformNameValue = 'Android';
  platformVersionValue = '10.0';
  appValue = 'C:/Users/Bhattn/Documents/Projects/Development/ICS_Stuff/Automation/WDIO-FrameWork-on-ICS-Repo/QA-WebDriverIO-FrameWork/app/QN_08_01.apk';
}
else{
  platformNameValue = 'iOS';
  platformVersionValue = '';
  appValue = '{{path of ipa from your local system}}';
}
exports.config = {
    // 4723 is the default port for Appium
    port: 4723,
  
    // How much detail should be logged. The options are:
    // 'silent', 'verbose', 'command', 'data', 'result', 'error'
    logLevel: 'error',
  
    // This defines which kind of device we want to test on, as well as how it should be
    // configured.
    capabilities: [{
      // 'Android' or 'iOS'
      platformName: platformNameValue,
  
      // The version of the Android or iOS system
      platformVersion: platformVersionValue,
  
      // For Android, Appium uses the first device it finds using "adb devices". So, this
      // string simply needs to be non-empty.
      // For iOS, this must exactly match the device name as seen in Xcode.
      deviceName: 'any',
  
      // Where to find the .apk or .ipa file to install on the device. The exact location
      // of the file may change depending on your Cordova version.
      app: appValue,
  
      // By default, Appium runs tests in the native context. By setting autoWebview to
      // true, it runs our tests in the Cordova context.
      // autoWebview: true,
  
      // fullReset: true,
  
      // When set to true, it will not show permission dialogs, but instead grant all
      // permissions automatically.
      autoGrantPermissions: true

      // chromedriverExecutable: '.chromedrivers/chromedriver.exe'
    }],

    // sync: true,
  
    // Where the files we are testing can be found.
    specs: ['./test/specs/**/login.e2e.js'],
  
    // Use the Appium plugin for Webdriver. Without this, we would need to run appium
    // separately on the command line.
    services: ['appium'],
  
    // The reporter is what formats your test results on the command line. 'spec' lists
    // the names of the tests with a tick or X next to them. See
    // https://www.npmjs.com/search?q=wdio-reporter for a full list of reporters.
    reporters: ['spec'],
  
    // wdio will run your tests using the framework below. You can choose from several,
    // much like the reporters. The full list is at https://www.npmjs.com/search?q=wdio-framework
    framework: 'jasmine',
  
    // By default, Jasmine times out within 10 seconds. This is not really enough time
    // for us as it takes a while for Appium to get set up.
    jasmineNodeOpts: {
      defaultTimeoutInterval: 90000
    }
  }