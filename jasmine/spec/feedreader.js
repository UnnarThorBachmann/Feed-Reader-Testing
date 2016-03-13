/* feedreader.js
* The tests in the file are the work of Unnar Thor Bachmann.
* for the final assignment in Udacity's front-end nanodegree program.
*/

$(function() {
  /*
  * Test 1: Test if the feeds contain valid names and
  * URLs.
  * Remark: Well done.
  */
  describe('RSS Feeds', function() {
    
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });
    
    it('contain valid URL', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.url).toBeDefined();
        expect(feed.url).not.toBe('');
      });
    });
    
    it('contain valid name', function() {
      allFeeds.forEach(function(feed) {
        expect(feed.name).toBeDefined();
        expect(feed.name).not.toBe('');
      });
    });
  });

  /*
  * Test 2: Testing if the menu is hidden in advances
  * and visible when clicked on the icon-link.
  * Expects the menu-hidden class to be defined.
  */
  describe('The menu', function() {
    var slideMenu = $('.slide-menu').css('transform');
    var menuIcon = $('.menu-icon-link');

    it('is hidden', function() {
      expect($('body').hasClass('menu-hidden')).toBe(true);
      expect(slideMenu).not.toBe('none');
    });
    
    it('is visible after odd number of clicks', function () {
      menuIcon.trigger('click');
      expect($('body').hasClass('menu-hidden')).toBe(false);
      menuIcon.trigger('click');
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
  });
  /* 
  * Test 3: Testing if there is at least one entry feed
  * after loadfeed function is called.
  * Remark: Well done.
  */
  describe('Initial Entries', function() {
    
    beforeEach(function(done) {
      loadFeed(0,done);
    });

    it('At least one .entry within .feed', function() {
      expect($('.feed .entry').length).toBeGreaterThan(0);
    });
  });

  /*
  * Test 4: Test if content is changed when new feed is loaded with
  * the loadfeed function.
  */
  describe('New Feed Selection', function() {
    var feedcontent,
    feedcontentReverse; 
    beforeEach(function(done) {
      loadFeed(0, function() {
        feedcontent = $('.feed').html();
        allFeeds = allFeeds.reverse(); // The feeds are reversed.
        // Another loadFeed (async) call nested
        // so that the first cal can not finish
        // until the second one is finished.
        loadFeed(0, function() {
          feedcontentReverse = $('.feed').html();
        });
        done(); // spec starts after the excecution of done.
      }); 
    });
    it('Content changes when new feed is loaded', function() {
      // Checking that the feedcontent did change when loadfeed was
      // called.
      expect(feedcontent).not.toEqual(feedcontentReverse);
    });
  });
}());
