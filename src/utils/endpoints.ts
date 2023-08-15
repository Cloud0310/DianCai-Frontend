import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:8000/",
  timeout: 1000,
});

function uploadImg(imageData: { image: File; mode: Number }) {
  instance
    .post("/upload", imageData)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.error(err));
  return;
}
function uploadImgURL(imageData: { image: string; mode: Number }) {
  instance
    .post("/upload", imageData)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.error(err));
  return;
}

export default { uploadImg, uploadImgURL };
