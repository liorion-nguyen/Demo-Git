// console.log("Hello World");
// console.log("Nguyen Quoc Chung");
// console.log("Age: 18");
// console.log("Address: Ha Noi");

// Variable
const name = "Nguyen Quoc Chung";
let age = 18;
// var address = "Ha Noi";
age = 30;

// console.log(name, age, address);
// Ý nghĩa 
// Không chứa kí tự đặc biệt
// Không được phép trùng tên với từ khóa
// Không được chứa dấu tiếng việt
// Không được bắt đầu bằng số

// Tạo biến để chứa điểm toán, điểm hoá, điểm lý. Gán giá trị cho từng biến đó. 
// Đưa ra màn hình devtools.

// Kiểu dữ liệu
// Number là số
let diemToan = 8;
let diemHoa = 9.5;
let diemLy = 10;
// String là chuỗi kí tự
let ten = "Nguyen quoc chung";
// Boolean trả về giá trị true false (hay được sử dụng trong điều kiện if)
let isMale = true;
let isFemale = false;
// Array là mảng
let colors = ["red", "blue", "green", "yellow", "purple"];
let scores = [8, 9.5, 10, 11];
let bool = [true, false, true, false];
// Nơi để chứa nhiều giá trị và bên trong nó mỗi phần tử có thể nhiều kiểu dữ liệu khác nhau.
// Object là đối tượng
let student = {
    name: "Nguyen Quoc Chung",
    age: 18,
};
// Là nơi chứa nhiều cặp key value
// Key là tên thuộc tính, value là giá trị của thuộc tính
// Key có thể là string áp dụng quy tắc đặt tên biến
// Value có thể là bất kì kiểu dữ liệu nào

let firstName = "Nguyen"; // Chỉ số sẽ từ 0 đến length - 1
console.log(firstName[0]);
console.log(firstName[5]);

let lastName = "Quoc Chung";
let fullName = firstName + " " + lastName;
console.log(fullName.length); // Đếm số kí tự trong chuỗi
let quan = "Cau Giay";
let thanhPho = "Ha Noi";
let address = quan + ", " + thanhPho;
console.log(fullName);
console.log(address);

let school = "   Truong Cong Nghe MindX   ";
// let schools = school.split(" "); // Chia chuỗi thành mảng tách dựa vào " "
// school = school.toUpperCase(); // Chuyển chuỗi thành chữ hoa
// console.log(school);
// school = school.toLowerCase(); // Chuyển chuỗi thành chữ thường
// console.log(school);

// console.log(school.includes("MindX")); // Kiểm tra chuỗi có chứa từ khóa hay không
// console.log(school.includes("mindx")); // false

// school = school.trim(); // Loại bỏ khoảng trắng ở đầu và cuối chuỗi
// console.log(school);
// - Lấy ra độ dài chuỗi đã nối
// - In hoa tất cả chuỗi đã nối
// - Lấy ra kí tự cuối cùng trong chuỗi
// - Tách chuỗi thành array dựa vào kí tự trắng
let school1 = "Truong hoc";
let school2 = "Cong nghe MindX";
let fullSchool = school1 + " " + school2;
console.log(fullSchool);
console.log(fullSchool.length);
console.log(fullSchool.toUpperCase());
let len = fullSchool.length;
console.log(fullSchool[len - 1]);
let schools = fullSchool.split(" ");
console.log(schools);

let a = 20;
let b = 4;
console.log(a + b); 
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b); // Lấy phần dư

let name2 = "Nguyen Quoc Chung";