# Api Mocker

Create mock APIs easily with API mocker. Clone the repo and folow the below steps to get started. 

## Install

```bash
yarn install
```

and to run
```bash
yarn dev
```

## Build

```bash
yarn build
```


## Setup New Route

In routes folder you can add new routes. Sample routes are provided. You can copy and modify to create a new route easily. Once you have added a route you can call the route as below in postman.

```bash
curl --location --request GET 'localhost:3000/NEW_ROUTE'
```


## Setup Global Overrides

Global overrides are set of global rules that define global settings in mockerService.ts in utils/mocker. This is a switch case statement. These rules apply to all routes and all properties in response. 


## Setup Local Overrides
Local, route specific overrides can be set in the route itself as show in the model file in the route. 


