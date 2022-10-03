import { ImageApi, Image } from "../interfaces/types"

export const formatImages = (
    images: ImageApi[],
): Image[] => {
    if (!images) return [] as Image[]

    return images.map((image) => ({
        id: image.id || '',
        altDescription: image.alt_description || '',
        createdAt: image.created_at || '',
        width: image.width || '',
        height: image.height || '',
        likes: image.likes || 0,
        urls: {
            full: image.urls.full,
            small: image.urls.small,
            thumb: image.urls.thumb,
        } || {}
    })) as Image[]
}