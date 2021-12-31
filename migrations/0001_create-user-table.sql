CREATE TABLE users (
    id    SERIAL PRIMARY KEY,
    email text NOT NULL UNIQUE,
    role text NOT NULL, 
    first_name text DEFAULT NULL, 
    last_name text DEFAULT NULL, 
    phone text DEFAULT NULL 
);

/** 
This sets up the users table. Run 'node scripts/migrate.ts'
to set it up. This helps us make sure all of our databses are in sync
**/