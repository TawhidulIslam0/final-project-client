/*==================================================
StudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the single student view page.
================================================== */
import React from "react";
import { Link } from "react-router-dom";

const StudentView = ({ student, handleDelete }) => {
  // Handle case where student is not found
  if (!student) {
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h1>Student not found</h1>
        <Link
          to="/students"
          style={{
            display: "inline-block",
            backgroundColor: "gray",
            color: "white",
            padding: "10px 25px",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "bold",
            marginTop: "20px",
          }}
        >
          ← Back to Students
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "30px", maxWidth: "700px", margin: "0 auto" }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1> {student.firstname} {student.lastname}</h1>
      </div>

      {/* Student Info Card */}
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          padding: "30px",
          textAlign: "center",
        }}
      >
        {/* Avatar */}
        <div
          style={{
            width: "140px",
            height: "140px",
            margin: "0 auto 20px auto",
            borderRadius: "50%",
            overflow: "hidden",
            backgroundColor: "#f0f0f0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={
              student.imageUrl && student.imageUrl.trim() !== ""
                ? student.imageUrl
                : "https://cdn-icons-png.flaticon.com/512/847/847969.png"
            }
            alt={`${student.firstname} ${student.lastname}`}
            onError={(e) => {
              e.target.src = "https://cdn-icons-png.flaticon.com/512/847/847969.png";
            }}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "50%",
              display: "block",
              pointerEvents: "none",
              userSelect: "none",
            }}
          />
        </div>

        {/* Student Details */}
        <div style={{ textAlign: "left", fontSize: "18px", color: "#333", lineHeight: "1.8", maxWidth: "500px", margin: "0 auto" }}>
          <p><strong>First Name:</strong> {student.firstname}</p>
          <p><strong>Last Name:</strong> {student.lastname}</p>
          <p><strong>Email:</strong> {student.email}</p>
          <p><strong>GPA:</strong> {student.gpa ? parseFloat(student.gpa).toFixed(2) : "N/A"}</p>
          <p>
            <strong>Attends:</strong>{" "}
            {student.campus ? (
              <Link
                to={`/campus/${student.campus.id}`}
                style={{
                  color: "#007bff",
                  textDecoration: "underline",
                  fontWeight: "bold",
                }}
              >
                {student.campus.name}
              </Link>
            ) : (
              "No Campus Assigned"
            )}
          </p>
        </div>

        {/* Buttons */}
        <div style={{ marginTop: "30px", display: "flex", justifyContent: "center", gap: "15px" }}>
          <Link
            to={`/student/${student.id}/edit`}
            style={{
              backgroundColor: "#007bff",
              color: "white",
              padding: "10px 25px",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Edit
          </Link>
          <button
            onClick={() => {
              if (window.confirm("Are you sure you want to delete this student?")) {
                handleDelete(student.id);
              }
            }}
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "10px 25px",
              borderRadius: "6px",
              border: "none",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Delete
          </button>
          <Link
            to="/students"
            style={{
              backgroundColor: "gray",
              color: "white",
              padding: "10px 25px",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudentView;
