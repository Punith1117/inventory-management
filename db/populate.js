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

CREATE TABLE IF NOT EXISTS expertise_player (
    expert_in_id INTEGER NOT NULL,
    player_id INTEGER NOT NULL,
    PRIMARY KEY (expert_in_id, player_id),
    FOREIGN KEY (expert_in_id) REFERENCES expertise(expert_in_id) ON DELETE CASCADE,
    FOREIGN KEY (player_id) REFERENCES players(player_id) ON DELETE CASCADE
);

INSERT INTO expertise_player (expert_in_id, player_id)
VALUES
    (1, 1),
    (1, 2),
    (1, 3),
    (1, 4),
    (1, 5),
    (2, 6),
    (2, 7),
    (2, 8),
    (2, 9),
    (2, 10),
    (3, 11),
    (3, 12),
    (3, 13),
    (3, 14),
    (3, 15),
    (4, 16),
    (4, 10),
    (4, 3),
    (4, 5),
    (4, 17),
    (5, 5),
    (5, 17),
    (5, 18),
    (5, 16)
;
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.INTERNAL_DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
