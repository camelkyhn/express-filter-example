# express-filter-example

This project is just a basic express.js web application with only one endpoint in order to filter the "record" entities stored in the mongodb database.

## Getting Started

### Prerequisites
You need to have node (npm) or yarn package manager installed on your computer in order to run this application. Then you can download this repo with git clone command.


You can download and install the node.js and npm(Node Package Manager) at https://nodejs.org/en/

### Installing

Once you downloaded this repository, you can now open up a terminal and change your directory to that folder. Then you should type:

```
npm install
```

To install the dependencies that this project will use. After the installing finishes, you can now type the below command to run the application.

```
npm run start
```

This command triggers the "nodemon index.js" and than the application will boot up. Now you are ready to send the HTTP POST requests to 

```
localhost:3001
```
You can specify the request body with the 4 fields shown below to be able to filter as you wish: 

```
{
  "startDate": "2016-01-26",
  "endDate": "2018-02-02",
  "minCount": 2700,
  "maxCount": 3000
}
```

If any "record" entity matches with the filter conditions, response will contain them. Response will look something like this:
```
{
  "code": 0,
  "msg": "Success",
  "records": [
    {
      "key": "TAKwGc6Jr4i8Z487",
      "createdAt": "2017-01-28T01:22:14.398Z",
      "totalCount": 2800
    },
    {
      "key": "NAeQ8eX7e5TEg7oH",
      "createdAt": "2017-01-27T08:19:14.135Z",
      "totalCount": 2900
    }
  ]
}
```

If any error occurs you will get something like this:

```
{
  "code": -1,
  "msg": "An error message",
  "records": null
}
```
## Running the tests

This project uses "Jest" package to testing, you can type to terminal this below command in order to run the tests.

```
npm run test
```
This will triggers the "jest" command.

## Deployment

I just deployed this application to Heroku. If you don't want to deal with these instructions of this repository, you can reach the same application from:
```
https://express-filter-example.herokuapp.com/
```
