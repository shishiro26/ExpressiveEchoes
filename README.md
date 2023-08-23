
# Expressive Echoes

Welcome to **Expressive Echoes**, a unique platform that resonates with a diverse range of thoughts and ideas, creating an echo of insightful perspectives. This project is built using the MERN stack (MongoDB, Express.js, React, Node.js) and is designed to offer a captivating space to share and explore meaningful discussions.

## Features

- Engage with thought-provoking articles and discussions.
- Create and share your own expressive echoes.
- Built using the MERN stack for a seamless full-stack experience.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Setting Up Environment Variables](#setting-up-environment-variables)
- [Usage](#usage)


## Prerequisites

Before you begin, ensure you have the following tools installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Postman](https://www.postman.com/) (for API testing)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/expressive-echoes.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Blogging
   ```

3. Install server dependencies:

   ```bash
   yarn install
   ```

4. Navigate to the client directory:

   ```bash
   cd ExpressiveEchoes
   ```

5. Install client dependencies:

   ```bash
   yarn install
   ```

## Setting Up Environment Variables

1. For the backend to run, create an `.env` file in the root directory with the following variables:

   ```plaintext
   PORT=5000
   CONNECT=mongodb://localhost/expressive-echoes
   SECRET_KEY=mysecretkey
   ```

2. For the frontend to run, execute the following command in the `client` directory:

   ```bash
   yarn add react-scripts
   ```

## Usage

1. Start the backend server:

   ```bash
   yarn start
   ```

   The server will run on the specified `PORT`.

2. Start the frontend development server:

   ```bash
   cd ExpressiveEchoes
   yarn dev
   ```

   The React app will run on [http://localhost:5173](http://localhost:5173).


