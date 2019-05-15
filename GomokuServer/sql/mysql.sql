CREATE TABLE IF NOT EXISTS battle_logs (
    id           INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name1        VARCHAR(255),
    name2        VARCHAR(255),
    result       INTEGER,
    created_at   DATETIME default current_timestamp
);
