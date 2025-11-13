/*==================================================
AllCampusesView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display all campuses.
================================================== */
import React from 'react'; 
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllCampusesView = (props) => {
  if (!props.allCampuses) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <div style={{
          width: '40px',
          height: '40px',
          margin: '0 auto 20px',
          border: '4px solid #ccc',
          borderTop: '4px solid #007bff',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}></div>
        <p>Loading campuses...</p>
        <style>{`
          @keyframes spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
        `}</style>
      </div>
    );
  }

  if (!props.allCampuses.length) {
    return (
      <div style={{ padding: '20px' }}>
        <h1>All Campuses</h1>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <Link to={`/newcampus`} style={{
            padding: '10px 20px',
            backgroundColor: 'green',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '4px'
          }}>
            + Add New Campus
          </Link>
        </div>
      </div>
    );
  }

  // Sort campuses by ID ascending
  const sortedCampuses = [...props.allCampuses].sort((a, b) => a.id - b.id);

  return (
    <div style={{ padding: '20px' }}>
      <h1>All Campuses</h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '20px' }}>
        {sortedCampuses.map((campus) => (
          <div key={campus.id} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '1px solid #ccc',
            borderRadius: '8px',
            overflow: 'hidden',
            padding: '10px',
            backgroundColor: '#fff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          }}>
            {/* Campus name as clickable hyperlink */}
            <Link 
              to={`/campus/${campus.id}`} 
              style={{ 
                textDecoration: 'underline', 
                color: '#007bff', 
                cursor: 'pointer',
                marginBottom: '5px',
                display: 'inline-block'
              }}
            >
              <h2>{campus.name}</h2>
            </Link>

            <p>Campus ID: {campus.id}</p>
            <div style={{ width: '100%', textAlign: 'center' }}>
              <img
                src={campus.imageURL || 'https://www.ccny.cuny.edu/sites/default/files/styles/large/public/2019-08/fastfacts_fullcampus_.jpg?itok=1FltVbLw'}
                alt={campus.name}
                onError={(e) => { 
                  e.target.src = 'https://www.ccny.cuny.edu/sites/default/files/styles/large/public/2019-08/fastfacts_fullcampus_.jpg?itok=1FltVbLw'; 
                }}
                style={{ width: '400px', height: '200px', objectFit: 'cover', borderRadius: '4px' }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Add New Campus button at the bottom */}
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <Link to={`/newcampus`} style={{
          padding: '10px 20px',
          backgroundColor: 'green',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '4px'
        }}>
          + Add New Campus
        </Link>
      </div>
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default AllCampusesView;
