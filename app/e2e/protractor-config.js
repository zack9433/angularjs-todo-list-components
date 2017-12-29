exports.config = {
    framework: 'mocha',
    mochaOpts: {
        reporter: 'spec',
        slow: 3000
    },
    //Use selenium Server if it use another browsers.
    //seleniumAddress: 'http://localhost:4444/wd/hub',

    //
    directConnect: true,
    specs: ['./specs/*.js']
};
