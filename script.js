
"use strict";
Core.utils.onAllowCookieTracking(function() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const whiteList = ['gclid', 'fbclid', 'gdan_clid'];
  const belongToList = list => item => list.includes(item);
  const belongToWhiteList = belongToList(whiteList);
  Array.from(urlParams).forEach(param => {
    const [queryKey, queryResult] = param;
    if (!belongToWhiteList(queryKey)) return;
    localStorage.setItem(queryKey, queryResult);
  });
});