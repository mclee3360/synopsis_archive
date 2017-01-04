// Set the configuration for your app
var config = {
    apiKey: "apiKey",
    authDomain: "https://rewrite-archive.firebaseapp.com/",
    databaseURL: "https://rewrite-archive.firebaseio.com/",
    storageBucket: "bucket.appspot.com"
};
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database();
