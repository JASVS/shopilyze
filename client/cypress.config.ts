import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: process.env.CLIENT_HOST,
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
});
