import { useNavigate } from "react-router-dom"
export default function AgriculturalAIPage() {
    const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-background text-foreground grain-texture">
      {/* Navigation */}
      <nav className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="text-xl font-bold text-primary">CropVision AI</div>
              <div className="hidden md:flex space-x-6 text-sm text-muted-foreground">
                <a href="/solutions" className="hover:text-foreground transition-colors">
                  Solutions
                </a>
                <a href="/support" className="hover:text-foreground transition-colors">
                  Support
                </a>
              </div>
            </div>
            <button onClick={() => navigate("/cropXassistant")} className="px-4 py-2 text-sm border border-border rounded-md hover:bg-accent transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 px-6 agricultural-pattern">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full mb-6">
            AI-Powered Crop Intelligence
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
            Transform Agriculture with
            <span className="text-primary block">Intelligent Crop Diagnosis</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
            Empower farmers with instant, AI-driven crop disease detection. Upload an image, get precise diagnosis, and
            protect your harvest with confidence.
          </p>
          <button onClick={() => navigate("/cropXassistant")} className="px-4 py-2 text-sm border border-border rounded-md hover:bg-accent transition-colors">
              Get Started
          </button>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Product Image & Benefits */}
            <div className="space-y-12">
              {/* Product Showcase */}
              <div className="border border-border/50 rounded-lg overflow-hidden">
                <div className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <img
                      src="./static/Pasted image (7).png"
                      alt="Fresh agricultural produce"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Key Benefits */}
              <div>
                <h2 className="text-2xl font-bold mb-8 text-foreground">Key Capabilities</h2>
                <div className="space-y-6">
                  {[
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          />
                        </svg>
                      ),
                      title: "Instant AI Disease Detection",
                      description: "Advanced computer vision identifies crop diseases with 95% accuracy in seconds",
                    },
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                      ),
                      title: "Regional Agricultural Insights",
                      description: "Localized seasonal guides and farming recommendations for your specific region",
                    },
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                          />
                        </svg>
                      ),
                      title: "Smart Resource Management",
                      description: "Optimize water usage and soil health with data-driven recommendations",
                    },
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                          />
                        </svg>
                      ),
                      title: "Yield Optimization",
                      description: "Increase crop productivity while reducing losses through predictive analytics",
                    },
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ),
                      title: "Accessible Anywhere",
                      description: "Mobile-first design works offline, perfect for remote farming locations",
                    },
                  ].map((benefit, index) => (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Description & Contact */}
            <div className="space-y-12">
              {/* Product Description */}
              <div className="border border-border/50 rounded-lg">
                <div className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-sm font-medium text-primary">Revolutionary Technology</span>
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mb-4">
                      Bridging Technology and Traditional Farming
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">
                      In regions where crop loss due to undiagnosed diseases continues to challenge farmers, CropVision
                      AI delivers clarity and control. Our advanced computer vision technology provides instant,
                      accurate diagnosis of crop diseases—eliminating the need for costly lab visits and reducing
                      delays.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      This empowers farmers to act swiftly, apply targeted treatments, and protect their yield. More
                      than just an application, CropVision AI serves as a digital companion for modern agriculture,
                      combining AI precision with grassroots accessibility to support sustainable farming practices.
                    </p>
                    <div className="pt-4">
                      <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors w-full sm:w-auto">
                        Learn More About Our Technology
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="border border-border/50 rounded-lg">
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
                  <div className="space-y-4">
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
                          href="mailto:support@cropvision.ai"
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          support@cropvision.ai
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
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <a href="tel:+919311276404" className="text-foreground hover:text-primary transition-colors">
                          +91 93112 76404
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-border/50 mt-6">
                    <button className="w-full px-6 py-2 border border-border rounded-md hover:bg-accent transition-colors">
                      Schedule a Demo
                    </button>
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
              <a href="terms" className="hover:text-foreground transition-colors">
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
