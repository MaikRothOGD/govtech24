$(document).ready(function() {
  // Setup Piwik tracking
  $('a[href^="mailto:"]').on('click', function(e) {
    var origin = $(this).data().trackedOrigin || window.location.href;
    var target = $(this)
      .attr('href')
      .replace('mailto:', '');
    trackEvent('Mail', origin, target);
  });
  $('a.piwik-tracked-download').on('click', function(e) {
    var format =
      $(this)
        .data()
        .format.toLowerCase() || '';
    trackDownloadEvent(format);
    var category =
      $(this)
        .data()
        .category.toLowerCase() || '';
    trackDownloadEvent(category);
  });
  $('a.piwik-tracked-app-url').on('click', function(e) {
    var origin = $(this).data().trackedOrigin || window.location.href;
    var target = $(this).attr('href');
    trackEvent('App URL', origin, target);
  });
  $('a.piwik-tracked-app-related-dataset').on('click', function(e) {
    var origin = $(this).data().trackedOrigin || window.location.href;
    var target = $(this).attr('href');
    trackEvent('App Related Dataset', origin, target);
  });

  function trackEvent(action, origin, target) {
    _paq.push(['trackEvent', action, origin, target]);
  }

  function trackDownloadEvent(input) {
    if (customDimensionActionFormatId) {
      customDimensionFormat = {};
      customDimensionFormat[
        'dimension' + customDimensionActionFormatId
      ] = input;
      _paq.push([
        'trackEvent',
        'dataset',
        'download',
        input,
        '',
        customDimensionFormat,
      ]);
    } else if (customDimensionActionCategoryId) {
      customDimensionCategory = {};
      customDimensionCategory[
        'dimension' + customDimensionActionCategoryId
      ] = input;
      _paq.push([
        'trackEvent',
        'dataset',
        'download',
        input,
        '',
        customDimensionCategory,
      ]);
    }
  }
});
