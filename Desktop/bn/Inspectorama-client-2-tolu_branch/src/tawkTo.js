function setupTawk(locale) {
  /**
   * Links for language-specific channels or projects, you can find them in original tawk embed code
   */
  const localeToLink = {
    no: process.env.VUE_APP_TAWK_TO_KEY_NORWEGIAN,
    en: process.env.VUE_APP_TAWK_TO_KEY_ENGLISH,
  };
  /**
   * Hide widget if tawk is loaded
   */
  if (
    window.Tawk_API !== undefined &&
    typeof window.Tawk_API.hideWidget === 'function'
  ) {
    window.Tawk_API.hideWidget();
  }
  /**
   * Delete script tags of tawk
   */
  const scripts = document.getElementsByTagName('script');
  for (let i = 0; i < scripts.length; i++) {
    const tag = scripts[i];
    if (tag.getAttribute('tawk') === 'yes') {
      tag.parentNode.removeChild(tag);
    }
  }
  /**
   * Delete anything related to tawk, otherwise new widget would not be loaded
   */
  for (const name in window) {
    if (
      window.hasOwnProperty(name) &&
      (name.includes('tawk') || name.includes('Tawk'))
    ) {
      delete window[name];
    }
  }

  /**
   * Almost the same code as original
   */
  window.Tawk_API = {};
  window.Tawk_LoadStart = new Date();
  (function () {
    const s1 = document.createElement('script'),
      s0 = document.getElementsByTagName('script')[0];
    s1.async = true;
    s1.src = localeToLink[locale]; //Here we use correct url for locale
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s1.setAttribute('tawk', 'yes'); //This line is used to mark tawk script
    s0.parentNode.insertBefore(s1, s0);
  })()

  window.Tawk_API.onStatusChange = function (status) {
    //place your code here
    // if (status === 'online') {
    //   document.getElementById('status').innerHTML = '<a href="javascript:void(window.Tawk_API.toggle())">Online - Click to chat</a>';
    // }
  };
}

export default setupTawk

// import i18n from "./i18n"

// export default () => {
//     let tawkKeyUrl
//     if (i18n.locale == "en") {
//         tawkKeyUrl = process.env.VUE_APP_TAWK_TO_KEY_ENGLISH
//     } else if (i18n.locale == "no") {
//         tawkKeyUrl = process.env.VUE_APP_TAWK_TO_KEY_NORWEGIAN
//     }

//     var Tawk_API = Tawk_API || {},
//         Tawk_LoadStart = new Date();
//     (function () {
//         var s1 = document.createElement("script"),
//             s0 = document.getElementsByTagName("script")[0];
//         s1.async = true;
//         s1.src = tawkKeyUrl
//         s1.charset = "UTF-8";
//         s1.setAttribute("crossorigin", "*");
//         s0.parentNode.insertBefore(s1, s0);
//     })();
// }