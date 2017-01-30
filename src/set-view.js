'use strict';

import $ from 'jquery';

function stripTags (str) {
  return str.replace(/<\/?\w+>/gi, '');
}

export default function updateHtml (json, $blockquote, $twitterLink) {
  const { quoteAuthor, quoteText } = json;
  const TWITTER_LINK_STR = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=`;

  $twitterLink.attr(`href`, TWITTER_LINK_STR + encodeURI(`"${ quoteText.trim() }" ${ quoteAuthor.trim() || `Anonymous` }`));
  $blockquote.html(`<p>${ quoteText.trim() }</p><footer>${ quoteAuthor.trim() || `Anonymous` }</footer>`);

  return json;
}
