
import ModernHeader from '@/components/ModernHeader';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fafafa' }}>
      <ModernHeader />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold pb-4 mb-6" style={{ color: '#1a1a1a', borderBottom: '2px solid #e0e0e0' }}>
              Terms of Service for ContentLab.live
            </h1>
            <p className="text-lg mb-8" style={{ color: '#4a4a4a' }}>
              <strong>Effective Date:</strong> 1st of June 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#1a1a1a' }}>1. Acceptance of Terms</h2>
              <p style={{ color: '#5a5a5a' }}>
                By using ContentLab.live, you agree to these Terms and our{' '}
                <a href="/privacy-policy" style={{ color: '#ea580c', textDecoration: 'underline' }}>Privacy Policy</a>. 
                If you do not agree, please do not use the Site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#1a1a1a' }}>2. Use of the Site</h2>
              <p style={{ color: '#5a5a5a' }}>
                You agree not to interfere with the functionality of the Site, reverse-engineer any part of it, 
                use bots, or upload harmful content.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#1a1a1a' }}>3. Intellectual Property</h2>
              <p style={{ color: '#5a5a5a' }}>
                All content is owned or licensed by ContentLab.live and may not be reproduced without permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#1a1a1a' }}>4. Payments</h2>
              <p style={{ color: '#5a5a5a' }}>
                Payments are processed by Stripe. We do not store payment information. Stripe's terms and privacy apply.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#1a1a1a' }}>5. Disclaimers</h2>
              <p style={{ color: '#5a5a5a' }}>
                ContentLab.live is provided "as is" without warranties. We do not guarantee uninterrupted service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#1a1a1a' }}>6. Limitation of Liability</h2>
              <p style={{ color: '#5a5a5a' }}>
                We are not liable for any indirect or consequential damages.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#1a1a1a' }}>7. Third-Party Links</h2>
              <p style={{ color: '#5a5a5a' }}>
                We are not responsible for the content or privacy of third-party websites linked from our Site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#1a1a1a' }}>8. Changes to These Terms</h2>
              <p style={{ color: '#5a5a5a' }}>
                We may update these Terms. Continued use of the Site means you accept the updated Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#1a1a1a' }}>9. Governing Law</h2>
              <p style={{ color: '#5a5a5a' }}>
                These Terms are governed by the laws of Portugal.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#1a1a1a' }}>10. Contact</h2>
              <p style={{ color: '#5a5a5a' }}>
                Email: hello@contentlab.live
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;