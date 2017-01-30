'use strict';

import $ from 'jquery';
import getQuotePromise from './api/random-quote';
import updateHtml from './set-view';

require('./styles/styles.scss');

const API_URL = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?';

const $blockquote = $('#quote');
const $twitterLink = $('#twitter-link');

const fetchQuote = getQuotePromise(API_URL);

$('#getRandomQuote').click(e => {
  fetchQuote()
    .then(json => updateHtml(json, $blockquote, $twitterLink))
    .catch(err => console.log(err));
});

fetchQuote()
  .then(json => updateHtml(json, $blockquote, $twitterLink))
  .catch(err => console.log(err));
