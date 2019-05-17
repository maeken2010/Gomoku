package GomokuServer::DB::Schema;
use strict;
use warnings;
use utf8;

use Teng::Schema::Declare;

base_row_class 'GomokuServer::DB::Row';

table {
    name 'battle_logs';
    pk 'id';
    columns qw(id first_player second_player result board_size finished_at);
};

table {
    name 'game_records';
    pk 'id';
    columns qw(id battle_id turn turn_number x y);
};

1;
