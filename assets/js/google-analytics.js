window["ga-disable-{{ site.google_analytics }}"] =
    window.doNotTrack === "1" ||
    navigator.doNotTrack === "1" ||
    navigator.doNotTrack === "yes" ||
    navigator.msDoNotTrack === "1";
window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "{{ site.google_analytics }}");
