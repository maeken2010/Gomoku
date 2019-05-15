package GomokuServer::Web::Dispatcher;
use strict;
use warnings;
use utf8;
use Amon2::Web::Dispatcher::RouterBoom;

post '/api/battle' => sub {
    my ($c) = @_;

    my $name1 = $c->req->parameters->{name1}
        or return $c->res_400_json;
    my $name2 = $c->req->parameters->{name2}
        or return $c->res_400_json;
    my $result = $c->req->parameters->{result}
        or return $c->res_400_json;

    my $battle_log = {
        name1 => $name1,
        name2 => $name2,
        result => $result
    };

    my $id = $c->db->fast_insert(battle_logs => $battle_log);

    return $c->render_json({
        id   => $id,
        status => "ok"
    });
};

1;
