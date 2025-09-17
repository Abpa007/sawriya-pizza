import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import  ContactForm  from "@/components/sections/contact-form";

export default function ContactPage() {
  return (
    <>
      <main className="flex-1">
        <ContactForm />
      </main>
    </>
  );
}