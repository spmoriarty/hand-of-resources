-- Use this file to define your SQL tables

-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXIST corvid





CREATE TABLE corvid (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    color VARCHAR NOT NULL
);

INSERT INTO corvid (name, color) VALUES
('Raven', 'Black'),
('Crow', 'Black'),
('Jay', 'Blue'),
('Cardinal', 'Red'),
('Magpie', 'Black and White');