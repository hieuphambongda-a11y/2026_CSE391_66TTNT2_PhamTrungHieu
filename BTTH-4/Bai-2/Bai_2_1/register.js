$(document).ready(function () {

    const form = $("#demoForm");

    //HIỂN THỊ LỖI 
    function showError(field, message) {

        let error = field.next(".error");

        if (error.length === 0) {
            field.after("<div class='error'></div>");
            error = field.next(".error");
        }

        error.text(message);
    }

    //XOÁ LỖI
    function clearError(field) {
        field.next(".error").remove();
    }

    //FULLNAME
    function validateFullname() {

        const field = $("input[name='fullname']");
        const value = field.val().trim();
        const regex = /^[a-zA-ZÀ-ỹ\s]+$/;

        if (value === "") {
            showError(field, "Bắt buộc nhập họ tên");
            return false;
        }

        if (value.length < 3) {
            showError(field, "Ít nhất 3 ký tự");
            return false;
        }

        if (!regex.test(value)) {
            showError(field, "Họ tên chỉ được chứa chữ cái");
            return false;
        }

        clearError(field);
        return true;
    }

    //VALIDATE EMAIL
    function validateEmail() {

        const field = $("input[name='user']");
        const value = field.val().trim();
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (value === "") {
            showError(field, "Bắt buộc nhập email");
            return false;
        }

        if (!regex.test(value)) {
            showError(field, "Email không đúng định dạng");
            return false;
        }

        clearError(field);
        return true;
    }

    //PHONE
    function validatePhone() {

        const field = $("input[name='phone']");
        const value = field.val().trim();
        const regex = /^0[0-9]{9}$/;

        if (value === "") {
            showError(field, "Bắt buộc nhập số điện thoại");
            return false;
        }

        if (!regex.test(value)) {
            showError(field, "Số điện thoại phải 10 số và bắt đầu bằng 0");
            return false;
        }

        clearError(field);
        return true;
    }

    //PASSWORD
    function validatePassword() {

        const field = $("input[name='password']");
        const value = field.val();
        const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,16}$/;

        if (value === "") {
            showError(field, "Bắt buộc nhập mật khẩu");
            return false;
        }

        if (!regex.test(value)) {
            showError(field, "Mật khẩu 8-16 ký tự, có chữ hoa, chữ thường và số");
            return false;
        }

        clearError(field);
        return true;
    }

    //RE-PASSWORD
    function validateRePassword() {

        const field = $("input[name='re-password']");
        const value = field.val();
        const password = $("input[name='password']").val();

        if (value === "") {
            showError(field, "Nhập lại mật khẩu");
            return false;
        }

        if (value !== password) {
            showError(field, "Hai mật khẩu phải giống nhau");
            return false;
        }

        clearError(field);
        return true;
    }

    //GENDER
    function validateGender() {

        if ($("input[name='gender']:checked").length === 0) {
            showError($("input[name='gender']").last(), "Chọn giới tính");
            return false;
        }

        clearError($("input[name='gender']").last());
        return true;
    }

    //TERMS
    function validateTerms() {

        const field = $("input[name='terms']");

        if (!field.is(":checked")) {
            showError(field, "Phải đồng ý điều khoản");
            return false;
        }

        clearError(field);
        return true;
    }

    //REALTIME VALIDATE (blur)
    $("input[name='fullname']").blur(validateFullname);
    $("input[name='user']").blur(validateEmail);
    $("input[name='phone']").blur(validatePhone);
    $("input[name='password']").blur(validatePassword);
    $("input[name='re-password']").blur(validateRePassword);

    //XOÁ LỖI KHI NHẬP
    $("input").on("input", function () {
        clearError($(this));
    });

    //SUBMIT
    form.on("submit", function (event) {

        event.preventDefault();

        const valid =
            validateFullname() &
            validateEmail() &
            validatePhone() &
            validatePassword() &
            validateRePassword() &
            validateGender() &
            validateTerms();

        if (valid) {

            const name = $("input[name='fullname']").val();

            form.hide();

            $("#success")
                .html("Đăng ký thành công! 🎉 Xin chào <b>" + name + "</b>")
                .show();
        }

    });

});