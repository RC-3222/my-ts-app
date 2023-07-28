import { forwardRef, useContext } from 'react';
import { AppContext } from '../../app';
import styles from './card.module.scss';
import { Character } from '../../types';

type CardProps = {
    item:Character
}

export const Card = forwardRef(({item}:CardProps, ref:React.ForwardedRef<HTMLButtonElement>) => {
    const {setCurrentItem} = useContext(AppContext);

    return <button ref={ref} className={styles.card} data-item={item.id} onClick={()=>setCurrentItem(item)}>
        <img src={item.image} className={styles.cardImg} alt='character-img'/>
        <h3 className={styles.cardTitle}>{item.name}</h3>
    </button>
})