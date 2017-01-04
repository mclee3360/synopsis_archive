//Set HTML for the written synopsis showcase
var writtenShowcase = [];
var ref = database.ref("showcase/written");
ref.orderByChild("title").once("value", function(snapshot) {
    snapshot.forEach(function(child) {
        writtenShowcase.push(new Anime(child.val().source, child.val().poster,
            child.val().title, child.val().uploaded, child.val().finalEdit));
    });
}).then(function() {
    document.getElementById("written_showcase").innerHTML =
        "<th colspan=4>- Best of Written -</th>" + createTableHTML(writtenShowcase, 4);
});

//Set HTML for the edited synopsis showcase
var editedShowcase = [];
ref = database.ref("showcase/edited");
ref.orderByChild("title").once("value", function(snapshot) {
    snapshot.forEach(function(child) {
        editedShowcase.push(new Anime(child.val().source, child.val().poster,
            child.val().title, child.val().uploaded, child.val().finalEdit));
    });
}).then(function() {
    document.getElementById("edited_showcase").innerHTML =
        "<th colspan=4>- Best of Edited -</th>" + createTableHTML(editedShowcase, 4);
});
