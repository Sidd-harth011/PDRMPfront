"use client"
import { Groq } from "groq-sdk";
import { useState } from "react"
import { useNavigate } from "react-router-dom"
export default function AIAssistantPage() {
  const navigate = useNavigate();
  //const groq = new Groq({ apiKey: process.env.REACT_APP_GROQ_API });
  const [selectedFile, setSelectedFile] = useState(null)
  const [previewUrl, setPreviewUrl] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResult, setAnalysisResult] = useState("")
  const [chatMessages, setChatMessages] = useState([
    {
      type: "assistant",
      message:
        "Hello! I'm your CropVision AI assistant. I can help you with crop diseases, farming techniques, and agricultural best practices. How can I assist you today?",
    },
  ])
  const [userMessage, setUserMessage] = useState("")

  const handleFileSelect = (event) => {
    const file = event.target.files[0]
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file)
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
      setAnalysisResult("")
    }
  }

const handleAnalyzeImage = async () => {
  if (!selectedFile) return;

  setIsAnalyzing(true);

  try {
    const formData = new FormData();
    formData.append("image", selectedFile);

    const response = await fetch("https://sidd-harth011-finalProBack.hf.space/predict", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Failed to analyze image");
    }

    const data = await response.json();
    // data = { prediction: "...", confidence: 0.92, status: "success" }

    const resultText = `Analysis Complete: ${data.prediction}\nConfidence: ${(data.confidence * 100).toFixed(2)}%`;
    setAnalysisResult(resultText);
  } catch (error) {
    console.error(error);
    setAnalysisResult("Error analyzing image. Please try again.");
  } finally {
    setIsAnalyzing(false);
  }
};

  const handleSendMessage = async () => {
  if (!userMessage.trim()) return;

  // Add the user's message immediately
  const updatedMessages = [
    ...chatMessages,
    { type: "user", message: userMessage },
  ];
  setChatMessages(updatedMessages);
  setUserMessage("");

  try {
    const GROQ_API_KEY = process.env.REACT_APP_GROQ_API;
    
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-20b", // Updated to a valid Groq model
        messages: [
          {
            role: "system",
            content: "You are an agricultural expert assistant specialized in crop diseases, farming techniques, and agricultural best practices."
          },
          {
            role: "user",
            content: userMessage
          }
        ],
        max_tokens: 1000,
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error?.message || "Failed to get response from Groq API");
    }

    // Extract the assistant's response
    const assistantMessage = data.choices[0]?.message?.content || "Sorry, I couldn't process your request.";

    // Add assistant message to chat
    setChatMessages(prevMessages => [
      ...prevMessages,
      { type: "assistant", message: assistantMessage }
    ]);
  } catch (error) {
    console.error("Error calling Groq API:", error);
    setChatMessages(prevMessages => [
      ...prevMessages,
      { type: "assistant", message: "Sorry, I'm experiencing technical difficulties. Please try again later." }
    ]);
  }
};


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

      {/* Header */}
      <section className="py-16 px-6 agricultural-pattern">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full mb-6">
            AI-Powered Agriculture
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance leading-tight">
            Your Personal
            <span className="text-primary block">Agricultural AI Assistant</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
            Get instant crop disease diagnosis and expert agricultural advice powered by advanced AI technology.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* AI Chat Assistant */}
            <div className="border border-border/50 rounded-lg">
              <div className="p-6 border-b border-border/50">
                <div className="flex items-center gap-3 mb-2">
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
                  <div>
                    <h2 className="text-xl font-bold text-foreground">AI Agricultural Assistant</h2>
                    <p className="text-sm text-muted-foreground">Ask questions about farming, crops, and diseases</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Chat Messages */}
                <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                  {chatMessages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          msg.type === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-accent text-accent-foreground"
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{msg.message}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chat Input */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                    placeholder="Ask about crop diseases, farming techniques..."
                    className="flex-1 px-3 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Crop Photo Analysis */}
            <div className="border border-border/50 rounded-lg">
              <div className="p-6 border-b border-border/50">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground">Crop Disease Analysis</h2>
                    <p className="text-sm text-muted-foreground">Upload a photo for instant AI diagnosis</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* File Upload Area */}
                <div className="mb-6">
                  <label className="block">
                    <div
                      className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
                        previewUrl
                          ? "border-primary/50 bg-primary/5"
                          : "border-border hover:border-primary/50 hover:bg-accent/50"
                      }`}
                    >
                      {previewUrl ? (
                        <div className="space-y-4">
                          <img
                            src={previewUrl || "/placeholder.svg"}
                            alt="Crop preview"
                            className="max-h-48 mx-auto rounded-lg object-cover"
                          />
                          <p className="text-sm text-muted-foreground">Click to change image</p>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <svg
                            className="w-12 h-12 mx-auto text-muted-foreground"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                            />
                          </svg>
                          <div>
                            <p className="text-foreground font-medium">Upload crop image</p>
                            <p className="text-sm text-muted-foreground">Click to browse or drag and drop</p>
                          </div>
                        </div>
                      )}
                    </div>
                    <input type="file" accept="image/*" onChange={handleFileSelect} className="hidden" />
                  </label>
                </div>

                {/* Analyze Button */}
                <button
                  onClick={handleAnalyzeImage}
                  disabled={!selectedFile || isAnalyzing}
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mb-6"
                >
                  {isAnalyzing ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                      Analyzing Image...
                    </div>
                  ) : (
                    "Analyze Crop Image"
                  )}
                </button>

                {/* Analysis Results */}
                {analysisResult && (
                  <div className="border border-border/50 rounded-lg p-4 bg-accent/30">
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Analysis Results
                    </h3>
                    <div className="text-sm text-foreground leading-relaxed whitespace-pre-line">{analysisResult}</div>
                  </div>
                )}
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
