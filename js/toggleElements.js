function showAsAlbum()
{
    var webOrder = document.getElementById("webOrder");
    var webOrderFootnote = document.getElementById("webOrderFootnote");
    var albumOrder = document.getElementById("albumOrder");
    var albumOrderFootnote = document.getElementById("albumOrderFootnote");
    webOrder.style.display='none'
    webOrderFootnote.style.display='none'
    albumOrder.style.display='block';
    albumOrderFootnote.style.display='block';
}

function showAsWeb()
{
    var albumOrder = document.getElementById("albumOrder");
    var albumOrderFootnote = document.getElementById("albumOrderFootnote");
    var webOrder = document.getElementById("webOrder");
    var webOrderFootnote = document.getElementById("webOrderFootnote");
    albumOrder.style.display='none'
    albumOrderFootnote.style.display='none'
    webOrder.style.display='block';
    webOrderFootnote.style.display='block';
}

function showFromTheStudio()
{
    var fromTheStudio = document.getElementById("fromTheStudio");
    var fromTheStudioLink = document.getElementById("fromTheStudioLink");
    var lineUp = document.getElementById("lineUp");
    var lineUpLink = document.getElementById("lineUpLink");
    var reviews = document.getElementById("reviews");
    var reviewsLink = document.getElementById("reviewsLink");

    fromTheStudio.style.display='block';
    fromTheStudioLink.style.textDecoration='none';
    fromTheStudioLink.style.textTransform='uppercase';
    lineUp.style.display='none';
    lineUpLink.style.textDecoration='underline';
    lineUpLink.style.textTransform='lowercase';
    reviews.style.display='none';
    reviewsLink.style.textDecoration='underline';
    reviewsLink.style.textTransform='lowercase';
}

function showLineUp()
{
    var fromTheStudio = document.getElementById("fromTheStudio");
    var fromTheStudioLink = document.getElementById("fromTheStudioLink");
    var lineUp = document.getElementById("lineUp");
    var lineUpLink = document.getElementById("lineUpLink");
    var reviews = document.getElementById("reviews");
    var reviewsLink = document.getElementById("reviewsLink");

    fromTheStudio.style.display='none';
    fromTheStudioLink.style.textDecoration='underline';
    fromTheStudioLink.style.textTransform='lowercase';
    lineUp.style.display='block';
    lineUpLink.style.textDecoration='none';
    lineUpLink.style.textTransform='uppercase';
    reviews.style.display='none';
    reviewsLink.style.textDecoration='underline';
    reviewsLink.style.textTransform='lowercase';
}

function showReviews()
{
    var fromTheStudio = document.getElementById("fromTheStudio");
    var fromTheStudioLink = document.getElementById("fromTheStudioLink");
    var lineUp = document.getElementById("lineUp");
    var lineUpLink = document.getElementById("lineUpLink");
    var reviews = document.getElementById("reviews");
    var reviewsLink = document.getElementById("reviewsLink");

    fromTheStudio.style.display='none';
    fromTheStudioLink.style.textDecoration='underline';
    fromTheStudioLink.style.textTransform='lowercase';
    lineUp.style.display='none';
    lineUpLink.style.textDecoration='underline';
    lineUpLink.style.textTransform='lowercase';
    reviews.style.display='block';
    reviewsLink.style.textDecoration='none';
    reviewsLink.style.textTransform='uppercase';
}

function showSpreadTheWord()
{
    var spreadTheWord = document.getElementById("spreadTheWord");
    var spreadTheWordLink = document.getElementById("spreadTheWordLink");
    //var varonasWeb = document.getElementById("varonasWeb");
    //var varonasWebLink = document.getElementById("varonasWebLink");
    //var getAFreeCD = document.getElementById("getAFreeCD");
    //var getAFreeCDLink = document.getElementById("getAFreeCDLink");
    var contact = document.getElementById("contact");
    var contactLink = document.getElementById("contactLink");

    spreadTheWord.style.display='block';
    spreadTheWordLink.style.textDecoration='none';
    spreadTheWordLink.style.textTransform='uppercase';
    //varonasWeb.style.display='none';
    //varonasWebLink.style.textDecoration='underline';
    //varonasWebLink.style.textTransform='lowercase';
    //getAFreeCD.style.display='none';
    //getAFreeCDLink.style.textDecoration='underline';
    //getAFreeCDLink.style.textTransform='lowercase';
    contact.style.display='none';
    contactLink.style.textDecoration='underline';
    contactLink.style.textTransform='lowercase';
}

function showVaronasWeb()
{
    var spreadTheWord = document.getElementById("spreadTheWord");
    var spreadTheWordLink = document.getElementById("spreadTheWordLink");
    //var varonasWeb = document.getElementById("varonasWeb");
    //var varonasWebLink = document.getElementById("varonasWebLink");
    //var getAFreeCD = document.getElementById("getAFreeCD");
    //var getAFreeCDLink = document.getElementById("getAFreeCDLink");
    var contact = document.getElementById("contact");
    var contactLink = document.getElementById("contactLink");

    spreadTheWord.style.display='none';
    spreadTheWordLink.style.textDecoration='underline';
    spreadTheWordLink.style.textTransform='lowercase';
    //varonasWeb.style.display='block';
    //varonasWebLink.style.textDecoration='none';
    //varonasWebLink.style.textTransform='uppercase';
    //getAFreeCD.style.display='none';
    //getAFreeCDLink.style.textDecoration='underline';
    //getAFreeCDLink.style.textTransform='lowercase';
    contact.style.display='none';
    contactLink.style.textDecoration='underline';
    contactLink.style.textTransform='lowercase';
}

function showGetAFreeCD()
{
    var spreadTheWord = document.getElementById("spreadTheWord");
    var spreadTheWordLink = document.getElementById("spreadTheWordLink");
    var varonasWeb = document.getElementById("varonasWeb");
    var varonasWebLink = document.getElementById("varonasWebLink");
    var getAFreeCD = document.getElementById("getAFreeCD");
    var getAFreeCDLink = document.getElementById("getAFreeCDLink");
    var contact = document.getElementById("contact");
    var contactLink = document.getElementById("contactLink");

    spreadTheWord.style.display='none';
    spreadTheWordLink.style.textDecoration='underline';
    spreadTheWordLink.style.textTransform='lowercase';
    varonasWeb.style.display='none';
    varonasWebLink.style.textDecoration='underline';
    varonasWebLink.style.textTransform='lowercase';
    getAFreeCD.style.display='block';
    getAFreeCDLink.style.textDecoration='none';
    getAFreeCDLink.style.textTransform='uppercase';
    contact.style.display='none';
    contactLink.style.textDecoration='underline';
    contactLink.style.textTransform='lowercase';
}

function showContact()
{
    var spreadTheWord = document.getElementById("spreadTheWord");
    var spreadTheWordLink = document.getElementById("spreadTheWordLink");
    //var varonasWeb = document.getElementById("varonasWeb");
    //var varonasWebLink = document.getElementById("varonasWebLink");
    //var getAFreeCD = document.getElementById("getAFreeCD");
    //var getAFreeCDLink = document.getElementById("getAFreeCDLink");
    var contact = document.getElementById("contact");
    var contactLink = document.getElementById("contactLink");

    spreadTheWord.style.display='none';
    spreadTheWordLink.style.textDecoration='underline';
    spreadTheWordLink.style.textTransform='lowercase';
    //varonasWeb.style.display='none';
    //varonasWebLink.style.textDecoration='underline';
    //varonasWebLink.style.textTransform='lowercase';
    //getAFreeCD.style.display='none';
    //getAFreeCDLink.style.textDecoration='underline';
    //getAFreeCDLink.style.textTransform='lowercase';
    contact.style.display='block';
    contactLink.style.textDecoration='none';
    contactLink.style.textTransform='uppercase';

}

function showUpcomingShows()
{
    var upcomingShows = document.getElementById("upcomingShows");
    var upcomingShowsLink = document.getElementById("upcomingShowsLink");
    var pastShows = document.getElementById("pastShows");
    var pastShowsLink = document.getElementById("pastShowsLink");

    upcomingShows.style.display='block';
    upcomingShowsLink.style.textDecoration='none';
    upcomingShowsLink.style.textTransform='uppercase';
    pastShows.style.display='none';
    pastShowsLink.style.textDecoration='underline';
    pastShowsLink.style.textTransform='lowercase';
}

function showPastShows()
{
    var upcomingShows = document.getElementById("upcomingShows");
    var upcomingShowsLink = document.getElementById("upcomingShowsLink");
    var pastShows = document.getElementById("pastShows");
    var pastShowsLink = document.getElementById("pastShowsLink");

    upcomingShows.style.display='none';
    upcomingShowsLink.style.textDecoration='underline';
    upcomingShowsLink.style.textTransform='lowercase';
    pastShows.style.display='block';
    pastShowsLink.style.textDecoration='none';
    pastShowsLink.style.textTransform='uppercase';
}

function showStoreDownloads()
{
    var storeDownloads = document.getElementById("storeDownloads");
    var storeDownloadsLink = document.getElementById("storeDownloadsLink");
    var storeCDs = document.getElementById("storeCDs");
    var storeCDsLink = document.getElementById("storeCDsLink");
    
    storeDownloads.style.display='block';
    storeDownloadsLink.style.textDecoration='none';
    storeDownloadsLink.style.textTransform='uppercase';
    storeCDs.style.display='none';
    storeCDsLink.style.textDecoration='underline';
    storeCDsLink.style.textTransform='lowercase';
}

function showStoreCDs()
{
    var storeDownloads = document.getElementById("storeDownloads");
    var storeDownloadsLink = document.getElementById("storeDownloadsLink");
    var storeCDs = document.getElementById("storeCDs");
    var storeCDsLink = document.getElementById("storeCDsLink");
    
    storeDownloads.style.display='none';
    storeDownloadsLink.style.textDecoration='underline';
    storeDownloadsLink.style.textTransform='lowercase';
    storeCDs.style.display='block';
    storeCDsLink.style.textDecoration='none';
    storeCDsLink.style.textTransform='uppercase';
}

function showEgoist()
{
    var egoist = document.getElementById("egoist");
    var egoistLink = document.getElementById("egoistLink");
    var debut = document.getElementById("debut");
    var debutLink = document.getElementById("debutLink");
    var egoistLE = document.getElementById("egoistLE");
    var egoistLELink = document.getElementById("egoistLELink");
    
    egoist.style.display='block';
    egoistLink.style.textDecoration='none';
    egoistLink.style.textTransform='uppercase';
    debut.style.display='none';
    debutLink.style.textDecoration='underline';
    debutLink.style.textTransform='lowercase';
    egoistLE.style.display='none';
    egoistLELink.style.textDecoration='underline';
    egoistLELink.style.textTransform='lowercase';
}

function showDebut()
{
    var egoist = document.getElementById("egoist");
    var egoistLink = document.getElementById("egoistLink");
    var debut = document.getElementById("debut");
    var debutLink = document.getElementById("debutLink");
    var egoistLE = document.getElementById("egoistLE");
    var egoistLELink = document.getElementById("egoistLELink");

    egoist.style.display='none';
    egoistLink.style.textDecoration='underline';
    egoistLink.style.textTransform='lowercase';
    debut.style.display='block';
    debutLink.style.textDecoration='none';
    debutLink.style.textTransform='uppercase';
    egoistLE.style.display='none';
    egoistLELink.style.textDecoration='underline';
    egoistLELink.style.textTransform='lowercase';
}

function showEgoistLE()
{
    var egoist = document.getElementById("egoist");
    var egoistLink = document.getElementById("egoistLink");
    var debut = document.getElementById("debut");
    var debutLink = document.getElementById("debutLink");
    var egoistLE = document.getElementById("egoistLE");
    var egoistLELink = document.getElementById("egoistLELink");
    
    egoist.style.display='none';
    egoistLink.style.textDecoration='underline';
    egoistLink.style.textTransform='lowercase';
    debut.style.display='none';
    debutLink.style.textDecoration='underline';
    debutLink.style.textTransform='lowercase';
    egoistLE.style.display='block';
    egoistLELink.style.textDecoration='none';
    egoistLELink.style.textTransform='uppercase';
}

var songEgoist = null;
var songVarona = null;
function showSong(newItem, newItemAlbum)
{

    if  (newItemAlbum == 'Varona') {
        
        if (songVarona) {
            songVarona.style.display='none';
        }

        else {
            var initSong = document.getElementById("setOnFire");
            initSong.style.display = 'none';
        }

        songVarona = document.getElementById(newItem)
        songVarona.style.display='block';

    }
    
    else if  (newItemAlbum == 'Egoist') {

        if (songEgoist) {
            songEgoist.style.display='none';
        }

        else {
            var initSong = document.getElementById("rain");
            initSong.style.display = 'none';
        }

        songEgoist = document.getElementById(newItem)
        songEgoist.style.display='block';

    }
    
}
