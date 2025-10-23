import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Mock services data - in a real app, this would come from an API
const services = [
  {
    id: 'document-management',
    name: 'Document Management',
    description: 'Comprehensive document storage, organization, and collaboration platform',
    features: ['Cloud Storage', 'Version Control', 'Team Collaboration', 'Advanced Search'],
    category: 'Productivity',
    popular: true
  },
  {
    id: 'digital-workflows',
    name: 'Digital Workflows',
    description: 'Automate and streamline your business processes with intelligent workflows',
    features: ['Process Automation', 'Custom Forms', 'Approval Routing', 'Analytics'],
    category: 'Automation',
    popular: false
  },
  {
    id: 'data-analytics',
    name: 'Data Analytics',
    description: 'Transform your data into actionable insights with powerful analytics tools',
    features: ['Real-time Dashboards', 'Custom Reports', 'Data Visualization', 'AI Insights'],
    category: 'Analytics',
    popular: true
  }
];

const ServicesIndex: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Enterprise Services
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover our comprehensive suite of enterprise-grade solutions designed to transform your business operations
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {services.map((service) => (
          <Card key={service.id} className="relative hover:shadow-lg transition-shadow duration-300">
            {service.popular && (
              <Badge className="absolute -top-2 -right-2 bg-primary">
                Popular
              </Badge>
            )}
            
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant="outline">{service.category}</Badge>
              </div>
              <CardTitle className="text-xl">{service.name}</CardTitle>
              <CardDescription className="text-base">
                {service.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, index) => (
                    <li key={index} className="text-sm text-gray-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link to={`/services/${service.id}`}>
                <Button className="w-full">
                  Learn More
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
        <p className="text-gray-600 mb-6">
          Our team can help you build a tailored solution for your specific business needs
        </p>
        <Button size="lg" variant="outline">
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default ServicesIndex;