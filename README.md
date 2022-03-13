# Getting Started with Geometry Configurator React app

### Installation

After cloning project run `npm install`

### Start project

After installation run `npm start` or `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Exercise3 (Required) as per description.md
====================

Added UI tests using cypress
  >The tests cover all user interactions with the UI widgets and / or elements
  >The tests cover visual regression testing of all the geometric shapes (for identifying visual differences between one tests to another). To achieve this, cypress allows for integration with a lot of visual testing tools, I chose to use 'snapshot plugin'. this requires js-base64 installed, see below 
  # (npm i cypress cypress-plugin-snapshots js-base64@2.5.2 --save-dev)
  # full snapshot plugin configuration can be found here https://snyk.io/advisor/npm-package/cypress-plugin-snapshots
  >
Made some changes to the existing code
  >I've added data-testid attributes to a lot of page elements. This makes it easier to find these elements on the UI without having to type Xpaths as a lot of widgets have no ids. Also this does reduce possibilities of having brittle/flaky tests when developers change ids/Xpaths for the UI elements.
I've used cypress as opposed to selenium because I felt it's a more suitable testing tool for the kind of application this is, also because it works well with JS based applications and thus both QAs and Frontend engineers can contribute writing/maintenance of the tests

Exercise5 (Optional)
====================

I believe the approach as per in description.md, is thought through in this test approach. First, the tests assert that for each interaction with the UI widget controls, a correct geometric shape is selected, as well as make sure that the rendering of the shape matches exactly the previous render by taking a snapshot and comparing it to an existing one. also the snapshot plug-in offers a configuration `resizeDevicePixelRatio` which resizes image to base resolution when Cypress is running on high DPI screen, `cypress run` always runs on base resolution. Thus, theres definitely a high degree of confidence that any visual regressions can be captured regardless of the machine/resolution or versions of the application

NOTE:
>Animation of the shapes is slowed down (Changed the `ROTATION_SPEED` from 0.001 to o.0001) to allow for better shape comparison. It's relatively harder to compare moving objects as they can be at different points during each run depending on a few factors.

>Image snapshots are saved under cypress/integration/__image_snapshots__

>Type `npm run cypress:open` in the terminal to start cypress tests (Application should be started first with `npm start`). Both should run on port 3000

