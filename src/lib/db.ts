import { Redis } from '@upstash/redis'

export const db = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL, //https://bobbyhadz.com/blog/typescript-no-overload-matches-this-call
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});