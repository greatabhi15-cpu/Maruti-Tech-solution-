import React, { useState } from 'react';
import { PageId, ContactFormData } from '../types';
import { COMPANY_DETAILS, SERVICE_CATEGORIES } from '../data/content';
import { TechGraphic } from '../components/TechGraphic';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle2,
  Clock,
  ExternalLink,
  ShieldAlert,
  ArrowRight,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    email: '',
    service: 'Laptop & Desktop Repair',
    issue: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable local ticket generation
    setTimeout(() => {
      const generatedId = `MTS-${new Date().getFullYear()}${String(new Date().getMonth() + 1).padStart(2, '0')}-${Math.floor(1000 + Math.random() * 9000)}`;
      setTicketId(generatedId);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const generateDirectWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hello Maruti Tech Solution,\n\nI need technical support:\n• Ticket Ref: ${ticketId || 'New Inquiry'}\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Service: ${formData.service}\n• Issue: ${formData.issue}\n\nPlease let me know the next diagnostic step.`
    );
    return `https://wa.me/918097975434?text=${text}`;
  };

  return (
    <div id="contact-page-container" className="flex flex-col min-h-screen">
      {/* ==================================================
          CONTACT — HERO
          ================================================== */}
      <section
        id="contact-hero"
        className="relative bg-[#F7F6F0] py-16 md:py-24 border-b border-[#103B28]/10 overflow-hidden"
      >
        <TechGraphic theme="dark" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#103B28]/15 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#D92716]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#103B28]">
                DIRECT TECHNICAL ASSISTANCE
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#0E2319] tracking-tight leading-[1.1]"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              LET&rsquo;S SOLVE
              <br />
              <span className="text-[#103B28]">YOUR IT ISSUE.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#0E2319]/80 leading-relaxed font-normal">
              Tell us what you&rsquo;re dealing with. We&rsquo;ll help you figure out the next step.
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================
          CONTACT — MAIN LAYOUT (LEFT: DETAILS, RIGHT: FORM)
          ================================================== */}
      <section
        id="contact-main"
        className="py-16 md:py-24 bg-white border-b border-[#103B28]/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* LEFT COLUMN: CONTACT DETAILS */}
            <div className="lg:col-span-5 text-left space-y-8">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#D92716] mb-2">
                  DIRECT CONTACT
                </h2>
                <h3 className="text-2xl font-bold text-[#0E2319]">
                  Reach Our Mumbai Workshop
                </h3>
                <p className="text-sm text-[#0E2319]/75 mt-1">
                  Connect via phone call, email, or visit our service center in Kandivali / Hanuman Nagar.
                </p>
              </div>

              <div className="space-y-6">
                {/* Phone Card */}
                <div className="p-6 rounded-2xl bg-[#F7F6F0]/80 border border-[#103B28]/10 flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-2xs border border-[#103B28]/10 text-[#D92716]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#103B28]/80">
                      Phone Number
                    </div>
                    <a
                      id="contact-details-phone"
                      href={`tel:${COMPANY_DETAILS.phoneClean}`}
                      className="text-lg font-bold text-[#0E2319] hover:text-[#103B28] transition-colors block mt-0.5"
                    >
                      {COMPANY_DETAILS.phone}
                    </a>
                    <div className="text-xs text-[#0E2319]/60 mt-1">
                      Direct technician helpline
                    </div>
                  </div>
                </div>

                {/* Email Card */}
                <div className="p-6 rounded-2xl bg-[#F7F6F0]/80 border border-[#103B28]/10 flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-2xs border border-[#103B28]/10 text-[#D92716]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#103B28]/80">
                      Email Address
                    </div>
                    <a
                      id="contact-details-email"
                      href={`mailto:${COMPANY_DETAILS.email}`}
                      className="text-base font-bold text-[#0E2319] hover:text-[#103B28] transition-colors block mt-0.5 break-all"
                    >
                      {COMPANY_DETAILS.email}
                    </a>
                    <div className="text-xs text-[#0E2319]/60 mt-1">
                      Official commercial & corporate queries
                    </div>
                  </div>
                </div>

                {/* Address Card */}
                <div className="p-6 rounded-2xl bg-[#F7F6F0]/80 border border-[#103B28]/10 flex items-start gap-4">
                  <div className="p-3 bg-white rounded-xl shadow-2xs border border-[#103B28]/10 text-[#D92716]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#103B28]/80">
                      Service Center Location
                    </div>
                    <p className="text-sm font-bold text-[#0E2319] mt-0.5 leading-snug">
                      {COMPANY_DETAILS.address.line1}
                      <br />
                      {COMPANY_DETAILS.address.line2}
                      <br />
                      {COMPANY_DETAILS.address.country}
                    </p>
                    <a
                      href="https://maps.google.com/?q=Akurli+Road,+Hanuman+Nagar,+Mumbai,+Maharashtra+400101"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#103B28] hover:underline mt-2"
                    >
                      <span>Open in Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                {/* WhatsApp Action */}
                <div className="p-6 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-[#25D366] text-white rounded-xl">
                      <MessageCircle className="w-5 h-5 fill-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#0E2319]">
                        Prefer Instant Messaging?
                      </div>
                      <div className="text-xs text-[#0E2319]/70">
                        Chat directly with our technician on WhatsApp
                      </div>
                    </div>
                  </div>

                  <a
                    id="contact-whatsapp-direct-btn"
                    href={COMPANY_DETAILS.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all shadow-xs shrink-0"
                  >
                    <span>CHAT ON WHATSAPP</span>
                  </a>
                </div>

                {/* Operating Hours */}
                <div className="flex items-center gap-2 text-xs text-[#0E2319]/70 pt-2">
                  <Clock className="w-4 h-4 text-[#103B28]" />
                  <span>{COMPANY_DETAILS.hours}</span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: CONTACT FORM */}
            <div className="lg:col-span-7 text-left">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#F7F6F0]/60 border border-[#103B28]/15 shadow-sm">
                {!submitted ? (
                  <>
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-[#0E2319]">
                        Describe Your Issue
                      </h3>
                      <p className="text-xs sm:text-sm text-[#0E2319]/70 mt-1">
                        Fill out the details below. We review every ticket and call or message back with a clear initial assessment.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Name */}
                        <div>
                          <label
                            htmlFor="form-name"
                            className="block text-xs font-bold uppercase tracking-wider text-[#0E2319] mb-1.5"
                          >
                            Full Name <span className="text-[#D92716]">*</span>
                          </label>
                          <input
                            id="form-name"
                            type="text"
                            required
                            placeholder="e.g. Gaurav Sharma"
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-xl bg-white border border-[#103B28]/20 focus:outline-hidden focus:border-[#103B28] focus:ring-1 focus:ring-[#103B28] text-sm text-[#0E2319] transition-colors"
                          />
                        </div>

                        {/* Phone */}
                        <div>
                          <label
                            htmlFor="form-phone"
                            className="block text-xs font-bold uppercase tracking-wider text-[#0E2319] mb-1.5"
                          >
                            Phone Number <span className="text-[#D92716]">*</span>
                          </label>
                          <input
                            id="form-phone"
                            type="tel"
                            required
                            placeholder="+91 98765 43210"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-xl bg-white border border-[#103B28]/20 focus:outline-hidden focus:border-[#103B28] focus:ring-1 focus:ring-[#103B28] text-sm text-[#0E2319] transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        {/* Email */}
                        <div>
                          <label
                            htmlFor="form-email"
                            className="block text-xs font-bold uppercase tracking-wider text-[#0E2319] mb-1.5"
                          >
                            Email Address <span className="text-gray-400 font-normal lowercase">(optional)</span>
                          </label>
                          <input
                            id="form-email"
                            type="email"
                            placeholder="name@example.com"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-xl bg-white border border-[#103B28]/20 focus:outline-hidden focus:border-[#103B28] focus:ring-1 focus:ring-[#103B28] text-sm text-[#0E2319] transition-colors"
                          />
                        </div>

                        {/* Service Required */}
                        <div>
                          <label
                            htmlFor="form-service"
                            className="block text-xs font-bold uppercase tracking-wider text-[#0E2319] mb-1.5"
                          >
                            Service Required <span className="text-[#D92716]">*</span>
                          </label>
                          <select
                            id="form-service"
                            value={formData.service}
                            onChange={(e) =>
                              setFormData({ ...formData, service: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-xl bg-white border border-[#103B28]/20 focus:outline-hidden focus:border-[#103B28] focus:ring-1 focus:ring-[#103B28] text-sm text-[#0E2319] transition-colors"
                          >
                            <option value="Laptop & Desktop Repair">Laptop &amp; Desktop Repair</option>
                            <option value="Hardware Upgrades (RAM / SSD / Battery)">Hardware Upgrades (RAM / SSD / Battery)</option>
                            <option value="OS & Software Installation">OS &amp; Software Installation</option>
                            <option value="Virus & Malware Removal">Virus &amp; Malware Removal</option>
                            <option value="Wired & Wireless Networking">Wired &amp; Wireless Networking</option>
                            <option value="IT Products & Accessories">IT Products &amp; Accessories</option>
                            <option value="Other Technical Issue">Other Technical Issue</option>
                          </select>
                        </div>
                      </div>

                      {/* Describe Your Issue */}
                      <div>
                        <label
                          htmlFor="form-issue"
                          className="block text-xs font-bold uppercase tracking-wider text-[#0E2319] mb-1.5"
                        >
                          Describe Your Issue <span className="text-[#D92716]">*</span>
                        </label>
                        <textarea
                          id="form-issue"
                          required
                          rows={4}
                          placeholder="e.g. Laptop turns on with black screen, fan spins loudly; or need high-speed Wi-Fi router setup for office..."
                          value={formData.issue}
                          onChange={(e) =>
                            setFormData({ ...formData, issue: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-white border border-[#103B28]/20 focus:outline-hidden focus:border-[#103B28] focus:ring-1 focus:ring-[#103B28] text-sm text-[#0E2319] transition-colors resize-y"
                        />
                      </div>

                      {/* Privacy reassurance */}
                      <div className="text-[11px] text-[#0E2319]/60 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#103B28] shrink-0" />
                        <span>Zero data inspection rule. Your devices and contact privacy are strictly respected.</span>
                      </div>

                      {/* Submit Button */}
                      <div className="pt-2">
                        <button
                          id="submit-contact-form-btn"
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full inline-flex items-center justify-center gap-2 bg-[#103B28] hover:bg-[#0E3022] active:bg-[#091f16] text-white font-bold text-xs uppercase tracking-wider py-4 rounded-xl transition-all duration-150 shadow-md hover:shadow-lg disabled:opacity-50"
                        >
                          {isSubmitting ? (
                            <span>Generating Diagnostic Ticket...</span>
                          ) : (
                            <>
                              <span>GET SUPPORT</span>
                              <Send className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  </>
                ) : (
                  /* Confirmation State */
                  <div
                    id="contact-confirmation-box"
                    className="text-center py-6 space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#103B28]/10 text-[#103B28] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8 text-[#103B28]" />
                    </div>

                    <div>
                      <span className="inline-block text-xs font-mono font-bold bg-[#103B28] text-white px-3 py-1 rounded-md mb-2">
                        {ticketId}
                      </span>
                      <h3 className="text-2xl font-bold text-[#0E2319]">
                        Inquiry Received!
                      </h3>
                      <p className="text-sm text-[#0E2319]/75 max-w-md mx-auto mt-2">
                        Thank you, <strong>{formData.name}</strong>. We have logged your request for <em>{formData.service}</em>. Our technician will call you shortly on <strong>{formData.phone}</strong>.
                      </p>
                    </div>

                    <div className="p-5 rounded-xl bg-white border border-[#103B28]/15 text-left text-xs text-[#0E2319]/80 space-y-1.5 max-w-md mx-auto">
                      <div>
                        <strong>Issue Summary:</strong> {formData.issue}
                      </div>
                      <div>
                        <strong>Location:</strong> Akurli Road, Hanuman Nagar, Mumbai
                      </div>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <a
                        id="forward-ticket-whatsapp-btn"
                        href={generateDirectWhatsAppUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-full transition-all shadow-md"
                      >
                        <MessageCircle className="w-4 h-4 fill-white" />
                        <span>Send Ticket to WhatsApp</span>
                      </a>

                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: '',
                            phone: '',
                            email: '',
                            service: 'Laptop & Desktop Repair',
                            issue: '',
                          });
                        }}
                        className="text-xs font-bold uppercase tracking-wider text-[#103B28] hover:underline px-4 py-2"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
