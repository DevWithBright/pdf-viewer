
import React, { useState } from 'react';
import PDFViewer from '@/components/PDFViewer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const PDFViewerPage = () => {
  const [pdfUrl, setPdfUrl] = useState<string>('/sample.pdf');
  const [urlInput, setUrlInput] = useState<string>('');
  const { toast } = useToast();

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrlInput(e.target.value);
  };

  const loadPdf = () => {
    if (urlInput.trim()) {
      setPdfUrl(urlInput);
    } else {
      toast({
        title: 'URL Required',
        description: 'Please enter a valid PDF URL',
        variant: 'destructive',
      });
    }
  };

  const loadSamplePdf = () => {
    setPdfUrl('/sample.pdf');
    setUrlInput('');
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">PDF Viewer</h1>
      
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Load a PDF</CardTitle>
          <CardDescription>
            Enter a URL to a PDF file or use the sample PDF
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2 mb-4">
            <Input
              type="text"
              placeholder="Enter PDF URL..."
              value={urlInput}
              onChange={handleUrlChange}
              className="flex-1"
            />
            <Button onClick={loadPdf} className="bg-blue-600 hover:bg-blue-700">
              Load PDF
            </Button>
          </div>
          <Button variant="outline" onClick={loadSamplePdf}>
            Load Sample PDF
          </Button>
        </CardContent>
      </Card>
      
      <PDFViewer pdfUrl={pdfUrl} />
    </div>
  );
};

export default PDFViewerPage;
