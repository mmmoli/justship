import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { TURSO_DB_URL, TURSO_DB_AUTH_TOKEN } from '$env/static/private';
import * as schema from './schemas';

const client = createClient({
	url: TURSO_DB_URL,
	authToken: TURSO_DB_AUTH_TOKEN
});

export const db = drizzle(client, { schema });
