import noImage from '../assets/no-image-placeholder.wepp2024-03-15上午12.21.59.png';


const getCroppedImageUrl = (url: string) =>  {
    if (!url) return noImage;
    const target = 'media/';
    const index = url.indexOf(target) + target.length;
    return url.slice(0,index) + 'crop/600/400/' + url.slice(index);     
}

export default getCroppedImageUrl;