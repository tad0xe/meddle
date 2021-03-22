
 window.fbAsyncInit = function () {
    FB.init({
        appId: process.env.VUE_APP_FACEBOOK_ID,
        cookie: true, // Enable cookies to allow the server to access the session.
        xfbml: true, // Parse social plugins on this webpage.
        version: "v5.0" // Use this Graph API version for this call.
    });

    FB.getLoginStatus(function (response) {
        // Called after the JS SDK has been initialized.
      statusChangeCallback(response); // Returns the login status.
    });
};

(function (d, s, id) {
    // Load the SDK asynchronously
    var js,
        fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");

export default {}