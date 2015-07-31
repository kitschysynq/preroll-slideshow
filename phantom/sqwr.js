/**

Capture meetup site to a file

*/

var page = require('webpage').create();
page.viewportSize = { width: 1200, height: 1024 };
page.clipRect = { top: 90, left: 0, width: 1200, height: 1024 };
page.open('http://meetup.com/squidwrench', function() {
  page.render('images/sqwr.png');
  phantom.exit();
});
