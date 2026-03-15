$(document).ready(function () {

    //hiển thị lỗi
    function showError(field, message) {

        let error = field.next(".error")

        if (error.length === 0) {
            field.after("<div class='error'></div>")
            error = field.next(".error")
        }

        error.text(message)

    }

    //xóa lỗi
    function clearError(field) {
        field.next(".error").remove()
    }

    // UPDATE PROGRESS BAR
    function updateProgress(step) {

        if (step == 1) {
            $("#progressBar").css("width", "33%").text("Bước 1/3")
        }

        if (step == 2) {
            $("#progressBar").css("width", "66%").text("Bước 2/3")
        }

        if (step == 3) {
            $("#progressBar").css("width", "100%").text("Bước 3/3")
        }

    }

    //validate 1

    function validateFullname() {

        let field = $("#fullname")

        if (field.val().trim() === "") {
            showError(field, "Nhập họ tên")
            return false
        }

        clearError(field)
        return true

    }

    function validateDob() {

        let field = $("#dob")

        if (field.val() === "") {
            showError(field, "Chọn ngày sinh")
            return false
        }

        clearError(field)
        return true

    }

    function validateGender() {

        if ($("input[name='gender']:checked").length === 0) {
            showError($("input[name='gender']").last(), "Chọn giới tính")
            return false
        }

        clearError($("input[name='gender']").last())
        return true

    }

    //Validate 2

    function validateEmail() {

        let field = $("#email")
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (!regex.test(field.val())) {
            showError(field, "Email không hợp lệ")
            return false
        }

        clearError(field)
        return true

    }

    function validatePassword() {

        let field = $("#password")

        if (field.val().length < 8) {
            showError(field, "Mật khẩu ≥ 8 ký tự")
            return false
        }

        clearError(field)
        return true

    }

    function validateRepass() {

        let field = $("#repass")

        if (field.val() !== $("#password").val()) {
            showError(field, "Mật khẩu không trùng")
            return false
        }

        clearError(field)
        return true

    }

    //REALTIME VALIDATE

    $("#fullname").blur(validateFullname)
    $("#dob").blur(validateDob)
    $("#email").blur(validateEmail)
    $("#password").blur(validatePassword)
    $("#repass").blur(validateRepass)

    $("input").on("input", function () {
        clearError($(this))
    })

    //STEP BUTTON

    $("#next1").click(function () {

        let valid =
            validateFullname() &
            validateDob() &
            validateGender()

        if (valid) {

            $("#step1").hide()
            $("#step2").show()

            updateProgress(2)

        }

    })

    $("#back1").click(function () {

        $("#step2").hide()
        $("#step1").show()

        updateProgress(1)

    })

    $("#next2").click(function () {

        let valid =
            validateEmail() &
            validatePassword() &
            validateRepass()

        if (valid) {

            $("#step2").hide()
            $("#step3").show()

            updateProgress(3)

            let name = $("#fullname").val()
            let dob = $("#dob").val()
            let gender = $("input[name='gender']:checked").val()
            let email = $("#email").val()

            $("#confirmInfo").html(
                "<b>Họ tên:</b> " + name + "<br>" +
                "<b>Ngày sinh:</b> " + dob + "<br>" +
                "<b>Giới tính:</b> " + gender + "<br>" +
                "<b>Email:</b> " + email
            )

        }

    })

    $("#back2").click(function () {

        $("#step3").hide()
        $("#step2").show()

        updateProgress(2)

    })

    // submit

    $("#multiForm").submit(function (e) {

        e.preventDefault()

        $("#multiForm").hide()

        $("#success").show()

    })

})