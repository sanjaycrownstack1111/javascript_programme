var person ={
    firstName : "sanay",
    lastName : "barman",
    language : "english",
    get lang(){
        return this.language;
    }
};
document.getElementById("demo").innerHTML = person.lang;




// setter

var person ={
    firstName : "ritesh",
    lastName : " kumar",
    language: "english",
    set lang(lang) {
        this.language = lang;
    }
};

person.lang = "english";

document.getElementById("demo").innerHTML = person.language;