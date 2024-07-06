import styles from "./styles.module.scss"
import Image from 'next/image';

const Card = () => {
    return <div className={styles.card}>
        <Image className={styles.image} src="/images/qr-code.png" alt="QR Code" width={288} height={288}  />
        <div className={styles.text}>
            <h1>Improve your front-end skills by building projects</h1>
            <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
    </div>
}

export default Card;