"use client"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function SupportPage() {
    const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("faq")
  const [openFaq, setOpenFaq] = useState(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    priority: "medium",
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("[v0] Support form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      priority: "medium",
    })
    alert("Your support request has been submitted successfully!")
  }

  const faqData = [
    {
      question: "How accurate is the AI crop disease detection?",
      answer:
        "Our AI model achieves 95% accuracy in detecting common crop diseases. It has been trained on over 100,000 images of diseased and healthy crops from various regions and conditions.",
    },
    {
      question: "Can I use CropVision AI offline?",
      answer:
        "Yes! Our mobile app works offline for basic disease detection. However, you'll need an internet connection for advanced features like regional insights and real-time updates.",
    },
    {
      question: "What crops are supported by the AI system?",
      answer:
        "We currently support over 50 crop types including rice, wheat, corn, tomatoes, potatoes, cotton, soybeans, and many more. New crops are added regularly based on user demand.",
    },
    {
      question: "How much does CropVision AI cost?",
      answer:
        "We offer a free tier with 10 diagnoses per month. Premium plans start at $9.99/month for unlimited diagnoses and advanced features. Enterprise solutions are available for large farms.",
    },
    {
      question: "Is my farm data secure and private?",
      answer:
        "Absolutely. We use enterprise-grade encryption and never share your farm data with third parties. All images and location data are processed securely and can be deleted at any time.",
    },
    {
      question: "How do I get started with CropVision AI?",
      answer:
        "Simply download our mobile app or visit our web platform, create a free account, and start uploading crop images. Our AI will provide instant diagnosis and treatment recommendations.",
    },
  ]

  const supportCategories = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Getting Started",
      description: "Learn how to set up and use CropVision AI",
      articles: 12,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: "AI Diagnosis",
      description: "Understanding AI results and recommendations",
      articles: 8,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Mobile App",
      description: "Mobile app features and troubleshooting",
      articles: 15,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Account & Billing",
      description: "Manage your subscription and payments",
      articles: 6,
    },
  ]

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
                <a href="#" className="text-foreground">
                  Solutions
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
      <section className="relative py-20 px-6 agricultural-pattern">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full mb-6">
            24/7 Support Available
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance leading-tight">
            How can we
            <span className="text-primary block">help you today?</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
            Get instant answers, submit support tickets, or browse our comprehensive knowledge base to make the most of
            CropVision AI.
          </p>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">Browse Help Topics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportCategories.map((category, index) => (
              <div
                key={index}
                className="border border-border/50 rounded-lg p-6 hover:bg-accent/50 transition-colors cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{category.title}</h3>
                <p className="text-muted-foreground text-sm mb-3 leading-relaxed">{category.description}</p>
                <span className="text-xs text-primary font-medium">{category.articles} articles</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Support Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-8 border-b border-border/50">
            {[
              { id: "faq", label: "FAQ" },
              { id: "contact", label: "Contact Support" },
              { id: "status", label: "System Status" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* FAQ Tab */}
          {activeTab === "faq" && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="border border-border/50 rounded-lg">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-accent/50 transition-colors"
                    >
                      <span className="font-medium text-foreground">{faq.question}</span>
                      <svg
                        className={`w-5 h-5 text-muted-foreground transition-transform ${
                          openFaq === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-4 border-t border-border/50">
                        <p className="text-muted-foreground leading-relaxed pt-4">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Contact Support Tab */}
          {activeTab === "contact" && (
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Submit a Support Request</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Priority</label>
                      <select
                        name="priority"
                        value={formData.priority}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        <option value="urgent">Urgent</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                    >
                      Submit Support Request
                    </button>
                  </form>
                </div>

                {/* Contact Information */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">Other Ways to Reach Us</h2>
                  <div className="space-y-6">
                    <div className="border border-border/50 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-4">
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
                        <h3 className="font-semibold text-foreground">Email Support</h3>
                      </div>
                      <p className="text-muted-foreground mb-2">Get help via email</p>
                      <a href="mailto:support@cropvision.ai" className="text-primary hover:underline">
                        support@cropvision.ai
                      </a>
                      <p className="text-xs text-muted-foreground mt-2">Response within 24 hours</p>
                    </div>

                    <div className="border border-border/50 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-4">
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
                        <h3 className="font-semibold text-foreground">Phone Support</h3>
                      </div>
                      <p className="text-muted-foreground mb-2">Speak with our team</p>
                      <a href="tel:+919311276404" className="text-primary hover:underline">
                        +91 93112 76404
                      </a>
                      <p className="text-xs text-muted-foreground mt-2">Mon-Fri, 9 AM - 6 PM IST</p>
                    </div>

                    <div className="border border-border/50 rounded-lg p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                            />
                          </svg>
                        </div>
                        <h3 className="font-semibold text-foreground">Live Chat</h3>
                      </div>
                      <p className="text-muted-foreground mb-4">Chat with our support team</p>
                      <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                        Start Chat
                      </button>
                      <p className="text-xs text-muted-foreground mt-2">Available 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* System Status Tab */}
          {activeTab === "status" && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">System Status</h2>
              <div className="space-y-4">
                {[
                  { service: "AI Diagnosis API", status: "operational", uptime: "99.9%" },
                  { service: "Mobile App", status: "operational", uptime: "99.8%" },
                  { service: "Web Platform", status: "operational", uptime: "99.9%" },
                  { service: "Image Upload Service", status: "operational", uptime: "99.7%" },
                  { service: "Database", status: "operational", uptime: "99.9%" },
                  { service: "Authentication", status: "maintenance", uptime: "99.5%" },
                ].map((service, index) => (
                  <div key={index} className="border border-border/50 rounded-lg p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            service.status === "operational"
                              ? "bg-green-500"
                              : service.status === "maintenance"
                                ? "bg-yellow-500"
                                : "bg-red-500"
                          }`}
                        ></div>
                        <h3 className="font-semibold text-foreground">{service.service}</h3>
                      </div>
                      <div className="text-right">
                        <span
                          className={`text-sm font-medium ${
                            service.status === "operational"
                              ? "text-green-500"
                              : service.status === "maintenance"
                                ? "text-yellow-500"
                                : "text-red-500"
                          }`}
                        >
                          {service.status === "operational"
                            ? "Operational"
                            : service.status === "maintenance"
                              ? "Maintenance"
                              : "Down"}
                        </span>
                        <p className="text-xs text-muted-foreground">Uptime: {service.uptime}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 border border-border/50 rounded-lg bg-accent/20">
                <h3 className="font-semibold text-foreground mb-2">Scheduled Maintenance</h3>
                <p className="text-muted-foreground text-sm">
                  Authentication service maintenance scheduled for September 25, 2024, 2:00 AM - 4:00 AM IST. Users may
                  experience brief login delays during this period.
                </p>
              </div>
            </div>
          )}
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
