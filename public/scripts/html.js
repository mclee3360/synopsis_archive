/**
 * Generates HTML for a table entry.
 *
 * @param entry  the entry to generate
 * @param showcase  whether the entry is a showcase title
 * @return the generated HTML
 *
 * Template for a table entry:
 * <td class="cover">
 *     <div>
 *         <a href="LINK_TO_PAGE_HERE"
 *         target="_blank" class="poster_link">
 *             <img src="LINK_TO_IMAGE_HERE"
 *             alt="ANIME_TITLE_HERE_POSTER"
 *             class="poster"
 *             title="ANIME_TITLE_HERE">
 *         </a>
 *         <div class="title">
 *         <p class="title_text"
 *             >ANIME_TITLE_HERE
 *             <br>&#9839 &#9837</p>
 *         </div>
 *     </div>
 * </td>
 */
var createEntryHTML = function(entry, showcase) {
    var html = "<td class=cover><div><a href=";
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
        html += "<br><span class=marker><sup>[F]";
    }
    if (!entry.getUploaded()) {
        if (!entry.getFinalEdit()) {
            html += "<br><span class=marker><sup>";
        }
        html += "[NU]";
    }
    if (entry.getFinalEdit() || !entry.getUploaded()) {
        html += "</sup></span>";
    }
    html += "</p></div></div></td>";
    return html;
}

/**
 * Generates HTML for an entry list.
 *
 * @param entryList  the list of entries to generate HTML for
 * @return the generated HTML
 *
 * Template for a list entry:
 * <li class="edit_list">
 *     <a href="LINK_TO_PAGE"
 *     target="_blank"
 *     >Title</a> <sup>&#9837</sup>
 * </li>
 */
var createEntryListHTML = function(entryList) {
    var html = "";
    for (i = 0; i < entryList.length; i++) {
        html += "<li class=edit_list><a href=";
        html += entryList[i].getSource();
        html += " target=_blank>";
        html += entryList[i].getTitle();
        html += "</a>";
        if (!entryList[i].getUploaded()) {
            html += "<span class=marker><sup> [NU]</sup></span>";
        }
        html += "</li";
    }
    return html;
}

/**
 * Generates HTML that combines table entries into table rows.
 *
 * @param entryList  the list of entries to create into table
 * @param maxEntries  the maximum number of entries to place in a row
 * @return the generated HTML
 */
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
