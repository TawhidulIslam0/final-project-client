/*==================================================
HomePageView.js

Displays the Home Page with two cards:
1. View All Campuses
2. View All Students
==================================================*/

import React from "react";
import { Link } from "react-router-dom";

const HomePageView = () => {
  // Inline styles
  const styles = {
    container: {
      textAlign: "center",
      padding: "50px 20px",
      backgroundColor: "#f9fafc",
      minHeight: "100vh",
    },
    title: {
      fontSize: "2.2rem",
      color: "#333",
      marginBottom: "40px",
    },
    cardContainer: {
      display: "flex",
      justifyContent: "center",
      gap: "40px",
      flexWrap: "wrap",
    },
    card: {
      backgroundColor: "#ffffff",
      border: "1px solid #ddd",
      borderRadius: "10px",
      width: "280px",
      padding: "30px 20px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.2s ease-in-out",
    },
    cardHover: {
      transform: "translateY(-5px)",
    },
    button: {
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      padding: "10px 18px",
      borderRadius: "5px",
      cursor: "pointer",
      fontSize: "1rem",
      marginTop: "10px",
      transition: "background-color 0.3s",
    },
    buttonHover: {
      backgroundColor: "#0056b3",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to the Campus Management System</h1>

      <div style={styles.cardContainer}>
        {/* Card 1: Campuses */}
        <div
          style={styles.card}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
        >
          <h2>View All Campuses</h2>
          <p>Explore all campuses and manage their details.</p>
          <Link to="/campuses">
            <button
              style={styles.button}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
            >
              Click Here
            </button>
          </Link>
        </div>

        {/* Card 2: Students */}
        <div
          style={styles.card}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
        >
          <h2>View All Students</h2>
          <p>Browse all students and manage their information.</p>
          <Link to="/students">
            <button
              style={styles.button}
              onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
              onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
            >
              Click Here
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePageView;
