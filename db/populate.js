const { Client } = require("pg");
require('dotenv').config()

const SQL = `
CREATE TABLE IF NOT EXISTS expertise (
    expert_in_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
    expert_in VARCHAR ( 100 ) NOT NULL UNIQUE
);

INSERT INTO expertise (expert_in) VALUES 
    ('Opener'), 
    ('Fast bowler'), 
    ('Spinner'), 
    ('Finisher'), 
    ('Wicker Keeper')
;

CREATE TABLE IF NOT EXISTS players (
    player_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
    name VARCHAR ( 100 ) NOT NULL UNIQUE
);

INSERT INTO players (name) VALUES
    ('David Warner'),
    ('Phil Salt'),
    ('Virat Kohli'),
    ('Rohith Sharma'),
    ('K L Rahul'),
    ('Jasprit Bumrah'),
    ('Bhuvaneshwar Kumar'), 
    ('Hazelwood'),
    ('Trent Boult'),
    ('Hardik Pandya'),
    ('Rashid Khan'),
    ('Chahal'),
    ('Kuldeep Yadav'),
    ('Krunal Pandya'),
    ('Ashwin'),
    ('A B Devillers'),
    ('Jitesh Sharma'),
    ('M S Dhoni')
;

`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.EXTERNAL_DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    } // to be removed when deploying it on Render. It is required only when using external database url
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
