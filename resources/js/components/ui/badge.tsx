import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-auto",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        post:
          "border-transparent bg-purple-700 text-white capitalize",
        borrador:
          "border-transparent bg-slate-600 text-white capitalize",
        publicado:
          "border-transparent bg-green-700 text-white capitalize",
        producto:
          "border-transparent bg-cyan-700 text-white capitalize",
        curso:
          "border-transparent bg-fuchsia-700 text-white capitalize",
        recurso:
          "border-transparent bg-sky-700 text-white capitalize",
        presencial:
          "border-transparent bg-blue-700 text-white capitalize",
        hibrido:
          "border-transparent bg-teal-700 text-white capitalize",
        office:
          "border-transparent bg-green-700 text-white capitalize",
        verificado:
          "border-transparent bg-green-700 text-white capitalize",
        pendiente:
          "border-transparent bg-red-700 text-white capitalize",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
