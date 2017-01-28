'use strict';

import $ from 'jquery';

const TWITTER_LINK_STR = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=';

function stripTags (str) {
  return str.replace(/<\/?\w+>/gi, '');
}

export function setQuoteHtml (json, $el) {
  $el.html(
    Object
      .keys(json)
      .sort((a, b) => a - b)
      .reduce((html, key) => {
        switch (key) {
          case 'quoteText':
            return html += '<p>' + stripTags(json[key]).trim() + '</p>';
          case 'quoteAuthor':
            return html += '<footer>' + stripTags(json[key] || 'Anonymous').trim() + '</footer>';
          default:
            return html;
        }
      }, '')
  );
  return json;
}

export function setTwitterLink (json, $el) {
  $el.attr(
    'href',
    Object
      .keys(json)
      .sort((a, b) => a - b)
      .reduce((str, key) => {
        switch (key) {
          case 'quoteText':
            return str += encodeURI('"' + stripTags(json[key]).trim() + '" ');
          case 'quoteAuthor':
            return str += encodeURI(stripTags(json[key]).trim());
          default:
            return str;
        }
      }, TWITTER_LINK_STR)
  );
  return json;
}
