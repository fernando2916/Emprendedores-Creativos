import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export const Faqs = () => {
  return (
    <section className="py-5 bg-slate-300 dark:bg-cont-100">
      <div className="grid grid-col-12 max-w-7xl mx-5 md:mx-auto">
        <div className="col-span-10 -start-2">
          <h2 className=" py-5 text-xl md:text-3xl font-semibold text-center">
            Consultas frecuentes antes de abrir una cuenta en Emprendedores
            Creativos
          </h2>
          <div className="py-5 max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if you
                  prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
