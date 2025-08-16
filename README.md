# Angular19 + Storybook + Compodoc

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.6.

# 📂 Folder Structure
```
project-root/
├── docs/
│   ├── architecture.md
│   ├── contributing.md
│   ├── summary.json
│
├── src/
│   ├── stories/
│   │   ├── Architecture.stories.mdx
│   │   ├── Contributing.stories.mdx
│   │
│   └── app/...
│
├── tsconfig.app.json
├── angular.json

```
Here’s a shared docs structure that works with both Compodoc and Storybook in your Angular 19 project.

---

## 1️⃣ docs/summary.json

This defines the sidebar menu for Compodoc:
```json
[
  {
    "title": "Architecture Overview",
    "file": "architecture.md"
  },
  {
    "title": "Contributing Guide",
    "file": "contributing.md"
  }
]
```


## 2️⃣ Compodoc Config

Add this script in package.json:

```json
"scripts": {
  "compodoc": "npx compodoc -p tsconfig.app.json --includes docs --serve"
}
```

Run it:

```bash
npm run compodoc
```

- --includes docs tells Compodoc to look for extra docs in /docs.

- summary.json defines their order in the sidebar

**Note:** Without integrating **Compodoc** with high level **Markdown** documentaion, run this command:

```bash
npx compodoc -p tsconfig.app.json -s
```

## 3️⃣ Storybook Config (MDX integration)
 4.1 Install Storybook Docs Addon
 ```bash
npm install @storybook/addon-docs --save-dev
```

4.2 .storybook/main.ts
```ts
import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.stories.@(js|ts|mdx)',
  ],
  addons: [
    '@storybook/addon-docs',
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  webpackFinal: async (config) => {
    // Enable importing raw markdown with ?raw
    config.module?.rules?.push({
      resourceQuery: /raw/,
      type: 'asset/source',
    });
    return config;
  },
};

export default config;
```


## 4️⃣ Storybook MDX Pages

src/stories/Architecture.stories.mdx
```html
import { Meta } from '@storybook/addon-docs';
import architecture from '../../docs/architecture.md?raw';

<Meta title="Documentation/Architecture" />

<div dangerouslySetInnerHTML={{ __html: architecture }} />
```

src/stories/Contributing.stories.mdx
```html
import { Meta } from '@storybook/addon-docs';
import contributing from '../../docs/contributing.md?raw';

<Meta title="Documentation/Contributing" />

<div dangerouslySetInnerHTML={{ __html: contributing }} />
```

?raw works with Vite and Webpack to import the raw markdown as a string.
If your Storybook config doesn’t allow ?raw, you can just copy-paste content or use markdown-loader.

## 5️⃣ Usage

Run Storybook

```bash
npm run storybook
```


→ See your /docs content inside the "Documentation" section in Storybook.

Run Compodoc

```bash
npm run compodoc
```


→ See the same /docs content inside Compodoc’s sidebar.

## ✅ Advantages of integration Storybook + Compodoc + Markdown

- Single source of truth (/docs)

- Same content in both Storybook & Compodoc

- No copy-pasting

- Easy to maintain
