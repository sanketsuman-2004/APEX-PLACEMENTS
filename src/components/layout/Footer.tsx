import Link from 'next/link';
import { Code2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Code2 className="h-6 w-6 text-primary" />
            <span className="font-bold">Apex Placement</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Apex Placement. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
