System.config({
  defaultJSExtensions: true,
  transpiler: "none",
  paths: {
    "*": "dist/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  meta: {
    "bootstrap": {
      "deps": [
        "jquery"
      ]
    }
  },
  map: {
    "aurelia-animator-css": "npm:aurelia-animator-css@1.0.0-beta.2.0.1",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.0-beta.2.0.1",
    "aurelia-fetch-client": "npm:aurelia-fetch-client@1.0.0-beta.2.0.1",
    "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.2.0.1",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.2.0.1",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.2.0.2",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.2.0.1",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.3.0.1",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-beta.2.0.1",
    "aurelia-react-loader": "npm:aurelia-react-loader@1.0.4",
    "aurelia-router": "npm:aurelia-router@1.0.0-beta.2.0.1",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.2.0.2",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.3.0.4",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.2.0.3",
    "aurelia-validatejs": "npm:aurelia-validatejs@0.5.2",
    "aurelia-validation": "npm:aurelia-validation@0.9.2",
    "bootstrap": "github:twbs/bootstrap@3.3.6",
    "fetch": "github:github/fetch@1.0.0",
    "font-awesome": "npm:font-awesome@4.6.3",
    "jquery": "npm:jquery@2.2.4",
    "react": "npm:react@0.14.8",
    "text": "github:systemjs/plugin-text@0.0.3",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.6.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.5"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:twbs/bootstrap@3.3.6": {
      "jquery": "npm:jquery@2.2.4"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:aurelia-animator-css@1.0.0-beta.2.0.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.2.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.2.0.0",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.3.0.6"
    },
    "npm:aurelia-binding@1.0.0-beta.2.0.7": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.2.0.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.2.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.2.0.0",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.2.0.1"
    },
    "npm:aurelia-bootstrapper@1.0.0-beta.2.0.1": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.2.0.1",
      "aurelia-framework": "npm:aurelia-framework@1.0.0-beta.2.0.1",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.2.0.1",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0-beta.2.0.1",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0-beta.2.0.2",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0-beta.2.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.2.0.0",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0-beta.3.0.1",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.0.0-beta.2.0.1",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.2.0.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.3.0.6",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0-beta.2.0.2",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.0.0-beta.3.0.4",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0-beta.2.0.3"
    },
    "npm:aurelia-dependency-injection@1.0.0-beta.2.1.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.2.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.2.0.0"
    },
    "npm:aurelia-event-aggregator@1.0.0-beta.2.0.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.2.0.1"
    },
    "npm:aurelia-framework@1.0.0-beta.2.0.1": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.2.0.7",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.2.1.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.2.0.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.2.0.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.2.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.2.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.2.0.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.2.0.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.3.0.6"
    },
    "npm:aurelia-history-browser@1.0.0-beta.2.0.1": {
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.2.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.2.0.0"
    },
    "npm:aurelia-loader-default@1.0.0-beta.2.0.2": {
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.2.0.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.2.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.2.0.0"
    },
    "npm:aurelia-loader@1.0.0-beta.2.0.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.2.0.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.2.0.1"
    },
    "npm:aurelia-logging-console@1.0.0-beta.2.0.1": {
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.2.0.1"
    },
    "npm:aurelia-metadata@1.0.0-beta.2.0.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.2.0.0"
    },
    "npm:aurelia-pal-browser@1.0.0-beta.3.0.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.2.0.0"
    },
    "npm:aurelia-polyfills@1.0.0-beta.2.0.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.2.0.0"
    },
    "npm:aurelia-react-loader@1.0.4": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.2.0.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.3.0.6",
      "lodash.kebabcase": "npm:lodash.kebabcase@4.0.0",
      "react": "npm:react@0.14.8",
      "react-dom": "npm:react-dom@0.14.8"
    },
    "npm:aurelia-route-recognizer@1.0.0-beta.2.0.1": {
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.2.0.1"
    },
    "npm:aurelia-router@1.0.0-beta.2.0.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.2.1.1",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0-beta.2.0.1",
      "aurelia-history": "npm:aurelia-history@1.0.0-beta.2.0.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.2.0.1",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.2.0.1",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.0.0-beta.2.0.1"
    },
    "npm:aurelia-task-queue@1.0.0-beta.2.0.1": {
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.2.0.0"
    },
    "npm:aurelia-templating-binding@1.0.0-beta.2.0.2": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.2.0.7",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.2.0.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.3.0.6"
    },
    "npm:aurelia-templating-resources@1.0.0-beta.3.0.4": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.2.0.7",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.2.1.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.2.0.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.2.0.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.2.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.2.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.2.0.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.2.0.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.3.0.6"
    },
    "npm:aurelia-templating-router@1.0.0-beta.2.0.3": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.2.1.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.2.0.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.2.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.2.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.2.0.1",
      "aurelia-router": "npm:aurelia-router@1.0.0-beta.2.0.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.3.0.6"
    },
    "npm:aurelia-templating@1.0.0-beta.3.0.6": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.2.0.7",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.2.1.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.0-beta.2.0.1",
      "aurelia-logging": "npm:aurelia-logging@1.0.0-beta.2.0.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.2.0.1",
      "aurelia-pal": "npm:aurelia-pal@1.0.0-beta.2.0.0",
      "aurelia-path": "npm:aurelia-path@1.0.0-beta.2.0.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.2.0.1"
    },
    "npm:aurelia-validatejs@0.5.2": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.2.0.1",
      "aurelia-validation": "npm:aurelia-validation@0.9.2",
      "validate.js": "npm:validate.js@0.10.0"
    },
    "npm:aurelia-validation@0.9.2": {
      "aurelia-binding": "npm:aurelia-binding@1.0.0-beta.2.0.7",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.0.0-beta.2.1.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.0-beta.2.0.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.0.0-beta.2.0.1",
      "aurelia-templating": "npm:aurelia-templating@1.0.0-beta.3.0.6"
    },
    "npm:buffer@3.6.0": {
      "base64-js": "npm:base64-js@0.0.8",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "ieee754": "npm:ieee754@1.1.6",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:fbjs@0.6.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:font-awesome@4.6.3": {
      "css": "github:systemjs/plugin-css@0.1.23"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:lodash.deburr@4.0.0": {
      "lodash.tostring": "npm:lodash.tostring@4.1.3"
    },
    "npm:lodash.kebabcase@4.0.0": {
      "lodash.deburr": "npm:lodash.deburr@4.0.0",
      "lodash.words": "npm:lodash.words@4.1.1"
    },
    "npm:lodash.tostring@4.1.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.words@4.1.1": {
      "lodash.tostring": "npm:lodash.tostring@4.1.3"
    },
    "npm:process@0.11.5": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:react-dom@0.14.8": {
      "react": "npm:react@0.14.8"
    },
    "npm:react@0.14.8": {
      "fbjs": "npm:fbjs@0.6.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:validate.js@0.10.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});