function RepositoryNameEmpty() {
}

RepositoryNameEmpty.prototype.toString=function (){
	return "<br /><font color='red'>Le nom du repository ne peut-être vide</font>";
}

function CommitNameEmpty() {
}

CommitNameEmpty.prototype.toString=function (){
	return "<br /><font color='red'>Le message du commit ne peut-être vide</font>";
}

function UserDoesntExist(_user) {
	this.user = _user;
}

UserDoesntExist.prototype.toString=function (){
	return "<br /><font color='red'>" + this.user + " n'existe pas!</font>";
}


function UserAlreadyAccess(_user) {
	this.user = _user;
}

UserAlreadyAccess.prototype.toString=function (){
	return "<br /><font color='red'>" + this.user + " a déjà accès au fichier!</font>";
}

function UserHaventAccess(_user) {
	this.user = _user;
}

UserHaventAccess.prototype.toString=function (){
	return "<br /><font color='red'>" + this.user + " n'a pas accès au fichier!</font>";
}
