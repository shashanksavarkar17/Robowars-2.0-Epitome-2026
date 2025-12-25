import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Registration.css";

const Registration = () => {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    teamName: "",
    captainName: "",
    email: "",
    contact: "",
    members: [""], // at least one member
    paymentScreenshot: null,
    acknowledged: false,
  });

  /* -------------------- STEP HANDLERS -------------------- */
  const nextStep = () => {
    if (step < 4) setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  /* -------------------- MEMBER HANDLERS -------------------- */
  const handleMemberChange = (index, value) => {
    setFormData((prev) => {
      const updatedMembers = [...prev.members];
      updatedMembers[index] = value;
      return { ...prev, members: updatedMembers };
    });
  };

  const addMember = () => {
    setFormData((prev) => ({
      ...prev,
      members: [...prev.members, ""],
    }));
  };

  const removeMember = (index) => {
    setFormData((prev) => ({
      ...prev,
      members: prev.members.filter((_, i) => i !== index),
    }));
  };

  /* -------------------- RENDER -------------------- */
  return (
    <>
      <Navbar />

      <div className="register-wrapper">
        <div className={`progress-bar-top step-${step}`} />

        <div className="register-card">
          <span className="step-indicator">Step {step} of 4</span>

          <form className="register-form" onSubmit={(e) => e.preventDefault()}>
            
            {/* STEP 1 */}
            {step === 1 && (
              <div className="form-section">
                <h1>Rules & Terms</h1>
                <div className="terms-box">
                  <p>1. Ensure all team details are accurate.</p>
                  <p>2. Registration fee is non-refundable.</p>
                  <p>3. Each captain must provide a valid email for the receipt.</p>
                </div>
                <label className="checkbox-container">
                  <input 
                    type="checkbox" 
                    name="acknowledged" 
                    checked={formData.acknowledged}
                    onChange={handleInputChange} 
                  />
                  <span>I agree to the event guidelines and terms.</span>
                </label>
                <button type="button" onClick={nextStep} disabled={!formData.acknowledged}>
                  Continue to Details
                </button>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="form-section">
                <h1>General Details</h1>
               <div className="input-group">
                  <input type="text" name="teamName" placeholder="Team Name" value={formData.teamName} onChange={handleInputChange} required />
                  <input type="text" name="captainName" placeholder="Captain Name" value={formData.captainName} onChange={handleInputChange} required />
                  <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} required />
                  <input type="tel" name="contact" placeholder="Contact Number" value={formData.contact} onChange={handleInputChange} required />
                </div>
                <div className="btn-group">
                  <button type="button" className="btn-back" onClick={prevStep}>
                    Back
                  </button>
                  <button type="button" onClick={nextStep}>
                    Next
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3 – TEAM MEMBERS */}
            {step === 3 && (
              <div className="form-section">
                <h1>Team Members</h1>
                <p className="section-desc">
                  Add the names of your squad members (excluding the captain).
                </p>

                <div className="members-list">
                  {formData.members.map((member, index) => (
                    <div key={index} className="member-input-row">
                      <input
                        type="text"
                        placeholder={`Member ${index + 1} Name`}
                        value={member}
                        onChange={(e) =>
                          handleMemberChange(index, e.target.value)
                        }
                        required
                      />

                      {formData.members.length > 1 && (
                        <button
                          type="button"
                          className="remove-member-btn"
                          onClick={() => removeMember(index)}
                        >
                          &times;
                        </button>
                      )}
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  className="add-member-btn"
                  onClick={addMember}
                >
                  + Add Another Member
                </button>

                <div className="btn-group">
                  <button
                    type="button"
                    className="btn-back"
                    onClick={prevStep}
                  >
                    Back
                  </button>
                  <button type="button" onClick={nextStep}>
                    Next: Payment
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4 – PAYMENT */}
            {step === 4 && (
              <div className="form-section">
                <h1>Finalize Payment</h1>
                
                <div className="payment-layout">
                  <div className="qr-container">
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=ExamplePay" alt="QR Code" />
                    <p>Pay Registration Fee</p>
                  </div>

                  <div className="upload-box">
                    <label className="file-label">
                      {preview ? "Change Screenshot" : "Upload Screenshot"}
                      <input type="file" name="paymentScreenshot" accept="image/*" onChange={handleInputChange} hidden />
                    </label>
                    {preview && <img src={preview} alt="Preview" className="screenshot-preview" />}
                  </div>
                </div>

                <div className="summary-box">
                  <p><strong>Team:</strong> {formData.teamName}</p>
                  <p><strong>Email:</strong> {formData.email}</p>
                </div>
                <div className="btn-group">
                  <button type="button" className="btn-back" onClick={prevStep}>
                    Back
                  </button>
                  <button type="submit">Submit Registration</button>
                </div>
              </div>
            )}

          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Registration;
