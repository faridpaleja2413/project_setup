<!-- 
#User Add
#POST 
-->

<!-- @URL  http://localhost:5001/api/v1/users/add -->
<!-- #Payload structure of user detail  -->
{
    "payload" : {
        "data" : {
            "fullName"  : "farid papleja",
            "email"  : "farid@gmail.com",
            "password" : "1234",
            "countryCode" : "+92",
            "mobileNumber" : 8745874558,
            "isActive" : true

        }
    }
}



<!-- Response structure -->
{
    "status": true,
    "success": {
        "code": "USR-002",
        "message": "User created successfully",
        "data": {
            "fullName": "farid papleja",
            "email": "farid@gmail.com",
            "password": "1234",
            "countryCode": "+92",
            "mobileNumber": 8745874558,
            "isActive": true,
            "createdAt": "2022-07-05T11:04:33.040Z",
            "deletedAt": null,
            "id": "44c62291-98e4-49a6-830a-757690c1b33e",
            "updatedAt": "2022-07-05T11:04:33.040Z"
        }
    },
    "error": null
}