/*==================================================
AllStudentsView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the all students view page.
================================================== */
import React from 'react'; 
import { Link } from "react-router-dom";

const AllStudentsView = (props) => {
  const { students } = props;

  // Handle empty state
  if (!students.length) {
    return (
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <h1>All Students</h1>
        <p style={{ marginTop: '30px', color: '#777' }}>No students found.</p>
        <Link
          to={`/newstudent`}
          style={{
            display: 'inline-block',
            backgroundColor: 'green',
            color: 'white',
            padding: '10px 25px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 'bold',
            marginTop: '20px'
          }}
        >
          + Add New Student
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '30px', maxWidth: '800px', margin: '0 auto' }}>
      {/* Header Section */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1>All Students</h1>
      </div>

      {/* Vertical List of Students */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}
      >
        {students.map((student) => (
          <div
            key={student.id}
            style={{
              backgroundColor: '#fff',
              borderRadius: '10px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              padding: '20px',
              textAlign: 'center'
            }}
          >
            {/* Student Name (Hyperlink) */}
            <Link
              to={`/student/${student.id}`}
              style={{
                color: '#007bff',
                fontWeight: 'bold',
                fontSize: '20px',
                textDecoration: 'underline', // <- added underline
                display: 'block',
                marginBottom: '15px'
              }}
            >
              {student.firstname} {student.lastname}
            </Link>

            {/* Student Image */}
            <div
              style={{
                width: '120px',
                height: '120px',
                margin: '0 auto',
                borderRadius: '50%',
                overflow: 'hidden',
                backgroundColor: '#f0f0f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <img
                src={
                  student.imageUrl && student.imageUrl.trim() !== ''
                    ? student.imageUrl
                    : 'https://cdn-icons-png.flaticon.com/512/847/847969.png'
                }
                alt={`${student.firstname} ${student.lastname}`}
                onError={(e) => {
                  e.target.src = 'https://cdn-icons-png.flaticon.com/512/847/847969.png';
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  display: 'block',
                  pointerEvents: 'none',
                  userSelect: 'none'
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Add Student Button (Bottom Center) */}
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <Link
          to={`/newstudent`}
          style={{
            display: 'inline-block',
            backgroundColor: 'green',
            color: 'white',
            padding: '12px 35px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '16px'
          }}
        >
          + Add New Student
        </Link>
      </div>
    </div>
  );
};

export default AllStudentsView;
