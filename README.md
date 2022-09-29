
## Try it now!

> Vitesse requires Node >=14

### Clone to local

```bash
npm install
```

## Usage

### Development

Just run and visit http://localhost:3333

```bash
npm run dev
```

### Build

To build the App, run

```bash
npm run build
```

And you will see the generated file in `dist` that ready to be served.

## Features

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next), [Vite 2](https://github.com/vitejs/vite), [ESBuild](https://github.com/evanw/esbuild) - born with fastness

- 🍍 [State Management via Pinia](https://pinia.esm.dev/)

- 🔷 [Tailwind](https://tailwindcss.com/)

- 🦾 TypeScript

- 📑 [Layout system](./src/layouts)

- 🗂 [File based routing](./src/pages)

- 🌍 [I18n ready](./locales)

- 📦 [Components auto importing](./src/components)

- 🖨 Static-site generation (SSG) via [vite-ssg](https://github.com/antfu/vite-ssg)

- ⚙️ Unit Testing with [Vitest](https://github.com/vitest-dev/vitest)



<br>

### Structure
- All routes are generated in the pages folder. To read more about it, check [Vite Plugin Pages](https://github.com/hannoeru/vite-plugin-pages)

- In the components folder we have all our vue components.

- We have some modules in the modules folder. Modules are installed automatically in the `main.ts` file

- In the `main.ts` we start the vite using vite-ssg and we initialize routes using plugins. All changes related to vite configs should be done in this file or `vite.config.ts` file.

- We use tailwindcss and you can modify config file or `tailwind.scss` file inside styles folder.

- Pinia stores are placed under stores directory.

- All of our custom composables are placed in composables folder. Inside api folder there are all of the requests. For any api call we create a composable for it and then use it whereever we need. The main job of api composables is to call api using the custom useFetch (with baseUrl) and update the store.

- Inside the assets, we can keep our file to be served. Like images, fonts, ... 