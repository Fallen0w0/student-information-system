const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Student API is running smoothly!");
});

app.get("/api/students", async (req, res) => {
  try {
    const students = await prisma.student.findMany();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/api/students", async (req, res) => {
  try {
    const { name, email, course } = req.body;
    const newStudent = await prisma.student.create({
      data: { name, email, course },
    });
    res.json(newStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:3000`);
});