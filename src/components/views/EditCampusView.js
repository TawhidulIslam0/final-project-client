/*==================================================
EditCampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the edit campus page.
================================================== */
import React from 'react';
import { Link } from 'react-router-dom';

const EditCampusView = ({ handleSubmit, handleChange, formData, errors }) => {
  // Add loading check
  if (formData.isLoading) {
    return (
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <div
          style={{
            width: '50px',
            height: '50px',
            border: '5px solid #ccc',
            borderTop: '5px solid green',
            borderRadius: '50%',
            margin: '0 auto',
            animation: 'spin 1s linear infinite',
          }}
        ></div>
        <p style={{ marginTop: '15px', color: '#555' }}>Loading campus information...</p>
      </div>
    );
  }

  // Add check for missing data
  if (!formData.name && !formData.isLoading) {
    return (
      <div style={{ textAlign: 'center', padding: '40px' }}>
        <p style={{ color: 'red' }}>⚠️ Error: Could not load campus data.</p>
        <Link
          to="/campuses"
          style={{
            color: '#007bff',
            textDecoration: 'underline',
            display: 'inline-block',
            marginTop: '15px',
          }}
        >
          ← Back to Campuses
        </Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '700px', margin: '0 auto', padding: '20px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1>Edit Campus</h1>
        <p style={{ color: '#555' }}>Update campus information below</p>
      </div>

      {/* Form Card */}
      <div
        style={{
          backgroundColor: 'white',
          padding: '30px',
          borderRadius: '10px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        }}
      >
        <form onSubmit={handleSubmit}>
          {/* Campus Name */}
          <div style={{ marginBottom: '20px' }}>
            <label>
              Campus Name<span style={{ color: 'red' }}> *</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
              placeholder="Enter campus name"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #ccc',
                marginTop: '5px',
              }}
            />
            {errors.name && <span style={{ color: 'red' }}>⚠️ {errors.name}</span>}
          </div>

          {/* Address */}
          <div style={{ marginBottom: '20px' }}>
            <label>
              Address<span style={{ color: 'red' }}> *</span>
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={errors.address ? 'error' : ''}
              placeholder="Enter campus address"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #ccc',
                marginTop: '5px',
              }}
            />
            {errors.address && <span style={{ color: 'red' }}>⚠️ {errors.address}</span>}
          </div>

          {/* Description */}
          <div style={{ marginBottom: '20px' }}>
            <label>
              Description<span style={{ color: 'red' }}> *</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className={errors.description ? 'error' : ''}
              placeholder="Enter campus description"
              rows="4"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #ccc',
                marginTop: '5px',
              }}
            />
            {errors.description && <span style={{ color: 'red' }}>⚠️ {errors.description}</span>}
          </div>

          {/* Image URL */}
          <div style={{ marginBottom: '20px' }}>
            <label>Image URL</label>
            <input
              type="url"
              name="imageURL"
              value={formData.imageURL}
              onChange={handleChange}
              className={errors.imageURL ? 'error' : ''}
              placeholder="https://example.com/image.jpg"
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #ccc',
                marginTop: '5px',
              }}
            />
            {errors.imageURL && <span style={{ color: 'red' }}>⚠️ {errors.imageURL}</span>}
            {formData.imageURL && !errors.imageURL && (
              <div style={{ textAlign: 'center', marginTop: '15px' }}>
                <img
                  src={formData.imageURL}
                  alt="Preview"
                  style={{
                    width: '200px',
                    height: '120px',
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

          {/* Submit Error */}
          {errors.submit && (
            <div style={{ color: 'red', textAlign: 'center', marginBottom: '15px' }}>
              ⚠️ {errors.submit}
            </div>
          )}

          {/* Actions */}
          <div style={{ textAlign: 'center', marginTop: '25px' }}>
            <button
              type="submit"
              className={`submit-button ${formData.isSubmitting ? 'loading' : ''}`}
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
              to={`/campus/${formData.id}`}
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

export default EditCampusView;
