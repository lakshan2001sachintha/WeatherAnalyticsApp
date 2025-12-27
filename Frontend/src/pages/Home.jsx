import { Link } from 'react-router-dom'
import { WiDaySunny, WiCloud, WiRain, WiStrongWind } from 'react-icons/wi'
import { FaChartLine, FaShieldAlt, FaMobileAlt, FaBolt } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <WiCloud className="text-blue-300 text-8xl opacity-20" />
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <WiDaySunny className="text-yellow-300 text-7xl opacity-20" />
        </div>
        <div className="absolute bottom-20 left-1/4 animate-float-slow">
          <WiRain className="text-blue-400 text-6xl opacity-20" />
        </div>
        
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6 animate-fade-in">
              <FaBolt className="text-yellow-500" />
              <span className="text-sm font-semibold">Advanced Weather Analytics Platform</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-slide-up">
              Weather Comfort
              <br />
              Intelligence
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed animate-slide-up-delayed">
              Discover the most comfortable cities worldwide with our advanced comfort index algorithm. 
              Real-time weather data meets intelligent analytics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delayed">
              <Link 
                to="/dashboard" 
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                Explore Dashboard
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <button className="px-8 py-4 bg-white text-gray-700 rounded-full font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 border border-gray-200">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="container mx-auto px-6 pb-12 relative z-10">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Cities Tracked', value: '50+', icon: '🌍' },
              { label: 'Data Points', value: '10K+', icon: '📊' },
              { label: 'Updates/Hour', value: '120', icon: '⚡' },
              { label: 'Accuracy', value: '99.9%', icon: '🎯' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Powerful Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform combines cutting-edge technology with intuitive design to deliver unparalleled weather insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <FaChartLine className="text-4xl text-blue-600" />,
                title: 'Smart Analytics',
                description: 'Advanced comfort index algorithm analyzing temperature, humidity, wind, and more'
              },
              {
                icon: <FaBolt className="text-4xl text-yellow-500" />,
                title: 'Real-time Updates',
                description: 'Live weather data refreshed every 5 minutes with intelligent caching'
              },
              {
                icon: <FaShieldAlt className="text-4xl text-green-600" />,
                title: 'Secure & Private',
                description: 'Enterprise-grade security with Auth0 authentication and MFA support'
              },
              {
                icon: <FaMobileAlt className="text-4xl text-purple-600" />,
                title: 'Fully Responsive',
                description: 'Seamless experience across all devices - desktop, tablet, and mobile'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our intelligent system processes weather data through multiple stages to deliver accurate comfort scores
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Connection Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-purple-400 transform -translate-x-1/2"></div>

              {[
                {
                  step: '01',
                  title: 'Data Collection',
                  description: 'Fetch real-time weather data from OpenWeatherMap API for multiple cities worldwide'
                },
                {
                  step: '02',
                  title: 'Comfort Analysis',
                  description: 'Apply our proprietary algorithm to calculate comfort scores based on multiple parameters'
                },
                {
                  step: '03',
                  title: 'Smart Caching',
                  description: 'Cache results for 5 minutes to optimize performance and reduce API calls'
                },
                {
                  step: '04',
                  title: 'Beautiful Display',
                  description: 'Present insights through an intuitive, responsive interface with rankings and metrics'
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`relative flex items-center gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <h3 className="text-2xl font-bold mb-2 text-gray-800">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="hidden md:flex w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                    {item.step}
                  </div>
                  
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <WiStrongWind className="absolute top-10 left-10 text-9xl animate-float" />
          <WiDaySunny className="absolute bottom-10 right-10 text-9xl animate-float-delayed" />
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Experience Weather Intelligence?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of users who rely on our platform for accurate weather comfort insights
          </p>
          
          <Link 
            to="/dashboard"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full font-semibold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Get Started Now
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-xl mb-4">WeatherComfort</h3>
              <p className="text-sm">Advanced weather analytics platform for comfort intelligence.</p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Dashboard</a></li>
                <li><a href="#" className="hover:text-white transition">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 WeatherComfort Analytics. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
