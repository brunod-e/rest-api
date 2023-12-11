import "dotenv/config"
import { knex as setupKnex, Knex } from "knex"

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set")
}

export const knexConfig: Knex.Config = {
  client: "sqlite3",
  connection: {
    filename: process.env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: "ts",
    directory: "./db/migrations",
  },
}

export const knex = setupKnex(knexConfig)