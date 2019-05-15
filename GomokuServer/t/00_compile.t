use strict;
use warnings;
use Test::More;


use GomokuServer;
use GomokuServer::Web;
use GomokuServer::Web::View;
use GomokuServer::Web::ViewFunctions;

use GomokuServer::DB::Schema;
use GomokuServer::Web::Dispatcher;


pass "All modules can load.";

done_testing;
