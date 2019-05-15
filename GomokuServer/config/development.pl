use File::Spec;
use File::Basename qw(dirname);
+{
    'DBI' => [
        "dbi:mysql:dbname=gomoku", 'root', '',
        +{
             RootClass => 'DBIx::Sunny'
        }
    ],
};
