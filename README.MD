# Emaily

FullStack web application that allows users to engage with customers to create surveys
and send mass emails to a big list of users for the purpose of collecting feedback.

Technology used -

React, Redux, Express, and MongoDB, mongoose, Google OAuth, PassportJs, MailgunJs, StripeJs

<img src="./Emaily_form.png">
<img src="./Emaily_landing.png">
<img src="./Emaily_payment-stripeform.png">

## Table of Contents

- [Project Name](#project-name)
  - [Table of Contents](#table-of-contents)
  - [Requirements](#requirements)
    - [Env Variables](#env-variables)
    - [Install Dependencies (frontend \& backend)](#install-dependencies-frontend--backend)
    - [Run](#run)
    - [Build \& Deploy](#build--deploy)
    - [Seed Database](#seed-database)

## Requirements

- Node 0.10.x
- Mongo Atlas account, and free-tier Cluster
- Create a MongoDB database and obtain your `MongoDB URI` - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
- Google Client Id
- Google Client secret key
- Create a Stripe Account to attain a publishable key and secret key
- Signup for a Mailgun account: Use the link here to register: (https://signup.mailgun.com/new/signup)

### Env Variables

create a file in the root of your project directory `.env` and add the following

```
PORT=the port of your choosing

MONGO_URI=mongodb+srv://[username]:....@....mongodb.net/?retryWrites=true&w=majority&appName=Clusters

COOKIE_KEY=some string of your choosing
GOOGLE_CLIENT_ID=......apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=the secret google provides you
GOOGLE_CALLBACK_URL=/auth/google/callback

STRIPE_PUBLISHABLE=pk_test_....your publishable key
STRIPE_SECRET_KEY=sk_test_....your secret key

MAILGUN_KEY=...your mailgun key
MAILGUN_DOMAIN=sandbox.......mailgun.org
```

### Install Dependencies (frontend & backend)

```
# from project directory
npm install
cd frontend
npm install
```

### Run

```
# Run frontend (:5173) & backend (:5006) for development
npm run dev
# Run backend only
npm run start
# Run frontend only 
npm run client
```
