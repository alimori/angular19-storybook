import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    {
      name: "@storybook/addon-docs",
      options: { transcludeMarkdown: true },
    }
  ],
  "framework": {
    "name": "@storybook/angular",
    "options": {}
  },
  core: {
    builder: {
      name: '@storybook/builder-webpack5',
      options: {
        fsCache: true,
        lazyCompilation: true,
      },
    },
  }
};
export default config;