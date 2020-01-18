# Mean Stack - Customer Store App

This Customer Store is a very basic Mean Stack application developed using MongoDB, Express, Angular and Node.js to show CRUD operations on MongoDB using RestAPI.

## Prerequisites

- In order to run this app, you need Node.js, which is javascript runtime installed on our machine.
  So download and install the latest Node.js available from this [link](https://nodejs.org/en/).

- we also need to have MongoDB installed on the machine. You can download and install MongoDB community edition free from this [link](https://www.mongodb.com/download-center/community).

## Getting Started

Clone or Download the zip file of this repository.

### Setup & Run WebAPI server

Open the command window in the folder where you have unzip the mean-stack-application repository code and move to webapi folder.

```
cd webapi
```

Now run following command to install all the package dependencies.

```
node install
```

Run the following command to run the webapi server in the command window.

```
node index.js
```

> WebAPI server will listen at URL - `http://localhost:3000/Customers`

### Setup & Run Client application

Now move to client folder.

```
cd client
```

Run following command to start the client application.

```
ng serve
```

> Navigate to `http://localhost:4200/`to access the client application.

## Built With

- [Node.js v10.15.1](https://nodejs.org/en/) - The .Net Core framework used
- [Angular CLI v7.3.1](https://cli.angular.io/) - This project was generated with
- [VS Code](https://code.visualstudio.com/download) - The Code editor used

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).