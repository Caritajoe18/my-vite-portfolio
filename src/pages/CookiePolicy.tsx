
import ModernHeader from '@/components/ModernHeader';
import Footer from '@/components/Footer';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fafafa' }}>
      <ModernHeader />
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold pb-4 mb-6" style={{ color: '#1a1a1a', borderBottom: '2px solid #e0e0e0' }}>
              Cookie Policy for ContentLab.live
            </h1>
            <p className="text-lg mb-8" style={{ color: '#4a4a4a' }}>
              <strong>Effective Date:</strong> 1st of June 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#1a1a1a' }}>1. What Are Cookies?</h2>
              <p style={{ color: '#5a5a5a' }}>
                Cookies are small data files stored on your device to remember information about your visit.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#1a1a1a' }}>2. How We Use Cookies</h2>
              <p className="mb-2" style={{ color: '#5a5a5a' }}>We use cookies to:</p>
              <ul className="list-disc pl-6 space-y-1" style={{ color: '#5a5a5a' }}>
                <li>Analyze website usage with Google Analytics</li>
                <li>Serve personalized content</li>
                <li>Support advertising and retargeting</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#1a1a1a' }}>3. Types of Cookies</h2>
              <ul className="list-disc pl-6 space-y-1" style={{ color: '#5a5a5a' }}>
                <li><strong>Essential Cookies</strong> – required for website functionality</li>
                <li><strong>Analytics Cookies</strong> – help us understand user activity</li>
                <li><strong>Advertising Cookies</strong> – personalize ads you see</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#1a1a1a' }}>4. Third-Party Cookies</h2>
              <p className="mb-2" style={{ color: '#5a5a5a' }}>We allow third parties like Google to set cookies. Learn more or opt out:</p>
              <ul className="list-disc pl-6 space-y-1" style={{ color: '#5a5a5a' }}>
                <li>
                  <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: '#ea580c', textDecoration: 'underline' }}>
                    Google Analytics Opt-Out
                  </a>
                </li>
                <li>
                  <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" style={{ color: '#ea580c', textDecoration: 'underline' }}>
                    Google Ads Settings
                  </a>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#1a1a1a' }}>5. Managing Cookies</h2>
              <p style={{ color: '#5a5a5a' }}>
                You can disable or manage cookies via your browser settings, though doing so may limit site functionality.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#1a1a1a' }}>6. Changes</h2>
              <p style={{ color: '#5a5a5a' }}>
                We may update this Cookie Policy. Changes will be posted here with a revised effective date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#1a1a1a' }}>7. Contact</h2>
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

export default CookiePolicy;