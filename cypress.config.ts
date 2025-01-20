import { defineConfig } from "cypress";
import path from "path";
import { NormalModuleReplacementPlugin } from "webpack";

export default defineConfig({
  // reporter: "junit",

  // reporter: 'mochawesome',
  // reporterOptions: {
  //   reportDir: "reports",
  //   reportFilename: "[status]-[name]",
  //   json: false,
  //   html: true,
  //   quiet: true,
  // },
  reporter: "mocha-junit-reporter",

  reporterOptions: {
    testsuitesTitle: true,
    suiteTitleSeparatedBy: ".",
    mochaFile: "./reports/[suiteFilename]-report.xml",
    useFullSuiteTitle: true,
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
      webpackConfig: {
        plugins: [
          new NormalModuleReplacementPlugin(
            /next\/image/,
            require.resolve(
              path.join(__dirname, "cypress", "mocks", "next", "image")
            )
          ),
        ],
      },
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
