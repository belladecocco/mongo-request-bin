# Mongo Request Bin

Simple requset bin that stores all request in mongo.

# Api

* GET `/webhooks`- storted list of all requests that came into the server
* GET `/webhooks/:mongoIdOfWebhook`- the particular webhook from it's mongo id
* POST `/webhooks`- url to provide to a service wanting a webhook address