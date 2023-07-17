import {sites} from './Config';  // path to your config file

const checkImage = async (url: string): Promise<boolean> => {
    try {
        const response = await fetch(url, { method: 'HEAD' });
        console.log('Image response:', response)
        return response.ok;
    } catch (error) {
        console.error('Error fetching image:', error);
        return false;
    }
};

describe('Image Availability', () => {
    sites.forEach((site, i) => {
        it(`should be able to fetch image ${i}`, async () => {
            const result = await checkImage(site.img);
            expect(result).toBeTruthy();
        });
    });
});
