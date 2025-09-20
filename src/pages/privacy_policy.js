import { useNavigate } from "react-router-dom"

export default function PrivacyPolicyPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance leading-tight">Privacy Policy</h1>
          <p className="text-lg text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <div className="text-sm text-muted-foreground">Last updated: December 20, 2024</div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {/* Information We Collect */}
            <div className="border border-border/50 rounded-lg">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Information We Collect</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Personal Information</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      When you use CropVision AI, we may collect the following personal information:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span>Name, email address, and contact information when you create an account</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span>Farm location and agricultural preferences for personalized recommendations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span>Payment information when you subscribe to premium features</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">Usage Data</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We automatically collect information about how you use our service, including crop images uploaded
                      for analysis, diagnostic results, and interaction patterns to improve our AI models and user
                      experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div className="border border-border/50 rounded-lg">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">How We Use Your Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Service Provision</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        To provide crop disease diagnosis, personalized recommendations, and agricultural insights
                        tailored to your region and farming practices.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">AI Model Improvement</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        To train and improve our machine learning models for better crop disease detection accuracy and
                        agricultural recommendations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Communication</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        To send you service updates, agricultural alerts, and respond to your support requests and
                        inquiries.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Sharing and Disclosure */}
            <div className="border border-border/50 rounded-lg">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Data Sharing and Disclosure</h2>
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    We do not sell, trade, or rent your personal information to third parties. We may share your
                    information only in the following circumstances:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="border border-border/30 rounded-lg p-6">
                      <h3 className="font-semibold text-foreground mb-3">Service Providers</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        With trusted third-party service providers who help us operate our platform, process payments,
                        or provide customer support.
                      </p>
                    </div>

                    <div className="border border-border/30 rounded-lg p-6">
                      <h3 className="font-semibold text-foreground mb-3">Legal Requirements</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        When required by law, court order, or government regulation, or to protect our rights and the
                        safety of our users.
                      </p>
                    </div>

                    <div className="border border-border/30 rounded-lg p-6">
                      <h3 className="font-semibold text-foreground mb-3">Business Transfers</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        In connection with a merger, acquisition, or sale of assets, where your information may be
                        transferred to the new entity.
                      </p>
                    </div>

                    <div className="border border-border/30 rounded-lg p-6">
                      <h3 className="font-semibold text-foreground mb-3">Aggregated Data</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        We may share anonymized, aggregated data for research purposes to advance agricultural
                        technology and crop health insights.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Security */}
            <div className="border border-border/50 rounded-lg">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Data Security</h2>
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    We implement industry-standard security measures to protect your personal information:
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-muted-foreground">SSL/TLS encryption for data transmission</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-muted-foreground">Secure cloud storage with access controls</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-muted-foreground">Regular security audits and monitoring</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-muted-foreground">Employee access restrictions and training</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Rights */}
            <div className="border border-border/50 rounded-lg">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Your Rights</h2>
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    You have the following rights regarding your personal information:
                  </p>

                  <div className="grid gap-4">
                    <div className="border border-border/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Access and Portability</h3>
                      <p className="text-muted-foreground text-sm">
                        Request a copy of your personal data and receive it in a structured, machine-readable format.
                      </p>
                    </div>

                    <div className="border border-border/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Correction</h3>
                      <p className="text-muted-foreground text-sm">
                        Update or correct any inaccurate or incomplete personal information we hold about you.
                      </p>
                    </div>

                    <div className="border border-border/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Deletion</h3>
                      <p className="text-muted-foreground text-sm">
                        Request deletion of your personal data, subject to certain legal and operational requirements.
                      </p>
                    </div>

                    <div className="border border-border/30 rounded-lg p-4">
                      <h3 className="font-semibold text-foreground mb-2">Opt-out</h3>
                      <p className="text-muted-foreground text-sm">
                        Unsubscribe from marketing communications and limit certain data processing activities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cookies and Tracking */}
            <div className="border border-border/50 rounded-lg">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Cookies and Tracking</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    We use cookies and similar technologies to enhance your experience, analyze usage patterns, and
                    provide personalized content. You can control cookie preferences through your browser settings.
                  </p>

                  <div className="bg-accent/50 border border-border/30 rounded-lg p-4">
                    <h3 className="font-semibold text-foreground mb-2">Types of Cookies We Use:</h3>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Essential cookies for basic functionality</li>
                      <li>• Analytics cookies to understand user behavior</li>
                      <li>• Preference cookies to remember your settings</li>
                      <li>• Marketing cookies for relevant advertisements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="border border-border/50 rounded-lg">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Contact Us</h2>
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    If you have questions about this Privacy Policy or want to exercise your rights, please contact us:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <a
                          href="mailto:privacy@cropvision.ai"
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          privacy@cropvision.ai
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Address</p>
                        <p className="text-foreground">New Delhi, India</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/30">
                    <p className="text-sm text-muted-foreground">
                      We will respond to your privacy-related inquiries within 30 days of receipt.
                    </p>
                  </div>
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
              <a href="/privacy" className="hover:text-foreground transition-colors">
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
