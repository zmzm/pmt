import { ReactNode, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { CircularProgress } from '@task-flow/shared/ui/circular-progress';
import { Stack } from '@task-flow/shared/ui/stack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface PDFViewProps {
  filename: string;
  pagesScale?: number;
  Loader?: ReactNode;
  width: number;
}

type DocumentCallback = {
  numPages: number;
};

const PageSeparator = (): JSX.Element => (
  <hr style={{ height: 1, width: '100%' }} />
);

export function PDFView({
  filename,
  pagesScale = 1,
  Loader = (
    <Stack alignItems="center">
      <CircularProgress />
    </Stack>
  ),
  width,
}: PDFViewProps) {
  const [pages, setPages] = useState(0);

  const onDocumentLoad = ({ numPages }: DocumentCallback) => {
    setPages(numPages);
  };

  return (
    <Document
      externalLinkTarget="_blank"
      file={filename}
      onLoadSuccess={(params: DocumentCallback) => onDocumentLoad(params)}
      loading={Loader}
    >
      {Array.from(new Array(pages), (_, index) => (
        <div key={`page_${index + 1}`}>
          <Page width={width} pageNumber={index + 1} scale={pagesScale} />
          {index + 1 < pages && <PageSeparator />}
        </div>
      ))}
    </Document>
  );
}
