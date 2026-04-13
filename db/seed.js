import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import bcrypt from "bcrypt";
import {santri, admins} from "../db/schema";
import "dotenv/config";

const sql = postgres (process.env.DATABASE_URL);
const db = drizzle(sql);

async function main() {
    console.log('sedding data....');
    await db.insert(santri).values({
        nama: 'ahmad', gender: 'ikhwan', hafalan: 5, wali: "pak ahmad"
    });
    const hashed = await bcrypt.hash('admin', 10);
    await db.insert(admins).values({
        username: 'admin', password: hashed
    });
    console.log('seed selesai')
    process.exit(0);
}
main();