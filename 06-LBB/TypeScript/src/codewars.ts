import axios from "axios";

const options = {
  method: "GET",
  url: "https://apis.deutschebahn.com/db-api-marketplace/apis/timetables/v1/plan/08000235/241029/10",
  headers: {
    "DB-Client-Id": "6d8990a55f6ad319e4bcc664d2a26be8",
    "DB-Api-Key": "23d8111fab821ddb070796f82ab3516e",
    accept: "application/xml",
  },
};

async function fetchData() {
  try {
    const response = await axios.request(options);
    console.log(response.data);
    console.log(typeof response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error response code:", error.response?.status);
      console.error("Error response data:", error.response?.data);
    } else {
      console.error("Unexpected error:", error);
    }
  }
}

fetchData();
