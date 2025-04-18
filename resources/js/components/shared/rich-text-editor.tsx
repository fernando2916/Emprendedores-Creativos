import { cn } from '@/lib/utils';
import {EditorContent, useEditor} from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Placeholder from '@tiptap/extension-placeholder'
import { Label } from '../ui/label';
import Link from '@tiptap/extension-link'
import Image from '@tiptap/extension-image'



type RichTextEditorProps = {
    value: string;
    onChange: (value: string) => void;
    label?: string;
    className?: string;
    placeholder?: string;
};

export const RichTextEditor = ({ 
  value,
  onChange, 
  label, 
  className,
  placeholder = 'Escribe algo...', 
}: RichTextEditorProps) => {

  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder,
      }),
      Link.configure({
        openOnClick: false,
      }),
      Image
    ],
    content: value,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange(html);
    },
  })

  if (!editor) return null


    return (
        <div className={cn('w-full', className)}>
            {label && <Label className="font-medium text-sm after:content-['*'] after:ml-0.5 after:text-red-500">{label}</Label>}

          <div className="min-h-[150px] disabled:bg-nav-900 disabled:border-nav-900 border-link-100 focus:shadow-link-200 w-full rounded-md border-2 bg-transparent p-2 outline-none placeholder:text-black focus:shadow-md dark:placeholder:text-gray-400">
          
            <EditorContent className='bg-transparent p-5 border border-link-100' editor={editor}/>
          </div>
        </div>
    );
};
