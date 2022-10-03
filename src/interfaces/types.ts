export type ImageApi = {
    id: string
    alt_description: string
    created_at: string
    width: string
    height: string
    likes: number
    urls: {
        full: string
        small: string
        thumb: string
    }
}

export type Image = {
    id: string
    altDescription: string
    createdAt: string
    width: string
    height: string
    likes: number
    urls: {
        full: string
        small: string
        thumb: string
    }
}
