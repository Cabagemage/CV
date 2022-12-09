# my CV

## Used technologies

1. [Astro](https://astro.build) - I prefer to use astro for server side rendering. It provides ability to create Multi-page applications much more faster and optimized than Next.JS.

2. [React](https://reactjs.org) - React JS as package to build reactive components for complex ui elements.

3. [Tailwind](https://tailwindcss.com) - atomic CSS framework to ease work with styles. Its pretty optimized and fast

4. [Hygen](https://www.hygen.io/) - code generator to make templates of components or ui entities.

## Code Quality instruments

I prefer to use Typescript and eslint to make typescript more strict.  
Also I like to use .github actions to control code quality.

## Project structure

\_templates - directory for hygen templates. To use templates you can write command hygen to get available actions. In few words you should write

```
hygen component new
```

to create component, and

```
hygen ui new
```

to create ui elemement.

src contains 4 main directories.

components: this directory contains .tsx or .astro components, that based on ui elements.

ui: this directory contains main bricks of application. Its main ui elements, like buttons, inputs, etc.

pages & layouts: this directories described in astro documentation

## Used environment variables

There is no environment variables.
