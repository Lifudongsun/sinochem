function goJumpPage(url, selfOrBlank) {

    if (selfOrBlank == true) {
        window.open(url, '_blank');
    } else {
        window.open(url, '_self');
    }

}



//onclick="javascript:location.href='talentstation.html' "



window.open = function(url, self) {
    $("body").append("<a id='open' target='" + self + "' href='" + url + "' > </a>");
    document.getElementById("open").click();
    $('#open').remove();

}


function go() {
    location.href = '../Sinochem/search/search.html';
    $('body').scrollTop(0);
}