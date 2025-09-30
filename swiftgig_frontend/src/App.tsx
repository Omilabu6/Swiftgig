import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SwiftGigSignUp from './components/auth/SwiftGigSignUp';
import RegisterFlow1 from './components/auth/RegisterFlow1';
import RegisterFlow2 from './components/auth/RegisterFlow2';

function LandingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-black mb-4">SwiftGig</h1>
        <p className="text-xl text-gray-600 mb-8">Your freelancing platform</p>
        <a
          href="/signup"
          className="inline-block px-8 py-3 bg-[#622578] text-white rounded-full font-medium hover:bg-[#622578]/90 transition-all"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SwiftGigSignUp />} />
        <Route path="/register/client" element={<RegisterFlow1 />} />
        <Route path="/register/talent" element={<RegisterFlow2 />} />
      </Routes>
    </Router>
  );
}