import Image from 'next/image'

interface BackgroundImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
  objectPosition?: string
}

export default function BackgroundImage({ src, alt, className = '', priority = false, objectPosition }: BackgroundImageProps) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        style={objectPosition ? { objectPosition } : undefined}
        priority={priority}
        quality={90}
      />
      <div className="absolute inset-0 bg-black/20"></div>
    </div>
  )
}
