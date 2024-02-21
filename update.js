const  searchParam = new URLSearchParams(document.location.search);


const prdName = document.querySelector("#name");
const prdTitle = document.querySelector("#title");
const prdImage = document.querySelector("#image");

const updateForm = document.querySelector("#form-update");

const id = searchParam.get("id");

fetch("http://localhost:3000/products/"+id)
.then(response=>response.json())
.then((data)=>{
    prdName.value= data.name;
    prdTitle.value= data.title;
    prdImage.value= data.image;


});

updateForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Ngăn chặn form từ việc gửi đi
  
    let updateProduct = {
      name: prdName.value,
      title: prdTitle.value,
      image: prdImage.value,
    };
  
    fetch("http://localhost:3000/products/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then(() => {
        window.location.href = "./index.html"; // Chuyển hướng sau khi thành công
      });
  });