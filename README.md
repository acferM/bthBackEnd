# Be The Hero - API REST Full

this is a API REST made in a event called SemanaOmnistack 11.0 of the [Rocketseat](https://rocketseat.com.br/) this was one of my first contacts with NodeJS

## Description
This app helps NGOs to complete some incidents like help the NGOs raise money to help a dog who was ran over by a car.

## Tecnologies

- JavaScript
   
- NodeJS

## NodeJS Libs

1. express

2. nodemon

3. celebrate 

4. cors

5. cross-env

6. knex

7. sqlite3

## Data Base - SQLite3

### 🤔 Why SQLite3 ?

- SQLite3 is extremely easy to use because there's no need to make **Any** connection co create a SQLite3 data base, the SQLite3 database is made in a file, since this event is just 5 days long and it's made for beginners SQLite3 would work very well.

## Documentation

### 🔃Routes:

#### GET:
1. https://apirestacfer.herokuapp.com/ongs -> return all the registered NGOs

2. https://apirestacfer.herokuapp.com/profile -> return all the incidents of that NGOs (Needs Authorization)

3. https://apirestacfer.herokuapp.com/incidents -> return paginated incidents
