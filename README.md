# Knowit Design System

The Knowit Design system provides a set of organized tools, patterns and practices that serve as the foundation for Knowit’s digital products and experiences.

The initial project skeleton was created using [Create React App](https://github.com/facebook/create-react-app) and [storybook init](https://storybook.js.org/docs/react/get-started/install).

## Getting started

To run the app in development mode, run the following commands:

```bash
npm install
npm run storybook
```

This will open [http://localhost:6006](http://localhost:6006) in your browser.

To build the app for production, run:

```bash
npm run build-storybook
```

Once the app is built, it is ready to be deployed.

To run tests, use the following command:

```bash
npm run test-storybook
```

To get the test coverage, use the following command:

```bash
npm run test-storybook -- --coverage
```

## Publishing Storybook

The app is published to [Chromatic](https://www.chromatic.com/) on every push using [GitHub Actions](https://github.com/features/actions) as CI/CD -tool.

Please refer to the [CI/CD -automation documentation](https://www.chromatic.com/docs/github-actions) for instructions on how to configure GitHub Actions. The necessary configurations can be found in the `.github/workflows` folder.

## Pull request with UI review

When you are making a pull request to the main branch, the first thing to do is to review the visual changes that the pull request introduces. This is done in the [Chromatic UI review](https://www.chromatic.com/docs/review).

After accepting the changes in Chromatic, the code changes can be reviewed in Github. When the pull request is merged, the changes are automatically deployed.
