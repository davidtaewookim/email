# SiteMinder Software Engineer Challenge - EMAIL

## Overview

## Configuration

## TO RUN

## TO TEST

## Libraries Used

## API Document

### POST /mails

#### REQUEST

##### header

| property     | value              | type   | required |
| ------------ | ------------------ | ------ | -------- |
| Content-Type | `application/json` | string | required |

##### body

| property  | value           | type   | required | default |
| --------- | --------------- | ------ | -------- | ------- |
| recipient | array of emails | array  | required |         |
| cc        | array of emails | array  | optional |         |
| bcc       | array of emails | array  | optional |         |
| subject   | email subject   | string | optional |         |
| body      | email body      | string | optional |         |

##### example

```json
{
  "recipients":
}
```

#### REPONSE

| code | explanation             |
| ---- | ----------------------- |
| 200  | email successfully sent |
| 401  |                         |
| 500  | internal server error   |

## Business Requirement

- send email using 'sendMail' or 'mailgun'
- failover when one of the email provider fails

### Review Requirement

- input validation
- error handling
- tech choice: explain why certain libraries are used
- clarity
- testing

- source needs to be on github
- service has to be deployed
