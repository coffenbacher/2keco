module.exports = function (wallaby) {
  // Babel, jest-cli and some other modules are located under
  // react-scripts/node_modules, so need to let node.js know about it
  var path = require('path');
  process.env.NODE_PATH +=
    path.delimiter +
    path.join(__dirname, 'node_modules') +
    path.delimiter +
    path.join(__dirname, 'node_modules/react-scripts/node_modules');
  require('module').Module._initPaths();

  // Babel needs this
  process.env.NODE_ENV = 'development';

  return {
    files: [
      'src/**/*.json',
      'src/**/*.js?(x)',
      'src/**/*.snap',
      '!src/**/*.test.js?(x)'
    ],

    tests: ['src/**/*.test.js?(x)'],

    env: {
      type: 'node',
      runner: 'node'
    },

    compilers: {
      '**/*.js?(x)': wallaby.compilers.babel({
        babel: require('babel-core'),
        presets: ['react-app'],
        plugins: ['babel-plugin-transform-decorators-legacy']
      })
    },

    setup: (wallaby) => {
      wallaby.testFramework.configure({
        // as in node_modules/react-scripts/utils/createJestConfig.js
        testURL: 'http://localhost',
        setupFiles: [require('path').join(wallaby.localProjectDir, 'node_modules/react-scripts/config/polyfills.js')],
        moduleNameMapper: {
          '^.+\\.(jpg|jpeg|png|gif|svg)$': require.resolve('react-scripts/config/jest/fileTransform.js'),
          '^.+\\.css$': require.resolve('react-scripts/config/jest/cssTransform.js'),
          '^react-native$': 'react-native-web'
        }
      });
    },

    testFramework: 'jest'
  }
}