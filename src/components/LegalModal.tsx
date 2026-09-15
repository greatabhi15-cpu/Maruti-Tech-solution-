import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div
      id="legal-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        id="legal-modal-content"
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-[#103B28]/15"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-[#103B28]/10">
          <div className="flex items-center gap-3">
            {type === 'privacy' ? (
              <ShieldCheck className="w-6 h-6 text-[#103B28]" />
            ) : (
              <FileText className="w-6 h-6 text-[#103B28]" />
            )}
            <h3 className="text-xl font-bold text-[#103B28]">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
            </h3>
          </div>
          <button
            id="close-legal-modal-btn"
            onClick={onClose}
            className="p-1 text-gray-500 hover:text-gray-900 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-4 text-sm text-[#0E2319]/80 leading-relaxed space-y-4">
          {type === 'privacy' ? (
            <>
              <p>
                <strong>Maruti Tech Solution</strong> (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), located at Akurli Road, Hanuman Nagar, Mumbai, is committed to safeguarding the privacy and digital security of our customers and website visitors.
              </p>
              <h4 className="text-base font-semibold text-[#103B28]">1. Data Collection & Device Privacy</h4>
              <p>
                When you bring your computer, laptop, or storage drive for repair or diagnostic services, we strictly adhere to a zero-inspection data privacy rule. Customer personal files, photos, emails, and credentials are never accessed, copied, or shared unless explicitly authorized for verified data recovery operations.
              </p>
              <h4 className="text-base font-semibold text-[#103B28]">2. Contact Information</h4>
              <p>
                Contact details (name, phone number, email address) provided via our service forms or WhatsApp conversations are solely utilized to update you regarding your service ticket, quote approvals, and equipment pickup. We never sell or distribute contact records to third-party telemarketers.
              </p>
              <h4 className="text-base font-semibold text-[#103B28]">3. Direct Inquiries</h4>
              <p>
                For any data privacy questions or requests to purge past communication records, please contact us directly at <a href="mailto:gauravinfotech5@gmail.com" className="text-[#103B28] underline">gauravinfotech5@gmail.com</a>.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to <strong>Maruti Tech Solution</strong>. By requesting diagnostics, repairs, software setups, or IT hardware products, you acknowledge and agree to the following terms:
              </p>
              <h4 className="text-base font-semibold text-[#103B28]">1. Diagnostic Estimates & Approvals</h4>
              <p>
                All repair evaluations are communicated transparently before proceeding with parts replacement or rework. Work begins only upon customer approval of the diagnosis and cost estimate.
              </p>
              <h4 className="text-base font-semibold text-[#103B28]">2. Genuine Parts & Hardware Warranty</h4>
              <p>
                Upgrades and replacement parts (RAM, SSDs, screens, batteries, chargers) carry manufacturer or service warranties as specified on your invoice receipt. Physical damage or liquid exposure after handover is not covered under standard repair warranty.
              </p>
              <h4 className="text-base font-semibold text-[#103B28]">3. Data Backup Responsibility</h4>
              <p>
                While our technicians utilize safe protocols to protect customer drives, we always encourage clients to maintain backups of critical files prior to service. Data backup services can also be conducted on request before operating system reinstallation.
              </p>
              <h4 className="text-base font-semibold text-[#103B28]">4. Service Location</h4>
              <p>
                Akurli Road, Hanuman Nagar, Mumbai, Maharashtra – 400101. Tel: +91 8097975434.
              </p>
            </>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-[#103B28]/10 flex justify-end">
          <button
            id="acknowledge-legal-modal-btn"
            onClick={onClose}
            className="px-5 py-2.5 bg-[#103B28] hover:bg-[#0E3022] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
