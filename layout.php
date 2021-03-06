<?php
    $videoScripts = '';
    $videoCode = '';
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title><?php echo($title); ?></title>
        <script type="text/javascript">
            (!window.location.hostname.match(/www/i)) ? window.location.assign(window.location.protocol + "//www." + window.location.host + window.location.pathname) : null;
        </script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Make your own photo greeting cards, menus, invitations, labels, scrapbook pages, family trees, brochures, business cards, newsletters, letterhead, and more. PrintMaster Software for PC and Mac." />
        <meta name="keywords" content="printmaster 2, PrintMaster 2012, printmaster 18, greeting cards, invitations, print cards, make card, printmaster, invites, menus, gretting, brochure, home printing" />
        <link rel="icon" href="http://www.printmaster.com/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="http://www.printmaster.com/favicon.ico" type="image/x-icon" />
        <link type="text/css" rel="stylesheet" href="/css.css" />
        <link href="//fonts.googleapis.com/css?family=Open+Sans:400,600,700,800,300" rel="stylesheet" type="text/css" />
    </head>
    <body>
        <?php
            include( $_SERVER["DOCUMENT_ROOT"] . $_SERVER["REQUEST_URI"] . "content.php");
            include("footer.php");
        ?>
    </body>
</html>