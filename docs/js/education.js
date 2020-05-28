/* ---------------------------------- TODO ---------------------------------- */
function validform() {
    const a = document.forms['my-form']['full-name'].value;
    const b = document.forms['my-form']['email-address'].value;
    const c = document.forms['my-form'].username.value;
    const d = document.forms['my-form']['permanent-address'].value;
    const e = document.forms['my-form']['nid-number'].value;

    if (a == null || a === '') {
        alert('Please Enter Your Full Name');
        return false;
    }
    if (b == null || b === '') {
        alert('Please Enter Your Email Address');
        return false;
    }
    if (c == null || c === '') {
        alert('Please Enter Your Username');
        return false;
    }
    if (d == null || d === '') {
        alert('Please Enter Your Permanent Address');
        return false;
    }
    if (e == null || e === '') {
        alert('Please Enter Your NID Number');
        return false;
    }
}
