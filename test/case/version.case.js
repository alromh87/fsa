//in
[
    "INIT",
    "touch tmp/1",
    "ADD",
    "COMMIT",
    "GET_VERSION",
    "touch tmp/2",
    "CHECK_VERSION",
    "ADD",
    "COMMIT",
    "CHECK_VERSION"
]
//out
same
different