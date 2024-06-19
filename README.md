# Chill-Pill
Music streaming app written in Javascript with 0 external dependencies. 

Key concepts used:
- Partial Content Streaming
- Node.js streams
- HTMLMediaElement Events
- DOM Events

## Architecture

![chill-pill architecture drawio (1)](https://github.com/ChiragBolakani/chill-pill/assets/62014238/0c8a3a9a-7c68-4541-9ec6-903d890232f6)


## Supports HTTP 206 Partial Content Streaming
HTTP 206 Partial Content Streaming is widely used by major apps such as Youtube, Twitch and other streaming platforms. 

When the client requests for a file the server instead of sending the complete file, only sends a part of it.
For example:

```http  
GET https://example.com/videos/sample.mp4
```

The server's response to this will include `Accept-Raneges, Content-Range, Content-Length` Headers indicating that the server supports HTTP 206.

```http HTTP/1.1 206 Partial Content
Accept-Ranges: bytes
Content-Range: bytes 0-6287588/6287589
Content-Length: 512000
```

Client can make requests by specifying the required bytes in the `Range` header. 
```http
Range: bytes=512000-
```

![HTTP 206 drawio](https://github.com/ChiragBolakani/chill-pill/assets/62014238/d80f1786-389e-43a0-aea5-0fed6373ca78)

It consists of the following models:
1. Vendor
   - Stores vendor information like name, contact details, address.
   - Has a unique identifier (vendor_code).
   - Tracks performance metrics:
     - On-time delivery rate
     - Average quality rating
     - Average response time
     - Fulfillment rate
    
2. Purchase Orders
   - Tracks order details:
     - Order date (order placed by buyer)
     -  Delivery date (delivery by vendor)
     -  Expected delivery date (required)
     -  ist of items (JSON format)
     -  Order quantity (minimum 1)
     -  Order status (pending, cancelled, completed)
     -  Quality rating (optional)
     -  Issue date (automatic on creation)
     -  Acknowledgement date (vendor acknowledges the order)
3. Performance History
   - Tracks historical performance data for vendors.
   - Linked to a specific vendor (vendor foreign key).
   - Stores performance metrics for a specific date:
     - On-time delivery rate
     - Average quality rating
     - Average response time
     - Fulfillment rate
       
## Perfomance Evaluation
Metrics:
- `On-Time Delivery Rate:` Percentage of orders delivered by the promised date.
- `Quality Rating:` Average of quality ratings given to a vendor’s purchase orders.
- `Response Time:` Average time taken by a vendor to acknowledge or respond to purchase orders.
- `Fulfilment Rate:` Percentage of purchase orders fulfilled without issues.

![vmsjpg (1)](https://github.com/ChiragBolakani/VendorManagementAPI/assets/62014238/35be5ff2-f7a1-48c4-9664-03b9d7b7dcb0)


## Auth
The routes are protected using JWT Authentication. You need an access token to access the endpoints. 
| Method   | URL                                      | Description                              |
| -------- | ---------------------------------------- | ---------------------------------------- |
| `POST`    | `/api/token`                             |Retrieve access and refresh token.                      |
| `POST`    | `/api/token`                             |Retrieve access and refresh token.                      |
| `POST`    | `/api/refresh/`                          | Retrieve new access token using refresh token.                       |
| `POST`    | `/api/token/blacklist`                          | Blackist a token.                       |


`/api/register`
request body:
```json
{
    "username": "testuser",
    "email": "test@test.com",
    "password": "<password>"
}
```

`/api/token`
request body:
```json
{
    "username": "testuser",
    "password": "<password>"
}
```

response:
```json
{
  "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxNTUwNjc4NSwiaWF0IjoxNzE1NDIwMzg1LCJqdGkiOiJhOWZmMjUwNzYxMDM0OGQyOGQ4MmQ1ODg0MzEyYjZhZCIsInVzZXJfaWQiOjF9.9wMgz2rmvJcudEMAU2xYQImdzaQnxvGxyRhf_I6XhM0",
  "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE1NDIxNTg1LCJpYXQiOjE3MTU0MjAzODUsImp0aSI6Ijg5MDM4Yjc3YjVjZjRlYzM4YjY4YjRmNWYzYTNkYzZjIiwidXNlcl9pZCI6MX0.TTn2BsszZwXxGxBK3K57hlCBUFG4zLQvGQmaNoRHrUw"
}
```

`/api/token/refresh`
request body:
```json
{
    "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTcxNTUwNjc4NSwiaWF0IjoxNzE1NDIwMzg1LCJqdGkiOiJhOWZmMjUwNzYxMDM0OGQyOGQ4MmQ1ODg0MzEyYjZhZCIsInVzZXJfaWQiOjF9.9wMgz2rmvJcudEMAU2xYQImdzaQnxvGxyRhf_I6XhM0"
}
```

response:
```json
{
  "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE1NDYwMzczLCJpYXQiOjE3MTU0NTkxNDQsImp0aSI6IjE3NzIzMGVmOTQ0ODQ1YjVhOWE2N2RjMDQ0MDllYmYwIiwidXNlcl9pZCI6MX0.wtw_d7umBeL7A-0Gv6JJnSYknsJ3LmIeIFSmXvqJKm8"
}
```

## API Documentation
#### Base URL : http://ec2-13-233-255-18.ap-south-1.compute.amazonaws.com:8001
The API provides the following routes:
| Method   | URL                                      | Description                              |
| -------- | ---------------------------------------- | ---------------------------------------- |
| `GET`    | `/api/vendors`                             |Retrieve all vendors.                      |
| `GET`    | `/api/vendors/28`                          | Retrieve vendor #28.                       |
| `GET`    | `/api/vendors/28/purchase_orders`                          | Retrieve purhcase orders allocated to vendor #28.                       |
| `GET`    | `/api/vendors/28/performance`                          | Retrieve vendor #28 performance data.                       |
| `POST`   | `/api/vendors`                             | Create a new vendor.                       |
| `PUT`  | `/api/vendors/28`                          | Update data in vendor #28.                 |
| `DELETE`  | `/api/vendors/28`                          | Delete vendor #28.                 |
| `GET`    | `/api/purchase_orders` | Retrieve all purchase orders. |
| `GET`    | `/api/purchase_orders/28` | Retrieve purchase order with id 28. |
| `POST`   | `/api/purchase_orders`                             | Create a new purchase order.                       |
| `PUT` | `/api/purchase_orders/28` | Update data in purchase order 28.                    |
| `DELETE`  | `/api/purchase_orders/28`                          | Delete purchase order #28.                 |

### Usage
### Create new vendor
`POST /api/vendors`

request body : 
```json
{
  "name": "test",
  "contact_details": "123456789",
  "address": "4th street, London"
}
```
response :
```json
{
  "vendor_code": "f7b01c87-a82b-47cd-a003-4e08759d2f3f",
  "name": "test",
  "contact_details": "123456789",
  "address": "4th street, London",
  "on_time_delivery_rate": 0.0,
  "quality_rating_avg": 0.0,
  "average_response_time": null,
  "fulfillment_rate": 0.0
}
```

### Update vendor
`PUT /api/vendors/<vendor_code>`

Existing object : 
```json
{
  "vendor_code": "7af2d007-be10-4e39-b36c-a5465196bca0",
  "name": "test vendor",
  "contact_details": "123456789",
  "address": "Cross Street, London",
  "on_time_delivery_rate": 0.0,
  "quality_rating_avg": 0.0,
  "average_response_time": null,
  "fulfillment_rate": 0.0
}
```
`PUT /api/vendors/7af2d007-be10-4e39-b36c-a5465196bca0`

request body : 
```json
{
  "vendor_code": "7af2d007-be10-4e39-b36c-a5465196bca0",
  "name": "test vendor updated",
  "contact_details": "123456789",
  "address": "Cross Street, 4th road London",
  "on_time_delivery_rate": 0.0,
  "quality_rating_avg": 0.0,
  "average_response_time": null,
  "fulfillment_rate": 0.0
}
```
response :
```json
{
  "vendor_code": "7af2d007-be10-4e39-b36c-a5465196bca0",
  "name": "test vendor updated",
  "contact_details": "123456789",
  "address": "Cross Street, 4th road London",
  "on_time_delivery_rate": 0.0,
  "quality_rating_avg": 0.0,
  "average_response_time": null,
  "fulfillment_rate": 0.0
}
```
### Create new purchase order
`POST /api/purchase_orders`

request body : 
```json
{
  "name": "test",
  "contact_details": "123456789",
  "address": "4th street, London"
}
```
response :
```json
{
  "vendor_code": "f7b01c87-a82b-47cd-a003-4e08759d2f3f",
  "name": "test",
  "contact_details": "123456789",
  "address": "4th street, London",
  "on_time_delivery_rate": 0.0,
  "quality_rating_avg": 0.0,
  "average_response_time": null,
  "fulfillment_rate": 0.0
}
```

