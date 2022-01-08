This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First run `npm install` to install all depedencies

## Installing Postgres

If you do not have postgres installed, install it for your operating system. If on Mac, I recommend installing via [Homebrew](https://brew.sh/). On Linux, simply using the `apt` package manager should be good enough. If you need any help installing, please reach out. 

Once installed, start the Postgres server. 

On MacOS:

`brew services start postgresql`

On Linux:

`sudo service postgresql start`

If these commmands do not work, please let me know. 

## Logging Into Postgres

To actually see the database and interact with it, we have to login to the `postgres` user. To do so, run `sudo -i -u postgres`. Then, run `psql`. If everything has been set up correctly, no errors should pop up. Running `\d` in the terminal should return a `No relations to display`. If this all works, everything is running correctly :). 

## Changing Passwords 

We know have to change the default password to interact with it. If you followed the last step, your terminal is already in the right place. If you did not, run 
```
sudo -i -u postgres
psql
```
to get your terminal in the right place. Finally, run the following command:
`ALTER USER postgres WITH password '<password>';` replacing `<password>` with your desired password. Remember to not forget the semi-colon. The password does not have to be anything fancy (I made mine "foo"), but please do remember it. If it sucesfully created the password, the terminal should respond with `ALTER USER`. 

## Enviroment Variables 

After this is all done, make a file in the root directory of the project called `.env.local`. Once created, paste the following into it:
`DB_PASS=<password>`
Replace `<password>` with the password you set above. 

## Migrations 

For this project, we will be using database migrations to make sure everyones database is consistent with each other. We are using [postgres-migrations](https://www.npmjs.com/package/postgres-migrations) in order to do so. The documentation goes over the way we create the migration files. For our purposes, each migration files holds the SQL querires to edit our database. To run the migrations, we run the following command:

`node scripts/migrate.ts`

Make sure you are in the root directory for the project to be able to do this. 

## Testing 

Finally, we have one last command to run. Run 
`npm run test` 
which adds a user to our database. If it passes, you have set everything up correctly :). 

## Misc. 

Please do go about the files and take a look at how everything interacts, especially in the models, database, and pages directory. This should give you some helpful tips on getting started development. 
