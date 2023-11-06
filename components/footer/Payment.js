import styles from './styles.module.scss'

export default function Payment() {
  return (
    <div className={styles.footer__payment}>
        <h3>WE ACCEPT</h3>
        <div className={styles.footer__flexwrap}>
        <img src="../../../payment/visa.webp" alt="" />
        <img src="../../../payment/mastercard.webp" alt="" />
        <img src="../../../payment/paypal.webp" alt="" />
        
      </div>

    </div>
  )
}
