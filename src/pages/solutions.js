import { useNavigate } from "react-router-dom"
export default function CropsDiseasesPage() {
  const navigate = useNavigate();
    const cropData = [
    {
      name: "Rice",
      image: "./static/Pasted image (5).png",
      diseases: [
        { name: "Blast Disease", severity: "High", description: "Fungal disease causing lesions on leaves and stems" },
        {
          name: "Brown Spot",
          severity: "Medium",
          description: "Causes brown spots on leaves, reducing photosynthesis",
        },
        { name: "Bacterial Blight", severity: "High", description: "Bacterial infection leading to leaf yellowing" },
      ],
    },
    {
      name: "Wheat",
      image: "./static/Pasted image.png",
      diseases: [
        { name: "Rust Disease", severity: "High", description: "Orange-red pustules on leaves and stems" },
        { name: "Powdery Mildew", severity: "Medium", description: "White powdery coating on plant surfaces" },
        { name: "Septoria Leaf Blotch", severity: "Medium", description: "Dark spots with yellow halos on leaves" },
      ],
    },
    {
      name: "Corn (Maize)",
      image: "./static/Pasted image (2).png",
      diseases: [
        { name: "Northern Corn Leaf Blight", severity: "High", description: "Long, elliptical lesions on leaves" },
        { name: "Gray Leaf Spot", severity: "Medium", description: "Rectangular gray lesions between leaf veins" },
        { name: "Common Smut", severity: "Low", description: "Large, grayish-black galls on ears and tassels" },
      ],
    },
    {
      name: "Tomato",
      image: "./static/Pasted image (3).png",
      diseases: [
        { name: "Late Blight", severity: "High", description: "Dark, water-soaked lesions on leaves and fruits" },
        { name: "Early Blight", severity: "Medium", description: "Concentric ring spots on older leaves" },
        { name: "Fusarium Wilt", severity: "High", description: "Yellowing and wilting of lower leaves" },
      ],
    },
    {
      name: "Potato",
      image: "./static/Pasted image (4).png",
      diseases: [
        { name: "Late Blight", severity: "High", description: "Water-soaked lesions turning brown and black" },
        { name: "Common Scab", severity: "Medium", description: "Rough, corky lesions on tuber surface" },
        { name: "Blackleg", severity: "High", description: "Black, soft rot at stem base" },
      ],
    },
    {
      name: "Cotton",
      image: "./static/Pasted image (6).png",
      diseases: [
        { name: "Bollworm", severity: "High", description: "Caterpillars feeding on cotton bolls" },
        { name: "Fusarium Wilt", severity: "High", description: "Vascular disease causing plant wilting" },
        { name: "Bacterial Blight", severity: "Medium", description: "Angular leaf spots with yellow halos" },
      ],
    },
  ]

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "High":
        return "text-red-400 bg-red-400/10"
      case "Medium":
        return "text-yellow-400 bg-yellow-400/10"
      case "Low":
        return "text-green-400 bg-green-400/10"
      default:
        return "text-muted-foreground bg-muted"
    }
  }

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
            Comprehensive Crop Database
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
            Major Crops &<span className="text-primary block">Common Diseases</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
            Explore our comprehensive database of major agricultural crops and their most common diseases. Learn to
            identify, prevent, and treat crop diseases effectively.
          </p>
        </div>
      </section>

      {/* Crops Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cropData.map((crop, index) => (
              <div
                key={index}
                className="border border-border/50 rounded-lg overflow-hidden hover:border-border transition-colors"
              >
                {/* Crop Image */}
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5">
                  <img
                    src={crop.image || "/placeholder.svg"}
                    alt={`${crop.name} field`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Crop Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-2xl font-bold text-foreground">{crop.name}</h2>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                      <span className="text-sm text-muted-foreground">Major Crop</span>
                    </div>
                  </div>

                  {/* Diseases List */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground mb-3">Common Diseases</h3>
                    {crop.diseases.map((disease, diseaseIndex) => (
                      <div
                        key={diseaseIndex}
                        className="border border-border/30 rounded-lg p-4 hover:bg-accent/50 transition-colors"
                      >
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-medium text-foreground">{disease.name}</h4>
                          <span
                            className={`px-2 py-1 text-xs font-medium rounded-full ${getSeverityColor(disease.severity)}`}
                          >
                            {disease.severity}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{disease.description}</p>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <div className="mt-6 pt-4 border-t border-border/30">
                    <button
                        onClick={() => {
                            const wikiLinks = {
                            Rice: "https://en.wikipedia.org/wiki/Rice",
                            Maize: "https://en.wikipedia.org/wiki/Maize",
                            Wheat: "https://en.wikipedia.org/wiki/Wheat",
                            Tomato: "https://en.wikipedia.org/wiki/Barley",
                            Cotton: "https://en.wikipedia.org/wiki/Cotton",
                            Potato: "https://en.wikipedia.org/wiki/Potato"
                            // add more crops here if needed
                            }

                            if (wikiLinks[crop.name]) {
                            window.open(wikiLinks[crop.name], "_blank")
                            } else {
                            alert("No Wikipedia page mapped for this crop.")
                            }
                        }}
                        className="w-full px-4 py-2 text-sm border border-border rounded-md hover:bg-accent transition-colors"
                        >
                        Learn More About {crop.name}
                    </button>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-6 border-t border-border/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Global Impact</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Understanding crop diseases is crucial for global food security and sustainable agriculture.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "20-40%", label: "Global Crop Loss", description: "Annual losses due to diseases" },
              { number: "600+", label: "Known Diseases", description: "Documented crop diseases worldwide" },
              { number: "2.5B", label: "Farmers Affected", description: "Smallholder farmers globally" },
              { number: "95%", label: "AI Accuracy", description: "Disease detection precision" },
            ].map((stat, index) => (
              <div key={index} className="text-center border border-border/50 rounded-lg p-6">
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </div>
            ))}
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
