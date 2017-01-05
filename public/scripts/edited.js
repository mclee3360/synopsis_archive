//Set HTML for the edited synopses
var edited = [];
var ref = database.ref("edited");
ref.orderByChild("title").once("value", function(snapshot) {
    snapshot.forEach(function(child) {
        edited.push(new Anime(child.val().source, child.val().poster,
            child.val().title, child.val().uploaded, child.val().finalEdit));
    });
}).then(function() {
    document.getElementById("edit_list_start").innerHTML =
        createEntryListHTML(edited);
});

ref = database.ref("date/edited");
ref.once("value", function(snapshot) {
    document.getElementById("edit_date").innerHTML = snapshot.val();
});
