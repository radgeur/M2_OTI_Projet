QUnit.test("test_gitinit_failed", function(assert)
{
    var fixture="";
    fixture+=("<input type='text' id='git_init' placeholder='Nom du repository' value=''/>");
    fixture+=("<span id='initMessage' class='error'></span>");
    fixture+=("<button id='init'> Git init </button>");
    fixture+=("<input type='text' id='git_commit' placeholder='Nom du commit'>");
    fixture+=("<button id='commit' disabled='disabled'> Commit </button>");


    var fixtureNode=document.getElementById("qunit-fixture");
    fixtureNode.innerHTML=fixture;

    var test = new git();
    test.submitGitInit();

    var message = document.getElementById("initMessage").innerHTML;
    assert.equal(message, "<br><font color=\"red\">Le nom du repository ne peut-être vide</font>");
    assert.ok(document.getElementById("init").disabled = "none")
    assert.ok(document.getElementById("git_init").style.visibility == "");
    assert.ok(document.getElementById("git_commit").style.visibility == "hidden");
});

QUnit.test("test_gitinit_work", function(assert)
{
    var fixture="";
    fixture+=("<input type='text' id='git_init' placeholder='Nom du repository' value='coucou'/>");
    fixture+=("<span id='initMessage' class='error'></span>");
    fixture+=("<button id='init'> Git init </button>");
    fixture+=("<input type='text' id='git_commit' placeholder='Nom du commit'>");
    fixture+=("<button id='commit' disabled='disabled'> Commit </button>");


    var fixtureNode=document.getElementById("qunit-fixture");
    fixtureNode.innerHTML=fixture;

    var test = new git();
    test.submitGitInit();

    var message = document.getElementById("initMessage").innerHTML;
    assert.equal(message, "<br><font color=\"green\">Le dépôt a bien été créé.</font>");
    //console.log(document.getElementById("git_init").value);
    assert.ok(document.getElementById("init").disabled = "disabled");
    assert.ok(document.getElementById("git_init").style.visibility == "hidden");
    assert.ok(document.getElementById("git_commit").style.visibility == "visible");
});


QUnit.test("test_gitcommit_failed", function(assert)
{
    var fixture="";
    fixture+=("<input type='text' id='git_init' placeholder='Nom du repository' value='coucou'/>");
    fixture+=("<span id='initMessage' class='error'></span>");
    fixture+=("<button id='init'> Git init </button>");
    fixture+=("<input type='text' id='git_commit' placeholder='Nom du commit' value=''>");
    fixture+=("<button id='commit' disabled='disabled'> Commit </button>");
    fixture+=("<span id='commitMessage' class='error'></span>");


    var fixtureNode=document.getElementById("qunit-fixture");
    fixtureNode.innerHTML=fixture;

    var test = new git();
    test.submitGitInit();
    test.submitGitCommit();

    var message = document.getElementById("commitMessage").innerHTML;
    assert.equal(message, "<br><font color=\"red\">Le message du commit ne peut-être vide</font>");
});

QUnit.test("test_gitcommit_work", function(assert)
{
    var fixture="";
    fixture+=("<input type='text' id='git_init' placeholder='Nom du repository' value='coucou'/>");
    fixture+=("<span id='initMessage' class='error'></span>");
    fixture+=("<button id='init'> Git init </button>");
    fixture+=("<input type='text' id='git_commit' placeholder='Nom du commit' value='coucou'>");
    fixture+=("<button id='commit' disabled='disabled'> Commit </button>");
    fixture+=("<span id='commitMessage' class='error'></span>");

    var fixtureNode=document.getElementById("qunit-fixture");
    fixtureNode.innerHTML=fixture;

    var test = new git();
    test.submitGitInit();
    test.submitGitCommit();

    var message = document.getElementById("commitMessage").innerHTML;
    assert.equal(message, "<br><font color=\"green\">Le commit a bien été effectué.</font>");
});

QUnit.test("test_addUser_doesntExist", function(assert)
{
    var fixture="";
    fixture+=("<input type='text' id='git_init' placeholder='Nom du repository' value='coucou'/>");
    fixture+=("<span id='initMessage' class='error'></span>");
    fixture+=("<button id='init'> Git init </button>");
    fixture+=("<input type='text' id='git_commit' placeholder='Nom du commit' value=''>");
    fixture+=("<button id='commit' disabled='disabled'> Commit </button>");
    fixture+=("<span id='commitMessage' class='error'></span>")
    fixture+=("Liste des utilisateurs : <select id='users' size ='1'></select><br />");
    fixture+=("Fichier partagé avec : <select id='usersShare' size ='1'></select><br />");
    fixture+=("<input type='text' id='user' list='usersList' placeholder='ex: user4' value='coucou'>");
    fixture+=("<datalist id='usersList'></datalist>");
    fixture+=("<button id='addUsertoShare'> Ajout </button>");
    fixture+=("<button id='delUsertoShare'> Supprimer </button>");
    fixture+=("<span id='addUserMessage' class='error'></span>");

    var fixtureNode=document.getElementById("qunit-fixture");
    fixtureNode.innerHTML=fixture;

    var test = new git();
    test.addUser();

    var message = document.getElementById("addUserMessage").innerHTML;
    assert.equal(message, "<br><font color=\"red\">coucou n'existe pas!</font>");
});


QUnit.test("test_addUser_alreadyAccess", function(assert)
{
    var fixture="";
    fixture+=("<input type='text' id='git_init' placeholder='Nom du repository' value='coucou'/>");
    fixture+=("<span id='initMessage' class='error'></span>");
    fixture+=("<button id='init'> Git init </button>");
    fixture+=("<input type='text' id='git_commit' placeholder='Nom du commit' value=''>");
    fixture+=("<button id='commit' disabled='disabled'> Commit </button>");
    fixture+=("<span id='commitMessage' class='error'></span>")
    fixture+=("Liste des utilisateurs : <select id='users' size ='1'></select><br />");
    fixture+=("Fichier partagé avec : <select id='usersShare' size ='1'></select><br />");
    fixture+=("<input type='text' id='user' list='usersList' placeholder='ex: user4' value='user5'>");
    fixture+=("<datalist id='usersList'></datalist>");
    fixture+=("<button id='addUsertoShare'> Ajout </button>");
    fixture+=("<button id='delUsertoShare'> Supprimer </button>");
    fixture+=("<span id='addUserMessage' class='error'></span>");

    var fixtureNode=document.getElementById("qunit-fixture");
    fixtureNode.innerHTML=fixture;

    var test = new git();
    test.addUser();
    test.addUser();

    var message = document.getElementById("addUserMessage").innerHTML;
    assert.equal(message, "<br><font color=\"red\">user5 a déjà accès au fichier!</font>");
});

QUnit.test("test_addUser_added", function(assert)
{
    var fixture="";
    fixture+=("<input type='text' id='git_init' placeholder='Nom du repository' value='coucou'/>");
    fixture+=("<span id='initMessage' class='error'></span>");
    fixture+=("<button id='init'> Git init </button>");
    fixture+=("<input type='text' id='git_commit' placeholder='Nom du commit' value=''>");
    fixture+=("<button id='commit' disabled='disabled'> Commit </button>");
    fixture+=("<span id='commitMessage' class='error'></span>")
    fixture+=("Liste des utilisateurs : <select id='users' size ='1'></select><br />");
    fixture+=("Fichier partagé avec : <select id='usersShare' size ='1'></select><br />");
    fixture+=("<input type='text' id='user' list='usersList' placeholder='ex: user4' value='user5'>");
    fixture+=("<datalist id='usersList'></datalist>");
    fixture+=("<button id='addUsertoShare'> Ajout </button>");
    fixture+=("<button id='delUsertoShare'> Supprimer </button>");
    fixture+=("<span id='addUserMessage' class='error'></span>");

    var fixtureNode=document.getElementById("qunit-fixture");
    fixtureNode.innerHTML=fixture;

    var test = new git();
    test.addUser();

    var message = document.getElementById("addUserMessage").innerHTML;
    assert.equal(message, "<br><font color=\"green\">user5 a bien été ajouté.</font>");
});

QUnit.test("test_delUser_doesntexist", function(assert)
{
    var fixture="";
    fixture+=("<input type='text' id='git_init' placeholder='Nom du repository' value='coucou'/>");
    fixture+=("<span id='initMessage' class='error'></span>");
    fixture+=("<button id='init'> Git init </button>");
    fixture+=("<input type='text' id='git_commit' placeholder='Nom du commit' value=''>");
    fixture+=("<button id='commit' disabled='disabled'> Commit </button>");
    fixture+=("<span id='commitMessage' class='error'></span>")
    fixture+=("Liste des utilisateurs : <select id='users' size ='1'></select><br />");
    fixture+=("Fichier partagé avec : <select id='usersShare' size ='1'></select><br />");
    fixture+=("<input type='text' id='user' list='usersList' placeholder='ex: user4' value='coucou'>");
    fixture+=("<datalist id='usersList'></datalist>");
    fixture+=("<button id='addUsertoShare'> Ajout </button>");
    fixture+=("<button id='delUsertoShare'> Supprimer </button>");
    fixture+=("<span id='addUserMessage' class='error'></span>");

    var fixtureNode=document.getElementById("qunit-fixture");
    fixtureNode.innerHTML=fixture;

    var test = new git();
    test.delUser();

    var message = document.getElementById("addUserMessage").innerHTML;
    assert.equal(message, "<br><font color=\"red\">coucou n'existe pas!</font>");
});

QUnit.test("test_delUser_haventAccess", function(assert)
{
    var fixture="";
    fixture+=("<input type='text' id='git_init' placeholder='Nom du repository' value='coucou'/>");
    fixture+=("<span id='initMessage' class='error'></span>");
    fixture+=("<button id='init'> Git init </button>");
    fixture+=("<input type='text' id='git_commit' placeholder='Nom du commit' value=''>");
    fixture+=("<button id='commit' disabled='disabled'> Commit </button>");
    fixture+=("<span id='commitMessage' class='error'></span>")
    fixture+=("Liste des utilisateurs : <select id='users' size ='1'></select><br />");
    fixture+=("Fichier partagé avec : <select id='usersShare' size ='1'></select><br />");
    fixture+=("<input type='text' id='user' list='usersList' placeholder='ex: user4' value='user5'>");
    fixture+=("<datalist id='usersList'></datalist>");
    fixture+=("<button id='addUsertoShare'> Ajout </button>");
    fixture+=("<button id='delUsertoShare'> Supprimer </button>");
    fixture+=("<span id='addUserMessage' class='error'></span>");

    var fixtureNode=document.getElementById("qunit-fixture");
    fixtureNode.innerHTML=fixture;

    var test = new git();
    test.delUser();

    var message = document.getElementById("addUserMessage").innerHTML;
    assert.equal(message, "<br><font color=\"red\">user5 n'a pas accès au fichier!</font>");
});

QUnit.test("test_delUser_haventAccess", function(assert)
{
    var fixture="";
    fixture+=("<input type='text' id='git_init' placeholder='Nom du repository' value='coucou'/>");
    fixture+=("<span id='initMessage' class='error'></span>");
    fixture+=("<button id='init'> Git init </button>");
    fixture+=("<input type='text' id='git_commit' placeholder='Nom du commit' value=''>");
    fixture+=("<button id='commit' disabled='disabled'> Commit </button>");
    fixture+=("<span id='commitMessage' class='error'></span>")
    fixture+=("Liste des utilisateurs : <select id='users' size ='1'></select><br />");
    fixture+=("Fichier partagé avec : <select id='usersShare' size ='1'></select><br />");
    fixture+=("<input type='text' id='user' list='usersList' placeholder='ex: user4' value='user5'>");
    fixture+=("<datalist id='usersList'></datalist>");
    fixture+=("<button id='addUsertoShare'> Ajout </button>");
    fixture+=("<button id='delUsertoShare'> Supprimer </button>");
    fixture+=("<span id='addUserMessage' class='error'></span>");

    var fixtureNode=document.getElementById("qunit-fixture");
    fixtureNode.innerHTML=fixture;

    var test = new git();
    test.addUser();
    test.delUser();

    var message = document.getElementById("addUserMessage").innerHTML;
    assert.equal(message, "<br><font color=\"green\">user5 a bien été supprimé.</font>");
});
