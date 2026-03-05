**\## BTTH03: JS nền tảng, DOM & Sự kiện**

**\*\*Đối tượng:\*\*** Sinh viên chưa học lý thuyết JavaScript

\-\--

**\## 1. MỤC TIÊU HỌC TẬP**

Sau buổi lab, sinh viên có thể:

\- Mô tả được JavaScript là gì, chạy ở đâu, khác HTML/CSS ở điểm nào.

\- Viết được các đoạn JS đơn giản với:

  - Biến, kiểu dữ liệu cơ bản (number, string, boolean),

  - Cú pháp lệnh, toán tử đơn giản,

  - Cấu trúc điều khiển if/else, vòng lặp đơn giản,

  - Hàm (function) có tham số và giá trị trả về.

\- Thao tác được với DOM:

  - Lấy phần tử bằng \`document.getElementById\`,

  - Thay đổi nội dung văn bản, kiểu dáng (style),

  - Lắng nghe và xử lý một số sự kiện cơ bản: \`click\`, \`input\`.

\- Nhận biết jQuery là một thư viện hỗ trợ thao tác DOM/sự kiện (ở mức
nhận diện, chưa cần sử dụng thành thạo).

\-\--

**\## 2. CẤU TRÚC THỜI GIAN BUỔI LAB**

\- 03 tiết thực hành.

\-\--

**\## 3. HOẠT ĐỘNG 1 (45'): GIỚI THIỆU JS & CÚ PHÁP CƠ BẢN**

**\### 3.1. Chuẩn bị file HTML & JS**

Tạo file \`lab-js-basic.html\`:

\`\`\`html

\<!DOCTYPE html\>

\<html lang=\"vi\"\>

\<head\>

  \<meta charset=\"UTF-8\"\>

  \<title\>Lab JS Cơ bản\</title\>

\</head\>

\<body\>

  \<h1\>Khám phá JavaScript\</h1\>

  \<p id=\"welcome\"\>Chưa có JavaScript\...\</p\>

  \<button id=\"runBtn\"\>Nhấn để chạy JS\</button\>

  \<script src=\"main.js\"\>\</script\>

\</body\>

\</html\>

\`\`\`

Tạo file \`main.js\`:

\`\`\`js

console.log(\"Hello from JavaScript!\");

\`\`\`

\-\--

**\### 3.2. Nhiệm vụ cho sinh viên**

**\#### Bước 1: Mở file \\& Quan sát bằng Console**

1\. Mở \`lab-js-basic.html\` trong trình duyệt (Chrome/Edge/...).

2\. Mở DevTools → tab **\*\*Console\*\***.

3\. Quan sát thông báo xuất hiện.

\> Câu hỏi:

\> - Em thấy dòng thông báo nào trong console?

\- **Trả lời:** Em sẽ thấy dòng Hello from JavaScript!

\> - Điều này cho em biết JavaScript đang làm gì khi trang web được tải?

\- **Trả lời:** JavaScript được thực thi ngay khi trang web load xong
đến thẻ \<script\>, và nó gửi thông báo ra Console

\-\--

**\#### Bước 2:  "JavaScript là gì?" (Tra cứu nhanh)**

Sử dụng 1--2 nguồn tài liệu (vd. W3Schools, freeCodeCamp, ...), tóm tắt:

\> a) JavaScript chạy ở đâu? (Trình duyệt / Server / Cả hai?)

\-**Trả lời:** JavaScript chạy ở cả trình duyệt và server. JavaScript
được dùng phổ biến nhất trong trình duyệt. Còn ở phía server JavaScript
cũng có thể chạy nhờ môi trường như Node.js

\> b) HTML, CSS, JavaScript mỗi phần chịu trách nhiệm chính về điều gì?

\>**Trả lời:**

\> - HTML: tạo cấu trúc nội dung của trang web

\> - CSS: chịu trách nhiệm về giao diện và cách hiển thị

\> - JavaScript: xử lý tương tác và hành vi của trang web

\-\--

**\#### Bước 3: Thử nghiệm biến \\& kiểu dữ liệu trong Console**

Trong tab Console, gõ từng dòng sau và ghi lại kết quả:

\`\`\`js

let age = 20;

const name = \"An\";

let isStudent = true;

typeof age;

typeof name;

typeof isStudent;

1 + 2 \* 3;

\"Hello \" + \"world\";

\`\`\`

\> Câu hỏi:

\> - Kết quả \`typeof age\` là gì? **Trả lời:** number

\> - Kết quả \`typeof name\` là gì? **Trả lời:** string

\> - Kết quả \`typeof isStudent\` là gì? **Trả lời:** boolean

\> - Em hãy tự mô tả ngắn gọn:

\>   - \`number\` là: kiểu dữ liệu dùng để lưu số

\>   - \`string\` là: kiểu dữ liệu dùng để lưu chuỗi ký tự / văn bản

\>   - \`boolean\` là: kiểu dữ liệu chỉ có 2 giá trị true hoặc false

\-\--

**\#### Bước 4: Viết đoạn script tính tuổi**

Mở file \`main.js\`, viết thêm:

\`\`\`js

let name = \"An\";

let yearOfBirth = 2005;

let currentYear = 2026;

let age = currentYear - yearOfBirth;

console.log(\"Xin chào, mình là \" + name + \", năm nay mình \" + age +
\" tuổi.\");

\`\`\`

Sau đó:

1\. Đổi giá trị \`name\`, \`yearOfBirth\` thành thông tin của chính em.

2\. Reload trang \\& quan sát console.

\> Câu hỏi:

\> - Dòng log hiển thị gì sau khi em sửa thông tin?

**Trả lời:** Em thấy log hiển thị dòng: Xin chào, mình là Hieu, năm nay
mình 20 tuổi.

\> - Nếu em quên dấu \`;\` hoặc quên dấu \`+\`, điều gì xảy ra? Trình
duyệt báo lỗi thế nào?

Trả lời: + Nếu em quên dấu \`;\` thì JavaScript vẫn chạy bình thường vì
nó có cơ chế tự động chèn dấu

\+ Nếu em quên dấu \`+\` thì trình duyệt sẽ báo lỗi trong Console

**\#### Bước 5: Phản tư nhanh (Reflection)**

\> - Điều thú vị nhất em vừa khám phá được về console là gì?

**- Trả lời:** Điều thú vị nhất em vừa khám phá được về console là em có
thể ghi trực tiếp lệnh vào tab Console và thấy kết quả ngay lập tức mà
không cần sửa file HTML.

\> - Em gặp lỗi cú pháp nào? Em đã xử lý bằng cách nào (tự sửa, hỏi bạn,
đọc lỗi, tìm Google, ...)?

**-Trả lời:** Lỗi em gặp là ghi nhầm tên file JavaScript. Em kiểm tra
lại tên file cho đúng rồi reload lại trang để sửa lỗi

\-\--

**\## 4. HOẠT ĐỘNG 2 (40'): CẤU TRÚC ĐIỀU KHIỂN \\& HÀM**

**\### 4.1. Chuẩn bị file logic (hoặc viết tiếp trong main.js)**

Ví dụ đoạn mã:

\`\`\`js

// TODO: Đổi giá trị score và quan sát kết quả

let score = 7.5;

// TODO: Dự đoán điều kiện if/else đang làm gì, rồi chạy thử

if (score \>= 8) {

  console.log(\"Giỏi\");

} else if (score \>= 6.5) {

  console.log(\"Khá\");

} else if (score \>= 5) {

  console.log(\"Trung bình\");

} else {

  console.log(\"Yếu\");

}

// TODO: Viết hàm tính điểm trung bình 3 môn

function tinhDiemTrungBinh(m1, m2, m3) {

  let avg = (m1 + m2 + m3) / 3;

  return avg;

}

// Gợi ý dùng thử hàm trong console:

// tinhDiemTrungBinh(8, 7, 9);

\`\`\`

\-\--

**\### 4.2. Nhiệm vụ cho sinh viên**

**\#### Bước 1: Đoán trước -- chạy sau**

\> a) Nếu \`score = 9\`, em dự đoán console sẽ in: Giỏi

\> b) Nếu \`score = 6\`, em dự đoán console sẽ in: Trung bình

Sau đó:

1\. Thay \`score = 9\`, reload trang hoặc chạy file và kiểm tra console.

2\. Thay \`score = 6\`, kiểm tra lại.

\> So sánh dự đoán và kết quả thực tế:

\> - Trường hợp \`score = 9\`: Dự đoán vs Thực tế: [dự đoán trùng
khớp]{.mark}

\> - Trường hợp \`score = 6\`: Dự đoán vs Thực tế: [dự đoán trùng
khớp]{.mark}

\-\--

**\#### Bước 2: Mô tả lại if/else bằng lời**

\> - Khi nào chương trình in \`\"Giỏi\"\`? **Trả lời:** khi score \>= 8

\> - Khi nào chương trình in \`\"Yếu\"\`? **Trả lời:** khi score \< 5

\> - Em hãy mô tả cấu trúc \`if/else\` bằng lời của em (có thể ví von
"ngã rẽ" trong đời sống):

**-Trả lời:**

\+ Nếu crush đồng ý hẹn hò (if) : in ra 'Thành công'

\+ Nếu crush không đồng ý hẹn hò (else): in ra 'Thất bại'

**\#### Bước 3: Làm việc với hàm**

1\. Mở Console, gọi hàm:

\`\`\`js

tinhDiemTrungBinh(8, 7, 9);

\`\`\`

\> Em ghi lại giá trị hàm trả về: 8.

2\. Viết thêm hàm \`xepLoai(avg)\` trong file JS:

\`\`\`js

function xepLoai(avg) {

  // TODO: Dùng if/else để:

  // avg \>= 8  -\> \"Giỏi\"

  // avg \>= 6.5 -\> \"Khá\"

  // avg \>= 5  -\> \"Trung bình\"

  // còn lại   -\> \"Yếu\"

}

\`\`\`

3\. Gọi thử trong console:

\`\`\`js

let avg = tinhDiemTrungBinh(8, 7, 9);

let loai = xepLoai(avg);

console.log(\"Điểm TB:\", avg, \" - Xếp loại:\", loai);

\`\`\`

\> Câu hỏi:

\> - Một hàm gồm những phần chính nào?

\>   **- Tên hàm:** là tên để gọi hàm khi cần , vd: tinhDiemTrungBinh,
xepLoai

\>   **- Tham số (parameters):** là các giá trị đầu vào mà hàm cần để xử
lý, vd:

+m1, m2, m3 của : tinhDiemTrungBinh,

+avg của xepLoai

\>   **- Thân hàm (body):** là các lệnh thực thi bên trong hàm

\>   **- Giá trị trả về (return):** là kết quả mà hàm trả về sau khi
thực thi

\> **- Ưu điểm** của việc dùng hàm thay vì lặp lại cùng một đoạn code
nhiều lần là gì?

+Tránh lặp lại cùng một đoạn code nhiều lần, tiết kiệm thời gian

+Dễ đọc, dễ quản lý và dễ sửa lỗi hơn

+Có thể tái sử dụng

\-\--

**\#### Bước 4: Mở rộng nhỏ (tuỳ chọn)**

Viết hàm \`kiemTraTuoi(age)\`:

\`\`\`js

function kiemTraTuoi(age) {

  // TODO:

  // Nếu age \>= 18 -\> console.log(\"Đủ 18 tuổi\");

  // Ngược lại -\> console.log(\"Chưa đủ 18 tuổi\");

}

\`\`\`

Gọi thử: \`kiemTraTuoi(16);\`, \`kiemTraTuoi(20);\`.

\+ kiemTraTuoi(16) -\> in ra là: Chưa đủ 18 tuổi

\+ kiemTraTuoi(20)-\> in ra là: Đủ 18 tuổi

\-\--

**\#### Bước 5: Phản tư**

\> - Phần nào trong if/else hoặc hàm khiến em khó hiểu nhất?

**- Trả lời:** Phần khiến em khó hiểu nhất là dễ bị nhầm giữa else if và
else, không biết khi nào chương trình sẽ chạy nhánh nào.

\> - Em đã làm gì để vượt qua (thử nhiều lần, hỏi bạn, xem lại ví dụ,
tra Google, ...)?

**- Trả lời:** em xem đi xem lại ví dụ để có thể phân biệt rõ ràng giữa
chúng.

\-\--

**\## 5. HOẠT ĐỘNG 3 (40'): THAO TÁC DOM \\& SỰ KIỆN**

**\### 5.1. Chuẩn bị HTML**

Thêm vào trang (hoặc tạo file mới):

\`\`\`html

\<section\>

  \<h2\>DOM & Sự kiện\</h2\>

  \<p id=\"status\"\>Chưa có tương tác\...\</p\>

  \<button id=\"btnHello\"\>Chào\</button\>

  \<button id=\"btnRed\"\>Đổi màu nền thành đỏ\</button\>

  \<div style=\"margin-top: 20px;\"\>

    \<label\>Nhập tên: \</label\>

    \<input id=\"nameInput\" type=\"text\" /\>

    \<p id=\"greeting\"\>\</p\>

  \</div\>

\</section\>

\<script src=\"dom.js\"\>\</script\>

\`\`\`

Tạo file \`dom.js\`:

\`\`\`js

const statusEl = document.getElementById(\"status\");

const btnHello = document.getElementById(\"btnHello\");

btnHello.addEventListener(\"click\", function () {

  statusEl.textContent = \"Xin chào! Đây là nội dung được thay đổi bằng
JavaScript.\";

});

\`\`\`

\-\--

**\### 5.2. Nhiệm vụ cho sinh viên**

**\#### Bước 1: Đọc \\& giải thích**

\> Câu hỏi:

\> - \`document.getElementById(\"status\")\` đang làm gì? **- Trả lời:**
lấy phần tử HTML có id=\"status\"

\> - Sự kiện \`\"click\"\` xảy ra khi nào? **-- Trả lời:** xảy ra khi
người dùng nhấn chuột vào nút btnHello

\> - Trong đoạn code trên, khi nhấn nút \`btnHello\`, điều gì thay đổi
trên trang?

**-Trả lời**: nội dung bên trong phần tử status sẽ thay đổi thành: \"Xin
chào! Đây là nội dung được thay đổi bằng JavaScript.\"

**\#### Bước 2: Thử nghiệm nút đổi màu nền**

Hoàn thiện code:

\`\`\`js

const btnRed = document.getElementById(\"btnRed\");

btnRed.addEventListener(\"click\", function () {

  // TODO: Đổi màu nền trang thành đỏ

  document.body.style.backgroundColor = \"red\";

});

\`\`\`

\> Câu hỏi:

\> - Em có thể đổi sang màu khác (vd. \`lightblue\`) không? Hãy thử.

**- Trả lời:** Em có thể đổi sang màu khác.

\> - Em hãy ghi lại 1 ví dụ khác mà JavaScript có thể làm với
\`document.body.style\`.

**- Trả lời:**   document.body.style.color = \"yellow\";

\-\--

**\#### Bước 3: Xử lý sự kiện input -- gõ tên, hiện lời chào**

Hoàn thiện code:

\`\`\`js

const nameInput = document.getElementById(\"nameInput\");

const greeting = document.getElementById(\"greeting\");

nameInput.addEventListener(\"input\", function () {

  const value = nameInput.value;

  greeting.textContent = \"Xin chào, \" + value + \"!\";

});

\`\`\`

\> Câu hỏi:

\> - Sự kiện \`\"input\"\` khác gì so với \`\"click\"\`?

**- Trả lời:** xảy ra bất cứ khi nào giá trị trong ô input thay đổi (gõ,
xóa, dán)

\> - Khi em xoá hết nội dung ô input, dòng \`greeting\` hiển thị gì?

**- Trả lời:** dòng greeting sẽ hiển thị: \"Xin chào, !\"

**\#### Bước 4: Liên hệ khái niệm DOM**

\> DOM (Document Object Model) là mô hình biểu diễn trang HTML dưới dạng
một **\*\*cây các đối tượng\*\*** mà JavaScript có thể truy cập và thay
đổi.

\>

\> Em hãy:

\> - Tự mô tả DOM bằng lời của em:

\>   **- Trả lời:** DOM là cách JavaScript truy cập và thay đổi các phần
tử trên trang web, có thể lấy theo id, class hoặc selector.

\> - Nêu 1 ví dụ "thao tác DOM" trong bài (ghi lại 1 dòng lệnh cụ thể).

**- Trả lời:** greeting.textContent = \"Xin chào, \" + value + \"!\";

\-\--

**\#### Bước 5: Ảnh kết quả**

Hãy chụp các ảnh màn hình:

1\. Khi vừa tải trang (chưa tương tác).

![](media/image1.png){width="6.5in" height="3.654861111111111in"}

2\. Sau khi nhấn "Chào".

![](media/image2.png){width="6.5in" height="3.654861111111111in"}

3\. Sau khi đổi nền sang màu đỏ.

![](media/image3.png){width="6.5in" height="3.651388888888889in"}

4\. Khi gõ tên và nhìn thấy lời chào xuất hiện.

![](media/image4.png){width="6.5in" height="3.6534722222222222in"}

*\*(Ảnh có thể được yêu cầu nộp cùng bài hoặc dán vào báo cáo)\**

\-\--

**\## 6. KẾT THÚC (15'): GIỚI THIỆU JQUERY \\& PHẢN TƯ**

**\### 6.1. Nhìn nhanh jQuery (so sánh với JS thuần)**

Ví dụ:

\`\`\`js

// JS thuần

document.getElementById(\"btnHello\").addEventListener(\"click\",
function () {

  alert(\"Hello from JS!\");

});

// jQuery (giả sử đã import jQuery)

\$(\"#btnHello\").on(\"click\", function () {

  alert(\"Hello from jQuery!\");

});

\`\`\`

\> Câu hỏi:

\> - Điểm giống nhau về chức năng giữa 2 đoạn code trên là gì?

**- Trả lời:** Cả hai đoạn code đều lắng nghe sự kiện click trên nút
btnHello và hiển thị thông báo khi nhấn nút.

\> - Điểm khác nhau về cú pháp là gì (\`document.getElementById\` vs
\`\$(\"#id\")\`, \`addEventListener\` vs \`.on\`)?

**- Trả lời:**

+JS: Lấy phần tử theo id bằng document.getElementById(\"btnHello\"), Gắn
sự kiện bằng addEventListener

+jQuery: Lấy phần tử theo id bằng \$(\"#btnHello\"), Gắn sự kiện bằng
.on

\> - Em hãy tra cứu nhanh "What is jQuery used for?" và ghi 2 ý chính:

\>   1. dùng để làm cho việc thao tác với trang HTML (DOM), xử lý sự
kiện và chọn phần tử dễ dàng hơn so với JavaScript thuần

\>   2. jQuery cho phép thêm hiệu ứng/animation và xử lý AJAX (tải dữ
liệu không cần tải lại trang)

\-\--

**\### 6.2. Tự đánh giá \\& định hướng**

\> 1. Sau buổi lab, em tò mò nhất về phần nào của JavaScript/DOM?

**- Trả lời:** Em tò mò nhất về phần các sự kiện như click và input, vì
thấy có thể tương tác trực tiếp với người dùng và thay đổi nội dung
trang ngay lập tức.

\> 2. Em muốn tự làm thêm tính năng gì trên trang web (vd: bộ đếm, đổi
theme, pop-up, mini game, ...)?

**- Trả lời :** em muốn làm thêm tính năng đổi màu chữ trên web

VD: câu lệnh code document.body.style.color = \"red\";

![](media/image5.png){width="6.5in" height="3.651388888888889in"}

\> 3. Em đánh giá mức độ hiểu của mình về:

\>    - Biến \\& kiểu dữ liệu: \[ \] Chưa hiểu  \[ \] Tạm ổn  **[\[ \]
Khá rõ]{.mark}**

\>    - If/else \\& hàm:       \[ \] Chưa hiểu  \[ \] Tạm ổn  **[\[ \]
Khá rõ]{.mark}**

\>    - DOM \\& sự kiện:       \[ \] Chưa hiểu  **[\[ \] Tạm
ổn]{.mark}**  \[ \] Khá rõ

\-\--

**\## 7. GHI CHÚ CHO GIẢNG VIÊN (NỘI BỘ)**

\- Có thể cho SV làm theo cặp/nhóm 2--3 để hỗ trợ nhau thử nghiệm, đọc
lỗi, tra cứu.

\- Tùy thời lượng thực tế, có thể:

    - Giảm bớt phần mở rộng (hàm \`kiemTraTuoi\`, tuỳ biến thêm hiệu
ứng).

    - Hoặc tăng thêm bài tập DOM (ẩn/hiện một khối, đếm số lần click,
v.v.).

\- Phiếu học tập tiếp theo có thể chi tiết hóa từng hoạt động thành form
trả lời, chỗ dán ảnh, và câu hỏi mini test trắc nghiệm.

\`\`\`

\-\--\`\`\`
