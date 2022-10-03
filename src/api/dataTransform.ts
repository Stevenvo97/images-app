import { ImageApi , Image} from "../interfaces/types"

export const formatImages = (
    images: ImageApi[],
): Image[] => {
    if (!images) return [] as Image[]

    return images.map((image) => ({
        id: image.id || '',
        altDescription: image.alt_description || '',
        urls: {
            full: image.urls.full,
            small: image.urls.small,
            thumb: image.urls.thumb,
        } || {}
    })) as Image[]
}