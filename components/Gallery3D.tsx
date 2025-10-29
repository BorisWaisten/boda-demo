'use client'

interface Gallery3DProps {
  images: {
    src: string
    alt: string
    width: number
    height: number
  }[]
}

export default function Gallery3D({ images }: Gallery3DProps) {
  return (
    <div className="gallery-3d-container">
      <div className="gallery-3d">
        {images.map((image, index) => (
          <GalleryItem key={index} image={image} />
        ))}
      </div>
    </div>
  )
}

function GalleryItem({ image }: { image: { src: string; alt: string; width: number; height: number } }) {
  return (
    <div
      className="gallery-item"
      data-width={image.width}
      data-height={image.height}
    >
      {[...Array(9)].map((_, i) => (
        <div
          key={i}
          className={`gallery-plane plane-${i + 1}`}
          style={{
            backgroundImage: `url(${image.src})`,
          }}
          aria-hidden="true"
        />
      ))}
      <span className="sr-only">{image.alt}</span>
    </div>
  )
}
