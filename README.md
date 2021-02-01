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
    /features
    /models
    /services
    /utils
```

-   `components:` This is where we keep components that are reused across
    application features. Components are arranged in sub-folders - one or more
    tightly related components per sub-folder.

-   `contexts:` This folder contains the React contexts we need for our app.

-   `features:` Contains domain-specific features of the app - one folder per
    feature. Feature is an abstract concept which could map to a reasonable
    level of granularity for your application. For example, feature could map to
    a page, a group of pages or a tab on your app. The feature folder can hold
    multiple components that are tightly related to the feature and are not
    reusable across features. Keep the folder structure flat as long as
    possible. Consider creating sub-folders when the folder reaches seven or
    more files.

-   `models`: This is where we keep the application's domain entities, value
    objects, interfaces and types. Please refer to
    [Domain-Driven Design](https://archfirst.org/domain-driven-design/) to
    understand the meaning of these terms.

-   `services:` Contains functionality to access the outside world. This could
    be services for accessing REST or GraphQL APIs, listeners for WebSockets,
    access to data stores etc. This layer is also known as the `adapter` layer
    in the
    [Hexagonal Architecture](http://alistair.cockburn.us/Hexagonal+architecture)
    or the
    [Onion Architecture](http://jeffreypalermo.com/blog/the-onion-architecture-part-1/).

-   `utils:` - contains general purpose utilities such as date/time utilities
    and number parsing & formatting utilities.

When reviewing the above folder structure, note how we control the items exposed
by a folder. Each folder has an `index.ts` file which exports only what is
needed by external consumers - nothing more, nothing less! If everything needs
to be exported, we simply use `export * from './xyz';` - instead of repeating
each item individually. This makes it easier to manage the index files.
