/*==================================================
NewStudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the new student page.
================================================== */
import React from 'react'; 
import { Link } from 'react-router-dom';

const NewStudentView = ({ handleSubmit, handleChange, errors = {}, campusId }) => {
  return (
    <div className="new-student-container" style={{ maxWidth: '700px', margin: '0 auto', padding: '20px' }}>
      {/* Form Header */}
      <div className="form-header" style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1>Add New Student</h1>
        <p className="subtitle" style={{ color: '#555' }}>Enter student information below</p>
      </div>

      {/* Form Card */}
      <div className="form-card" style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
      }}>
        <form onSubmit={handleSubmit}>
          <div className="form-grid" style={{ display: 'grid', gap: '20px' }}>

            {/* First Name */}
            <div className="form-group">
              <label>First Name<span className="required" style={{ color: 'red' }}> *</span></label>
              <input
                type="text"
                name="firstname"
                onChange={handleChange}
                className={errors.firstname ? "error" : ""}
                placeholder="Enter first name"
                style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.firstname && <span className="error-message" style={{ color: 'red' }}>⚠️ {errors.firstname}</span>}
            </div>

            {/* Last Name */}
            <div className="form-group">
              <label>Last Name<span className="required" style={{ color: 'red' }}> *</span></label>
              <input
                type="text"
                name="lastname"
                onChange={handleChange}
                className={errors.lastname ? "error" : ""}
                placeholder="Enter last name"
                style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.lastname && <span className="error-message" style={{ color: 'red' }}>⚠️ {errors.lastname}</span>}
            </div>

            {/* Email */}
            <div className="form-group">
              <label>Email<span className="required" style={{ color: 'red' }}> *</span></label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                className={errors.email ? "error" : ""}
                placeholder="student@example.com"
                style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.email && <span className="error-message" style={{ color: 'red' }}>⚠️ {errors.email}</span>}
            </div>

            {/* Image URL */}
            <div className="form-group">
              <label>Image URL</label>
              <input
                type="url"
                name="imageUrl"
                onChange={handleChange}
                className={errors.imageUrl ? "error" : ""}
                placeholder="https://example.com/image.jpg"
                style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.imageUrl && <span className="error-message" style={{ color: 'red' }}>⚠️ {errors.imageUrl}</span>}
            </div>

            {/* GPA */}
            <div className="form-group">
              <label>GPA</label>
              <input
                type="number"
                name="gpa"
                step="0.01"
                min="0"
                max="4"
                onChange={handleChange}
                className={errors.gpa ? "error" : ""}
                placeholder="0.00 - 4.00"
                style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              {errors.gpa && <span className="error-message" style={{ color: 'red' }}>⚠️ {errors.gpa}</span>}
            </div>

            {/* Campus ID */}
            <div className="form-group">
              <label>Campus ID</label>
              <input
                type="number"
                name="campusId"
                onChange={handleChange}
                value={campusId || ""}
                className={errors.campusId ? "error" : ""}
                placeholder="Enter campus ID"
                style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                step="1"
                 min="1"
               />
              {errors.campusId && <span className="error-message" style={{ color: 'red' }}>⚠️ {errors.campusId}</span>}
            </div>
          </div>

          {/* Submit Error */}
          {errors.submit && (
            <div className="submit-error" style={{ color: 'red', marginTop: '15px', fontWeight: 'bold' }}>
              ⚠️ {errors.submit}
            </div>
          )}

          {/* Add Student Button */}
          <div className="form-actions" style={{ marginTop: '30px', textAlign: 'center' }}>
            <button
              type="submit"
              className="submit-button"
              style={{
                padding: '12px 40px',
                backgroundColor: 'green',
                color: 'white',
                fontSize: '16px',
                fontWeight: 'bold',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              Add Student
            </button>
          </div>
        </form>
      </div>

      {/* Go Back Button */}
      <div className="back-button-container" style={{ marginTop: '20px', textAlign: 'center' }}>
        <button
          onClick={() => window.history.back()}
          style={{ background: 'none', border: 'none', color: '#007bff', textDecoration: 'underline', cursor: 'pointer', fontSize: '16px' }}
        >
          ← Go Back
        </button>
      </div>
    </div>
  );
};

export default NewStudentView;
