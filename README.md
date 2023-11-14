## Setting up the project
1. Clone the repository using git.
```
git clone https://github.com/SparkSquad/xTicket-api
```
2. Install project dependencies.
```
npm install
npm install mysql2 -g
```
3. Create a copy of the ".env-example" file named ".env".
    create a db in mysql:
        safedriver
    create a user:
        user
        password
4. Fill the new file with your configs (port, database credentials, etc.).
5. Initialize the database.
```
npm run init-database
```
6. Start the server.
```
npm run start
```
