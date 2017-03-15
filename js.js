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
        url: 'http://s3.printmaster.com/41260/Printmaster7-NewFeaturesTutorial.mp4',
        title: 'PrintMaster v7 Platinum New Features',
        dataurl: 'http://s3.printmaster.com/41260/Printmaster7-NewFeaturesTutorial'
      },
      {
        url: 'http://s3.encore.com/PrintMaster/PrintMaster7-Administrator.mp4',
        title: 'PrintMaster v7 Administrator',
        dataurl: 'http://s3.encore.com/PrintMaster/PrintMaster7-Administrator'
      },
      {
        url: 'http://s3.encore.com/b2c/videos/printmaster/PrintMaster6-Platinum-New-Features.mp4',
        title: 'PrintMaster v6 Platinum New Features',
        dataurl: 'http://s3.encore.com/b2c/videos/printmaster/PrintMaster6-Platinum-New-Features'
      },
      {
        url: 'http://s3.printmaster.com/41260/PrintMaster-Platinum-v7-Mail-Merge-Feature.mp4',
        title: 'How to Use Mail Merge and Address Book',
        dataurl: 'http://s3.printmaster.com/41260/PrintMaster-Platinum-v7-Mail-Merge-Feature'
      },
      {
        url: 'http://s3.encore.com/PrintMaster/PM2012-tutorial-AveryTemplates.mp4',
        title: 'Avery Templates',
        dataurl: 'http://s3.encore.com/b2c/videos/printmaster/PM2012-tutorial-AveryTemplates'
      },
      {
        url: 'http://s3.encore.com/PrintMaster/PM2012-tutorial-Calendar.mp4',
        title: 'Building Calendars',
        dataurl: 'http://s3.encore.com/b2c/videos/printmaster/PM2012-tutorial-Calendar'
      },
      {
        url: 'http://s3.encore.com/PrintMaster/PM2012-tutorial-CheckProjects.mp4',
        title: 'Checking Your Projects',
        dataurl: 'http://s3.encore.com/b2c/videos/printmaster/PM2012-tutorial-CheckProjects'
      },
      {
        url: 'http://s3.encore.com/PrintMaster/PM2012-tutorial-CreateScratch.mp4',
        title: 'Creating From Scratch',
        dataurl: 'http://s3.encore.com/b2c/videos/printmaster/PM2012-tutorial-CreateScratch'
      },
      {
        url: 'http://s3.encore.com/PrintMaster/PM2012-tutorial-WorkingHeadlines.mp4',
        title: 'Creating Headlines',
        dataurl: 'http://s3.encore.com/b2c/videos/printmaster/PM2012-tutorial-WorkingHeadlines'
      },
      {
        url: 'http://s3.encore.com/PrintMaster/PM2012-tutorial-PrintProjects.mp4',
        title: 'Printing Projects',
        dataurl: 'http://s3.encore.com/b2c/videos/printmaster/PM2012-tutorial-PrintProjects'
      },
      {
        url: 'http://s3.encore.com/PrintMaster/PM2012-tutorial-ProfessionalPrinting.mp4',
        title: 'Professional Printing',
        dataurl: 'http://s3.encore.com/b2c/videos/printmaster/PM2012-tutorial-ProfessionalPrinting'
      },
      {
        url: 'http://s3.encore.com/PrintMaster/PM2012-tutorial-TipsTricks.mp4',
        title: 'Project Tips and Tricks',
        dataurl: 'http://s3.encore.com/b2c/videos/printmaster/PM2012-tutorial-TipsTricks'
      },
      {
        url: 'http://s3.encore.com/PrintMaster/PM2012-tutorial-ChoosingReadyMade.mp4',
        title: 'Ready-Made Templates',
        dataurl: 'http://s3.encore.com/b2c/videos/printmaster/PM2012-tutorial-ChoosingReadyMade'
      },
      {
        url: 'http://s3.encore.com/PrintMaster/PM2012-tutorial-OpenRecent.mp4',
        title: 'Opening Recent Projects',
        dataurl: 'http://s3.encore.com/b2c/videos/printmaster/PM2012-tutorial-OpenRecent'
      },
      {
        url: 'http://s3.encore.com/PrintMaster/PM2012-tutorial-SavingProjects_1.mp4',
        title: 'Saving Projects',
        dataurl: 'http://s3.encore.com/b2c/videos/printmaster/PM2012-tutorial-SavingProjects_1'
      },
      {
        url: 'http://s3.encore.com/PrintMaster/PM2012-tutorial-SettingPreferences.mp4',
        title: 'Setting Preferences',
        dataurl: 'http://s3.encore.com/b2c/videos/printmaster/PM2012-tutorial-SettingPreferences'
      },
      {
        url: 'http://s3.encore.com/PrintMaster/PM2012-tutorial-PrintmasterPacks.mp4',
        title: 'Template Packs',
        dataurl: 'http://s3.encore.com/b2c/videos/printmaster/PM2012-tutorial-PrintmasterPacks'
      },
      {
        url: 'http://s3.encore.com/PrintMaster/PM2012-tutorial-Backgrounds.mp4',
        title: 'Working with Backgrounds',
        dataurl: 'http://s3.encore.com/b2c/videos/printmaster/PM2012-tutorial-Backgrounds'
      },
      {
        url: 'http://s3.encore.com/PrintMaster/PM2012-tutorial-Clipart.mp4',
        title: 'Working with Clip Art',
        dataurl: 'http://s3.encore.com/b2c/videos/printmaster/PM2012-tutorial-Clipart'
      },
      {
        url: 'http://s3.encore.com/PrintMaster/PM2012-tutorial-WorkingColors.mp4',
        title: 'Working with Colors',
        dataurl: 'http://s3.encore.com/b2c/videos/printmaster/PM2012-tutorial-WorkingColors'
      },
      {
        url: 'http://s3.encore.com/PrintMaster/PM2012-tutorial-ShapesAndLines.mp4',
        title: 'Working with Shapes and Lines',
        dataurl: 'http://s3.encore.com/b2c/videos/printmaster/PM2012-tutorial-ShapesAndLines'
      },
      {
        url: 'http://s3.encore.com/PrintMaster/PM2012-tutorial-WorkingPhotos.mp4',
        title: 'Working with Photos',
        dataurl: 'http://s3.encore.com/b2c/videos/printmaster/PM2012-tutorial-WorkingPhotos'
      },
      {
        url: 'http://s3.encore.com/PrintMaster/PM2012-tutorial-WorkingText.mp4',
        title: 'Working with Text',
        dataurl: 'http://s3.encore.com/b2c/videos/printmaster/PM2012-tutorial-WorkingText'
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
    $('#VideoPlayer').load();
    var myVideo = document.getElementById('VideoPlayer');
    myVideo.play();
  });
  var vid1 = $('.clips:first ul li span').attr('data-video');
  vid1 = '' + vid1;
  $('#MP4').attr('src', vid1 + '.mp4');
  $('#OGV').attr('src', vid1 + '.ogg');
  $('#WEBM').attr('src', vid1 + '.webm');
  $('#VideoPlayer').load();
}
function setNewVideo(ref) {
  $('#MP4').attr('src', ref + '.mp4');
  $('#OGV').attr('src', ref + '.ogg');
  $('#WEBM').attr('src', ref + '.webm');
}
setTimeout(function () { startVideoList(); }, 500);
function scrollToVideos() {
  location.replace("#Videos");
}
scrollToVideos();