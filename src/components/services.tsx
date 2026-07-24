"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
const items = [
  {
    value: "kit",
    trigger: "Brand Kit",
    content:
      "A fast, premium-quality starter identity for new brands.",
  },
  {
    value: "webkit",
    trigger: "Web Design Kit",
    content:
      "Billing occurs automatically at the start of each billing cycle. We accept all major credit cards, PayPal, and ACH transfers for enterprise customers. You'll receive an invoice via email after each payment.",
  },
  {
    value: "socialkit",
    trigger: "Social Media Kit",
    content:
      "Billing occurs automatically at the start of each billing cycle. We accept all major credit cards, PayPal, and ACH transfers for enterprise customers. You'll receive an invoice via email after each payment.",
  },
  {
    value: "lyricvideo",
    trigger: "Lyric Video",
    content:
      "You can cancel your subscription anytime from your account settings. There are no cancellation fees or penalties. Your access will continue until the end of your current billing period.",
  },
  {
    value: "musicvideo",
    trigger: "Music Video",
    content:
      "You can cancel your subscription anytime from your account settings. There are no cancellation fees or penalties. Your access will continue until the end of your current billing period.",
  },
]
export default function Services() {
  return (
    <div className="w-full bg-stone-950 py-10 px-10 rounded-3xl mt-20">

      <h5 className="text-stone-50 text-4xl font-bold mb-8">
        <b className="text-[#45EAD9] text-5xl">*</b> SERVICES
      </h5>
      
      <div>
        <Accordion defaultValue={["plans"]} className="flex flex-col gap-8">
          {items.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger>{item.trigger}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

        

    </div>
  )
}