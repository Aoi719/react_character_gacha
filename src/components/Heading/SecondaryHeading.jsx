import styles from './SecondaryHeading.module.css'

export default function SecondaryHeading({ children, variant = "default" }) {
  const variantClass = styles[`variant-${variant}`] || "";
  return (
    <h3 className={`${styles.secondaryHeading} ${variantClass}`}>{children}</h3>
  )
}
