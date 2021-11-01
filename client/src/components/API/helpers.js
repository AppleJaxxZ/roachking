if (process.env.NODE_ENV !== "production") require("dotenv").config();

const API = "https://roachking.herokuapp.com" || "http://localhost:5000";

export async function fetchFromAPI(endpoint, opts) {
  const { method, body } = { method: "POST", body: null, ...opts };

  const res = await fetch(`${API}/${endpoint}`, {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return res.json();
}
