import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Separator } from '../../components/ui/separator';

interface ServiceData {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  integrations: string[];
  pricing: {
    starter: string;
    professional: string;
    enterprise: string;
  };
  category: string;
}

const Service: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  
  // Mock service data - in a real app, this would come from an API
  const serviceData: ServiceData = {
    id: serviceId || 'document-management',
    title: 'Document Management',
    description: 'Comprehensive document storage, organization, and retrieval system for enterprise use.',
    longDescription: 'Our Document Management service provides a complete solution for storing, organizing, and retrieving documents in enterprise environments. With advanced search capabilities, version control, and secure access permissions, you can ensure your documents are always available when and where you need them.',
    features: [
      'Cloud Storage',
      'Version Control',
      'Access Permissions',
      'Search & Filter',
      'OCR Capabilities',
      'Document Collaboration',
      'Automated Workflows',
      'Mobile Access'
    ],
    benefits: [
      'Reduce document retrieval time by up to 75%',
      'Ensure compliance with industry regulations',
      'Improve team collaboration and productivity',
      'Secure document storage with enterprise-grade encryption',
      '24/7 access from any device or location'
    ],
    useCases: [
      'Legal document management and compliance',
      'HR document storage and employee onboarding',
      'Financial record keeping and audit trails',
      'Healthcare patient record management',
      'Educational institution document handling'
    ],
    integrations: [
      'Microsoft Office 365',
      'Google Workspace',
      'Salesforce',
      'SAP',
      'Oracle',
      'Custom API integrations'
    ],
    pricing: {
      starter: '$29/month',
      professional: '$99/month',
      enterprise: 'Custom pricing'
    },
    category: 'Core Services'
  };

  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <Badge className="mb-4 bg-indigo-500 text-white">
                {serviceData.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {serviceData.title}
              </h1>
              <p className="text-xl text-indigo-100 mb-8 max-w-2xl">
                {serviceData.longDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3">
                  Get Started
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-3">
                  Schedule Demo
                </Button>
              </div>
            </div>
            <div className="flex-1 lg:text-right">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-2xl font-bold mb-4">Starting from</h3>
                <div className="text-4xl font-bold mb-2">{serviceData.pricing.starter}</div>
                <p className="text-indigo-100">per user/month</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
            <TabsTrigger value="pricing">Pricing</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Benefits</CardTitle>
                  <CardDescription>
                    Key advantages of using our {serviceData.title} service
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {serviceData.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Use Cases</CardTitle>
                  <CardDescription>
                    Common scenarios where our service excels
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {serviceData.useCases.map((useCase, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{useCase}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="features" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Service Features</CardTitle>
                <CardDescription>
                  Comprehensive feature set designed for enterprise needs
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {serviceData.features.map((feature, index) => (
                    <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <svg className="w-6 h-6 text-indigo-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="font-medium text-gray-900">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="integrations" className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Integrations</CardTitle>
                <CardDescription>
                  Seamlessly connect with your existing tools and platforms
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {serviceData.integrations.map((integration, index) => (
                    <div key={index} className="flex items-center justify-center p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <span className="text-sm font-medium text-gray-700">{integration}</span>
                    </div>
                  ))}
                </div>
                <Separator className="my-8" />
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">Need a custom integration?</h3>
                  <p className="text-gray-600 mb-4">We can build custom integrations for your specific requirements.</p>
                  <Button>Contact Our Team</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pricing" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                  <CardDescription>For small teams getting started</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-4">{serviceData.pricing.starter}</div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Up to 10 users</li>
                    <li>• 100GB storage</li>
                    <li>• Basic support</li>
                    <li>• Standard features</li>
                  </ul>
                  <Button className="w-full mt-6">Choose Starter</Button>
                </CardContent>
              </Card>

              <Card className="border-indigo-500 border-2">
                <CardHeader>
                  <CardTitle className="text-indigo-600">Professional</CardTitle>
                  <CardDescription>Most popular for growing teams</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-4">{serviceData.pricing.professional}</div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Up to 50 users</li>
                    <li>• 1TB storage</li>
                    <li>• Priority support</li>
                    <li>• All features included</li>
                  </ul>
                  <Button className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700">Choose Professional</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>For large organizations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-4">{serviceData.pricing.enterprise}</div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Unlimited users</li>
                    <li>• Unlimited storage</li>
                    <li>• 24/7 phone support</li>
                    <li>• Custom integrations</li>
                  </ul>
                  <Button variant="outline" className="w-full mt-6">Contact Sales</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to transform your document management?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Join thousands of enterprises that trust our platform. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 text-lg">
                Start Free Trial
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 text-lg">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;