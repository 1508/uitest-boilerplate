'use strict';

class NightmareAll extends Helper {

    // before/after hooks
    _before() {
        // remove if not used
    }

    _after() {
        // remove if not used
    }

    /**
    * Go to a given page, and store the response on the borwser object for later reference
    */
    customAmOnPage(url, headers) {
        // let's use chai assertion library
        let expect = require('chai').expect;

        // get nightmare instance
        let browser = this.helpers['Nightmare'].browser;

        return browser.goto(url, headers).then((res) => {
            //Store results on the current browser object, giving us access to response code etc.
            browser.currentPageResponse = res;
        });
    }

    getServerResponseCode(expectedValue) {

        // let's use chai assertion library
        let expect = require('chai').expect;

        // get nightmare instance
        let browser = this.helpers['Nightmare'].browser;

        expect(browser.currentPageResponse.code).to.equal(expectedValue);
    }

    // getServerResponseCode(url, expectedValue) {
    //     // let's use chai assertion library
    //     let expect = require('chai').expect;
    //
    //     // get nightmare instance
    //     let browser = this.helpers['Nightmare'].browser;
    //
    //
    //
    //     return browser.goto(url).then(function(res) {
    //         //assert.equal(res.code, expectedValue);
    //         expect(res.code).to.equal(expectedValue);
    //
    //     });
    // }

}

module.exports = NightmareAll;