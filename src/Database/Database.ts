import knex from "knex";

//Create a globally accessible postgres database instance with sequelizer
export namespace Database {
    export const database = knex({
        client: "pg",
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            port: 5432
        }
    })

    //Migrate
    

}

