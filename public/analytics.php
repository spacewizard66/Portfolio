<?php

    $address = "216.24.57.1";
    $port = "10000";
    $temp = 1;

    // Create Socket
    if(!($socket = socket_create(AF_INET, SOCK_DGRAM, 0)))
    {
        $errorcode = socket_last_error();
        $errormsg = socket_strerror($errorcode);

        die("Couldn't create socket: [$errorcode] $errormsg \n");
    }
    echo "Socket Created!";
    echo "<script>console.log('Socket Created!');</script>";

    socket_bind($socket, $address, $port);
    echo "<script>console.log('Socket Binded.');</script>";

    socket_listen($socket, 1);
    echo "<script>console.log('Socket Listening for Connection.');</script>";

    while ($temp == 1)
    {
        $client = socket_accept($socket);
        # $input = socket_read($client, 2024);

        /* if ($input == 'exit')
        {
            $close = socket_close($socket);
            $temp = 0;
        } */
        if ($temp == 1)
        {
            $output = "Testing 1 2 3 4 5... \nConnection Successful!";
        }

        echo $output;
        echo "<script>console.log('$output');</script>";
        sleep(5);
    }
?>