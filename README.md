# Ruby on Rails & React Passkey Example App

This is a sample implementation of a Ruby on Rails application with a React.js frontend that offers passkey authentication. For simple passkey-first authentication, the Corbado web component is used.

Please read the [full blog post](https://www.corbado.com/blog/passkeys-ruby-on-rails-react) to see all the required steps to integrat passkeys into a Ruby on Rails / React app.

## File structure

```
...
├── app
|   ...
|   ├── controllers
|   |   └── pages_controller.rb    # Controller for our pages
|   |
├── config
|   ...
|   ├── environments                  
|   |   ├── development.rb         # Development environment config
|   |   └── production.rb          # Production environment config
|   |
|   └── routes.rb                  # The Ruby on Rails routes are configured here
|
└── frontend
    ...
    ├── .env
    └── src                  
        ...
        ├── index.js               # Root of our React.js app which also contains the React.js routes 
        └── routes                  
            ├── login.js           # Login page containing the Corbado webcomponent
            └── profile.js         # Profile page showing information about the current user
```

## Prerequisites

Please follow the steps in [Getting started](https://docs.corbado.com/overview/getting-started) to create and configure
a project in the [Corbado developer panel](https://app.corbado.com/signin#register).

Open the `development.rb` and `production.rb` files under /config/environments and set the `corbado_project_id` variable to your Corbado project ID.

## Usage

Then, you can run the project locally by executing the following command:

```bash
bin/rails s
```
