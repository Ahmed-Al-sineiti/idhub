import styles from "./Media.module.css";

// صورة لو المسار موجود، ولو null بيظهر مكان مؤقت مبني بالكود بنفس المقاس.
export default function Media({
  src,
  alt,
  className,
  label,
}: {
  src: string | null;
  alt: string;
  className?: string;
  label?: string;
}) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} className={`${styles.img} ${className ?? ""}`} loading="lazy" />;
  }
  return (
    <div className={`${styles.placeholder} ${className ?? ""}`} role="img" aria-label={alt}>
      {label ? <span className={styles.label}>{label}</span> : null}
    </div>
  );
}
