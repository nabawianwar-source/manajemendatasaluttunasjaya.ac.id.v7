
document.getElementById("dataForm").addEventListener("submit", function(e){
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = {};
  formData.forEach((value, key) => data[key] = value);

  fetch("https://script.google.com/macros/s/AKfycbwjd-D-LLGwA3poftg8Xyz2Iz_a4n3a1Lk_8857kV5Ey94nSAE0Dq_3uyY8e_Q3DKGN/exec", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
  .then(res => res.text())
  .then(msg => {
    document.getElementById("response").innerText = msg;
    e.target.reset();
  })
  .catch(err => {
    document.getElementById("response").innerText = "Gagal mengirim data.";
    console.error(err);
  });
});
