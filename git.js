//All the variables
var initButton = document.getElementById("init");
var initText = document.getElementById("git_init");
var commitButton = document.getElementById("commit");
var commitText = document.getElementById("git_commit");
var shareButton = document.getElementById("share");
var droitButton = document.getElementById("droits");
var error_init = document.getElementById("error_init");
var error_commit = document.getElementById("error_commit");
var right_init = document.getElementById("right_init");
var right_commit = document.getElementById("right_commit");
var error_add_del = document.getElementById("error_add_del");
var right_add_del = document.getElementById("right_add_del");
var users = document.getElementById("users");
var usersShare = document.getElementById("usersShare");
var usersList = document.getElementById("usersList");
var user = document.getElementById("user");
var addUsertoShare = document.getElementById("addUsertoShare");
var delUsertoShare = document.getElementById("delUsertoShare");
var frame = document.getElementById("frameRights");
var language = document.getElementById("language");
var lightbox = document.getElementById("light");
var usersAdd = [];
var allUsers = ["user1", "user2", "user3", "user4", "user5", "user6", "user7", "groupe1", "groupe2", "groupe3"];

//hide the textbox for commit
commitText.style.visibility = "hidden";
initButton.disabled = "";
commitButton.disabled = "disabled";

//action when click on the button git init
function submitGitInit(){
    var right = document.getElementById("true_init");
    if(initText.value == ""){
        error_init.innerHTML = "<br />Le nom du repository ne peut-être vide";
        return;
    }
    error_init.innerHTML = "";
    right_init.innerHTML = "<br />Le dépôt a bien été créé.";
    initText.style.visibility = "hidden";
    commitText.style.visibility = "visible";
    initButton.disabled = "disabled";
    commitButton.disabled = "";
}
initButton.addEventListener("click", submitGitInit, false);

//action when click on the button git commit
function submitGitCommit(){
    right_init.innerHTML = "";
    if(commitText.value == ""){
        error_commit.innerHTML = "<br />Le message du commit ne peut-être vide";
        right_commit.innerHTML = "";
        return;
    }
    error_commit.innerHTML = "";
    right_commit.innerHTML = "<br />Le commit a bien été effectué.";
    initText.style.visibility = "hidden";
    commitText.style.visibility = "visible";
}
commitButton.addEventListener("click", submitGitCommit, false);

//put a list into a select
function putIntoSelect(list, id) {
    id.innerHTML = "";
    for(var i = 0;i<list.length;i++)
        id.innerHTML += "<option value=" + list[i] + ">" + list[i] + "</option>";
}
putIntoSelect(usersAdd, usersShare);
putIntoSelect(allUsers, users);

//put all the users into the dataList
function addUsersToDataList(datalist){
    datalist.innerHTML = "";
    for(var i = 0;i<allUsers.length;i++)
        datalist.innerHTML += "<option value=\"" + allUsers[i] + "\"/>";
}
addUsersToDataList(usersList);

//add a User to the usersShare
function addUser() {
	if(allUsers.indexOf(user.value) != -1){
		if(usersAdd.indexOf(user.value) == -1){
			usersAdd.push(user.value);
			putIntoSelect(usersAdd, usersShare);
			right_add_del.innerHTML ="<br />" + user.value+" a bien été ajouté.";
            error_add_del.innerHTML = "";
		}else{
            right_add_del.innerHTML = "";
			error_add_del.innerHTML = "<br />" + user.value+" a déjà accès à ce fichier."
		}
	}else{
        right_add_del.innerHTML = "";
		error_add_del.innerHTML = "<br />" + user.value+" n'existe pas!";
	}
}
addUsertoShare.addEventListener("click", addUser, false);

//del a User to the usersShare
function delUser(){
    if(allUsers.indexOf(user.value) != -1){
        if(usersAdd.indexOf(user.value) == -1){
            right_add_del.innerHTML = "";
            error_add_del.innerHTML = "<br />" + user.value+" n'a pas accès à ce fichier.";
        } else {
            usersAdd.splice(usersAdd.indexOf(user.value),1);
            putIntoSelect(usersAdd, usersShare);
            right_add_del.innerHTML = "<br />" + user.value+" a bien été supprimé.";
            error_add_del.innerHTML = "";
        }
    }else {
        right_add_del.innerHTML = "";
        error_add_del.innerHTML = "<br />" + user.value + " n'existe pas";
    }
}
delUsertoShare.addEventListener("click", delUser, false);
