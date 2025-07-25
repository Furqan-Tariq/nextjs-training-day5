//import Navigation from "@/app/components/navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Navigation /> */}

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our Home Page</h1>
            <p className="text-xl text-gray-600">Discover amazing content and explore what we have to offer</p>
          </header>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Featured Content</h2>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                Learn More
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Latest Updates</h2>
              <p className="text-gray-600 mb-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
              </p>
              <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                View Updates
              </button>
            </div>
          </div>

          <section className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Why Choose Us?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Fast & Reliable</h3>
                <p className="text-gray-600">Quick loading times and dependable service</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Innovative</h3>
                <p className="text-gray-600">Cutting-edge solutions for modern needs</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Supportive</h3>
                <p className="text-gray-600">24/7 customer support and assistance</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
