-- Use this file to define your SQL tables

-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF exists corvid;
DROP TABLE IF exists king;
DROP TABLE IF exists bands;
DROP TABLE IF exists vegetables;
DROP TABLE IF exists trees;

CREATE TABLE trees (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    type VARCHAR NOT NULL
);

INSERT into trees (name, type) VALUES
('Oak', 'Deciduous'),
('Maple', 'Deciduous'),
('Elm', 'Deciduous'),
('Fir', 'Coniferous'),
('Pine', 'Coniferous');

CREATE TABLE vegetables (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    type VARCHAR NOT NULL
);

INSERT into vegetables (name, type) VALUES
('Potato', 'Starch'),
('Lettuce', 'Leafy'),
('Spinach', 'Leafy'),
('Tomato', 'Fruit');



CREATE TABLE bands (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    founded INT
);

INSERT INTO bands (name, founded) VALUES
('Tool', 1990),
('Linkin Park', 1996),
('Korn', 1993),
('Audioslave', 2001);


CREATE TABLE king (
    id BIGINT GENERATED ALWAYS AS IDENTITY,
    name VARCHAR NOT NULL,
    country VARCHAR NOT NULL
);

INSERT INTO king (name, country) VALUES
('Richard VIII', 'England'),
('Louis XIV', 'France'),
('Peter I', 'Russia'),
('Fredrick II', 'Prussia');




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