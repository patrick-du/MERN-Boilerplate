# MERN Boilerplate

- Fullstack boilerplate created with MongoDB, Express, React, and Node.js

---

## Table of Contents

- [Installation and Usage](##installation-and-usage)
- [Features](#features)
- [Core Dependencies](#core-dependencies)
- [License](#license)

---

## Installation and Usage

**Run the following in your terminal:**

```bash
git clone https://github.com/patrick-du/MERN-Boilerplate.git
cd MERN-Boilerplate
npm install

cd client
npm install

cd ..
npm start
```

Visit http://localhost:3000 in your browser to see the app running!

--- 

## Features

### Hot Reloading and Concurrently
- Client side has Webpack Configuration for Hot Reloading
- Server side has Nodemon for auto-loading
- Concurrently added to simultatenously run client and server

### Authentication
- ?

---

## Core Dependencies
- **prettier:** an opinionated code formatter
- **eslint:** a configurable JavaScript linter for identifying and reporting on patterns 
- **eslint-config-prettier:** turns off all rules that are unnecessary or might conflict with Prettier
- **eslint-plugin-prettier:** runs Prettier as an ESLint rule and reports differences as individual ESLint issues
- **concurrently:**

### Client Specific Dependencies
- **react-scripts:** a package that includes scripts and configuration used by Create React App

### Server Specific Dependencies
- **dotenv:** a zero-dependency module that loads environment variables from a .env file into process.env
- **express:** a fast, unopinionated, minimalist web framework for node
- **nodemon:** a simple CLI utility that makes it easy to run Node scripts, watch for file changes, and restart the process automatically

---

## Licenses
- 