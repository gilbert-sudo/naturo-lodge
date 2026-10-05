type PhotoProps = {
  src: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
};

export function Photo({ src, alt, className, loading = "lazy" }: PhotoProps) {
  return <img src={src} alt={alt} className={className} loading={loading} />;
}
