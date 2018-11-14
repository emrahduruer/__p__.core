
module.exports = function(config) {

  config.set({
    //root path location to resolve paths defined in files and exclude
    basePath: '',
    //files/patterns to exclude from loaded files
    exclude: [],
    files: [
        './test/**/*.js',
        './dev/js/**/*.js',
    ],
    preprocessors: {
        './test/**/*.js': ['webpack'],
        './dev/js/**/*.js': ['webpack'],
    },
    /* karma-webpack config
       pass your webpack configuration for karma
       add `babel-loader` to the webpack configuration to make the ES6+ code readable to the browser */
    webpack: {
		mode : 'development',
		watch : false,
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude:/(node_modules)/,
                    loader:'babel-loader',
                    options:{
                      presets:['@babel/preset-env']
                    }
                },
                {
                    test: /\.js$/,
                    exclude: /(node_modules|\.spec\.js$)/,
                    loader: 'istanbul-instrumenter-loader',
                    enforce: 'post',
                    options: {
                      esModules: true
                    }
                }
            ]
        }
    },
    webpackMiddleware: {
        //turn off webpack bash output when run the tests
        noInfo: true,
        //stats: 'errors-only'
    },
    //executes the tests whenever one of watched files changes
    autoWatch: false,
    //if true, Karma will run tests and then exit browser
    singleRun: true,
    //if true, Karma fails on running empty test-suites
    failOnEmptyTestSuite:false,
    //reduce the kind of information passed to the bash
    logLevel: config.LOG_ERROR, //config.LOG_DISABLE, config.LOG_ERROR, config.LOG_INFO, config.LOG_DEBUG
    plugins: ['@metahub/karma-jasmine-jquery', 'karma-*'],
    //list of frameworks you want to use, only jasmine is installed automatically
    frameworks: ['jasmine-jquery', 'jasmine'],
    //list of browsers to launch and capture
    browsers: ['ChromeHeadless'/*,'PhantomJS','Firefox','Edge','ChromeCanary','Opera','IE','Safari'*/],
    //list of reporters to use
    reporters: ['coverage-istanbul','spec', 'html' /*'mocha','kjhtml','dots','progress','spec'*/],

    // any of these options are valid: https://github.com/istanbuljs/istanbuljs/blob/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-api/lib/config.js#L33-L39
    coverageIstanbulReporter: {
        // reports can be any that are listed here: https://github.com/istanbuljs/istanbuljs/tree/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-reports/lib
        reports: ['html', 'lcovonly', 'text-summary', 'json', 'json-summary'],

        // Combines coverage information from multiple browsers into one report rather than outputting a report
        // for each browser.
        combineBrowserReports: true,

        // if using webpack and pre-loaders, work around webpack breaking the source path
        fixWebpackSourcePaths: true,

        // Omit files with no statements, no functions and no branches from the report
        skipFilesWithNoCoverage: false,

        // Most reporters accept additional config options. You can pass these through the `report-config` option
        'report-config': {
            // all options available at: https://github.com/istanbuljs/istanbuljs/blob/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-reports/lib/html/index.js#L135-L137
            html: {
              // outputs the report in ./coverage/html
              subdir: 'html'
            }
        },

        // enforce percentage thresholds
        // anything under these percentages will cause karma to fail with an exit code of 1 if not running in watch mode
        thresholds: {
            emitWarning: true, // set to `true` to not fail the test command when thresholds are not met
            // thresholds for all files
            global: {
                statements: 80,
                lines: 80,
                branches: 80,
                functions: 80
            },
            // thresholds per file
            // each: {
            //     statements: 100,
            //     lines: 100,
            //     branches: 100,
            //     functions: 100,
            //     // overrides: {
            //     //     'baz/component/**/*.js': {
            //     //         statements: 98
            //     //     }
            //     // }
            // }
        },
    },
    //address that the server will listen on, '0.0.0.0' is default
    listenAddress: '0.0.0.0',
    //hostname to be used when capturing browsers, 'localhost' is default
    hostname: 'localhost',
    //the port where the web server will be listening, 9876 is default
    port: 9876,
    //when a browser crashes, karma will try to relaunch, 2 is default
    retryLimit:0,
    //how long does Karma wait for a browser to reconnect, 2000 is default
    browserDisconnectTimeout: 5000,
    //how long will Karma wait for a message from a browser before disconnecting from it, 10000 is default
    browserNoActivityTimeout: 10000,
    //timeout for capturing a browser, 60000 is default
    captureTimeout: 60000,

    client: {
        //capture all console output and pipe it to the terminal, true is default
        captureConsole:true,
        // if true, Karma clears the context window upon the completion of running the tests, true is default
        clearContext:false,
        //run the tests on the same window as the client, without using iframe or a new window, false is default
        runInParent: false,
        //true: runs the tests inside an iFrame; false: runs the tests in a new window, true is default
        useIframe:true,
        jasmine:{
            //tells jasmine to run specs in semi random order, false is default
            random: false
        }
    },
  });
};
