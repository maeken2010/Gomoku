CREATE TABLE IF NOT EXISTS battle_logs (
    id                  INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    first_player        VARCHAR(255),
    second_plauer       VARCHAR(255),
    result              INTEGER,
    finished_at         DATETIME default current_timestamp
);
