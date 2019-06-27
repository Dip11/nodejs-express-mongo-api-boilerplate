# Node-Express-Mongo-API-BoilerPlate

This project uses the following technologies:

1. [Express](https://expressjs.com/) and [NodeJs](https://nodejs.org/en/download/) for the backend
2. [MongoDB](https://www.mongodb.com/) for the database


### Configurations
Make sure to add your own `YourMongoDBUrl` from your  database in `src/config/keys.js.`

```

module.exports = {
  mongoURI: "YourMongoDBUrl",
  secretOrKey: "secret"
};
```

### Requirements
Make sure you have installed 
[NodeJs](https://nodejs.org/en/download/)
& 
[NodeMon](https://www.npmjs.com/package/nodemon)(globally).



### Run the Code

To run firstly clone the repo to your desired folder and cd to that folder and run the following command.

```
// To install dependencies
npm install


// To run server
nodemon

//Server up and running on port 5000

```

## Documentation
This project will allow users to

**1. Register**

**2.Log in**

**3.Public routes accessible to any one**

**3.Private route (protected routes) only accessible to logged in users**

**4.Log out**


### Project Structure
```
project  
│
└───src
│   │   
│   └───config
│   └───controllers   
│   └───models       
│   └───routes   
│   └───validation   
│   
└───package.json
└───server.js
  
```


* In the `src/config` directory you will find two files named `keys.js` & `passport.js`. In `keys.js` you have to provide your **mongodbURI**(as shown in the configuration part). `passport.js` is the configuration for jwt-passport authentication.  You can read more about the `passport-jwt` strategy in their official website. It does a great job breaking down how the JWT authentication strategy is constructed, explaining required parameters, variables and functions such as `options, secretOrKey, jwtFromRequest, verify`, and `jwt_payload`.

* `src/controllers` is the directory where you will build your controllers based on different purpose. There is already a built-in controller `app-user.controller.js` with registration and login methods.
* `src/models` folder arranges all your models will be used for this project. 
*  `src/routes` folder keep track of all your routes. In the `index.js` file you have to register all your purpose based routes, which further you can elaborate in your `src/routes/api` folder. There is also an `auth.js` file  for defining protected  and public routes. 
*  `src/validation` folder keeps the files for validating `email` and `password`  for login and registration purpose.
*  `package.json`  contains the meta-data of the project(dependencies and scripts).
*  `server.js	` file is the main entry point of the project. When you run the project this file gets executed.
