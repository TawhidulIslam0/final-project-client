/*==================================================
EditStudentView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the edit student page.
================================================== */

import React from 'react';
import { Link } from 'react-router-dom';

const EditStudentView = ({ handleSubmit, handleChange, formData, errors }) => {
  // Add loading check
  if (formData.isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading student information...</p>
      </div>
    );
  }

  // Add check for missing data
  if (!formData.firstname && !formData.isLoading) {
    return (
      <div className="error-container">
        <p>Error: Could not load student data</p>
        <Link to="/students" className="back-button">
          Back to Students
        </Link>
      </div>
    );
  }

  return (
    <div className="edit-student-container" style={{ maxWidth: '700px', margin: '0 auto', padding: '20px' }}>
      {/* Header Section */}
      <div className="header-section" style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1>Edit Student</h1>
        <p style={{ color: '#555' }}>Update student information below</p>
      </div>

      {/* Form Card */}
      <div
        className="form-card"
        style={{
          backgroundColor: 'white',
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}
      >
        <form onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label>
              First Name<span className="required">*</span>
            </label>
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              placeholder="Enter first name"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '4px',
                border: errors.firstname ? '1px solid red' : '1px solid #ccc',
                marginTop: '5px',
              }}
            />
            {errors.firstname && <span style={{ color: 'red' }}>⚠️ {errors.firstname}</span>}
          </div>

          {/* Last Name */}
          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label>
              Last Name<span className="required">*</span>
            </label>
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              placeholder="Enter last name"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '4px',
                border: errors.lastname ? '1px solid red' : '1px solid #ccc',
                marginTop: '5px',
              }}
            />
            {errors.lastname && <span style={{ color: 'red' }}>⚠️ {errors.lastname}</span>}
          </div>

          {/* Email */}
          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label>
              Email<span className="required">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '4px',
                border: errors.email ? '1px solid red' : '1px solid #ccc',
                marginTop: '5px',
              }}
            />
            {errors.email && <span style={{ color: 'red' }}>⚠️ {errors.email}</span>}
          </div>

          {/* GPA */}
          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label>GPA</label>
            <input
              type="number"
              name="gpa"
              value={formData.gpa}
              onChange={handleChange}
              step="0.01"
              min="0"
              max="4"
              placeholder="0.00 - 4.00"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '4px',
                border: errors.gpa ? '1px solid red' : '1px solid #ccc',
                marginTop: '5px',
              }}
            />
            {errors.gpa && <span style={{ color: 'red' }}>⚠️ {errors.gpa}</span>}
          </div>

          {/* Image URL */}
          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label>Image URL</label>
            <input
              type="url"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '4px',
                border: errors.imageUrl ? '1px solid red' : '1px solid #ccc',
                marginTop: '5px',
              }}
            />
            {errors.imageUrl && <span style={{ color: 'red' }}>⚠️ {errors.imageUrl}</span>}

            {/* Image Preview */}
            {formData.imageUrl && !errors.imageUrl && (
              <div className="image-preview-container" style={{ textAlign: 'center', marginTop: '15px' }}>
                <img
                  src={formData.imageUrl}
                  alt="Preview"
                  style={{
                    width: '200px',
                    height: '200px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    border: '1px solid #ddd',
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            )}
          </div>

          {/* Campus ID */}
          <div className="form-group" style={{ marginBottom: '20px' }}>
            <label>Campus ID</label>
            <input
              type="number"
              name="campusId"
              value={formData.campusId}
              onChange={handleChange}
              placeholder="Enter campus ID"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #ccc',
                marginTop: '5px',
              }}
            />
          </div>

          {/* Submit Error */}
          {errors.submit && (
            <div className="submit-error" style={{ color: 'red', textAlign: 'center', marginBottom: '15px' }}>
              ⚠️ {errors.submit}
            </div>
          )}

          {/* Form Actions */}
          <div className="form-actions" style={{ textAlign: 'center', marginTop: '25px' }}>
            <button
              type="submit"
              disabled={formData.isSubmitting}
              style={{
                backgroundColor: 'green',
                color: 'white',
                padding: '12px 35px',
                borderRadius: '6px',
                border: 'none',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginRight: '10px',
              }}
            >
              {formData.isSubmitting ? 'Saving Changes...' : 'Save Changes'}
            </button>

            <Link
              to={`/student/${formData.id}`}
              style={{
                color: '#007bff',
                textDecoration: 'underline',
                fontWeight: 'bold',
              }}
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditStudentView;
