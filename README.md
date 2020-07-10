# React Force Template

This template is intended to be a starting point for serious React applications.
It offers an opinionated directory structure and demonstrates best practices in
layout, error handling, hooks and more.

![Screen Shot](assets/screen-shot.png)

Check out the following repos for more complex examples using this template:

-   [Stock Charts](https://github.com/nareshbhatia/stock-charts)
-   [Manage My Money](https://github.com/nareshbhatia/manage-my-money)
-   [GraphQL Bookstore](https://github.com/nareshbhatia/graphql-bookstore)

## Getting Started

Make sure your development machine is set up for building React apps. See the
recommended setup procedure [here](./dev-machine-setup.md).

Now execute the following commands to build and run the template.

```bash
$ yarn
$ yarn start
```

Now point your browser to http://localhost:3000/.

## Folder Structure

This example follows best practices adopted by popular React projects including
Material-UI.

```
/src
    /components
    /contexts
    /models
    /pages
    /services
    /utils
```

-   `src:` Contains the minimum number of files necessary to bootstrap the
    application.

    -   `index.tsx` wraps the `App` with Material-UI's `ThemeProvider`. This
        allows access to the provided theme anywhere in the component tree using
        the `makeStyles()` hook. `index.tsx` also provides the `CssBaseline`.
    -   `App.tsx` contains the root of the component tree. In this simple
        example, it contains only the `HomePage`, but in a more complex
        application, you might want to place your router here along with other
        providers.

-   `components:` This is where we keep the reusable components across our app -
    one folder per component or a set of tightly related components.

-   `contexts:` This is where we React contexts that we need for our app.

-   `models`: This is where we keep the application's domain entities, value
    objects, interfaces and types. Please refer to
    [Domain-Driven Design](https://archfirst.org/domain-driven-design/) to
    understand the meaning of these terms.

-   `pages:` Contains the top-level pages of the app - one folder per page. Each
    page folder may have a few additional files that are tightly related to the
    page (not reusable across pages).

-   `services:` Contains functionality to access the outside world. This could
    be services for accessing REST or GraphQL APIs, listeners for WebSockets or
    Firebase, access to data stores etc. This layer is also known as the
    `adapter` layer in the
    [Hexagonal Architecture](http://alistair.cockburn.us/Hexagonal+architecture)
    or the
    [Onion Architecture](http://jeffreypalermo.com/blog/the-onion-architecture-part-1/).

-   `utils:` - contains general purpose utilities such as data & time utilities
    and number parsing and formatting utilities.

When reviewing the above folder structure, note how we control the items exposed
by a folder. Each folder has an `index.ts` file which exports only what is
needed by external consumers - nothing more, nothing less! If everything needs
to be exported, we simply use `export * from './xyz';` - instead of repeating
each item individually. This makes it easier to manage the index files.
