class git{
    constructor() {
        this.initButton = document.getElementById("init");
        this.initText = document.getElementById("git_init");
        this.commitButton = document.getElementById("commit");
        this.commitText = document.getElementById("git_commit");
        this.shareButton = document.getElementById("share");
        this.droitButton = document.getElementById("droits");
        this.error_init = document.getElementById("error_init");
        this.error_commit = document.getElementById("error_commit");
        this.right_init = document.getElementById("right_init");
        this.right_commit = document.getElementById("right_commit");
        this.error_add_del = document.getElementById("error_add_del");
        this.right_add_del = document.getElementById("right_add_del");
        this.users = document.getElementById("users");
        this.user = document.getElementById("user");
        this.addUsertoShare = document.getElementById("addUsertoShare");
        this.delUsertoShare = document.getElementById("delUsertoShare");
        this.commitText.style.visibility = "hidden";
        this.initButton.disabled = "";
        this.commitButton.disabled = "disabled";
        this.usersShare = document.getElementById("usersShare");
        this.usersList = document.getElementById("usersList");
        this.usersAdd = [];
        this.allUsers = ["user1", "user2", "user3", "user4", "user5", "user6", "user7", "groupe1", "groupe2", "groupe3"];
    }

    initLists(){
        this.putIntoSelect(this.usersAdd, this.usersShare);
        this.putIntoSelect(this.allUsers, this.users);
        this.addUsersToDataList(this.usersList);
    }

    //action when click on the button git init
    submitGitInit(){
        if(this.initText.value == ""){
            this.error_init.innerHTML = "<br />Le nom du repository ne peut-être vide";
            return;
        }
        var right = document.getElementById("true_init");
        this.error_init.innerHTML = "";
        this.right_init.innerHTML = "<br />Le dépôt a bien été créé.";
        this.initText.style.visibility = "hidden";
        this.commitText.style.visibility = "visible";
        this.initButton.disabled = "disabled";
        this.commitButton.disabled = "";
    }


    //action when click on the button git commit
    submitGitCommit(){
        this.right_init.innerHTML = "";
        if(this.commitText.value == ""){
            this.error_commit.innerHTML = "<br />Le message du commit ne peut-être vide";
            this.right_commit.innerHTML = "";
            return;
        }
        this.error_commit.innerHTML = "";
        this.right_commit.innerHTML = "<br />Le commit a bien été effectué.";
        this.initText.style.visibility = "hidden";
        this.commitText.style.visibility = "visible";
    }


    //put a list into a select
    putIntoSelect(list, id) {
        id.innerHTML = "";
        for(var i = 0;i<list.length;i++)
            id.innerHTML += "<option value=" + list[i] + ">" + list[i] + "</option>";
    }

    //put all the users into the dataList
    addUsersToDataList(datalist){
        datalist.innerHTML = "";
        for(var i = 0;i<this.allUsers.length;i++)
            datalist.innerHTML += "<option value=\"" + this.allUsers[i] + "\"/>";
    }

    //add a User to the usersShare
    addUser() {
    	if(this.allUsers.indexOf(this.user.value) != -1){
    		if(this.usersAdd.indexOf(this.user.value) == -1){
    			this.usersAdd.push(this.user.value);
    			this.putIntoSelect(this.usersAdd, this.usersShare);
    			this.right_add_del.innerHTML ="<br />" + this.user.value+" a bien été ajouté.";
                this.error_add_del.innerHTML = "";
    		}else{
                this.right_add_del.innerHTML = "";
    			this.error_add_del.innerHTML = "<br />" + this.user.value+" a déjà accès à ce fichier."
    		}
    	}else{
            this.right_add_del.innerHTML = "";
    		this.error_add_del.innerHTML = "<br />" + this.user.value+" n'existe pas!";
    	}
    }

    //del a User to the usersShare
    delUser(){
        if(this.allUsers.indexOf(this.user.value) != -1){
            if(this.usersAdd.indexOf(this.user.value) == -1){
                this.right_add_del.innerHTML = "";
                this.error_add_del.innerHTML = "<br />" + this.user.value+" n'a pas accès à ce fichier.";
            } else {
                this.usersAdd.splice(this.usersAdd.indexOf(this.user.value),1);
                this.putIntoSelect(this.usersAdd, this.usersShare);
                this.right_add_del.innerHTML = "<br />" + this.user.value+" a bien été supprimé.";
                this.error_add_del.innerHTML = "";
            }
        }else {
            this.right_add_del.innerHTML = "";
            this.error_add_del.innerHTML = "<br />" + this.user.value + " n'existe pas";
        }
    }
}
