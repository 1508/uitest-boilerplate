
"use strict";

Feature('Testing page response codes');

BeforeSuite((I) => {});

AfterSuite((I) => {});

Scenario('Response code 200', (I) => {
    I.customAmOnPage('/');
    I.haveServerResponseCode(200);
});
