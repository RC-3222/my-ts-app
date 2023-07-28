import styles from './info-item.module.scss'

export type InfoItemProps = {
    title: string,
    content: string
}

export const InfoItem = ({ title, content }: InfoItemProps) => <li className={styles.item}>
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.content}>{content}</p>
</li>
