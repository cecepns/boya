import { useState } from 'react';
import { Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format pesan untuk WhatsApp
    const whatsappMessage = `*Pesan Baru dari Website*

*Nama:* ${formData.name}
*Nomor Telepon:* ${formData.phone}
*Email:* ${formData.email}

*Pesan:*
${formData.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const phoneNumber = '6281220008601'; // Ganti dengan nomor WhatsApp aktual
    
    // Buka WhatsApp dengan pesan yang sudah diformat
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    
    // Reset form setelah submit
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: ''
    });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in learning more about Boya International Learning Center. Could you please provide more information?");
    window.open(`https://wa.me/6281220008601?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Ready to start your learning journey? Get in touch with us today and discover how we can help you achieve your educational goals.
          </p>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side - Contact Information */}
          <div data-aos="fade-right">
            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-primary-500 p-3 rounded-lg flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Email Address</h4>
                  <p className="text-gray-600">info@boyalearningcenter.com</p>
                  <a
                    href="mailto:info@boyalearningcenter.com"
                    className="text-primary-500 hover:text-primary-600 font-medium transition-colors"
                  >
                    Send us an email →
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="bg-primary-500 p-3 rounded-lg flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Our Location</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Galeri Niaga Mediterania II<br />
                    Jl. Pantai Indah Utara 2, RT.1/RW.16<br />
                    Kapuk Muara, Kecamatan Penjaringan<br />
                    Jakarta Utara, DKI Jakarta 14460
                  </p>
                  <button className="text-primary-500 hover:text-primary-600 font-medium transition-colors">
                    View on Google Maps →
                  </button>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start space-x-4">
                <div className="bg-primary-500 p-3 rounded-lg flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">WhatsApp</h4>
                  <p className="text-gray-600 mb-2">Quick response via WhatsApp</p>
                  <button
                    onClick={handleWhatsApp}
                    className="text-primary-500 hover:text-primary-600 font-medium transition-colors"
                  >
                    Chat with us →
                  </button>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start space-x-4">
                <div className="bg-primary-500 p-3 rounded-lg flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Operating Hours</h4>
                  <div className="text-gray-600 space-y-1">
                    <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                    <p>Saturday: 9:00 AM - 6:00 PM</p>
                    <p>Sunday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div data-aos="fade-left">
            <div className="bg-white p-8 lg:p-12 rounded-2xl shadow-xl border border-gray-100">
              <div className="text-center mb-8">
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-primary-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Kirim Pesan
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Isi form di bawah ini dan kami akan menghubungi Anda melalui WhatsApp
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nama */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>

                {/* Nomor Telepon */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nomor Telepon <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="08xx xxxx xxxx"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="email@example.com"
                  />
                </div>

                {/* Isi Pesan */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Isi Pesan <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl"
                >
                  <MessageCircle className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                  Kirim via WhatsApp
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  Atau chat langsung dengan kami:
                </p>
                <button
                  onClick={handleWhatsApp}
                  className="mt-3 text-primary-500 hover:text-primary-600 font-medium transition-colors inline-flex items-center"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Chat via WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;