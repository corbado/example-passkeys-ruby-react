# Passkey integration example for Ruby on Rails together with a React.js frontend

This is a sample implementation of a Ruby on Rails application with a React.js frontend that offers passkey authentication. For simple passkey-first authentication, the Corbado web component is used.

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
|   |   ├── development.rb     # Development environment config
|   |   └── production.rb      # Production environment config
|   |
|   └── routes.rb              # We configure our routes here
|
└── frontend
    ...
    ├── .env
    └── src                  
        ...
        ├── index.js          # Sign in page which also contains the Corbado web component
        └── routes                  
            ├── login.js     # Development environment config
            └── profile.js      # Production environment config
```

## Prerequisites

Please follow the steps in [Getting started](https://docs.corbado.com/overview/getting-started) to create and configure
a project in the [Corbado developer panel](https://app.corbado.com/signin#register).

Open the `development.rb` and `production.rb` files under /config/environments and set the `corbado_project_id` variable to your projectID.

## Usage

Then you can run the project locally by executing the following command:

```bash
bin/rails s
```
