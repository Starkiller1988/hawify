import React from 'react'
import IMG1 from './img_shop/cherrytomatos.png';
import IMG2 from './img_shop/bananas.png';
import IMG3 from './img_shop/milk.jpg';
import IMG4 from './img_shop/GoldenToast.png';
import IMG5 from './img_shop/Gewürzgurken.png';
import IMG6 from './img_shop/alnatura_weizenmehl.png';



const data = {
    products: [
        {
            id: '1',
            name: 'Cherrytomaten',
            price: '0.46',
            image: IMG1,
        },
        {
            id: '2',
            name: '6 Bananen',
            price: '1.35',
            image: IMG2,
        },
        {
            id: '3',
            name: 'Milch',
            price: '0.46',
            image: IMG3,
        },
        {
            id: '4',
            name: 'Vollkorn Toast',
            price: '1.19',
            image: IMG4,
        },
        {
            id: '5',
            name: 'Essiggurken',
            price: '1,49',
            image: IMG5,
        },
        {
            id: '6',
            name: 'Weizenmehl',
            price: '1.03',
            image: IMG6,
        }
        
    ]
}

export default data;