package GomokuServer::Web::Dispatcher;
use strict;
use warnings;
use utf8;
use Amon2::Web::Dispatcher::RouterBoom;

use DDP;

get '/api/battle' => sub {
    my ($c) = @_;
    p $c;
    return $c->render_json({
        id   => 1,
        status => "ok"
    });
};

post '/api/battle' => sub {
    my ($c) = @_;

    my $first_player = $c->req->parameters->{first_player}
        or return $c->res_400_json;
    my $second_plauer = $c->req->parameters->{second_plauer}
        or return $c->res_400_json;
    my $result = $c->req->parameters->{result}
        or return $c->res_400_json;

    my $battle_log = {
        first_player => $first_player,
        second_plauer => $second_plauer,
        result => $result
    };

    my $id = $c->db->fast_insert(battle_logs => $battle_log);

    return $c->render_json({
        id   => $id
    });
};

1;
