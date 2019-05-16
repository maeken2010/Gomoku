package GomokuServer::DB::Schema;
use strict;
use warnings;
use utf8;

use Teng::Schema::Declare;

base_row_class 'GomokuServer::DB::Row';

table {
    name 'battle_logs';
    pk 'id';
    columns qw(id first_player second_player result finished_at);
};

1;
