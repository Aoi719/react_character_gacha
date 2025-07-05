import styles from './Button.module.css'
import { Link } from "react-router-dom";

export default function Button({ to, children, variant = "default" }) {
  const variantClass = styles[`variant-${variant}`] || "";

  return (
    <div className={styles.button}>
      <Link className={`${styles.button} ${variantClass}`} to={to}>{children}</Link>
    </div>
  )
}
