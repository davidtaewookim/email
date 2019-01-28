# SiteMinder Software Engineer Challenge - EMAIL

- [SiteMinder Software Engineer Challenge - EMAIL](#siteminder-software-engineer-challenge---email)
  - [Overview](#overview)
  - [Technical Overview](#technical-overview)
  - [Configuration](#configuration)
  - [TO RUN](#to-run)
  - [TO TEST](#to-test)
  - [API Document](#api-document)
    - [POST /mails](#post-mails)
      - [REQUEST](#request)
        - [header](#header)
        - [body](#body)
        - [example](#example)
      - [REPONSE](#reponse)
        - [response example](#response-example)
  - [Business Requirement](#business-requirement)
    - [Review Requirement](#review-requirement)

## Overview

The service provides rest api to send email using mailgun or sendgrid. Please refer to [API Document](#api-document) for the API detail and [Business Requirement](#business-requirement). You can test the working version at https://hidden-bastion-34629.herokuapp.com/mail

## Technical Overview

Functional Javascript were used as much as possible, for example, business logic in `mail-controller.js` for creating email object for each provider and failover action were only 4 lines of code, due to functional style. OOP styles can also be employed if necessary.

```js
  const mailerMailgun = factory('mailgun')(email)(send);
  const mailerSendgrid = factory('sendgrid')(email)(send);
  const sendAction = failover(mailerMailgun.send, mailerSendgrid.send);
  const result = await sendAction();
```

Input validation for incoming HTTP Request object, outbound HTTP request as well as when creating email object for each provider. For example, below is the validation properties for HTTP request object.

```js
{
  headers: Joi.object().keys({
    'content-type': Joi.string().equal('application/json').required(),
  }).unknown(),
  body: Joi.object().keys({
    sender: Joi.string().email().required(),
    recipients: Joi.array().items(Joi.string().email().required()).required(),
    subject: Joi.string().optional(),
    contents: Joi.string().optional(),
    cc: Joi.array().items(Joi.string().email().required()).optional(),
    bcc: Joi.array().items(Joi.string().email().required()).optional(),
  }),
}
```

Custom error object for a uniform error response, as well as error handler middleware to catch every error at any level. The try-catch is not used at micro-level, but error handler is placed as middleware so that, it will process all the errors thrown.

- error response example

```json
{
    "code": 400,
    "status": "INVALID_ARGUMENT",
    "message": "Client specified an invalid argument.",
    "details": [
        {
            "message": "\"sender\" must be a valid email",
            "path": [
                "sender"
            ],
        }
    ]
}
```

`Dockerfile` and `docker-compose.yml` is provided. The credentials in docker-compose environment are dummy values.

Test coverage 100% achieved.

## Configuration

## TO RUN

Run Locally

```sh
npm install && npm start
```

Docker Container

```sh
docker-compose up -d --build
```

## TO TEST

- curl, please change host address accordingly.

```sh
curl -d '{"sender": "taewdy@gmail.com","recipients": ["taewdy@gmail.com"],"contents": "test contents"}' -H "Content-Type: application/json" -X POST https://hidden-bastion-34629.herokuapp.com/mail
```

- postman, please change host address accordingly.

```txt
POST /mail HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Cache-Control: no-cache

{
 "sender": "taewdy@gmail.com",
 "recipients": ["taewdy@gmail.com"],
 "contents": "test contents"
}
```

## API Document

### POST /mails

#### REQUEST

##### header

| property     | value              | type   | required |
| ------------ | ------------------ | ------ | -------- |
| Content-Type | `application/json` | string | required |

##### body

| property   | value           | type         | required                                        |
| ---------- | --------------- | ------------ | ----------------------------------------------- |
| sender     | emails          | email string | required for sendgrid, not required for mailgun |
| recipients | array of emails | array        | required                                        |
| cc         | array of emails | array        | optional                                        |
| bcc        | array of emails | array        | optional                                        |
| subject    | email subject   | string       | optional                                        |
| contents   | email contents  | string       | required                                        |

##### example

```json
{
  "sender": "test@gmail.com",
  "recipients": ["test@gmail.com"],
  "contents": "test contents"
}
```

#### REPONSE

| code | explanation             |
| ---- | ----------------------- |
| 200  | Email sent Successfully |
| 400  | Validation Error        |
| 500  | internal server error   |

##### response example

```JSON
{
    "code": 200,
    "status": "OK",
    "message": "Email sent Successfully",
    "details": []
}
```

```JSON
{
    "code": 400,
    "status": "INVALID_ARGUMENT",
    "message": "Client specified an invalid argument.",
    "details": [
        {
            "message": "\"sender\" must be a valid email",
            "path": [
                "sender"
            ],
            "type": "string.email",
            "context": {
                "value": "a",
                "key": "sender",
                "label": "sender"
            }
        }
    ]
}
```

## Business Requirement

- send email using 'sendMail' or 'mailgun'
- failover when one of the email provider fails

### Review Requirement

- input validation
- error handling
- tech choice
- clarity
- testing

- source needs to be on github
- service has to be deployed
