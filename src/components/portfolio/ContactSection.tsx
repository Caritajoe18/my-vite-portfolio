import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Github, Linkedin, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || 'No Subject',
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast({
        title: "Message sent",
        description: "Thank you for reaching out. I will get back to you soon.",
      });

      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 bg-card/50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-base tracking-wider uppercase">Get in Touch</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
            Let's Work Together
          </h2>
          <p className="max-w-2xl mx-auto" style={{ fontSize: '20px', lineHeight: '1.6' }}>
            Have a project in mind? I would love to hear about it. Send me a message and let's create something amazing together.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1" style={{ fontSize: '16px' }}>Email</h3>
                <a href={`mailto:${import.meta.env.VITE_EMAIL}`} className="hover:text-primary transition-colors" style={{ fontSize: '20px', lineHeight: '1.6' }}>
                  caritaemelie@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1" style={{ fontSize: '16px' }}>Location</h3>
                <p style={{ fontSize: '20px', lineHeight: '1.6' }}>Remote / Worldwide</p>
              </div>
            </div>

            {/* Availability */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1" style={{ fontSize: '16px' }}>Availability</h3>
                <p style={{ fontSize: '20px', lineHeight: '1.6' }}>Open for new projects</p>
              </div>
            </div>

            {/* Social links */}
            <div className="pt-6 border-t border-border">
              <h3 className="font-semibold text-foreground mb-4">Connect with me</h3>
              <div className="flex gap-4">
                <a
                  href={import.meta.env.VITE_GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-background border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <Github className="h-5 w-5 text-muted-foreground hover:text-primary" />
                </a>
                <a
                  href={import.meta.env.VITE_LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-background border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
                </a>
                <a
                  href={import.meta.env.VITE_MEDIUM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-background border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
                >
                  <svg className="h-5 w-5 text-muted-foreground hover:text-primary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={handleChange}
                  className="h-14 text-[18px]"
                  disabled={isSubmitting}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-14 text-[18px]"
                  disabled={isSubmitting}
                />
              </div>

              <Input
                type="text"
                name="subject"
                placeholder="Subject (Optional)"
                value={formData.subject}
                onChange={handleChange}
                className="h-14 text-[18px]"
                disabled={isSubmitting}
              />

              <Textarea
                name="message"
                placeholder="Your Message *"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="text-[18px] p-4"
                disabled={isSubmitting}
              />

              <div className="flex justify-between items-center">
                <p className="text-sm text-muted-foreground">* Required fields</p>
                <Button
                  type="submit"
                  size="lg"
                  className="px-8 group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
