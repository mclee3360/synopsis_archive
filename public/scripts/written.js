//Set HTML for the written synopses
var written = [];
var ref = database.ref("written");
ref.orderByChild("title").once("value", function(snapshot) {
    snapshot.forEach(function(child) {
        written.push(new Anime(child.val().source, child.val().poster,
            child.val().title, child.val().uploaded, child.val().finalEdit));
    });
}).then(function() {
    document.getElementById("written_table").innerHTML =
        "<th></th>" + createTableHTML(written, 5);
});

ref = database.ref("date/written");
ref.once("value", function(snapshot) {
    document.getElementById("write_date").innerHTML = snapshot.val();
});
