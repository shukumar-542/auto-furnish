import androids from './bodyCover';
import cameras from './mobil';
import laptops from './tires';

const fakeData = [...androids, ...cameras, ...laptops];


const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(fakeData);

export default fakeData;