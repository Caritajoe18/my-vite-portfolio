import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import ModernHeader from '@/components/ModernHeader';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Copy, Download, Video, Clock, Users, Target, Zap } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const YouTubeScriptGenerator = () => {
  const [formData, setFormData] = useState({
    topic: '',
    videoType: '',
    duration: '',
    audience: '',
    tone: '',
    keyPoints: ''
  });
  const [generatedScript, setGeneratedScript] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [showCopyModal, setShowCopyModal] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({ name: '', email: '' });
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const generateScript = () => {
    if (!formData.topic || !formData.videoType || !formData.duration) {
      toast({
        title: "Missing Information",
        description: "Please fill in the topic, video type, and duration fields.",
        variant: "destructive"
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate script generation (replace with actual AI integration)
    setTimeout(() => {
      const script = generateBasicScript(formData);
      setGeneratedScript(script);
      setIsGenerating(false);
      toast({
        title: "Script Generated!",
        description: "Your YouTube script has been created successfully.",
      });
    }, 2000);
  };

  const generateBasicScript = (data: typeof formData) => {
    const hooks = [
      `What if I told you that ${data.topic} could change everything you know about...`,
      `In the next ${data.duration} minutes, you'll discover ${data.topic} secrets that...`,
      `Stop! Before you scroll away, this ${data.topic} revelation will...`,
      `I've spent years studying ${data.topic}, and what I found will shock you...`
    ];

    const hook = hooks[Math.floor(Math.random() * hooks.length)];

    return `# ${data.topic} - YouTube Script

## Hook (0-15 seconds)
${hook}

## Introduction (15-30 seconds)
Hey everyone! Welcome back to the channel. Today we're diving deep into ${data.topic}, and by the end of this video, you'll have a complete understanding of how to ${data.topic.toLowerCase()} effectively.

${data.audience ? `This video is especially valuable for ${data.audience} who want to...` : ''}

Don't forget to hit that subscribe button and ring the notification bell if you find this valuable!

## Main Content
${data.keyPoints ? `Key points we'll cover:
${data.keyPoints.split('\n').map(point => `• ${point.trim()}`).join('\n')}` : ''}

### Section 1: Understanding ${data.topic}
[Explain the fundamentals and why it matters]

### Section 2: Practical Steps
[Provide actionable advice and strategies]

### Section 3: Common Mistakes to Avoid
[Address potential pitfalls and how to overcome them]

### Section 4: Pro Tips
[Share advanced insights and insider knowledge]

## Call to Action
If you found this helpful, smash that like button and let me know in the comments what your biggest takeaway was about ${data.topic}.

## Outro
Thanks for watching! Don't forget to subscribe for more content about ${data.topic} and related topics. I'll see you in the next video!

---
**Video Length:** ${data.duration}
**Target Audience:** ${data.audience || 'General audience'}
**Tone:** ${data.tone || 'Professional and engaging'}`;
  };

  const copyToClipboard = () => {
    setShowCopyModal(true);
  };

  const submitToGoogleScript = async (name: string, email: string) => {
    try {
      const formData = new FormData();
      formData.append('Name', name);
      formData.append('Email', email);
      
      await fetch('https://script.google.com/macros/s/AKfycbylGn_kow8ZFkBFgkpueMibwbbYxCqx_3Badn8kGXdJyBAn-F-m6BpzLEE3S7Z0g0zVwA/exec', {
        method: 'POST',
        body: formData
      });
    } catch (error) {
      console.error('Error submitting to Google Script:', error);
    }
  };

  const handleCopyWithInfo = async () => {
    if (!customerInfo.name || !customerInfo.email) {
      toast({
        title: "Missing Information",
        description: "Please enter your name and email to copy the script.",
        variant: "destructive"
      });
      return;
    }

    await submitToGoogleScript(customerInfo.name, customerInfo.email);
    navigator.clipboard.writeText(generatedScript);
    setShowCopyModal(false);
    setCustomerInfo({ name: '', email: '' });
    toast({
      title: "Script Copied!",
      description: `Thank you ${customerInfo.name}! The script has been copied to your clipboard.`,
    });
  };

  const downloadScript = () => {
    setShowDownloadModal(true);
  };

  const handleDownloadWithInfo = async () => {
    if (!customerInfo.name || !customerInfo.email) {
      toast({
        title: "Missing Information",
        description: "Please enter your name and email to download the script.",
        variant: "destructive"
      });
      return;
    }

    await submitToGoogleScript(customerInfo.name, customerInfo.email);
    const element = document.createElement('a');
    const file = new Blob([generatedScript], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `youtube-script-${formData.topic.replace(/\s+/g, '-').toLowerCase()}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    setShowDownloadModal(false);
    setCustomerInfo({ name: '', email: '' });
    toast({
      title: "Download Started!",
      description: `Thank you ${customerInfo.name}! Your script is downloading now.`,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="YouTube Script Generator - Create Engaging Video Scripts | ContentLab"
        description="Generate professional YouTube scripts instantly. Create engaging video content with our free script generator tool. Perfect for content creators and marketers."
        keywords="YouTube script generator, video script creator, content creation, YouTube video scripts, video marketing"
        url="https://contentlab.live/youtube-script-generator"
      />
      
      <ModernHeader />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-gray-900 mb-6 leading-[1.1] tracking-tight">
              YouTube Script
              <span className="block text-orange-600">
                Generator
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12 font-normal">
              Create engaging, professional YouTube scripts in minutes. Our AI-powered tool helps you structure content that captivates viewers and drives engagement.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="inline-flex items-center text-base text-gray-600 bg-gray-50 px-6 py-3 rounded-full font-normal">
                <Clock className="h-5 w-5 mr-2 text-orange-600" />
                Generate in 2 minutes
              </div>
              <div className="inline-flex items-center text-base text-gray-600 bg-gray-50 px-6 py-3 rounded-full font-normal">
                <Target className="h-5 w-5 mr-2 text-orange-600" />
                Professional structure
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Input Form */}
            <div className="lg:sticky lg:top-8 h-fit">
              <div className="bg-white rounded-3xl p-10">
                <div className="mb-8">
                  <h2 className="text-3xl font-semibold text-gray-900 mb-3">
                    Script Configuration
                  </h2>
                  <p className="text-gray-600 text-base font-normal">
                    Configure your video details to generate a professional script
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <Label htmlFor="topic" className="text-sm font-medium text-gray-900">Video Topic *</Label>
                    <Input
                      id="topic"
                      placeholder="e.g., How to Start a YouTube Channel"
                      value={formData.topic}
                      onChange={(e) => handleInputChange('topic', e.target.value)}
                      className="h-12 bg-gray-50 border-gray-200"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="videoType" className="text-sm font-medium text-gray-900">Video Type *</Label>
                    <Select value={formData.videoType} onValueChange={(value) => handleInputChange('videoType', value)}>
                      <SelectTrigger className="h-12 bg-gray-50 border-gray-200">
                        <SelectValue placeholder="Select video type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tutorial">Tutorial/How-to</SelectItem>
                        <SelectItem value="educational">Educational</SelectItem>
                        <SelectItem value="review">Review</SelectItem>
                        <SelectItem value="entertainment">Entertainment</SelectItem>
                        <SelectItem value="vlog">Vlog</SelectItem>
                        <SelectItem value="interview">Interview</SelectItem>
                        <SelectItem value="listicle">Top 10/Listicle</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="duration" className="text-sm font-medium text-gray-900">Video Duration *</Label>
                    <Select value={formData.duration} onValueChange={(value) => handleInputChange('duration', value)}>
                      <SelectTrigger className="h-12 bg-gray-50 border-gray-200">
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3-5 minutes">3-5 minutes</SelectItem>
                        <SelectItem value="5-8 minutes">5-8 minutes</SelectItem>
                        <SelectItem value="8-12 minutes">8-12 minutes</SelectItem>
                        <SelectItem value="12-15 minutes">12-15 minutes</SelectItem>
                        <SelectItem value="15+ minutes">15+ minutes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="audience" className="text-sm font-medium text-gray-900">Target Audience</Label>
                    <Input
                      id="audience"
                      placeholder="e.g., Beginner entrepreneurs, Tech enthusiasts"
                      value={formData.audience}
                      onChange={(e) => handleInputChange('audience', e.target.value)}
                      className="h-12 bg-gray-50 border-gray-200"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="tone" className="text-sm font-medium text-gray-900">Tone</Label>
                    <Select value={formData.tone} onValueChange={(value) => handleInputChange('tone', value)}>
                      <SelectTrigger className="h-12 bg-gray-50 border-gray-200">
                        <SelectValue placeholder="Select tone" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="professional">Professional</SelectItem>
                        <SelectItem value="casual">Casual & Friendly</SelectItem>
                        <SelectItem value="energetic">Energetic & Upbeat</SelectItem>
                        <SelectItem value="educational">Educational</SelectItem>
                        <SelectItem value="conversational">Conversational</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="keyPoints" className="text-sm font-medium text-gray-900">Key Points to Cover</Label>
                    <Textarea
                      id="keyPoints"
                      placeholder="Enter each key point on a new line..."
                      rows={4}
                      value={formData.keyPoints}
                      onChange={(e) => handleInputChange('keyPoints', e.target.value)}
                      className="bg-gray-50 border-gray-200 resize-none"
                    />
                  </div>

                  <Button 
                    onClick={generateScript} 
                    disabled={isGenerating}
                    className="w-full h-14 bg-black text-white hover:bg-gray-800 rounded-full font-medium"
                    size="lg"
                  >
                    {isGenerating ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white/30 border-t-white mr-3"></div>
                        Generating Your Script...
                      </>
                    ) : (
                      <>
                        <Zap className="h-5 w-5 mr-3" />
                        Generate Script
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>

            {/* Generated Script */}
            <div>
              <div className="bg-white rounded-3xl p-10">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-semibold text-gray-900">
                    Generated Script
                  </h2>
                  {generatedScript && (
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={copyToClipboard}
                        className="h-10 px-4 bg-gray-50 border-gray-200 hover:bg-gray-100"
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Copy
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={downloadScript}
                        className="h-10 px-4 bg-gray-50 border-gray-200 hover:bg-gray-100"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  )}
                </div>
                <p className="text-gray-600 text-base mb-6 font-normal">
                  Your professional YouTube script will appear here
                </p>
                <div>
                  {generatedScript ? (
                    <div className="bg-gray-50 border border-gray-200 p-6 rounded-2xl">
                      <pre className="whitespace-pre-wrap text-sm text-gray-900 font-mono leading-relaxed">
                        {generatedScript}
                      </pre>
                    </div>
                  ) : (
                    <div className="text-center py-16">
                      <div className="w-20 h-20 mx-auto mb-6 bg-gray-50 rounded-2xl flex items-center justify-center">
                        <Video className="h-10 w-10 text-gray-400" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Ready to Generate</h3>
                      <p className="text-gray-600 max-w-sm mx-auto font-normal">Fill out the form and click &quot;Generate Script&quot; to create your professional YouTube script</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
              Why creators choose our script generator
            </h2>
            <p className="text-xl text-gray-600 font-normal">
              Join thousands of content creators who trust our platform for professional script generation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <div className="bg-gray-50 rounded-3xl p-8 text-center">
              <div className="w-16 h-16 mx-auto bg-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Lightning Fast</h3>
              <p className="text-gray-600 leading-relaxed font-normal">
                Generate professional scripts in under 2 minutes. No more spending hours planning and structuring your content.
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 text-center">
              <div className="w-16 h-16 mx-auto bg-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Engage Viewers</h3>
              <p className="text-gray-600 leading-relaxed font-normal">
                Scripts designed with proven engagement techniques that hook viewers early and keep them watching.
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 text-center">
              <div className="w-16 h-16 mx-auto bg-orange-600 rounded-2xl flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Optimized Structure</h3>
              <p className="text-gray-600 leading-relaxed font-normal">
                Follow proven YouTube script structures that maximize retention and drive subscriber growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Copy Modal */}
      <Dialog open={showCopyModal} onOpenChange={setShowCopyModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-gray-900">Get Your Script Copy</DialogTitle>
            <DialogDescription className="text-gray-600">
              Please provide your details to copy the script to your clipboard.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="copy-name" className="text-gray-900">Name *</Label>
              <Input
                id="copy-name"
                placeholder="Enter your full name"
                value={customerInfo.name}
                onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
                className="bg-gray-50 border-gray-200"
              />
            </div>
            <div>
              <Label htmlFor="copy-email" className="text-gray-900">Email *</Label>
              <Input
                id="copy-email"
                type="email"
                placeholder="Enter your email address"
                value={customerInfo.email}
                onChange={(e) => setCustomerInfo(prev => ({ ...prev, email: e.target.value }))}
                className="bg-gray-50 border-gray-200"
              />
            </div>
            <div className="flex gap-2 pt-4">
              <Button variant="outline" onClick={() => setShowCopyModal(false)} className="flex-1">
                Cancel
              </Button>
              <Button onClick={handleCopyWithInfo} className="flex-1 bg-black text-white hover:bg-gray-800">
                <Copy className="h-4 w-4 mr-2" />
                Copy Script
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Download Modal */}
      <Dialog open={showDownloadModal} onOpenChange={setShowDownloadModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-gray-900">Download Your Script</DialogTitle>
            <DialogDescription className="text-gray-600">
              Please provide your details to download the script as a text file.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="download-name" className="text-gray-900">Name *</Label>
              <Input
                id="download-name"
                placeholder="Enter your full name"
                value={customerInfo.name}
                onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
                className="bg-gray-50 border-gray-200"
              />
            </div>
            <div>
              <Label htmlFor="download-email" className="text-gray-900">Email *</Label>
              <Input
                id="download-email"
                type="email"
                placeholder="Enter your email address"
                value={customerInfo.email}
                onChange={(e) => setCustomerInfo(prev => ({ ...prev, email: e.target.value }))}
                className="bg-gray-50 border-gray-200"
              />
            </div>
            <div className="flex gap-2 pt-4">
              <Button variant="outline" onClick={() => setShowDownloadModal(false)} className="flex-1">
                Cancel
              </Button>
              <Button onClick={handleDownloadWithInfo} className="flex-1 bg-black text-white hover:bg-gray-800">
                <Download className="h-4 w-4 mr-2" />
                Download Script
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default YouTubeScriptGenerator;