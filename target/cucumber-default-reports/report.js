$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/AddEmployee.feature");
formatter.feature({
  "name": "Add Employee",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@addEmployee"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I logged in into OrangeHrm",
  "keyword": "Given "
});
formatter.match({
  "location": "AddEmployeeSteps.i_logged_in_into_OrangeHrm()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add Employee and Create Login Details",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@addEmployee"
    },
    {
      "name": "@regression"
    },
    {
      "name": "@temp"
    }
  ]
});
formatter.step({
  "name": "I provide firstname,midname,lastname and location from excelFile",
  "keyword": "When "
});
formatter.match({
  "location": "AddEmployeeSteps.i_provide_firstname_midlename_lastname_and_location()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca class\u003d\"collapsible-header waves-effect waves-orange active\"\u003e...\u003c/a\u003e is not clickable at point (95, 287). Other element would receive the click: \u003cdiv id\u003d\"preloader\" class\u003d\"center-align loading\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d75.0.3770.100)\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dMac OS X 10.14.5 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Betuls-Air.lan1\u0027, ip: \u00272605:6000:1519:a27c:0:0:0:ba1%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.5\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 74.0.3729.6 (255758eccf3d24..., userDataDir: /var/folders/xn/gprn3mgx6yv...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:51102}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 75.0.3770.100, webStorageEnabled: true}\nSession ID: 887dfa281d91726531477117db853344\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\n\tat com.orangehrm.utils.CommonMethods.click(CommonMethods.java:188)\n\tat com.orangehrm.steps.AddEmployeeSteps.i_provide_firstname_midlename_lastname_and_location(AddEmployeeSteps.java:104)\n\tat ✽.I provide firstname,midname,lastname and location from excelFile(file:src/test/resources/features/AddEmployee.feature:27)\n",
  "status": "failed"
});
formatter.step({
  "name": "I click on create login details",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployeeSteps.i_click_on_create_login_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I provide all mandatory fields",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployeeSteps.i_provide_all_mandatory_fields()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on save button",
  "keyword": "And "
});
formatter.match({
  "location": "AddEmployeeSteps.i_click_on_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I see employee is added successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "AddEmployeeSteps.i_see_employee_is_added_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "status": "passed"
});
});