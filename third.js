//converts a comma-separated values (CSV) string to a 2D array

function separateString(String){
    originalstring = "One, Two, Three, Four";
    separatedArray = originalstring.split(", ");
    console.log(separatedArray);
    document.querySelector(".output").textContent = separatedArray;
}

separatedString(String);