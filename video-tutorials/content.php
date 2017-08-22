<?php
    $topNav = '<a href="/">WHAT\'S NEW</a>|<a href="/whats-great">WHAT\'S GREAT</a>|<a href="/video-tutorials" class="active">VIDEO TUTORIALS</a>';
    $footer = '<a href="/">WHAT\'S NEW!</a>|<a href="/whats-great">WHAT\'S GREAT!</a>';
    $videoScripts = '<script type="text/javascript" src="/js.js"></script>';
    $videoCode = '<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js"></script><script type="text/javascript" src="/flowplayer-3.2.6.min.js"></script><script type="text/javascript" src="/flowplayer.ipad-3.2.2.min.js"></script><script type="text/javascript" src="/flowplayer.playlist-3.0.8.min.js"></script>';
    include($_SERVER["DOCUMENT_ROOT"] . "/top.php");
?>
<div id="Page">
    
    <div id="Videos" class="blockWrap">
        <div class="blockContent">
            <div id="VideoList" class="blockSection"></div>
            <div class="blockSection">
                <h1>Video Tutorials</h1>
                <h5>Click a link to the left to select a video</h5>
                <iframe width="655" height="437" id="VideoPlayer" src="https://www.youtube.com/embed/CiBY9PY_-jU?rel=0" frameborder="0" allowfullscreen></iframe>
                <a class="player plain" id="player1"></a>
            </div>
        </div>
    </div>

</div>