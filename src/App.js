import React from "react";
import { Routes, Route } from "react-router-dom";

import AgriculturalAIPage from "./pages/home";
import AIAssistantPage from "./pages/assistant";
import CropsDiseasesPage from "./pages/solutions";
import SupportPage from "./pages/support";
import PrivacyPolicyPage from "./pages/privacy_policy"
import TermsAndConditionsPage from "./pages/terms"
import ScheduleDemoPage from "./pages/demo";
import ServicesPage from "./pages/services";

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<AgriculturalAIPage />} />
          <Route path="/cropXassistant" element={<AIAssistantPage />} />
          <Route path="/solutions" element={<CropsDiseasesPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsAndConditionsPage />} />
          <Route path="/demo" element={<ScheduleDemoPage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
    </div>
  );
}

export default App;
