/**
 * Will allow a cards contents to be hidden until an event occurs
 *
 * @param colNum
 * @param award
 * @param pubTitle
 */
function openCol(colNum, award, pubTitle){
    //Check the state of the card, act accordingly.
    if(document.getElementsByClassName('card-dropdown')[colNum].style.display === 'block')
    {
        document.getElementsByClassName('card-dropdown')[colNum].style.opacity = 0;
        document.getElementsByClassName('card-pubtitle')[colNum].innerHTML = pubTitle;
        document.getElementsByClassName('boxItem')[colNum].innerHTML = '&#8690;';
        //This will allow the animations to take affect
        setTimeout(function() { //Decrease the height and hide the content
            document.getElementsByClassName('card-dropdown')[colNum].style.height = "0px";
            setTimeout(function () {
                document.getElementsByClassName('card-dropdown')[colNum].style.display = 'none';
            }, 300);
        }, 780 );
    }
    else
    {
        document.getElementsByClassName('card-dropdown')[colNum].style.display = 'block';
        document.getElementsByClassName('card-pubtitle')[colNum].innerHTML = award;
        document.getElementsByClassName('boxItem')[colNum].innerHTML = '&#8689;';
        //Increase the height and show the content
        setTimeout(function() {
            document.getElementsByClassName('card-dropdown')[colNum].style.height = '220px';
            document.getElementsByClassName('card-dropdown')[colNum].style.opacity = 1;
            }, 100 );
    }
}

/**
 * Will load three images, from worst to best quality
 *
 * Possible addition: add parameters so user can reuse function
 */
function imageLoad(){
    var imgTiny = new Image();
    var imgFull = new Image();
    var target = document.getElementsByClassName("container-image");

    //Event that will trigger when images are loaded individually
    imgTiny.onload = function(){
        //When image is finished loading, replace image background
        for(var i=0; i < target.length; i++)
            target[i].style.backgroundImage = "url('images/header-backdrop-tiny.jpg')";

    };
    //The final image
    imgFull.onload = function () {
        for(var i=0; i < target.length; i++)
            target[i].style.backgroundImage = "url('images/header-backdrop-full.jpg')";
    };

    //src to images
    imgTiny.src = "images/header-backdrop-tiny.jpg";
    imgFull.src = "images/header-backdrop-full.jpg";
}

/**
 * Section for the slider
 * @type {number}
 */
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("cal-slides");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}

/**
 * Box functions
 * Will both show and hide the contact box,
 * once hidden by an user activated event, it will not open again.
 */
function showBox(){
    //Wait 10 seconds before showing message && hasn't been closed before
    if(document.cookie === "false")
    {
        setTimeout( function () {
            document.getElementsByClassName('FloatingBox')[0].style.display='block';
        }, 10000); //10 seconds
    }
}
//Will hide the message box when the 'X' is clicked
function hideBox(){
    document.getElementsByClassName('FloatingBox')[0].style.display='none';
    document.cookie = true; //remember the user closed box
}
//mostly for debugging purposes
function removeCookies(){
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    //reset
    document.cookie = false;
}