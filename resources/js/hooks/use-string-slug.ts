import { useState } from "react"

export function useSlug(initialValue = "", onUpdate?: (slug: string) => void) {
  const [slug, setSlug] = useState(initialValue)

  const generateSlug = (str: string) => {
    let value = str.trim().toLowerCase()

    const from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;"
    const to   = "aaaaeeeeiiiioooouuuunc------"

    for (let i = 0; i < from.length; i++) {
      const regex = new RegExp(from.charAt(i), "g")
      value = value.replace(regex, to.charAt(i))
    }

    value = value
      .replace(/[^a-z0-9 -]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")

    setSlug(value)
    if (onUpdate) onUpdate(value)
    return value
  }

  return { slug, generateSlug }
}