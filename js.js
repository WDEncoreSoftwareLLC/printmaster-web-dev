$(function () {
    $("#VideoList").append("<div class=\"clips\"><ul><li><span data-url=\"${url}\" data-video=\"${dataurl}\">${title}</span></li></ul></div>");
    $f("player1", "/flowplayer-3.2.7.swf", {
        clip: {
            baseUrl: '',
            autoPlay: false,
            autoBuffering: true
        },
        playlist: [
            {
                url: 'http://go.encoreusa.com/1557',
                title: 'Create from Scratch',
                dataurl: 'http://go.encoreusa.com/1557'
            },
            {
                url: 'http://go.encoreusa.com/1558',
                title: 'Create a Ready-Made Project',
                dataurl: 'http://go.encoreusa.com/1558'
            },
            {
                url: 'http://go.encoreusa.com/1559',
                title: 'Browse Ready-Made Projects',
                dataurl: 'http://go.encoreusa.com/1559'
            },
            {
                url: 'http://go.encoreusa.com/1561',
                title: 'Open a Recent Project',
                dataurl: 'http://go.encoreusa.com/1561'
            },
            {
                url: 'http://go.encoreusa.com/1562',
                title: 'Saving Projects',
                dataurl: 'http://go.encoreusa.com/1562'
            },
            {
                url: 'http://go.encoreusa.com/1563',
                title: 'Setting Preferences',
                dataurl: 'http://go.encoreusa.com/1563'
            },
            {
                url: 'http://go.encoreusa.com/1564',
                title: 'Printing Projects',
                dataurl: 'http://go.encoreusa.com/1564'
            },
            {
                url: 'http://go.encoreusa.com/1565',
                title: 'Professional Printing',
                dataurl: 'http://go.encoreusa.com/1565'
            },
            {
                url: 'http://go.encoreusa.com/1566',
                title: 'Avery Templates',
                dataurl: 'http://go.encoreusa.com/1566'
            },
            {
                url: 'http://go.encoreusa.com/1567',
                title: 'Working with Backgrounds',
                dataurl: 'http://go.encoreusa.com/1567'
            },
            {
                url: 'http://go.encoreusa.com/1568',
                title: 'Working with Photos',
                dataurl: 'http://go.encoreusa.com/1568'
            },
            {
                url: 'http://go.encoreusa.com/1571',
                title: 'Working with Text',
                dataurl: 'http://go.encoreusa.com/1571'
            },
            {
                url: 'http://go.encoreusa.com/1569',
                title: 'Working with Headlines',
                dataurl: 'http://go.encoreusa.com/1569'
            },
            {
                url: 'http://go.encoreusa.com/1570',
                title: 'Working with Calendars',
                dataurl: 'http://go.encoreusa.com/1570'
            },
            {
                url: 'http://go.encoreusa.com/1556',
                title: 'Working with Clip Art',
                dataurl: 'http://go.encoreusa.com/1556'
            },
            {
                url: 'http://go.encoreusa.com/1572',
                title: 'Working with Shapes and Lines',
                dataurl: 'http://go.encoreusa.com/1572'
            },
            {
                url: 'http://go.encoreusa.com/1573',
                title: 'Working with Colors',
                dataurl: 'http://go.encoreusa.com/1573'
            },
            {
                url: 'http://go.encoreusa.com/1560',
                title: 'Using Color Pop',
                dataurl: 'http://go.encoreusa.com/1560'
            },
            {
                url: 'http://go.encoreusa.com/1574',
                title: 'Using Mail Merge and Address Book',
                dataurl: 'http://go.encoreusa.com/1574'
            },
            {
                url: 'http://go.encoreusa.com/1575',
                title: 'Checking Your Projects',
                dataurl: 'http://go.encoreusa.com/1575'
            },
            {
                url: 'http://go.encoreusa.com/1576',
                title: 'Project Tips and Tricks',
                dataurl: 'http://go.encoreusa.com/1576'
            },
            {
                url: 'http://go.encoreusa.com/1577',
                title: 'PrintMaster Packs',
                dataurl: 'http://go.encoreusa.com/1577'
            }
        ],
        plugins: {
            controls: {
                playlist: true
            }
        }
    });
    $f("player1").playlist("div.clips ul:first", { loop: true });
});
function startVideoList() {
    $('.clips ul li span').click(function () {
        var ref = $(this).attr('data-video');
        ref = '' + ref;
        setNewVideo(ref);
        $('#VideoPlayer').attr('src', ref);
    });
}
function setNewVideo(ref) {
    $('#VideoPlayer').attr('src', ref);
}
setTimeout(function () { startVideoList(); }, 500);
function scrollToVideos() {
    location.replace("#Videos");
}
scrollToVideos();