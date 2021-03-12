// copy string to clopboard

function myFunction(){

    var copyText = document.getElementById("enter input");
    copyText.select();
    document.execCommand("Copy");
    alert("Copied text: "+copyText.value);
}                                   