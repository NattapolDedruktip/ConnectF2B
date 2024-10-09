import axios from "axios";

export const listLandmarks = () =>
    axios.get("http://localhost:5000/api/getAllLandmark")


