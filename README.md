# NuPath

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


NuPath Functional Specifications:
Overview:

NuPath is a web application developed using the Angular framework with a custom rest API as a backend. 
It’s connected to a mysql database instance hosted on Amazon RDS.
 The backend API is hosted on Railway while the front end it’s connected to is hosted on AWS S3. 
Routing and connecting the various HTML, SCSS, Javascript and Typescript  components are done via the Angular framework.
Various service typescript files establish connection to the backend and can pass data back and forth between the API and the HTML forms.
The Backend API uses Javascript files to deal with session authentication, posting to the database, and retrieving data from the database


Technologies Used:
Angular CLI
A framework for developing web applications with tools for scaffolding
Binds components (html, css, typescript) as objects that can be inserted elsewhere in the application modularly 
Has tools to help with routing between pages on the application
Amazon Simple Storage Service (S3)
Offered by Amazon Web Services (AWS)
Allows secure storage and access of data
Used to host the our angular application as a visitable web page
Amazon Relational Database Service (RDS)
A service for hosting managed relational databases like MySQL
We used this for hosting the database (MySQL that is used in the product
Express:
A  Node.js framework for to help make APIs easier to use
We used this as part of our backend
Railway:
Railway is a deployment platform that helps with the infrastructure of hosting to cloud
We used this to host the backend API/ run the server require to connect to the database 
Frontend:
Auth.service.ts
Deals with retrieving and sending sign in and login data from the backend 
It also helps in making sure the user is authenticated on the front end
Post.service.ts
This service calls the backend to retrieve forum posts
It also can call the backend to add or delete a post based on what the user does in the frontend
Leaderboard.service.ts
This service calls the backend to retrieve the leaderboard data
It also allows 
Error-handler.service.ts
This helps handle errors
App-routing.module.ts
This controls components are considered pages that you can link to
It makes changing pages easier
App.module.ts
This defines what Angular components can be inserted globally into any other part of the project
If you make and register any html component you can apply/insert it elsewhere
Backend/API:
Index.js
This is the main js file that defines what the routes in the backend server are and how they connect
Config.js
Defines the parameters of the database the project uses
Database.js 
Uses the data from config to connect to the database

Routes:
Routes are where the commands from the frontend are passed to
These pass the commands to the appropriate backend controller
auth.js
event.js
leaderboard.js
posts.js
profile.js
Controllers:
The controller files handle more of the fine details of what data is going to be used in for the specific commands to the database
It checks the data and then passes the instructions on to the model files
Auth.js
Error.js
Event.js
Leaderboard.js
Posts.js
profile.js
Middleware:
This mainly helps make sure authentication is secure when any authentication related activities happen
auth.js

Models:
The model files contain an interface/model for the data to be stored in the database
It takes the commands passed to it and translates them into the correct MySQL command to apply to the database and executes them.
Event.js
Leaderboard.js
Post.js
Profile.js
User.js
Hosting/Server:
AWS S3 hosts the front end angular site
It allows the user to visit the website as clickable link
The backend API is hosted on Railway as a Node.js server, which is connected to the RDS database
The RDS database is a MySQL instance that contains all our data used in the application


