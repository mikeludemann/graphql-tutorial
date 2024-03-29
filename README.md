# Graphql Tutorial

A tutorial with graphql and more

## Prerequisite

Install dependencies

```
(sudo) npm install -g prisma
```

## Starting - Frontend

### React App

* Location: localhost:3000

```
yarn start
```

or

```
npm start
```

## Starting - Backend (Server)

### Graphql

* If 'server' - directory not exist

```
curl https://codeload.github.com/howtographql/react-apollo/tar.gz/starter | tar -xz --strip=1 react-apollo-starter/server
```

* Next steps

```
cd server/
yarn install
yarn prisma deploy
```

#### Information - Step 3

* Set up a new Prisma server or deploy to an existing server?
  * Demo server + MySQL database

* Choose the region of your demo server
  * demo-eu1
  * demo-us1

* Choose a name for your service
  * server

* Choose a name for your stage
  * dev

* Connect your github-account with prisma

* Your 'endpoint' in 'prisma.yml' will be update

### Start the graphql playground

* Location: localhost:4000

```
cd server/

yarn start
```