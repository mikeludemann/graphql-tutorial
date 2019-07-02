# Graphql Tutorial

A tutorial with graphql and more

## Prerequisite

Install dependencies

```
(sudo) npm install -g prisma
```

## Starting - Frontend

React App

* Location: localhost:4000

```
yarn start
```

## Starting - Backend (Server)

* Graphql

```
cd server/
yarn install
yarn prisma deploy
```

### Information - Step 3

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