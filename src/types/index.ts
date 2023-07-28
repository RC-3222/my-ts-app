export type Character = {
    id:number,
    image:string,
    name:string,
    origin: {
        name:string
    },
    status: string,
    location: {
        name:string
    },
    gender:string,
    species:string,
}

export type Response = {
    info: {
        pages:number,
        next:string | null,
        prev:string | null,
    }
    results: Character[],
}