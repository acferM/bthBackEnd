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
1. [/ongs](https://apirestacfer.herokuapp.com/ongs) -> return all the registered NGOs

2. [/ongs/:id](https://apirestacfer.herokuapp.com/ongs/4dfa8d69) -> return a specific ONG

3. [/profile](https://apirestacfer.herokuapp.com/profile) -> return all the incidents of that NGOs (Needs Authorization)

4. [/incidents](https://apirestacfer.herokuapp.com/incidents) -> return paginated incidents


#### POST:
1. /sessions -> create a session to the ONG

   1.1 /sessions parameters:
   ```json
   {
      id: "123123" <-- ONG id here
   }
   ```
   
2. /ongs -> create a ONG

   2.1 /ongs parameters:
   ```json
   {
      name: "NameOfTheONG",
      email: "NameOfTheONG@emailservice.com",
      whatsapp: "12345678911", <--- number must have between 10-11 numbers
      city: "AnyCity",
      uf: "AC"
   }
   ```
3. /incidents -> create a incident

   3.1 /incidents parameters:
   ```json
   {
      title: "IncidentTitle",
      description: "this is a sample of the description of a Incident",
      value: 100,
   }
   ```
   
#### DELETE:
/incidents/:id -> delete the incident with this id
