function validateModalForm() {
    let username_valid = document.forms["login-user"]["username"].value;
    let password_valid = document.forms["login-user"]["password"].value;
    if (username_valid == "") {
        alert("Username must be filled out");
        return false;
    }
    else if (password_valid == "") {
        alert("Password must be filled out");
        return false;
    }
    else {
        return true;
    }
}
function validateForm() {
    let username_valid = document.forms["register-user"]["username"].value;
    let email_valid = document.forms["register-user"]["email"].value;
    let password_valid = document.forms["register-user"]["password"].value;
    let password2_valid = document.forms["register-user"]["password2"].value;
    if (username_valid == "") {
        alert("Username must be filled out");
        return false;
    }
    else if (email_valid == "") {
        alert("Email must be filled out");
        return false;
    }
    else if (password_valid == "") {
        alert("Password must be filled out");
        return false;
    }
    else if (password2_valid == "") {
        alert("Please confirm password");
        return false;
    }
    else {
        return true;
    }
}

$('#testBtn').click(function () {
    var cnt=4;
    var btn = $(this);
    btn.button('loading');
    setTimeout(function () {
        cnt++;
        btn.button('reset');
        btn.text('  ' + cnt);
    }, 1000);
 });

$('#testBtnDown').click(function () {
    var cnt=4;
    var btn = $(this);
    btn.button('loading');
    setTimeout(function () {
        if (cnt > 0) {
            cnt--;
        }
        btn.button('reset');
        btn.text('  ' + cnt);
    }, 1000);
 });