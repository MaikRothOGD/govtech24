$( document ).ready(function() {
   /**
   * Facet search show more buttons on the dataset search page
   */
    var showMoreButton = $('.facets-show-more');
    showMoreButton.on('click', function() {
        $(this).children('.facets-show-less-text').toggle();
        $(this).children('.facets-show-more-text').toggle();
    });
});
