import { cn } from "@/lib/utils"
import {  useEffect, useRef, useState } from "react"
import { FaUpload } from "react-icons/fa"

interface FileInputProps {
  onChange: (file: File | null) => void
  fileName?: string
  defaultImage?: string
}

export default function FileInput({onChange, fileName, defaultImage}: FileInputProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [dragOver, setDragOver] = useState(false)

  useEffect(() => {
    if(defaultImage && !previewUrl) {
      setPreviewUrl(defaultImage)
    }
  }, [defaultImage, previewUrl])

  const handleFile = (file: File | null) => {
    onChange(file)

    if(file && file.type.startsWith("image/")) {
    const reader = new FileReader()
    reader.onload = (e) => setPreviewUrl(e.target?.result as string)
    reader.readAsDataURL(file)
    } else {
      setPreviewUrl(null)
    }
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleFile(e.target.files?.[0] || null)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setDragOver(false)
    const file = e.dataTransfer.files[0]
    if(file) handleFile(file)
  }


  return (
    <div className="space-y-2">
      <input 
      type="file" 
      ref={inputRef} 
      className="hidden" 
      onChange={handleChange} 
      />
      <div 
        onClick={() => inputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={(e) => {
          e.preventDefault()
          setDragOver(true)
        }}
        onDragLeave={() => setDragOver(false)}
        className={cn(
           "border-2 border-dashed rounded-md p-6 text-center cursor-pointer transition",
          dragOver ? "border-link-100/70 bg-muted/50" : "border-link-100"
        )}
      >
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
          <FaUpload className="w-6 h-6" />
          <p className="text-sm">
            {fileName || "Arrastra un archivo aquí o haz clic para seleccionarlo"}
          </p>
        </div>
      </div>
      {previewUrl && (
        <div className="mt-2">
          <img
            src={previewUrl}
            alt="Preview"
            className="max-h-48 rounded-md shadow"
          />
        </div>
      )}
    </div>
  )
}
