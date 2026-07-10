import { useState } from 'react'
import { Mail, MapPin, ChevronDown, Send } from 'lucide-react'

const subjectOptions = [
  'General Inquiry',
  'Volunteering Opportunities',
  'Program Support',
  'Partnership Proposals',
]

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: subjectOptions[0],
    message: '',
  })

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // wire this up to your email service / API
    console.log(formData)
  }

  return (
    <section className="bg-mist px-12 py-16 grid md:grid-cols-2 grid-cols-1 gap-14 items-center" data-aos="fade-up">

      {/* Left — info */}
      <div>
        <span className="text-[11px] tracking-widest uppercase text-gold font-medium border border-gold px-3 py-1 rounded-full">
          Get in touch
        </span>

        <h2 className="text-5xl font-medium text-accent leading-tight tracking-tight mt-4 mb-5">
          Let's start a <span className="text-gold">conversation.</span>
        </h2>

        <p className="text-lg text-base leading-relaxed mb-9 max-w-sm">
          Whether you're looking to volunteer, seeking support, or interested
          in partnering with us — our team is ready to connect.
        </p>

        <div className="flex flex-col gap-5">
          <div className="flex gap-3.5 items-start">
            <div className="bg-accent rounded-xl p-2.5 flex-shrink-0">
              <Mail className="w-4.5 h-4.5 text-base-dark" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gold mb-0.5">Email Us</p>
              <p className="text-sm text-base leading-relaxed">
                <a href="mailto:cygnetsquare@gmail.com" className="hover:underline">cygnetsquare@gmail.com</a>
              </p>
            </div>
          </div>

          <div className="flex gap-3.5 items-start">
            <div className="bg-accent rounded-xl p-2.5 flex-shrink-0">
              <MapPin className="w-4.5 h-4.5 text-base-dark" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gold mb-0.5">Visit Us</p>
              <p className="text-sm text-base leading-relaxed">Montreal, Quebec.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right — form */}
      <div className="bg-accent/60 rounded-2xl p-8">
        <form onSubmit={handleSubmit}>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
            <div>
              <label className="text-sm font-medium text-gold block mb-1.5">Full Name</label>
              <input
                type="text"
                placeholder="Jane Doe"
                value={formData.name}
                onChange={handleChange('name')}
                className="w-full bg-white border border-base-dark-10 rounded-lg px-3.5 py-2.5 text-sm text-base-dark placeholder:text-gray-400 outline-none focus:border-gold"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gold block mb-1.5">Email Address</label>
              <input
                type="email"
                placeholder="jane@example.com"
                value={formData.email}
                onChange={handleChange('email')}
                className="w-full bg-white border border-base-dark-10 rounded-lg px-3.5 py-2.5 text-sm text-base-dark placeholder:text-gray-400 outline-none focus:border-gold"
              />
            </div>
          </div>

          <div className="mb-3.5">
              <label className="text-sm font-medium text-gold block mb-1.5">Subject</label>
            <div className="relative">
              <select
                value={formData.subject}
                onChange={handleChange('subject')}
                  className="w-full bg-white border border-base-dark-10 rounded-lg px-3.5 py-2.5 text-sm text-base-dark outline-none focus:border-gold appearance-none pr-10 cursor-pointer"
              >
                {subjectOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-base-mid absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          <div className="mb-4.5">
            <label className="text-sm font-medium text-gold block mb-1.5">Message</label>
            <textarea
              placeholder="How can we help you?"
              value={formData.message}
              onChange={handleChange('message')}
              rows={4}
              className="w-full bg-white border border-base-dark-10 rounded-lg px-3.5 py-2.5 text-sm text-base-dark placeholder:text-gray-400 outline-none focus:border-gold resize-none"
            />
          </div>

          <a
            href={`mailto:cygnetsquare@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent("Name: " + formData.name + "\nEmail: " + formData.email + "\n\n" + formData.message)}`}
            className="w-full bg-base text-on-base text-sm font-medium py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-base-mid duration-300 transition-colors"
          >
            Send Message <Send className="w-4 h-4" />
          </a>

          <p className="text-xs text-base-mid text-center mt-2.5">
            We typically respond within 24 hours.
          </p>
        </form>
      </div>

    </section>
  )
}

export default Contact