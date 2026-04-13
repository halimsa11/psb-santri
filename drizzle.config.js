import {defineConfig} from 'drizzle-kit';
import "dotenv/config";

export default defineConfig({
    schema: './db/schema.js',
    out: './drizzle',
    dialect: 'postgresql',
    dbCrentdetails: {url: process.env.DATABASE_URL},
})
