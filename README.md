# Django (backend) with SQLite (database) & React (frontend)

This is a docker environment to run and just start programming.\
Also very minimal chat app to see that backend and frontend connect.

## Setting up

First pull this repository:

```bash
git pull https://github.com/IamMistake/HackaProba.git
```
To run the docker container you need to open/install Docker Desktop.\
Than open the project in PyCharm or preferred IDE and in the root directory open the terminal and write:

```bash
docker-compose up --build
```
And this should make 2 images and run them in 1 container.
- hackproba-frontend
- hackproba-backend

## Now open the app in Browser ([localhost:5173](http://localhost:5173/))
Everything should work perfectly. You can also test it. :)

## How to program with this
- ### For Frontend
When the docker is up you can normally make changes and you will see it instantly by refreshing the browser.\
The app is hosted on port 5173.

- ### For Backend
When the docker is up you can normally make changes and it should detect them and refresh the server, but if that doesn't happen just run this command in another terminal:
```bash
docker-compose restart backend
```
**If installing dependencies you MUST add them to the *requirements.txt* file.**\
\
The app is hosted on port 8000.\
Also I suggest using [**Postman**](https://www.postman.com/downloads/) to generate Http requests.

- ### About the Database
The database is in *backend/db.sqlite3*\
Also I have added it to *.gitignore* so any changes to it won't show to the others (if you don't want that you need to remove it from the *.gitignore* file).

To see it my suggestion is to download [**DB Browser for SQLite**](https://sqlitebrowser.org).\
After installing, to see the database open the *db.sqlite3* file thru the application.

# Have fun ʕ•́ᴥ•̀ʔっ♡