import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Registration.css";

const Registration = () => {
  const [step, setStep] = useState(1);
  const [preview, setPreview] = useState(null); // For image preview
  const [formData, setFormData] = useState({
    teamName: "",
    captainName: "",
    email: "",
    contact: "",
    paymentScreenshot: null,
    acknowledged: false,
  });

  // Handle image preview cleanup to prevent memory leaks
  useEffect(() => {
    if (!formData.paymentScreenshot) {
      setPreview(null);
      return;
    }
    const objectUrl = URL.createObjectURL(formData.paymentScreenshot);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [formData.paymentScreenshot]);

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <>
      <Navbar />
      <div className="register-wrapper">
        {/* Visual Progress Bar */}
        <div className="progress-container">
          <div className={`progress-bar step-${step}`}></div>
        </div>

        <div className="register-card">
          <span className="step-indicator">Step {step} of 3</span>

          <form className="register-form" onSubmit={(e) => e.preventDefault()}>
            
            {/* SECTION 1: Acknowledgement */}
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

            {/* SECTION 2: General Details */}
            {step === 2 && (
              <div className="form-section">
                <h1>Team Details</h1>
                <div className="input-group">
                  <input type="text" name="teamName" placeholder="Team Name" value={formData.teamName} onChange={handleInputChange} required />
                  <input type="text" name="captainName" placeholder="Captain Name" value={formData.captainName} onChange={handleInputChange} required />
                  <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} required />
                  <input type="tel" name="contact" placeholder="Contact Number" value={formData.contact} onChange={handleInputChange} required />
                </div>
                <div className="btn-group">
                  <button type="button" className="btn-back" onClick={prevStep}>Back</button>
                  <button type="button" onClick={nextStep} disabled={!formData.email || !formData.teamName}>
                    Go to Payment
                  </button>
                </div>
              </div>
            )}

            {/* SECTION 3: Payment & Summary */}
            {step === 3 && (
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
                  <button type="button" className="btn-back" onClick={prevStep}>Back</button>
                  <button type="submit" className="btn-submit" disabled={!formData.paymentScreenshot}>
                    Submit & Send Email
                  </button>
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