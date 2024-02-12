import { defineConfig } from 'cypress';

export default defineConfig({
  defaultCommandTimeout: 8000,
  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    baseUrl: 'https://devapp.sentra.world/',
    pageLoadTimeout: 100000,
    screenshotOnRunFailure: true,
    supportFile: false,
  },
});
