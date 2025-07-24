import Navigation from "@/app/components/navigation"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
            <p className="text-xl text-gray-600">Learn more about our story, mission, and values</p>
          </header>

          <div className="bg-white p-8 rounded-lg shadow-md mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Nayatel began in 2006 as a pioneering venture that brought Pakistan its first fiber-to-the-home (FTTH) 
              broadband network. Founded by a team of visionaries, the company aimed to transform how people experience the 
              internet by delivering consistent, high-quality connectivity. 
              
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Starting in Islamabad and Rawalpindi, Nayatel quickly earned a reputation for reliable service, 
              transparent billing, and responsive customer care. Over time, it expanded to multiple cities, introducing 
              value-added services like digital TV, smart surveillance, and enterprise solutions. Today, Nayatel remains at the 
              forefront of Pakistan’s broadband revolution, committed to innovation, integrity, and empowering a digital future.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To deliver reliable, high-speed fiber broadband and value-added digital services across Pakistan—empowering 
                homes, businesses, and communities through seamless connectivity, transparent service, and responsive customer care.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the country&apos;s most trusted and innovative digital infrastructure 
                provider—advancing Pakistan&apos;s digital landscape by expanding fiber access, fostering smarter living, 
                and enabling a connected future.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-gray-200 w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">👨‍💼</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Wahaj Siraj</h4>
                <p className="text-gray-600 mb-2">CEO & Founder</p>
                <p className="text-sm text-gray-500">Leading the company with vision and passion</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-200 w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">👩‍💻</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Aqeel Khurshid</h4>
                <p className="text-gray-600 mb-2">CTO</p>
                <p className="text-sm text-gray-500">Driving technical innovation and excellence</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-200 w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">👨‍🎨</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Khwaja Saad Saleem </h4>
                <p className="text-gray-600 mb-2">COO</p>
                <p className="text-sm text-gray-500">Creating beautiful and intuitive experiences</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
