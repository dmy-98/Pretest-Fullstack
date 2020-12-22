# Loket API 

## Installation

```
npm install
```

## Run the server
```
node app.js
```

## API docs

### Event

#### GET - Get Event - 127.0.0.1:3000/event/get_info
```
Request Body: not needed
```
```
Response:
{
    "success": "true",
    "message": "Successfully showing all Event!",
    "data": [
        {
            "ticket":[{
                "_id": "<ticket id>",
                "type": "<ticket type>",
                "quantity": "<ticket quantity>",
                "price": "<ticket price>",
            }],
            "_id": "<event id>",
            "name": "<event name>",
            "location": {
                "_id": "<location id>",
                "name": "<location name>",
                "city": "<location city>",
            },
            "startTime": "<event start time>",
            "endTime": "<event end time>"
        }
    ],
}
```

#### POST - Create Event - 127.0.0.1:3000/event/create
```
Request Body: 
{
    "name": "<event name>",
    "location": "<location id>",
    "startTime": "<event start time>",
    "endTime": "<event end time>"
}
```
```
Response:
{
    "success": "true",
    "message": "Successfully create Event!",
    "data": 
        {
            "ticket":[],
            "_id": "<event id>",
            "name": "<event name>",
            "location": "<location id>",
            "startTime": "<event start time>",
            "endTime": "<event end time>"
        }
}
```

#### POST - Create Ticket - 127.0.0.1:3000/event/ticket/create
```
Request Body: 
{
    "type": "<ticket type>",
    "quantity": "<ticket quantity>",
    "price": "<ticket price>",
    "eventId": "<event id>"
}
```
```
Response:
{
    "success": "true",
    "message": "Successfully create ticket!",
    "data": 
        {
            "ticket":[{
                "_id": "<ticket id>",
                "type": "<ticket type>",
                "quantity": "<ticket quantity>",
                "price": "<ticket price>",
            }],
            "_id": "<event id>",
            "name": "<event name>"
        }
}
```

## Location

#### POST - Create Location - 127.0.0.1:3000/location/create
```
Request Body: 
{
    "name": "<location name>",
    "city": "<location city>"
}
```
```
Response:
{
    "success": "true",
    "message": "Successfully create location!",
    "data": 
    {
        "name": "<location name>",
        "city": "<location city>",
        "_id": "<location id>",
    }
}
```

#### GET - Get Location - 127.0.0.1:3000/location/
```
Request Body: not needed
```
```
Response:
{
    "success": "true",
    "message": "Successfully showing all location!",
    "data": [
    {
        "name": "<location name>",
        "city": "<location city>",
        "_id": "<location id>",
    }]
}
```

## Transaction

#### POST - Purchase Ticket - 127.0.0.1:3000/transaction/purchase
```
Request Body: 
{
    "eventId":"<event id>",
    "name": "<user name>",
    "email": "<user email>",
    "ticketType":[
        {
            "_id":"<ticket id>",
            "quantity": <ticket quantity>
        }
    ]
}
```
```
Response:
{
    "success": "true",
    "message": "Successfully create transaction!",
    "data": 
        {
            "ticket":[{
                "_id": "<ticket id>",
                "quantity": "<ticket quantity>"
            }],
            "_id": "<transaction id>",
            "name": "<user name>",
            "email": "<user email>",
            "eventId": "<event id>",
            "total": "<transaction total>",
        }
}
```
#### GET - Get Transaction - 127.0.0.1:3000/transaction/get_info
```
Request Body: not needed
```
```
Response:
{
    "success": "true",
    "message": "Successfully create transaction!",
    "data": [
        {
            "ticket":[{
                "_id": "<ticket id>",
                "quantity": "<ticket quantity>"
            }],
            "_id": "<transaction id>",
            "name": "<user name>",
            "email": "<user email>",
            "eventId": "<event id>",
            "total": "<transaction total>",
        }
    ]
}
```
