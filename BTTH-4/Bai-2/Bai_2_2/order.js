$(document).ready(function () {

    const prices = {
        ao: 150000,
        quan: 200000,
        giay: 500000
    };

    function showError(el, msg) {

        let error = el.next(".error");

        if (error.length == 0) {
            el.after("<div class='error'></div>");
            error = el.next(".error");
        }

        error.text(msg);

    }

    function clearError(el) {
        el.next(".error").remove();
    }

    function validateProduct() {

        let el = $("#product");

        if (el.val() == "") {
            showError(el, "Chọn sản phẩm");
            return false;
        }

        clearError(el);
        return true;
    }

    function validateQuantity() {

        let el = $("#quantity");
        let val = Number(el.val());

        if (!val) {
            showError(el, "Nhập số lượng");
            return false;
        }

        if (val < 1 || val > 99) {
            showError(el, "1-99");
            return false;
        }

        clearError(el);
        return true;
    }

    function validateDate() {

        let el = $("#delivery");

        let value = el.val();

        if (!value) {
            showError(el, "Chọn ngày giao");
            return false;
        }

        let today = new Date();
        let selected = new Date(value);

        let diff = (selected - today) / (1000 * 60 * 60 * 24);

        if (diff < 0) {
            showError(el, "Không chọn ngày quá khứ");
            return false;
        }

        if (diff > 30) {
            showError(el, "Không quá 30 ngày");
            return false;
        }

        clearError(el);
        return true;
    }

    function validateAddress() {

        let el = $("#address");
        let val = el.val().trim();

        if (val.length < 10) {
            showError(el, "Ít nhất 10 ký tự");
            return false;
        }

        clearError(el);
        return true;
    }

    function validateNote() {

        let el = $("#note");

        if (el.val().length > 200) {
            showError(el, "Tối đa 200 ký tự");
            return false;
        }

        clearError(el);
        return true;
    }

    function validatePayment() {

        if ($("input[name='payment']:checked").length == 0) {
            showError($("input[name='payment']").last(), "Chọn phương thức");
            return false;
        }

        clearError($("input[name='payment']").last());
        return true;
    }

    function updateTotal() {

        let product = $("#product").val();
        let qty = Number($("#quantity").val());

        if (product && qty) {

            let total = prices[product] * qty;

            $("#total").text(total.toLocaleString("vi-VN"));

        }

    }

    $("#product").change(updateTotal);
    $("#quantity").on("input", updateTotal);

    $("#note").on("input", function () {

        let len = $(this).val().length;

        $("#noteCount").text(len + "/200");

        if (len > 200) {
            $("#noteCount").addClass("red");
        } else {
            $("#noteCount").removeClass("red");
        }

    });

    $("#product").blur(validateProduct);
    $("#quantity").blur(validateQuantity);
    $("#delivery").blur(validateDate);
    $("#address").blur(validateAddress);
    $("#note").blur(validateNote);

    $("input,textarea").on("input", function () {
        clearError($(this));
    });

    $("#orderForm").submit(function (e) {

        e.preventDefault();

        let valid =
            validateProduct() &
            validateQuantity() &
            validateDate() &
            validateAddress() &
            validateNote() &
            validatePayment();

        if (valid) {

            let productText = $("#product option:selected").text();

            let qty = $("#quantity").val();

            let total = $("#total").text();

            let date = $("#delivery").val();

            $("#summary").html(
                "Sản phẩm: " + productText + "<br>" +
                "Số lượng: " + qty + "<br>" +
                "Tổng tiền: " + total + " VND<br>" +
                "Ngày giao: " + date
            );

            $("#confirmBox").show();

        }

    });

    $("#cancelBtn").click(function () {
        $("#confirmBox").hide();
    });

    $("#confirmBtn").click(function () {

        $("#confirmBox").hide();

        $("#orderForm").hide();

        $("#success").show();

    });

});