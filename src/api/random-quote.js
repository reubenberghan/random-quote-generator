'use strict';

import $ from 'jquery';
import { setTwitterLink, setQuoteHtml } from './set-view';

const API_URL = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?';

export default function getRandomQuote ($el, link) {
  return $.ajax({ url: API_URL, dataType: 'jsonp' })
    .then(json => setTwitterLink(json, link))
    .then(json => setQuoteHtml(json, $el))
    .catch(e => console.log(e));;
}
