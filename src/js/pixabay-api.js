
import axios from "axios";

//* Export fetch function
export const fetchImg = async (queryInput, page) => {


    const galleryData = await axios.get(`https://pixabay.com/api/?q=${queryInput}&key=39635982-91d856b8fc78635a8aaf79b21&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${page}`);

    return galleryData;
}


