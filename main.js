var products = [{
        type: 'web',
        name: '',
        des: '',
        img: '',
        link: ''
    },
    {
        type: 'ui',
        name: 'ZingMP3',
        des: 'redesign ui',
        img: './image/product/zingmp3.png',
        link: 'https://www.behance.net/gallery/71361971/Zing-mp3'
    },
    {
        type: 'ui',
        name: 'Scifolio',
        des: 'inspiration',
        img: './image/product/scifi.png',
        link: 'https://www.behance.net/gallery/71306465/Scifi-Resume-Prototype'
    },
    {
        type: 'ui',
        name: 'Vans header',
        des: 'redesign ui',
        img: './image/product/vans.png',
        link: 'https://www.behance.net/gallery/72474645/Vans-store-x-FOG-header'
    },
    {
        type: 'web',
        name: 'Porfolio',
        des: 'redesign ui',
        img: './image/product/porfolio.png',
        link: 'https://huynhtan96.000webhostapp.com/'
    },
];

var productList = $('#product');

render(productList, products);

function filterButton(value) {
    var selectedType = value;
    if (selectedType != 'all') {
        var filteredProduct = products.filter(function (item) {
            return item.type === selectedType;
        });
        render(productList, filteredProduct);
    } else if (selectedType == 'all') {
        render(productList, products);
    }
}

function render(container, items) {
    var htmlProduct = items.map(function (item) {
        return '<div class="container">\
                    <div>\
                        <img src="' + item.img + '" alt="Thumpnail" class="image">\
                        <div class="blackscreen"></div>\
                        <div class="overlay">\
                            <div class="text"><p>' + item.name +
            '</p><a href="' + item.link + '" class="viewmore" target="_blank">View More</a></div>\
                        </div>\
                    </div>\
                </div>';
    });
    var html = htmlProduct.join('');
    container.html(html);
}

// active btn
var header = document.getElementById("btngroup");
var btns = header.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}