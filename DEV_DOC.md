# DEV_DOC

## TASK

### TITLE

Create a REST API to send email

### DESCRIPTION

As a developer, I need to provide REST API to send email, so that the user can send email even when one email service is down.

- POST method rest API for sending email
- it will use SendGrid or Mailgun, failover when one service is down
- provide input validation, error handler, log, containerized configuration, comments and function names
- provide appropriate error messages

### FEATURE

- have one json file for each provider in a config folder.
- monitor the folder, when file change happens, re-read the folder
- recreate email object from the json config
- validate json files