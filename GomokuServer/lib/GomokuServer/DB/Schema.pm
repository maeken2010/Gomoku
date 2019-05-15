package GomokuServer::DB::Schema;
use strict;
use warnings;
use utf8;

use Teng::Schema::Declare;

base_row_class 'GomokuServer::DB::Row';

table {
    name 'battle_logs';
    pk 'id';
    columns qw(id name1 name2 result created_at);
};

1;
