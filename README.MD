authReducer -- records whether user is logged in or not

surveyReducer -- records a list of all surveys user has created

GET /api/surveys -- Return a list of surveys created by the current users

POST /api/surveys/webhooks -- Record feedback for a user

POST /api/surveys -- Create a new survey and send out mass email

- "email@example.com, another@email.com, ..."
  split this string of email addresses and get array of strings
  map over the array of string emails and for each email return a new object, like so { email: "email@example.com" }
  return the array of objects

  1. create new instance of Survey
  2. attempt to create and send mass email
  3. check if email was sent successfully?
  4. save the survey
  5. send back the survey or send back success message

* tell sendgrid to send an email

  - sendgrid scans the email and replaces every link with an special link / route to their server
  - sendgrid knows who the recipient of every email is, because the links they inject contain a token that identifies the user
  - user clicks a link
  - sendgrid has the token that identifies the user and the user is sent to the sendgrid server and then sendgrid sends a message to our server telling us about the click event

  basically an event system
  and this again is dealing with a webhook


