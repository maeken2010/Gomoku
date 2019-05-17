CREATE TABLE IF NOT EXISTS battle_logs (
    id                  INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    first_player        VARCHAR(255),
    second_player       VARCHAR(255),
    result              INTEGER,
    board_size          INTEGER,
    finished_at         DATETIME default current_timestamp
);

CREATE TABLE IF NOT EXISTS game_records (
    id                  INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    battle_id           INTEGER NOT NULL,
    turn                INTEGER,
    turn_number         INTEGER,
    x                   INTEGER,
    y                   INTEGER
);