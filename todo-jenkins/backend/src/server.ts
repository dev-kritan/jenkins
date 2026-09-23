import app from "./app.js";

const PORT = Number(process.env.PORT) || 5000;

app.listen(PORT, () => {
  console.log(`Todo API running on http://localhost:${PORT}`);
});
