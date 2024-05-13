const hamburg=document.querySelector('.fa-bars')
const hammenu=document.querySelector('.hamopt')
hamburg.addEventListener('click',()=>{
    hammenu.classList.toggle('hidden');
    hammenu.style.zIndex='9';
    
})
const x=document.querySelector('.fa-x')
x.addEventListener('click',()=>{
    hammenu.classList.toggle('hidden');
    hammenu.style.zIndex='-100';
})
const dropdown=document.querySelector('#cur')
let fromcur=dropdown.value.toLowerCase();
dropdown.addEventListener('change',()=>{    
    let tocur=dropdown.value.toLowerCase();
    let URL=`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromcur}.json`;
    fetch(URL)
    .then(resp=>{return resp.json()})
    .then(data=>{
        let curs=document.querySelectorAll('.cur');
        let vals=document.querySelectorAll('.val');
        let txt;
        if(tocur=='usd')
            txt='US$'
        else if(tocur=='cad')
            txt='CA$'
        else if(tocur=='eur')
            txt='€'
        else if(tocur=='aud')
            txt='A$'
        else if(tocur=='gbp')
            txt='£'
        else if(tocur=='krw')
            txt='₩'
        else if(tocur=='jpy')
            txt='JP¥'
        for(let i=0; i<curs.length;i++)
        {            
            let newval=(parseFloat(vals[i].innerText)*data[fromcur][tocur]).toFixed(2);
            vals[i].innerText=newval;
            curs[i].innerText=`${txt}`
        }
        fromcur=tocur
    })    
})

let links=[['https://cdn.shopify.com/s/files/1/0974/7950/products/Everyday-Bundle-Mocks-final_1920x1281_crop_center.jpg.webp?v=1660013247','https://cdn.shopify.com/s/files/1/0974/7950/products/Everyday-Bundle-Mocks-horizontal_1080x720_crop_center.jpg?v=1668446709'],
['https://cdn.shopify.com/s/files/1/0974/7950/products/Packaging_TravelerClosedBracket1_Monogram_May20204517_d3899632-1a43-425f-a16a-1d5b968810c7_1920x1280_crop_center.jpg.webp?v=1623682377','https://cdn.shopify.com/s/files/1/0974/7950/products/Consoles_TravelerBracket1_Monogram_May2020_4561_30a35bd4-01b4-44db-894a-e06162d8ab77_1080x720_crop_center.jpg?v=1668433146'],
['https://cdn.shopify.com/s/files/1/0974/7950/products/Packaging_StudioClosedBracket1_Monogram_May20204507_548446cb-17c9-4fc2-8b12-ae1b1a308a7e_1920x1280_crop_center.jpg.webp?v=1623269261','https://cdn.shopify.com/s/files/1/0974/7950/products/Consoles_StudioBracket1_Monogram_May2020_4558_53685b21-b09f-45b0-85a2-180d6acfafac_1920x1280_crop_center.jpg.webp?v=1668433210'],
['https://cdn.shopify.com/s/files/1/0974/7950/products/Packaging_MasterClosedBracket1_Monogram_May20204494_1920x1280_crop_center.jpg.webp?v=1623682600','https://cdn.shopify.com/s/files/1/0974/7950/products/Consoles_MasterBracket1_Monogram_May2020_4555_1920x1280_crop_center.jpg.webp?v=1668433240'],
['https://cdn.shopify.com/s/files/1/0974/7950/files/Monogram_Keyboard_Multipad-v2_1920x1080_crop_center.png.webp?v=1711651403','https://cdn.shopify.com/s/files/1/0974/7950/files/Monogram_Keyboard_2_878639a5-2865-4c4f-a21e-498f3a3db3b8_1920x1080_crop_center.jpg.webp?v=1712087494']
]
let slides=document.querySelectorAll('.slide')
let changeImg=(pos,i)=>{
    slides[i].childNodes[1].childNodes[3].setAttribute('src',links[i][pos]);
    if(pos==1)
    {
        slides[i].childNodes[3].childNodes[3].style.display='none';
        slides[i].childNodes[3].childNodes[5].style.display='initial';
        slides[i].childNodes[3].childNodes[5].childNodes[0].style.display='initial';
    }
    else
    {
        slides[i].childNodes[3].childNodes[3].style.display='flex';
        slides[i].childNodes[3].childNodes[5].style.display='none';
        slides[i].childNodes[3].childNodes[5].childNodes[0].style.display='none';
    }
}
for(let i=0;i<slides.length;i++)
{
    slides[i].addEventListener('mouseover',()=>changeImg(1,i));
    slides[i].addEventListener('mouseout',()=>changeImg(0,i));
}

