import React, { useEffect, useState } from "react";
import "./App.css";

const API = "http://localhost:3000/api/students";

export default function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState("");

  async function loadStudents() {
    try {
      const response = await fetch(API);
      if (!response.ok) throw new Error("Unable to load students");
      setStudents(await response.json());
      setMessage("");
    } catch {
      setMessage("Cannot connect to the server.");
    }
  }

  useEffect(() => {
    loadStudents();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, course }),
      });
      if (!res.ok) throw new Error("Failed to save student");
      setName("");
      setEmail("");
      setCourse("");
      setMessage("Student record saved successfully.");
      loadStudents();
    } catch (err) {
      setMessage(err.message);
    }
  }

  return (
    <div className="page">
      <div className="container">
        <div className="headerBox">
          <h2 className="title">Student Information System</h2>
          <p className="subtitle">Database Management Portal — MySQL & Prisma</p>
        </div>

        {message && <div className="alert">{message}</div>}

        <div className="card">
          <h3 className="cardTitle">Register New Student</h3>
          <form onSubmit={handleSubmit} className="form">
            <div className="inputGroup">
              <label className="label">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="input"
              />
            </div>
            <div className="inputGroup">
              <label className="label">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="input"
              />
            </div>
            <div className="inputGroup">
              <label className="label">Course</label>
              <input
                type="text"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                required
                className="input"
              />
            </div>
            <button type="submit" className="button">
              Save Record
            </button>
          </form>
        </div>

        <div className="card">
          <h3 className="cardTitle">Registered Students Directory</h3>
          {students.length === 0 ? (
            <p className="emptyText">No records found in the database.</p>
          ) : (
            <table className="table">
              <thead>
                <tr className="trHead">
                  <th className="th">ID</th>
                  <th className="th">Name</th>
                  <th className="th">Email</th>
                  <th className="th">Course</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id} className="tr">
                    <td className="td">{student.id}</td>
                    <td className="td">{student.name}</td>
                    <td className="td">{student.email}</td>
                    <td className="td">{student.course}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}