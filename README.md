![Architecture](https://user-images.githubusercontent.com/2589018/129089586-ee9d1d6a-1f61-41bf-b6ff-4afa240d3ccb.png)<img width="829" alt="Swagger1" src="https://user-images.githubusercontent.com/2589018/129089646-e4dff45d-d4ff-4b74-82db-9e4114f6d863.PNG">

<img width="824" alt="Swagger2" src="https://user-images.githubusercontent.com/2589018/129089666-50d5a383-2931-4df4-9820-2c70de021ace.PNG">

<img width="659" alt="postman" src="https://user-images.githubusercontent.com/2589018/129089621-fb5169c0-b4a2-4ec7-bfdf-4ef2a982bb99.PNG">

## How to Start?

1) From within ./src folder run ` npm run start` 
2) Point to /api endpoint and enter the request payload. (screenshot attached - postman.png) or either https://api-challenge333.herokuapp.com/api in postman with the request params as 
```
{
    "startDate": "2016-01-26",
    "endDate": "2018-02-02",
    "minCount": 2700,
    "maxCount": 3000
}
```
<img width="673" alt="Heroku-API-Test" src="https://user-images.githubusercontent.com/2589018/129094830-377bb4d8-2cce-4648-9c0d-c39564eec618.PNG">


4) Documentation Via SwaggerDocs.
5) Architecure


## Notes
 1 ) Have exposed the mongodb connection string to run it smoothly without any changes to code else can be done via DOTENV package.
