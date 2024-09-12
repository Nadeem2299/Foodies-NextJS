import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals () {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare('SELECT * FROM meals').all(); // all used for fething data run for changing data and get for fetching single row
}