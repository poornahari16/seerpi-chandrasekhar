export function Footer() {
  return (
    <footer className="border-t border-divider mt-24">
      <div className="container max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <h4 className="font-serif-telugu text-lg font-bold mb-2">శీర్పి చంద్రశేఖర్</h4>
            <p className="text-muted-foreground text-sm font-sans-telugu leading-relaxed max-w-xs">
              యువ కవి · రచయిత · సామాజిక చైతన్యకారుడు
            </p>
          </div>
          <div className="text-sm text-muted-foreground font-sans-telugu space-y-1">
            <p>సంప్రదించండి</p>
            <p>email@example.com</p>
            <p>విశాఖపట్నం, ఆంధ్రప్రదేశ్</p>
          </div>
        </div>
        <div className="section-divider mt-8 mb-4" />
        <p className="text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} శీర్పి చంద్రశేఖర్. సర్వ హక్కులు ప్రత్యేకించబడినవి.
        </p>
      </div>
    </footer>
  );
}
