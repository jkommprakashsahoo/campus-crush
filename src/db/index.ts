import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

import * as schema from "./schema";

const databaseUrl =
  process.env.DATABASE_URL ?? "postgresql://campus_crush:campus_crush@localhost:5432/campus_crush";

export const pool = new Pool({ connectionString: databaseUrl });

export const db = drizzle(pool, { schema });
