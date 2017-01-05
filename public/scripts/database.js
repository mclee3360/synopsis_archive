// Set the configuration for your app
var config = {
    apiKey: "apiKey",
    authDomain: "rewrite-archive-f7a8b.firebaseapp.com/",
    databaseURL: "https://rewrite-archive-f7a8b.firebaseio.com/",
    storageBucket: "bucket.appspot.com"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();
