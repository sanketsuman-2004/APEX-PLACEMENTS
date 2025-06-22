'use client';

import { useState } from 'react';
import { certifications } from '@/lib/data';
import { PageHeader } from '@/components/shared/PageHeader';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { ArrowUpRight, Award } from 'lucide-react';

export default function CertificationsPage() {
  const [filters, setFilters] = useState({ company: 'All', domain: 'All' });

  const handleFilterChange = (filterType: 'company' | 'domain', value: string) => {
    setFilters(prev => ({...prev, [filterType]: value}));
  };
  
  const filteredCerts = certifications.filter(cert => 
    (filters.company === 'All' || cert.company === filters.company) &&
    (filters.domain === 'All' || cert.domain === filters.domain)
  );
  
  const companies = ['All', ...[...new Set(certifications.map(c => c.company))]];
  const domains = ['All', ...[...new Set(certifications.map(c => c.domain))]];

  return (
    <div className="container mx-auto px-4 py-16">
      <PageHeader 
        title="Free Certifications" 
        description="Boost your resume with free, recognized certifications from leading tech companies like Google, Microsoft, and Amazon." 
      />
      
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <div>
          <span className="text-sm font-medium mr-2">Company:</span>
          {companies.map(company => (
            <Button 
              key={company} 
              variant={filters.company === company ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleFilterChange('company', company)}
              className="mr-2 mb-2"
            >
              {company}
            </Button>
          ))}
        </div>
         <div>
          <span className="text-sm font-medium mr-2">Domain:</span>
          {domains.map(domain => (
            <Button 
              key={domain} 
              variant={filters.domain === domain ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleFilterChange('domain', domain)}
              className="mr-2 mb-2"
            >
              {domain}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCerts.map((cert) => (
          <Card key={cert.id} className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:shadow-primary/20 hover:shadow-[0_0_30px] transition-all duration-300 flex flex-col group">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-xl pr-4">{cert.title}</CardTitle>
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  <Award className="h-6 w-6"/>
                </div>
              </div>
              <div className="flex gap-2 pt-2">
                 <Badge variant="outline">{cert.company}</Badge>
                 <Badge variant="secondary">{cert.domain}</Badge>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="text-base text-muted-foreground">{cert.description}</CardDescription>
            </CardContent>
            <CardFooter>
               <Button asChild className="w-full group bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-primary/40 hover:shadow-[0_0_20px] transition-all duration-300">
                <Link href={cert.link} target="_blank">
                  Claim Certificate <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
         {filteredCerts.length === 0 && (
          <p className="text-center text-muted-foreground col-span-full mt-8">No certifications found for the selected filters.</p>
        )}
      </div>
    </div>
  );
}
