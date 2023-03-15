
<h1 align="center">MyContacts API</h1>

## :pushpin: Contents

- [Features](#zap-features)
- [Getting started](#runner-getting-started)
- [Technologies](#hammer_and_wrench-technologies)
- [License](#closed_book-license)

<br>

## :zap: Features

- CRUD operations
- Filter and sort contacts
- Add contact number
- Associate contacts to some category

<br>

## :runner: Getting started

**First you need to install [Node](https://nodejs.org/en/) and [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable).**

```bash
# Open a terminal and copy this repository with the command
$ git clone git@github.com:mateussvictor/my-contacts-api.git

# Enter the directory with
$ cd my-contacts-api

# Install dependencies
$ npm install
```

<br>
Create your environment variables based on the examples of .env.example

```cp .env.example .env```

<br>

**Preparing the Database**

- Install [PostgreSQL](https://www.postgresql.org/) and set your env variables to connect to the DB, **OR** if you have [Docker](https://www.docker.com/get-started/) in your machine, you can run the commands below:

```bash
# Create container and set Database
$ docker compose up -d

# Stop container
$ docker compose stop
```

Run the following command to start the app:

```yarn dev```


<br>

## :hammer_and_wrench: Technologies

Some of the technologies and tools used:

- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Husky](https://github.com/typicode/husky)
- [Commitlint](https://github.com/conventional-changelog/commitlint)
- [Lint-staged](https://github.com/okonet/lint-staged)
