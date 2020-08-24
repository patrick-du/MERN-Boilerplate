# MERN Boilerplate

- Fullstack OAuth2.0 authentication boilerplate created with MongoDB, Express, React, and Node.js

---

## Table of Contents

- [Installation and Usage](##installation-and-usage)
- [Features](#features)
- [Dependencies](#core-dependencies)

---

## Installation and Usage

**Run the following in your terminal:**

```bash
git clone https://github.com/patrick-du/MERN-Boilerplate.git
cd MERN-Boilerplate
yarn install

cd client
yarn install

cd ..
yarn dev
```

Visit http://localhost:3000 in your browser to see the app running!

--- 

## Features

### Hot Reloading and Concurrently
- Client side has Webpack Configuration for Hot Reloading
- Server side has Nodemon for auto-loading
- Concurrently added to simultatenously run client and server

### Token-based Authentication Using OAuth 2.0
- Passport middleware setup to support Google and Facebook strategies

---

## Core Dependencies
- **prettier:** an opinionated code formatter
- **eslint:** a configurable JavaScript linter for identifying and reporting on patterns 
- **concurrently:** run commands concurrently

### Client Specific Dependencies
- **react-scripts:** a package that includes scripts and configuration used by Create React App
- **react-router-dom:** a routing library React with DOM bindings
- **styled-components:** visual primitives for the component age
- **axios:** promise based HTTP client for the browser and Node.js

### Server Specific Dependencies
- **dotenv:** a zero-dependency module that loads environment variables from a .env file into process.env
- **nodemon:** a simple CLI utility that makes it easy to run Node scripts, watch for file changes, and restart the process automatically
- **cors:** Node.js CORS middleware
- **express:** a fast, unopinionated, minimalist web framework for Node.js
- **express-session:** simple session middleware for Express
- **mongoose:** MongoDB object modeling tool
- **connect-mongo:** MongoDB session store for Express and Connect
- **passport:** simple, unobtrusive authentication for Node.js
- **passport-google-oauth20:** Google (OAuth 2.0) authentication strategies for Passport
- **passport-facebook:** Facebook authentication strategy for Passport
- **http-proxy-middleware:** Node.js proxy middleware for connect, express and browser-sync
