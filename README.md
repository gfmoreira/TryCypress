# Cypress Study

This repository contains my study on Cypress, an end-to-end front-end testing tool.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [First Test](#first-test)
- [References](#references)

## Introduction

[Cypress](https://www.cypress.io/) is a modern and powerful end-to-end testing tool for web applications. It is easy to set up and provides a great development and testing experience.

## Installation

To get started with Cypress, follow the steps below:

1. Make sure you have [Node.js](https://nodejs.org/) installed.
2. Create a new project or navigate to your existing project.
3. Install Cypress via npm:

```bash
npm install cypress --save-dev
```

## Getting Started

After installation, you can open Cypress for the first time and add some scripts to your `package.json`:

```json
{
  "scripts": {
    "cypress:open": "cypress open",
    "cypress:run": "cypress run"
  }
}
```

To open the Cypress interface, use the command:

```bash
npm run cypress:open
```

## First Test

Create a test file inside the `cypress/e2e` folder. For example, `example.cy.js`:

```javascript
describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true);
  });
});
```

Run the test in the Cypress interface to see how it works.

## References

- [Official Cypress Documentation](https://docs.cypress.io/)
- [Cypress Best Practices Guide](https://docs.cypress.io/guides/references/best-practices.html)
- [Page Object Pattern in Cypress](https://docs.cypress.io/guides/references/best-practices.html#Page-Objects)
