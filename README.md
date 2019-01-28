# mongo-request-bin v0.0.0



- [API](#api)
	- [Get Buckets](#get-buckets)
	- [Get Webhook](#get-webhook)
	- [Get Webhooks from Bucket](#get-webhooks-from-bucket)
	- [Reset](#reset)
	


# API

## Get Buckets

<p>gets a list of all the buckets on the server</p>

	GET /


## Get Webhook

<p>get a specific webhook from a bucket</p>

	GET /:bucketName/:webhookId


## Get Webhooks from Bucket

<p>gets the most recent webhooks from the bucket from newest to oldest</p>

	GET /:bucketName


## Reset

<p>deletes all the webhooks in the database</p>

	POST /reset


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| password			| String			|  <p>the password to reset the server from the environment variable <code>RESET_PASSWORD</code> the server</p>							|


