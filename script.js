
var cntr=document.querySelectorAll('.container');
var arr=[
    {
        imgg:'https://i.ibb.co/QF1nVmz/Accenture-pulse-of-change-skim-Glance-Skim-640x452px.png'
    },
    {
        imgg:'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Total-Enterprise-Reinvention-Glance-Skim-2024-600x848:rad-card-full?ts=1705038000069&fit=constrain&dpr=off'
    },
    {
        imgg:'https://dynamicmedia.accenture.com/is/image/accenture/Cracking-the-code-hero-600x848:rad-card-full?ts=1706530603504&fit=constrain&dpr=off'
    },
    {
        imgg:'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-GenAI-Talent-ITL-Glance-Image-v2-640x904:rad-card-full?ts=1705119539761&fit=constrain&dpr=off'
    },
    {
        imgg:'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-LifeTrends-Glance-image-640x904:rad-card-full?ts=1700185502363&fit=constrain&dpr=off'
    },
    {
        imgg:'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-BBVA-Glance-Skim-640x452:rad-card-half?ts=1700716482584&fit=constrain&dpr=off'
    },
    {
        imgg:'https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Tech-Vision-24-Glance-Skim-640x904:rad-card-full?ts=1701974903472&fit=constrain&dpr=off'
    },
    {
        imgg:'https://i.ibb.co/K5pnmgt/Screenshot-2024-02-03-030340.png'
    }
]

var cnt=0;
cntr.forEach(
    (val)=>{

        console.log(arr[cnt].imgg);
        val.style.backgroundImage=`url(${arr[cnt].imgg})`;
        cnt++;
    }
)