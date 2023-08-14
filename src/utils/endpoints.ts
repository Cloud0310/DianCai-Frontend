import axios from "axios";
const instance = axios.create({
  baseURL: "http://localhost:8000/",
  timeout: 1000,
});
interface imageData {
  image: File;
  mode: string;
}
function uploadImg(imageData: imageData) {}
