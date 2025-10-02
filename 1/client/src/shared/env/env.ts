import { z } from 'zod';

const envSchema = z.object({
	SERVER_BASE_URL: z.url(),
});

const env = envSchema.parse({
	SERVER_BASE_URL: import.meta.env.VITE_SERVER_BASE_URL,
});

export { env };
