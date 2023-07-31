import styles from './app.module.scss';
import { createContext, useState } from 'react';

import { Button } from '../components/common/button';
import { CharacterInfo } from '../components/character-info';

import { useNoScroll } from '../hooks';
import { AppEternal } from './app-eternal';
import { AppPages } from './app-pages';

import { Character } from '../types';

interface IAppContext {
    currentItem: Character | null,
    setCurrentItem:(val:Character | null)=>void,
}

export const AppContext = createContext<IAppContext>({currentItem:null, setCurrentItem:(val)=>{}});

export const App = () => {
    const [currItem, setCurrItem] = useState<Character | null>(null);

    const [usePages, setUsePages] = useState<boolean>(false);
    

    //остановка скроллинга страницы, если открыто модальное окно (для удобства)
    useNoScroll(!!currItem);

    return (<>
        <header className={styles.header}>
            <h2 className={styles.title}>Rick And Morty Wiki</h2>
            <div className={styles.controls}>
                <Button variant={'secondary'} onClick={()=>setUsePages((curr)=>!curr)}>Switch Mode</Button>
                <Button variant={'secondary'} onClick={() => window.scrollTo(0, 0)}>To Top</Button>
            </div>
        </header>
        <AppContext.Provider value={{currentItem:currItem, setCurrentItem:(val)=>setCurrItem(val)}}>
            <main className={styles.main}>
                {usePages ? <AppPages /> : <AppEternal />}
                {currItem && <CharacterInfo />}
            </main>
        </AppContext.Provider>
    </>
    );
}