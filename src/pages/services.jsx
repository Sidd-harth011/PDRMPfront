import { useNavigate } from "react-router-dom";
export default function ServicesPage() {
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

      {/* Hero Section */}
      <section className="relative py-24 px-6 agricultural-pattern">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full mb-6">
            Comprehensive Agricultural Solutions
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
            Our Complete Suite of
            <span className="text-primary block">Agricultural AI Services</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
            Discover how our advanced AI technology transforms every aspect of modern farming, from disease detection to
            yield optimization.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Core Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our AI-powered platform offers comprehensive solutions for modern agricultural challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                ),
                title: "AI Disease Detection",
                description:
                  "Advanced computer vision technology identifies crop diseases with 95% accuracy in real-time",
                features: [
                  "Instant photo analysis",
                  "200+ disease database",
                  "Treatment recommendations",
                  "Offline capability",
                ],
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    />
                  </svg>
                ),
                title: "Weather Intelligence",
                description: "Hyperlocal weather forecasting and climate analysis for optimal farming decisions",
                features: ["7-day forecasts", "Pest risk alerts", "Irrigation timing", "Harvest planning"],
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                    />
                  </svg>
                ),
                title: "Soil Health Monitoring",
                description: "Comprehensive soil analysis and nutrient management recommendations",
                features: [
                  "pH level tracking",
                  "Nutrient deficiency alerts",
                  "Fertilizer optimization",
                  "Soil composition analysis",
                ],
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                ),
                title: "Yield Prediction",
                description: "Data-driven yield forecasting to optimize harvest planning and market strategies",
                features: ["Harvest timing", "Quality predictions", "Market price insights", "Storage recommendations"],
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                ),
                title: "Smart Irrigation",
                description: "AI-powered water management system for optimal crop hydration and resource conservation",
                features: ["Water usage optimization", "Automated scheduling", "Drought monitoring", "Cost reduction"],
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                title: "Crop Monitoring",
                description: "Continuous crop health tracking with early warning systems for potential issues",
                features: ["Growth stage tracking", "Stress detection", "Pest monitoring", "Quality assessment"],
              },
            ].map((service, index) => (
              <div
                key={index}
                className="border border-border/50 rounded-lg p-6 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-6 bg-accent/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Advanced Technology Stack</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Built on cutting-edge AI and machine learning technologies for reliable, accurate results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                {
                  title: "Computer Vision AI",
                  description:
                    "Deep learning models trained on millions of crop images for precise disease identification",
                  accuracy: "95%",
                },
                {
                  title: "Machine Learning Analytics",
                  description: "Predictive algorithms that learn from local farming patterns and environmental data",
                  accuracy: "92%",
                },
                {
                  title: "Satellite Integration",
                  description: "Real-time satellite imagery analysis for large-scale crop monitoring and assessment",
                  accuracy: "88%",
                },
                {
                  title: "IoT Sensor Network",
                  description: "Connected sensors for continuous monitoring of soil, weather, and crop conditions",
                  accuracy: "97%",
                },
              ].map((tech, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-bold text-sm">{tech.accuracy}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{tech.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{tech.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border border-border/50 rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-6 text-foreground">Platform Capabilities</h3>
              <div className="space-y-4">
                {[
                  { label: "Disease Detection Accuracy", value: 95 },
                  { label: "Processing Speed", value: 88 },
                  { label: "Offline Functionality", value: 92 },
                  { label: "Multi-language Support", value: 85 },
                  { label: "Mobile Optimization", value: 98 },
                ].map((metric, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">{metric.label}</span>
                      <span className="text-sm font-medium text-foreground">{metric.value}%</span>
                    </div>
                    <div className="w-full bg-border/30 rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${metric.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Plans */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-foreground">Service Plans</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Choose the perfect plan for your farming operation, from individual farmers to large agricultural
              enterprises
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "Free",
                description: "Perfect for small-scale farmers getting started with AI agriculture",
                features: [
                  "5 disease scans per month",
                  "Basic crop recommendations",
                  "Weather alerts",
                  "Community support",
                ],
                popular: false,
              },
              {
                name: "Professional",
                price: "$29/month",
                description: "Comprehensive solution for serious farmers and agricultural professionals",
                features: [
                  "Unlimited disease scans",
                  "Advanced analytics",
                  "Yield predictions",
                  "Priority support",
                  "Soil health monitoring",
                  "Custom recommendations",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "Full-scale solution for agricultural businesses and cooperatives",
                features: [
                  "Multi-farm management",
                  "API access",
                  "Custom integrations",
                  "Dedicated support",
                  "Advanced reporting",
                  "Team collaboration",
                ],
                popular: false,
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`border rounded-lg p-6 relative ${plan.popular ? "border-primary bg-primary/5" : "border-border/50"}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{plan.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-2">{plan.price}</div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <svg
                        className="w-4 h-4 text-primary flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-2 px-4 rounded-md transition-colors ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border border-border hover:bg-accent"
                  }`}
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-accent/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Ready to Transform Your Farming?</h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Join thousands of farmers who are already using CropVision AI to increase yields and reduce losses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 text-base bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
              Start Free Trial
            </button>
            <button onClick={()=>{navigate("/demo")}} className="px-8 py-3 text-base border border-border rounded-md hover:bg-accent transition-colors">
              Schedule Demo
            </button>
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
