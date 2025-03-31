# DevSecOps HTTP Application

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![Node.js](https://img.shields.io/badge/Node.js-14.x-green.svg)](https://shields.io/)

This repository contains a Node.js/Express backend with a React frontend. It demonstrates the use of CORS middleware to remediate Cross Origin Resource Sharing (CORS) vulnerabilities and Helmet for creating secure HTTP headers.

## Contents

- **Backend**: Express.js API with CORS and Helmet middleware
- **Frontend**: React application that consumes the API

## Installation and Setup

### Backend Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Start the server:
   ```
   npm start
   ```
   
   For development with auto-reload:
   ```
   npm run dev
   ```

3. The server will run on port 5000 by default.

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. The React app will run on port 3000 by default.

## Security Features

- **CORS**: The Express app uses the `cors` middleware to control which origins can access the API.
- **Helmet**: The `helmet` middleware can be enabled to add various HTTP headers that improve security.

## License

Copyright (c) IBM Corporation. All rights reserved.

Licensed under the Apache License. See LICENSE.

---

## <h3 align="center"> © IBM Corporation 2025. All rights reserved. <h3/>