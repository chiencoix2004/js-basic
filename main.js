const app = document.querySelector("#app");
const show = () => {
  fetch("http://localhost:3000/products")
    .then((response) => response.json())

    //Show sản phẩm
    .then((data) => {
      app.innerHTML = data
        .map((item, index) => {
          return `
            <tr>
                <td>${index + 1}</td>
                <td>${item.name}</td>
                <td>${item.title}</td>
                <td><img src="${
                  item.image
                }" wight="150px" height="50px" alt=""></td>
                <td>
                <a href="update-product.html?id=${
                  item.id
                }"><button type="submit">Update</button></a>
                <button class="btn-delete" data-id="${item.id}">Delete</button>
                </td>
            </tr>
          `;
        })
        .join("");
    })

    //Xóa sản phẩm
    .then(() => {
      const btnDelete = document.querySelectorAll(".btn-delete");
      for (let btn of btnDelete) {
        btn.addEventListener("click", () => {
          let id = btn.dataset.id;

          // Yêu cầu xác nhận từ người dùng
          if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
            fetch("http://localhost:3000/products/" + id, {
              method: "DELETE",
            }).then((response) => {
              if (response.ok) {
                alert("Xóa thành công");
              }
            });
          }
        });
      }
    });
};

show();
