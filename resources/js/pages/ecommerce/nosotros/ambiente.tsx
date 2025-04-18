import LayoutPrincipal from "@/layouts/layout";
import { Head } from "@inertiajs/react";

export default function ambiente() {
  return (
    <LayoutPrincipal>
      <Head title="Polílita del medio ambiente -"/>
      <div>
      
      <div className="justify-center mx-10 pt-5">
        <div className="flex justify-center mx-auto">

        <h3 className="text-4xl font-bold justify-center">Política de medio ambiente</h3>
        </div>
        <div className="space-y-5 my-5 text-justify p-5 rounded-md bg-slate-300 dark:bg-cont-100">
            <p className="">¡Nuestro compromiso es con el agua!</p>
            <p className="">En Creadores Creativos S.A.P.I. nos comprometemos a la tarea de conservar y reducir el impacto negativo sobre los recursos naturales, enfocando esfuerzos al recurso hídrico de nuestro país, reforzando nuestro compromiso con el medio ambiente.</p>
            <p className="">Esta misión la transmitimos hacía todos nuestros proveedores, especialmente en la elaboración de la pantalla para la elaboración de nuestros estampados de serigrafía, con los cuales trabajamos día a día para crear una conciencia ambiental en toda nuestra cadena de valor. Es por esto que desde el año 2020 se llevan a cabo auditorías ambientales durante las cuales nos aseguramos que el 100% del agua que se descarga, derivada del proceso de revelado, reduzca sus agentes contaminantes y así evitemos la contaminación de nuestros suelos, ríos y mares.</p>
            <p className="">De igual forma, promovemos proyectos de reutilización de agua y buenas prácticas ambientales, evitando así contribuir a la contaminación de los recursos naturales y el suelo. Respecto a nuestra eficiencia energética, nuestros talleres cuentan con equipo manual, presecadoresy hornos de gas y muy pocas planchas térmicas las cuales han logrado reducir la generación de 230,120 KwH con respecto al año 2022, disminuyendo hasta en un 53% nuestras emisiones de gases de efecto invernadero.</p>
        </div>
      </div>
    </div>
    </LayoutPrincipal>
  )
}
