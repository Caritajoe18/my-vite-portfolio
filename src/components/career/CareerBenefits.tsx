
import { Card, CardContent } from '@/components/ui/card';
import { Users, Clock, MapPin } from 'lucide-react';

const CareerBenefits = () => {
  return (
    <section className="py-20" style={{ backgroundColor: '#f5f5f5' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#1a1a1a' }}>Why Join ContentLab?</h2>
          <p className="text-xl" style={{ color: '#4a4a4a' }}>What makes us a great place to work</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Users className="h-8 w-8" style={{ color: '#1a1a1a' }} />,
              title: "Remote-First Culture",
              description: "Work from anywhere with flexible hours and a focus on results, not time spent online."
            },
            {
              icon: <Clock className="h-8 w-8" style={{ color: '#1a1a1a' }} />,
              title: "Growth Opportunities",
              description: "Develop your skills with challenging projects and continuous learning opportunities."
            },
            {
              icon: <MapPin className="h-8 w-8" style={{ color: '#1a1a1a' }} />,
              title: "Creative Freedom",
              description: "Express your creativity while working on innovative video projects for exciting SaaS companies."
            }
          ].map((benefit, index) => (
            <Card key={index} className="text-center border" style={{ backgroundColor: '#ffffff', borderColor: '#e0e0e0' }}>
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#1a1a1a' }}>{benefit.title}</h3>
                <p style={{ color: '#5a5a5a' }}>{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerBenefits;
