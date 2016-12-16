class git{
    constructor() {
        this.initButton = document.getElementById("init");
        this.initText = document.getElementById("git_init");
        this.commitButton = document.getElementById("commit");
        this.commitText = document.getElementById("git_commit");
        this.initMessage = document.getElementById("initMessage");
        this.commitMessage = document.getElementById("commitMessage");
        this.addUserMessage = document.getElementById("addUserMessage");
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
        try {
            this.initMessage.innerHTML = this.canInit();
        }
        catch (e) {
            this.initMessage.innerHTML = e.toString();
        }
    }

    //to check if he can init the repository
    canInit(){
        if(this.initText.value == "")
            throw new RepositoryNameEmpty();
        else {
            this.initText.style.visibility = "hidden";
            this.commitText.style.visibility = "visible";
            this.initButton.disabled = "disabled";
            this.commitButton.disabled = "";
            return "<br /><font color='green'>Le dépôt a bien été créé.</font>";
        }
    }


    //action when click on the button git commit
    submitGitCommit(){
        try {
            this.commitMessage.innerHTML = this.canCommit();
        }
        catch (e) {
            this.commitMessage.innerHTML = e.toString();
        }
    }

    //to check if he can do a commit
    canCommit(){
        if(this.commitText.value == "")
            throw new CommitNameEmpty();
        else {
            this.initText.style.visibility = "hidden";
            this.commitText.style.visibility = "visible";
            return "<br />Le commit a bien été effectué.";
        }
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
        try{
            this.addUserMessage.innerHTML = this.canAddUser();
        }
        catch (e) {
            this.addUserMessage.innerHTML = e.toString();
        }
    }

    //to check if we can add the user of the repository
    canAddUser() {
        if(this.allUsers.indexOf(this.user.value) != -1){
    		if(this.usersAdd.indexOf(this.user.value) == -1){
    			this.usersAdd.push(this.user.value);
    			this.putIntoSelect(this.usersAdd, this.usersShare);
    			return "<br /><font color='green'>" + this.user.value +" a bien été ajouté.</font>";
    		}
            else
    			throw new UserAlreadyAccess(this.user.value);
    	}else
    		throw new UserDoesntExist(this.user.value);
    }

    //del a User to the usersShare
    delUser(){
        try{
            this.addUserMessage.innerHTML = this.canDelUser();
        }
        catch (e) {
            this.addUserMessage.innerHTML = e.toString();
        }
    }

    //to check if we can del the user of the repository
    canDelUser() {
        if(this.allUsers.indexOf(this.user.value) != -1){
            if(this.usersAdd.indexOf(this.user.value) == -1)
                throw new UserHaventAccess(this.user.value);
            else {
                this.usersAdd.splice(this.usersAdd.indexOf(this.user.value),1);
                this.putIntoSelect(this.usersAdd, this.usersShare);
                return "<br /><font color='green'>" + this.user.value+" a bien été supprimé.</font>";
            }
        }else
            throw new UserDoesntExist(this.user.value);
    }
}
