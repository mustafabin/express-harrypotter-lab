[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Harry Potter API

Build an API of hogwarts houses and their members!

## Prerequisites

- Node
- MongoDB and Mongoose
- Express

## Instructions

1. Fork and clone this repository.
1. Change into the new directory.
1. Install dependencies.
1. Fulfill the listed requirements.

Complete your work inside of the [`lib/`](lib/) directory. Unless otherwise
specified by an instructor, your submission is due by the time on your cohort
calendar.

## Requirements

This lab is divided into two parts. In the first part, you will set up your
database and seed it with the JSON data provided in the `db/` directory. Once
that is finished, for the second part of this lab, you'll build out an API that
serves the seeded data from your database.

### Part 1: Seeding

We've provided you with two sets of JSON data:
[`houses.json`](./lib/db/houses.json) and
[`characters.json`](./lib/db/characters.json). The `houses` data contains a
`member` property that is an array of ObjectIDs matching objects in the
`characters` data (the `_id` property).

Define a model to represent the houses inside of `houses.json` with a
subdocument model to represent the characters in `characters.json`.

Once your models are defined, write a seed file that takes the data in
`houses.json` and `characters.json` and seeds it into the database.

### Part 2: API

Your database is now all set up, so it's time to build an API around it. Your
API will need the following routes:

1. A root route (`'/'`) that redirects to the houses route.
1. A houses list route (`'/house'`) that returns a JSON array of all the houses
   in the database.
1. A house detail route (`'/house/5a05e2b252f721a3cf2ea33f'`) that returns the
   document for the house in the url parameter.
1. A house create route (`'/house'`) that a user could send a `POST` request to
   in order to create a new house.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
