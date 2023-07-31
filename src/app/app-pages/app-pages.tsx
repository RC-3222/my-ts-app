import { useCallback, useEffect, useState } from 'react';
import { Button } from '../../components/common/button';
import { Loader } from '../../components/common/loader';
import { Card } from '../../components/card';
import { Response } from '../../types';

import styles from './app-pages.module.scss';

export const AppPages = () => {

    const [isLoading, setIsLoading] = useState(false);

    const [pageNumber, setPageNumber] = useState(1);

    const [data, setData] = useState<Response | null>(null)

    const loadItems = useCallback(async () => {

        setIsLoading(true);

        setData(null);

        try {
            const resp = await fetch(`https://rickandmortyapi.com/api/character?page=${pageNumber}`);

            const data = await resp.json();
            setData(data)

        } catch (err) {
            console.error(err);
        }

        setIsLoading(false)
    }, [pageNumber])

    useEffect(() => {
        loadItems()
    }, [pageNumber, loadItems])

    return (<>
        {isLoading
            ? <Loader />
            : <div className={styles.cardGrid}>{data?.results?.map((item) => <Card item={item} key={item.id} />)}</div>}
        <div className={styles.pageControls}>
            {data?.info?.pages && pageNumber > 1 && <Button onClick={() => {
                setPageNumber((curr) => curr - 1)
            }}>Previous</Button>}
            <span className={styles.pageNumber}>{pageNumber}</span>
            {data?.info?.pages && pageNumber < data.info.pages && <Button onClick={() => {
                //if (data?.info?.pages && pageNumber >= data.info.pages) return;
                setPageNumber((curr) => curr + 1)
            }}>Next</Button>}
        </div>
    </>
    );
}