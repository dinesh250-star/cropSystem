const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "crop",
});
app.post("/feedbackR", (req, res) => {
  const emailss = req.body.email;
  const feedbackss = req.body.feedback;
  db.query(
    "INSERT INTO feedback (emails,feedbacks) VALUES(?,?)",
    [emailss, feedbackss],
    (err, result) => {
      if (result) {
        res.send("Feedback Sent");
      }
    }
  );
});
app.post("/inputR", (req, res) => {
  const n = req.body.n;
  const p = req.body.p;
  const k = req.body.k;
  const t = req.body.t;
  const h = req.body.h;
  const ph = req.body.ph;
  const r = req.body.r;
  const c = req.body.c;
  db.query(
    "INSERT INTO crop_data (n,p,k,t,h,ph,r,c) VALUES(?,?,?,?,?,?,?,?)",
    [n, p, k, t, h, ph, r, c],
    (err, result) => {
      if (result) {
        res.send("Crop Data Sent");
      }
    }
  );
});
app.post("/input1R", (req, res) => {
  const n = req.body.n;
  const p = req.body.p;
  const k = req.body.k;
  const t = req.body.t;
  const h = req.body.h;
  const m = req.body.m;
  const s = req.body.s;
  const c = req.body.c;
  const f = req.body.f;
  db.query(
    "INSERT INTO fertilizer_data (t,h,m,n,p,k,s,c,f) VALUES(?,?,?,?,?,?,?,?,?)",
    [t, h, m, n, p, k, s, c, f],
    (err, result) => {
      if (result) {
        res.send("Fertilizer Data Sent");
      }
    }
  );
});
app.listen(3001, () => {
  console.log("server is running");
});
