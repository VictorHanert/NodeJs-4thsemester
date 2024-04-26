import db from "./connection.js";

// DDL
await db.exec(`CREATE TABLE IF NOT EXISTS volcanoes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255) NOT NULL,
    location VARCHAR(255),
    elevation INTEGER,
    is_active BOOLEAN,
    last_eruption DATE
)
`);

await db.exec(`CREATE TABLE IF NOT EXISTS villages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    population INTEGER,
    distance_to_volcano INTEGER,
    volcano_id INTEGER,
    FOREIGN KEY (volcano_id) REFERENCES volcanoes (id)
)
`);

// DML
const isDeleteMode = process.argv.includes('delete');
if (isDeleteMode) {
  await db.run(`DROP TABLE IF EXISTS volcanoes`);
  await db.run(`DROP TABLE IF EXISTS villages`);
}

await db.run(`
  INSERT INTO volcanoes (name, location, elevation, is_active, last_eruption) 
  VALUES ('Vesuvio', 'Napoli', 1.281, true, '1944-03-17');
`);

await db.run(`
  INSERT INTO volcanoes (name, location, elevation, is_active, last_eruption) 
  VALUES ('Fagradalsfjall', 'Iceland', 385, true, '2023-06-10');
`);

await db.run(`
  INSERT INTO volcanoes (name, location, elevation, is_active, last_eruption) 
  VALUES ('Teide', 'Tenerife', 3715, true, '1909-11-18');
`);

await db.run(`
  INSERT INTO volcanoes (name, location, elevation, is_active, last_eruption) 
  VALUES ('Etna', 'Sicilien', 3.357, true, '1992-05-21');
`);

await db.run(`
  INSERT INTO volcanoes (name, location, elevation, is_active, last_eruption)
  VALUES ('Ojos del Salado', 'The Andes Mountains', 6.893, false, '0730-01-01');
`);

await db.run(`
  INSERT INTO villages (name, population, distance_to_volcano, volcano_id)
  VALUES ('Napoli', 962003, 9, 1);
`);

await db.run(`
  INSERT INTO villages (name, population, distance_to_volcano, volcano_id)
  VALUES ('Grindavik', 3000, 4, 2);
`);
