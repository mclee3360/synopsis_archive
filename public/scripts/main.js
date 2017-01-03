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

var list = [];
var ref = database.ref("showcase/written");
ref.orderByChild("title").once("value", function(snapshot) {
    snapshot.forEach(function(child) {
        list.push(new Anime(child.val().source, child.val().poster,
            child.val().title, child.val().uploaded, child.val().finalEdit));
    });
}).then(function() {
    console.log(list[0]);
});

function test() {
}
