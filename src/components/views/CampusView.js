/*==================================================
CampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display a single campus and its students.
================================================== */
import React from "react";
import { Link } from "react-router-dom";

const CampusView = (props) => {
  const { campus, handleDelete, handleRemoveStudent } = props;

  if (!campus) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h1>Campus not found</h1>
        <Link
          to="/campuses"
          style={{
            textDecoration: 'none',
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            borderRadius: '4px',
          }}
        >
          Back to Campuses
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      {/* Campus Name as Title */}
      <h1 style={{ marginBottom: '20px', textAlign: 'center' }}>{campus.name}</h1>

      {/* Campus Card */}
      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        padding: '20px',
        marginBottom: '40px'
      }}>
        {/* Campus Image */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <img
            src={campus.imageURL || 'https://www.ccny.cuny.edu/sites/default/files/styles/large/public/2019-08/fastfacts_fullcampus_.jpg?itok=1FltVbLw'}
            alt={campus.name}
            style={{ width: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: '8px' }}
            onError={(e) => {
              e.target.src = 'https://www.ccny.cuny.edu/sites/default/files/styles/large/public/2019-08/fastfacts_fullcampus_.jpg?itok=1FltVbLw';
            }}
          />
        </div>

        {/* Campus Info */}
        <div style={{ marginBottom: '30px' }}>
          <p><strong>Address:</strong> {campus.address}</p>
          {campus.description && <p><strong>Description:</strong> {campus.description}</p>}
        </div>

        {/* Edit/Delete Buttons (stretched horizontally) */}
        <div style={{
          marginBottom: '40px',
          display: 'flex',
          gap: '20px'
        }}>
          <Link
            to={`/campus/${campus.id}/edit`}
            style={{
              flex: 1,
              padding: '15px 0',
              backgroundColor: 'green',
              color: 'white',
              textAlign: 'center',
              textDecoration: 'none',
              borderRadius: '4px',
              fontWeight: 'bold',
              fontSize: '16px'
            }}
          >
            Edit Campus
          </Link>
          <button
            onClick={() => handleDelete(campus.id)}
            style={{
              flex: 1,
              padding: '15px 0',
              backgroundColor: 'red',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontWeight: 'bold',
              fontSize: '16px',
              cursor: 'pointer'
            }}
          >
            Delete Campus
          </button>
        </div>

        {/* Students Section */}
        <div>
          <h2>Total Students: {campus.students ? campus.students.length : 0}</h2>

          {campus.students && campus.students.length > 0 ? (
            <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#fafafa', borderRadius: '6px' }}>
              <thead>
                <tr style={{ backgroundColor: '#e6e6e6' }}>
                  <th style={{ padding: '10px', border: '1px solid #ddd' }}>Name</th>
                  <th style={{ padding: '10px', border: '1px solid #ddd' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {campus.students.map(student => (
                  <tr key={student.id}>
                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                      <Link to={`/student/${student.id}`} style={{ color: '#007bff', textDecoration: 'underline' }}>
                        {student.firstname} {student.lastname}
                      </Link>
                    </td>
                    <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                      <button
                        onClick={() => {
                          if (window.confirm('Remove this student from the campus?')) {
                            handleRemoveStudent(student.id);
                          }
                        }}
                        style={{
                          padding: '5px 10px',
                          backgroundColor: 'orange',
                          border: 'none',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          color: 'white'
                        }}
                      >
                        Unenroll
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No students currently enrolled at this campus.</p>
          )}

          {/* Enroll New Student Button at the Center */}
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
            <Link
              to={`/newstudent?campusId=${campus.id}`}
              style={{
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '4px',
                fontWeight: 'bold',
                fontSize: '16px'
              }}
            >
              Enroll New Student
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampusView;
