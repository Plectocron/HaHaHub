import express from "express";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get("/api/joke", async (req,res) => {
  try {
    const toFilter = [];

    for (const key in req.query) {
      if (req.query[key]==="true") toFilter.push(key);
    }

    let url = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Pun,Spooky,Christmas?type=twopart";
    if (toFilter.length > 0) {
      url += `&blacklistFlags=${toFilter.join()}`
    }

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    console.log(url);

    res.json(data);
  } catch (e) {
    res.status(500).json({ error: "Failed to fetch" });
  }
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});