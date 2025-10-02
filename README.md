# SLIIT DevOps Workshop Demo Application

## Introduction

This is a simple demo Node.js Express application that exposes an API endpoint to add two numbers. You can send a POST request to `/add` with two numbers in the request body, and the API will return their sum. The application runs on port `8080` by default.

The included test cases verify that the API works correctly for valid inputs and handles invalid input types appropriately.

## Steps to Follow

### Run the Application with NPM

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run tests**

   ```bash
   npm test
   ```

3. **Start the application**
   ```bash
   npm start
   ```

---

### Run the Application with Docker

1. **Build the Docker image**

   ```bash
   docker build -t demo-application .
   ```

2. **List the Docker images**

   ```bash
   docker images
   ```

3. **Run the Docker container**
   ```bash
   docker run -p 8080:8080 demo-application
   ```
