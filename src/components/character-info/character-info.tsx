import { useContext } from "react";
import { AppContext } from "../../app";
import { createPortal } from "react-dom";
import { InfoItem } from "./info-item";

import styles from './character-info.module.scss';

export const CharacterInfo = () => {
    const { currentItem, setCurrentItem } = useContext(AppContext)

    return createPortal(<div className={styles.wrapper}>
        <div onClick={() => setCurrentItem(null)} className={styles.backdrop}></div>
        <div className={styles.modal}>
            <img className={styles.backgroundImg} src={currentItem?.image} alt="character-img" />
            <div className={styles.info}>
                <ul className={styles.list}>
                    <InfoItem title={'Name:'} content={currentItem?.name as string} />
                    <InfoItem title={'Origin:'} content={currentItem?.origin?.name as string} />
                    <InfoItem title={'Status:'} content={currentItem?.status as string} />
                    <InfoItem title={'Location:'} content={currentItem?.location?.name as string} />
                    <InfoItem title={'Species:'} content={currentItem?.species as string} />
                    <InfoItem title={'Gender:'} content={currentItem?.gender as string} />
                </ul>
            </div>
        </div>
    </div>, document.body)
}