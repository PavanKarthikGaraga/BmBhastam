import './globals.css'
import Image from 'next/image'
import logo from './Assets/bmbastha-logo_PNG_bg.png'
export default function Home() {
  return (
      <div className="home-component">
          <div className="home-component-in">
              <div className="home-component-in-form">
                <div className="home-component-in-form-heading">
                    <div className="logo-container">
                      <Image 
                        src={logo} 
                        alt="BmBastha Logo" 
                        width={80} 
                        height={80}
                        className="logo"
                      />
                    </div>
                    <h1>BmBastha Admin Portal</h1>
                    <p className="subtitle">Welcome back! Please login to your account.</p>
                </div>
                <div className="home-component-in-form-input">
                  <div className="input-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      placeholder="Enter your email" 
                      required
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input 
                      type="password" 
                      id="password"
                      placeholder="Enter your password" 
                      required
                    />
                  </div>
                  <div className="form-options">
                    <a href="#" className="forgot-password">Forgot Password?</a>
                  </div>
                </div>
                <div className="home-component-in-form-button">
                  <button type="submit">Sign In</button>
                </div>
              </div>
          </div>
      </div>
  );
}
