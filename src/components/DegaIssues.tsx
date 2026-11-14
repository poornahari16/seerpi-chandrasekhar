import { Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { siteData } from "@/data/siteData";

/** Convert a Google Drive "view" link into a direct download link. */
function toDownloadUrl(viewUrl: string): string {
  const id = viewUrl.split("/d/")[1]?.split("/")[0];
  return id
    ? `https://drive.google.com/uc?export=download&id=${id}`
    : viewUrl;
}

/** All 8 verified issues of డేగ ఆన్‌లైన్ మాసపత్రిక (మార్చి – అక్టోబర్ 2026). */
export function DegaIssues() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {siteData.degaIssues.map((issue) => (
        <Card key={issue.id} className="p-4 flex flex-col gap-3 hover:shadow-lg transition-shadow">
          <h4 className="font-serif-telugu text-lg font-semibold text-headline text-center">
            {issue.month}
          </h4>
          <Button
            asChild
            size="sm"
            variant="outline"
            className="w-full"
          >
            <a href={issue.url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              ఆన్‌లైన్‌లో చదవండి
            </a>
          </Button>
          <Button asChild size="sm" className="w-full">
            <a href={toDownloadUrl(issue.url)} target="_blank" rel="noopener noreferrer">
              <Download className="w-4 h-4 mr-2" />
              PDF డౌన్‌లోడ్
            </a>
          </Button>
        </Card>
      ))}
    </div>
  );
}
