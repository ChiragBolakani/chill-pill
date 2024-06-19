# Chill-Pill
Demo Link - http://ec2-13-233-255-18.ap-south-1.compute.amazonaws.com:8003/

Music streaming app written in Javascript with 0 external dependencies. 
- Music streaming app written in Javascript with no external dependencies.  
- Developed NodeJs server that supports HTTP 206 Partial Content Streaming.  
- Created responsive and interactive UI purely using Vanilla Javascript.   
- Deployed on AWS with the NodeJS Backend running inside a docker container and Frontend behind apache 
docker container

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
