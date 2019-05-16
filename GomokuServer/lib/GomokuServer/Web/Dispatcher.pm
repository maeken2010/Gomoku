package GomokuServer::Web::Dispatcher;
use strict;
use warnings;
use utf8;
use JSON;
use Amon2::Web::Dispatcher::RouterBoom;

use DDP;

get '/api/battle' => sub {
    my ($c) = @_;
    return $c->render_json({
        id   => 1,
        status => "ok"
    });
};

post '/api/battle' => sub {
    my ($c) = @_;

    my $first_player = $c->req->parameters->{first_player}
        or return $c->res_400_json;
    my $second_player = $c->req->parameters->{second_player}
        or return $c->res_400_json;
    my $result = $c->req->parameters->{result}
        or return $c->res_400_json;

    my $battle_log = {
        first_player => $first_player,
        second_player => $second_player,
        result => $result
    };

    my $id = $c->db->fast_insert(battle_logs => $battle_log);

    return $c->render_json({
        id   => $id
    });
};

post '/api/record' => sub {
    my ($c) = @_;
    my $records = $c->req->parameters->{records}
        or return $c->res_400_json;
    my $battle_id = $c->req->parameters->{battle_id}
        or return $c->res_400_json;

    my $d = decode_json($records);
    my @insert_data = map +{
        battle_id => $battle_id,
        turn => $_->{turn},
        turn_number => $_->{turn_number},
        x => $_->{x},
        y => $_->{y}
    }, @$d;

    $c->db->bulk_insert(game_records => \@insert_data);
    return $c->render_json({
        status => "ok"
    });
};

1;
