import { Layout } from "@/components/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "నామం కనీసం 2 అక్షరాలలో ఉండాలి"),
  email: z.string().email("సరైన ఈమెయిల్ చిరునామాను నమోదు చేయండి"),
  subject: z.string().min(2, "విషయం కనీసం 2 అక్షరాలలో ఉండాలి"),
  message: z.string().min(10, "సందేశం కనీసం 10 అక్షరాలలో ఉండాలి"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    console.log("Contact form submitted:", values);
  };

  return (
    <Layout>
      <div className="container max-w-4xl mx-auto px-6 pt-16 pb-20">
        <ScrollReveal>
          <h1 className="newspaper-headline text-3xl md:text-4xl mb-2">
            సంప్రదించండి
          </h1>
          <div className="section-divider mb-12" />
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <ScrollReveal>
            <Card className="p-8">
              <h2 className="font-serif-telugu text-2xl font-bold text-headline mb-6">
                సంప్రదింపు వివరాలు
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">ఈమెయిల్</h4>
                    <p className="text-muted-foreground">
                      Chandrasekharseerpi@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 12c0-5-5-9-9-9-9 0-9 9 0 18 9 0 9-9 0-18" />
                      <path d="M2 12h20" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">ఫేస్‌బుక్</h4>
                    <a
                      href="https://www.facebook.com/valmiki.chandu.899849"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Facebook Profile
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="12" x2="17.51" y2="12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">ఇన్‌స్టాగ్రామ్</h4>
                    <a
                      href="https://www.instagram.com/incognitic_emperor_2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Instagram Profile
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal delay={100}>
            <Card className="p-8">
              <h2 className="font-serif-telugu text-2xl font-bold text-headline mb-6">
                సందేశం పంపండి
              </h2>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>పేరు</FormLabel>
                        <FormControl>
                          <Input placeholder="మీ పేరు" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ఈమెయిల్</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="మీ ఈమెయిల్ చిరునామా"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>విషయం</FormLabel>
                        <FormControl>
                          <Input placeholder="సందేశం గురించి సంక్షిప్తంగా" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>సందేశం</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="మీ సందేశాన్ని ఇక్కడ రాయండి"
                            rows={5}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    పంపండి
                  </Button>
                </form>
              </Form>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </Layout>
  );
}
