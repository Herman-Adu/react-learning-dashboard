import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { faq } from '@/data/faq'

export function FAQ() {
  return (
    <>
      <p className='mb-3 font-semibold uppercase tracking-tight text-muted-foreground'>
        Frequently Asked Questions
      </p>
      <Accordion type='multiple' className='w-full border-t'>
        {faq.map(({ title, content }, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className='gap-3 py-3 text-left text-lg font-semibold'>
              {title}
            </AccordionTrigger>
            <AccordionContent className='text-base'>{content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  )
}
