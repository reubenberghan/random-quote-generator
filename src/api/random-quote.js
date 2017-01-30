'use strict';

import $ from 'jquery';

export default function getQuotePromise (url) {
  return () => $.ajax({ url: url, dataType: 'jsonp' });
}
