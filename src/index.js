'use strict';

import $ from 'jquery';
import getRandomQuote from './api/random-quote';

require('./styles/styles.scss');

const $blockquote = $('#quote');
const $twitterLink = $('#twitter-link');

$('#getRandomQuote').click(e => {
  getRandomQuote($blockquote, $twitterLink);
});

getRandomQuote($blockquote, $twitterLink);
