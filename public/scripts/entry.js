Anime.prototype = new Entry();
Anime.prototype.constructor = Anime;

function Anime(source, posterURL, title, uploaded, finalEdit) {
    this.source = source;
    this.poster = posterURL;
    this.title = title;
    this.uploaded = uploaded;
    this.finalEdit = finalEdit;
}

Manga.prototype = new Entry();
Manga.prototype.constructor = Manga;

function Manga(source, posterURL, title, uploaded, finalEdit) {
    this.source = source;
    this.poster = posterURL;
    this.title = title;
    this.uploaded = uploaded;
    this.finalEdit = finalEdit;
}

Novel.prototype = new Entry();
Novel.prototype.constructor = Novel;

function Novel(source, posterURL, title, uploaded, finalEdit) {
    this.source = source;
    this.poster = posterURL;
    this.title = title;
    this.uploaded = uploaded;
    this.finalEdit = finalEdit;
}

function Entry() {
    this.source; //The MAL page for the entry.
    this.poster; //The poster for the entry.
    this.title; //The title of the entry.
    this.uploaded; //Whether the synopsis has been uploaded to MAL yet.
    this.finalEdit; //Whether I took place on the final edits.
}

Entry.prototype.setSource = function(source) {
    this.source = source;
}

Entry.prototype.getSource = function() {
    return this.source;
}

Entry.prototype.setPoster = function(posterURL) {
    this.poster = posterURL;
}

Entry.prototype.getPoster = function() {
    return this.poster;
}

Entry.prototype.setTitle = function(title) {
    this.title = title;
}

Entry.prototype.getTitle = function() {
    return this.title;
}

Entry.prototype.setUploaded = function(uploaded) {
    this.uploaded = uploaded;
}

Entry.prototype.getUploaded = function() {
    return this.uploaded;
}

Entry.prototype.setFinalEdit = function(finalEdit) {
    this.finalEdit = finalEdit;
}

Entry.prototype.getFinalEdit = function() {
    return this.finalEdit;
}
