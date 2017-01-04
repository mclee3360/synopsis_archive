var createEntryHTML = function(entry, showcase) {
    html = "<td class=cover><div><a href=";
    html += entry.getSource();
    html += " target=_blank class=poster_link><img src=";
    html += entry.getPoster();
    html += " alt='" + entry.getTitle() + " Poster' ";
    html += "class=poster title='" + entry.getTitle() + "'/></a>";
    html += "<div class=title"
    if (showcase) {
        html += " id=showcase";
    }
    html += "><p class=title_text>";
    html += entry.getTitle();
    if (entry.getFinalEdit()) {
        html += "<br>FINAL";
    }
    html += "</p></div></div></td>";
    return html;
}

var createTableHTML = function(entryList, maxEntries) {
    var showcase = false;
    if (maxEntries === 4) {
        showcase = true;
    }
    var html = "";
    for (i = 0; i < entryList.length; i++) {
        if (i % maxEntries === 0) {
            html += "<tr>";
        }
        html += createEntryHTML(entryList[i], showcase);
        if (i % maxEntries === maxEntries - 1) {
            html += "</tr>";
        }
    }
    return html;
}
