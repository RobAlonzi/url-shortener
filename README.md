# DealTap Exercise

This is a front-end excercise for DealTap. Developed by Rob Alonzi


### Prerequisites

NodeJS is needed to view the project locally once set up.


### Installing

You can use Yarn to install the dependencies: 

```
yarn install
```

You can also use npm to install:

```
npm install
```

If neither is installed on your machine, or there is an error, please contact me at info@robalonzi.com and I'll be happy to provide the dependencies.

## Viewing the project

You can build and serve the project with either of the following commands:

```
yarn dev
```

```
npm run dev
```

This will build the public folder and start a node server at http://localhost:3000. The project can be viewed there.

If you want to minify the code, you can run either of the following commands:

```
yarn prod
```

```
npm run prod
```

## Testing

You can run the rest suite with either of the following commands:

```
yarn tests
```

```
npm run tests
```

Only a few tests have been created. One to make sure the tests can be initialized and others to make sure the APIs can be called. No front end tests were created. If I continue on with this project I would use Jest as my front end tester. 

## API Endpoints

There are a few API endpoints to hit:

1. `GET /u/` - Gets all created URLs (no visitor stats)
2. `GET /u/:id/details` - Get specific details including visitors on a url (by ID)
3. `POST /api/shorten` - Passing along a url parameter, it will return a new shortened URL document

## Notes
* I didn't really spend too much type on the style of the app. I used MaterializeCSS for it. The styling could be better, but I was more focused on the functionality.

* I also haven't tested the IP Address functionality. Since I've been working off local, it only ever returns ::1. I recently shut down my Digital Ocean space so I don't have a remote node server to test on. 

There are a few TODOs I have in mind should I continue to build this out:

1. Fix the "Not found" error when you refresh the browser on the details page
2. Split up the backend logic into smaller separate component files
3. Validation on the Front End before sending to the back
4. Send more error info to the front on unsuccessful requests. 
5. Frontend Tests!
6. In the details URL, have the shortURL be the parameter instead of the URL's DB ID
7. Separate the testing suite DB or go more in depth to delete records created by the tests


## Built With

* [React](https://facebook.github.io/react/) - The web framework used
* [NodeJS](https://nodejs.org/en/) - Backend Programming language
* [MongoDB](https://www.mongodb.com/) - Database
* [Yarn](https://yarnpkg.com/en/) - Dependency Management

