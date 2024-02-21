const prdName = document.querySelector("#name");
const prdTitle = document.querySelector("#title");
const prdImage = document.querySelector("#image");

const addForm = document.querySelector("#form-add");

// addForm.addEventListener("submit", () => {
//   let newProduct = {
//     name: prdName.value,
//     title: prdTitle.value,
//     image: prdImage.value,
//   };
//   fetch("http://localhost:3000/products/", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(newProduct),
//   });
// alert('Thêm thành công');
// });

addForm.addEventListener("submit", (e) => {
  e.preventDefault(); // Ngăn chặn form từ việc gửi đi

  // Kiểm tra các trường nhập liệu
  if (prdName.value.trim() === "") {
    alert("Vui lòng nhập tên sản phẩm");
    return;
  }

  if (prdTitle.value.trim() === "") {
    alert("Vui lòng nhập tiêu đề sản phẩm");
    return;
  }

  if (prdImage.value.trim() === "") {
    alert("Vui lòng nhập URL hình ảnh sản phẩm");
    return;
  }

  
  let newProduct = {
    name: prdName.value,
    title: prdTitle.value,
    image: prdImage.value,
  };
  fetch("http://localhost:3000/products/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  })
    .then(response => {
      if (response.ok) {
        alert("Thêm thành công");
      } else {
        alert("Thêm thất bại");
      }
    });
});
