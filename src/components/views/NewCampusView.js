/*==================================================
NewCampusView.js

The Views component is responsible for rendering web page with data provided by the corresponding Container component.
It constructs a React component to display the new campus page.
================================================== */
import React from 'react';
import { Link } from 'react-router-dom';

const NewCampusView = ({ handleSubmit, handleChange, errors = {} }) => {
  return (
    <div className="new-campus-container" style={{ maxWidth: "500px", margin: "40px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", backgroundColor: "#fff", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
      
      <div className="form-header">
        <div className="title-section" style={{ textAlign: "center", marginBottom: "30px" }}>
          <h1>Add New Campus</h1>
          <p className="subtitle">Enter campus information below</p>
        </div>
      </div>

      <div className="new-campus-form">
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          
          <div className="form-group" style={{ display: "flex", flexDirection: "column" }}>
            <label>Campus Name<span className="required">*</span></label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className={errors.name ? "error" : ""}
              placeholder="Enter campus name"
              required
              style={{ padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
            />
            {errors.name && <span className="error-message">⚠️ {errors.name}</span>}
          </div>

          <div className="form-group" style={{ display: "flex", flexDirection: "column" }}>
            <label>Image URL <small>(optional)</small></label>
            <input
              type="url"
              name="imageURL"
              onChange={handleChange}
              className={errors.imageURL ? "error" : ""}
              placeholder="https://example.com/image.jpg"
              style={{ padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
            />
            {errors.imageURL && <span className="error-message">⚠️ {errors.imageURL}</span>}
          </div>

          <div className="form-group" style={{ display: "flex", flexDirection: "column" }}>
            <label>Address<span className="required">*</span></label>
            <input
              type="text"
              name="address"
              onChange={handleChange}
              className={errors.address ? "error" : ""}
              placeholder="Enter campus address"
              required
              style={{ padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
            />
            {errors.address && <span className="error-message">⚠️ {errors.address}</span>}
          </div>

          <div className="form-group" style={{ display: "flex", flexDirection: "column" }}>
            <label>Description</label>
            <textarea
              name="description"
              onChange={handleChange}
              className={errors.description ? "error" : ""}
              placeholder="Enter campus description"
              rows="4"
              style={{ padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
            />
            {errors.description && <span className="error-message">⚠️ {errors.description}</span>}
          </div>

          {errors.submit && (
            <div className="submit-error" style={{ color: "red", fontWeight: "bold" }}>
              <span className="error-icon">⚠️</span>
              {errors.submit}
            </div>
          )}

          <div className="form-actions" style={{ textAlign: "center" }}>
            <button
              type="submit"
              className="submit-button"
              style={{
                padding: "12px 25px",
                backgroundColor: "#28a745", // green
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontWeight: "bold",
                marginTop: "10px"
              }}
            >
              Add Campus
            </button>
          </div>

        </form>
      </div>
      
      <div className="back-button-container" style={{ textAlign: "center", marginTop: "20px" }}>
        <Link to="/campuses" className="back-button" style={{ color: "#007bff", textDecoration: "underline" }}>
          ← Back to Campuses
        </Link>
      </div>
    </div>
  );
};

export default NewCampusView;
