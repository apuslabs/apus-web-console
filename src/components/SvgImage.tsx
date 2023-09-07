import Image from 'next/image'

export default function ({ src, alt }: { src: any; alt: string }) {
    return <Image src={src.src} width={src.width} height={src.height} alt={alt} />
}