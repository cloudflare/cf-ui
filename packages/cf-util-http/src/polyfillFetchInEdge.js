if (navigator && /Edge/.test(navigator.userAgent)) {
  delete window.fetch;
}
