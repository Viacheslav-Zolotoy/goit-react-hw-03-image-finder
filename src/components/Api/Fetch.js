import axios from 'axios';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';


axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function fetchImg(typeValue, page) {
    try {
        const response = await axios.get('', {
            params: {
                key: '36865629-a181ba7c52348470e5fc378ab',
                q: `${typeValue}`,
                page: `${page}`,
                per_page: 12,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: 'true',
            }
        });

        if (response.data.hits.length === 0) {
            toast.warning('Sorry, there are no images matching your search query.Please try again.');
            return;
        };

        if (page === 1) {
            toast.info(`Hooray! We found ${response.data.totalHits} images.`);
        };

        const dataImg = response.data.hits.map(
            ({ id, tags, webformatURL, largeImageURL }) => ({
                id,
                tags,
                webformatURL,
                largeImageURL,
            })
        );
        const totalHits = response.data.totalHits;
        return { dataImg, totalHits };

    } catch (error) {
        toast.error('Oops! Something went wrong! Try reloading the page!');
        console.error();
    }
};
fetchImg.propTypes = {
    typeValue: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
}