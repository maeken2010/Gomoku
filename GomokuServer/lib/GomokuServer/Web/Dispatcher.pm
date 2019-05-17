package GomokuServer::Web::Dispatcher;
use strict;
use warnings;
use utf8;
use JSON;
use Amon2::Web::Dispatcher::RouterBoom;

use DDP;

get '/api/battle' => sub {
    my ($c) = @_;
    my @all_battle_logs = $c->db->search('battle_logs');
    my @json = ();
    foreach my $b (@all_battle_logs) {
        push (@json, { id => $b->id, first_player => $b->first_player, second_player => $b->second_player, result => $b->result, board_size => $b->board_size, finished_at => $b->finished_at });
    }
    return $c->render_json(\@json);
};

post '/api/battle' => sub {
    my ($c) = @_;

    my $first_player = $c->req->parameters->{first_player}
        or return $c->res_400_json;
    my $second_player = $c->req->parameters->{second_player}
        or return $c->res_400_json;
    my $board_size = $c->req->parameters->{board_size}
        or return $c->res_400_json;
    my $result = $c->req->parameters->{result}
        or return $c->res_400_json;

    my $battle_log = {
        first_player => $first_player,
        second_player => $second_player,
        board_size => $board_size,
        result => $result
    };

    my $id = $c->db->fast_insert(battle_logs => $battle_log);

    return $c->render_json({
        id   => $id
    });
};

get '/api/battle/:id' => sub {
    my ($c, $args) = @_;
    my $battle_id = $args->{id}
        or return $c->res_400_json;
    my @records = $c->db->search('game_records', ['battle_id', $battle_id]);

    my @json = ();
    foreach my $b (@records) {
        push (@json, { id => $b->id, battle_id => $b->battle_id, turn => $b->turn, turn_number => $b->turn_number, x => $b->x, y => $b->y });
    }
    return $c->render_json(\@json);
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
