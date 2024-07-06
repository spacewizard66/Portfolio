<?php

    $address = "216.24.57.1";
    $port = "10000";

    // Create Socket
    if(!($socket = socket_create(AF_INET, SOCK_DGRAM, SOL_UDP)))
    {
        $errorcode = socket_last_error();
        $errormsg = socket_strerror($errorcode);

        die("Couldn't create socket: [$errorcode] $errormsg \n");
    }
    echo "Socket created!";

    socket_bind($socket, $address, $port);

    socket_listen($socket, 5);

    $client = socket_accept($socket);

    $output = "Connection Successful!";

    socket_write($client, $output);

    socket_close($socket);


?>