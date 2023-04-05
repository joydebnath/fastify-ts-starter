# Fastify Starter

This repository contains a Fastify starter project using TypeScript and Drizzle ORM, with a simple Docker setup to run the server. The purpose of this starter is to provide you with a quick and easy way to start building your Fastify-based applications with a solid foundation.

## Features
- Fastify web framework for efficient and performant web applications
- TypeScript for type-safe and scalable code
- Drizzle ORM for easy and flexible database integration
- Docker setup for quick and easy server deployment and management
- Pre-configured development environment and scripts

## Prerequisites
- [Node.js](https://nodejs.org/en/) v18 or later
- [Docker](https://www.docker.com/) v20.10 or later
- [Docker Compose](https://docs.docker.com/compose/install/) v1.29 or later


## Getting Started
To get started, follow these steps:
 
1. Clone this repository
```bash
git clone https://github.com/j0ydebnath/fastify-ts-starter.git
```

2. Change the directory:
```bash
cd fastify-ts-starter
```

3. Copy `.env.example` to `.env` and update the `.env` file with your app and database credentials.

```sh
# APP CONFIG
APP_PORT=3001

# DATABASE CONFIG
DB_HOST=mariadb
DB_USERNAME=your_username
DB_PASSWORD=your_password
DB_ROOT_PASSWORD=your_root_password
DB_DATABASE=your_database
DB_PORT=3360
HOST_DB_PORT=your_host_db_port
```
4. Build the Docker image:
```sh
docker compose build
```

5. Start the Docker container:
```sh
docker compose up
```

This will start the server at APP_PORT set in `.env` file. In this example the server will start at http://localhost:3001


## License

This project is licensed under the MIT License. See the LICENSE file for details.