$( document ).ready(function() {
  var ogdchAutoComplete = new autoComplete({
    selector: 'input#ogdch_search[name="q"]',
    minChars: 2,
    source: function(term, response) {
      var url = '/api/3/action/ogdch_autosuggest';
      var params = { q: term, lang: $('html').attr('lang') };
      var values = [];
      $("#dataset-search-form input[name='groups']").each(function(elem) { values.push($(this).val()) });
      $("#dataset-search-form input[name='keywords_de']").each(function(elem) { values.push($(this).val()) });
      $("#dataset-search-form input[name='keywords_fr']").each(function(elem) { values.push($(this).val()) });
      $("#dataset-search-form input[name='keywords_it']").each(function(elem) { values.push($(this).val()) });
      $("#dataset-search-form input[name='keywords_en']").each(function(elem) { values.push($(this).val()) });
      $("#dataset-search-form input[name='organization']").each(function(elem) { values.push($(this).val()) });
      $("#dataset-search-form input[name='political_level']").each(function(elem) { values.push($(this).val()) });
      $("#dataset-search-form input[name='res_rights']").each(function(elem) { values.push($(this).val()) });
      $("#dataset-search-form input[name='res_format']").each(function(elem) { values.push($(this).val()) });
      if (values) {
        // remove dashes from all values
        values = values.map(function(v) { return v.replace(/-/gi, ''); });
        fq = values.join(' AND ');
        params['fq'] = fq;
      }
      $.getJSON(url, params)
        .done(function(data) {
          const cleanedData = data.result.map(item => item.replace(/<[/]?b>/g, ''));
          response(cleanedData);
        });
    }
  });
});
