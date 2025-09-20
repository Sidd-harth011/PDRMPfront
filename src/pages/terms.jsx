import { useNavigate } from "react-router-dom";
export default function TermsAndConditionsPage() {
const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background text-foreground grain-texture">
      {/* Navigation */}
      <nav className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="text-xl font-bold text-primary">CropVision AI</div>
              <div className="hidden md:flex space-x-6 text-sm text-muted-foreground">
                <a href="/" className="hover:text-foreground transition-colors">
                  Home
                </a>
                <a href="/solutions" className="hover:text-foreground transition-colors">
                  Solutions
                </a>
                <a href="/support" className="hover:text-foreground transition-colors">
                  Support
                </a>
              </div>
            </div>
            <button onClick={()=>{navigate("/cropXassistant")}} className="px-4 py-2 text-sm border border-border rounded-md hover:bg-accent transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="py-16 px-6 agricultural-pattern">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full mb-6">
            Legal Information
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance leading-tight">Terms and Conditions</h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
            Please read these terms carefully before using CropVision AI services.
          </p>
          <div className="text-sm text-muted-foreground">Last updated: September 20, 2025</div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {/* Acceptance of Terms */}
            <div className="border border-border/50 rounded-lg">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">1. Acceptance of Terms</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    By accessing and using CropVision AI services, you accept and agree to be bound by the terms and
                    provision of this agreement. If you do not agree to abide by the above, please do not use this
                    service.
                  </p>
                  <p>
                    These Terms of Service constitute a legally binding agreement between you and CropVision AI
                    regarding your use of our agricultural AI platform and related services.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Description */}
            <div className="border border-border/50 rounded-lg">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">2. Service Description</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    CropVision AI provides artificial intelligence-powered crop disease detection and agricultural
                    advisory services. Our platform allows users to upload crop images for analysis and receive
                    diagnostic information and treatment recommendations.
                  </p>
                  <p>The service includes but is not limited to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>AI-powered crop disease identification</li>
                    <li>Treatment and prevention recommendations</li>
                    <li>Regional agricultural insights and seasonal guides</li>
                    <li>Resource management optimization tools</li>
                    <li>Agricultural consultation and support</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* User Responsibilities */}
            <div className="border border-border/50 rounded-lg">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">3. User Responsibilities</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>As a user of CropVision AI, you agree to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Provide accurate and truthful information when using our services</li>
                    <li>Use the service only for legitimate agricultural purposes</li>
                    <li>Not attempt to reverse engineer or compromise our AI algorithms</li>
                    <li>Respect intellectual property rights and not redistribute our content</li>
                    <li>Comply with all applicable local, state, and federal laws</li>
                    <li>Not use the service for any illegal or unauthorized purpose</li>
                  </ul>
                  <p>
                    You are responsible for maintaining the confidentiality of your account credentials and for all
                    activities that occur under your account.
                  </p>
                </div>
              </div>
            </div>

            {/* Limitations and Disclaimers */}
            <div className="border border-border/50 rounded-lg">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">4. Limitations and Disclaimers</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">Important Agricultural Disclaimer:</strong> CropVision AI
                    provides diagnostic suggestions based on AI analysis. These recommendations are for informational
                    purposes only and should not replace professional agricultural consultation.
                  </p>
                  <p>
                    We make no warranties about the accuracy, reliability, or completeness of our AI diagnoses. Users
                    should:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Consult with local agricultural experts before making treatment decisions</li>
                    <li>Consider local conditions and regulations when applying treatments</li>
                    <li>Use our recommendations as one of several information sources</li>
                    <li>Test treatments on small areas before full application</li>
                  </ul>
                  <p>
                    CropVision AI is not liable for crop losses, treatment failures, or any damages resulting from the
                    use of our recommendations.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Usage and Privacy */}
            <div className="border border-border/50 rounded-lg">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">5. Data Usage and Privacy</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>By using CropVision AI, you grant us permission to:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Process uploaded crop images for disease analysis</li>
                    <li>Store anonymized data to improve our AI models</li>
                    <li>Use aggregated, non-identifiable data for research purposes</li>
                    <li>Share general agricultural insights with the farming community</li>
                  </ul>
                  <p>
                    We are committed to protecting your privacy. Personal information and specific farm data will not be
                    shared with third parties without your explicit consent. For detailed information about our data
                    practices, please review our Privacy Policy.
                  </p>
                </div>
              </div>
            </div>

            {/* Payment and Subscription */}
            <div className="border border-border/50 rounded-lg">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">6. Payment and Subscription Terms</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>CropVision AI offers both free and premium subscription tiers:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Free tier includes basic disease detection with usage limits</li>
                    <li>Premium subscriptions provide unlimited analyses and advanced features</li>
                    <li>Subscription fees are billed monthly or annually as selected</li>
                    <li>All fees are non-refundable except as required by law</li>
                    <li>We reserve the right to modify pricing with 30 days notice</li>
                  </ul>
                  <p>Failure to pay subscription fees may result in service suspension or termination.</p>
                </div>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="border border-border/50 rounded-lg">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">7. Intellectual Property Rights</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    All content, features, and functionality of CropVision AI, including but not limited to text,
                    graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, are
                    the exclusive property of CropVision AI and are protected by copyright, trademark, and other
                    intellectual property laws.
                  </p>
                  <p>
                    You retain ownership of the crop images you upload, but grant us a license to process them for
                    service delivery and AI model improvement.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Availability */}
            <div className="border border-border/50 rounded-lg">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">8. Service Availability and Modifications</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    We strive to maintain high service availability but cannot guarantee uninterrupted access. Service
                    may be temporarily unavailable due to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Scheduled maintenance and updates</li>
                    <li>Technical difficulties or system failures</li>
                    <li>Third-party service provider issues</li>
                    <li>Force majeure events beyond our control</li>
                  </ul>
                  <p>
                    We reserve the right to modify, suspend, or discontinue any aspect of the service at any time with
                    reasonable notice to users.
                  </p>
                </div>
              </div>
            </div>

            {/* Termination */}
            <div className="border border-border/50 rounded-lg">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">9. Account Termination</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>Either party may terminate this agreement at any time:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>You may cancel your account at any time through your account settings</li>
                    <li>We may terminate accounts for violations of these terms</li>
                    <li>We may suspend service for non-payment or suspicious activity</li>
                    <li>Upon termination, your access to the service will cease immediately</li>
                  </ul>
                  <p>Termination does not relieve you of any obligations incurred prior to termination.</p>
                </div>
              </div>
            </div>

            {/* Governing Law */}
            <div className="border border-border/50 rounded-lg">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">10. Governing Law and Dispute Resolution</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    These Terms of Service are governed by and construed in accordance with the laws of India. Any
                    disputes arising from these terms or your use of CropVision AI will be resolved through:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Initial good faith negotiation between the parties</li>
                    <li>Mediation if negotiation fails</li>
                    <li>Binding arbitration as a final resort</li>
                  </ul>
                  <p>
                    You agree to the exclusive jurisdiction of courts in New Delhi, India for any legal proceedings.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="border border-border/50 rounded-lg">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">11. Contact Information</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>If you have any questions about these Terms of Service, please contact us:</p>
                  <div className="space-y-2">
                    <p>
                      <strong className="text-foreground">Email:</strong> legal@cropvision.ai
                    </p>
                    <p>
                      <strong className="text-foreground">Phone:</strong> +91 93112 76404
                    </p>
                    <p>
                      <strong className="text-foreground">Address:</strong> CropVision AI Legal Department, New Delhi,
                      India
                    </p>
                  </div>
                  <p>We will respond to all inquiries within 5 business days.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 px-6 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-primary font-bold text-lg">CropVision AI</div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="/support" className="hover:text-foreground transition-colors">
                Support
              </a>
            </div>
            <p className="text-sm text-muted-foreground">© 2024 CropVision AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
