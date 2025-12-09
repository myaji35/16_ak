'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import Image from 'next/image'

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  title?: string
  description?: string
}

export default function ImageModal({
  isOpen,
  onClose,
  imageSrc,
  title,
  description,
}: ImageModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        {title && (
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            {description && <DialogDescription>{description}</DialogDescription>}
          </DialogHeader>
        )}
        <div className="relative w-full h-[500px]">
          <Image
            src={imageSrc}
            alt={title || 'Image'}
            fill
            className="object-contain"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
