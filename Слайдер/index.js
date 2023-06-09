let cityCards = [
    {
        url: 'images/hero-img-1.jpg',
        cityName: 'Rostov-on-Don LCD admiral',
        repairTime: '3.5 months',
        apartmentArea: '81 m2'
    },
    {
        url: 'images/hero-img-2.jpg',
        cityName: 'Sochi Thieves',
        repairTime: '4 month',
        apartmentArea: '105 m2'
    },
    {
        url: 'images/hero-img-3.jpg',
        cityName: 'Rostov-on-Don Patriotic',
        repairTime: '3 months',
        apartmentArea: '93 m2'
    },
];

let imageParent = document.querySelector('.hero__column-img')
let cityName = document.querySelector('.place');
let repairTime = document.querySelector('.time');
let apartmentArea = document.querySelector('.area');

let arrowLeft = document.querySelector('.btn-arrow.left');
let arrowRight = document.querySelector('.btn-arrow.right');
let dots = document.querySelectorAll('[data-num]')
let links = document.querySelectorAll('[data-id]');
let navigateElements = document.querySelectorAll('[data-index]');

let curentIndex = 0;

function initSlider(index){
    imageParent.innerHTML = `<img class="image" src="${cityCards[index].url}">`
    cityName.innerText = cityCards[index].cityName
    repairTime.innerText = cityCards[index].repairTime
    apartmentArea.innerText = cityCards[index].apartmentArea
    dots.forEach((item) => {
        if(Number(item.getAttribute('data-num')) === index) {
            item.classList.add('active')
        } else {
            if(item.classList.contains('active')) {
                item.classList.remove('active')
            }
        }
    });
    links.forEach((item) => {
        if(Number(item.getAttribute('data-id')) === index) {
            item.classList.add('link-active')
        } else {
            if(item.classList.contains('link-active')) {
                item.classList.remove('link-active')
            }
        }
    })
}
initSlider(curentIndex);

arrowLeft.addEventListener('click', () => {
    curentIndex !== 0 ? curentIndex -= 1 : curentIndex = cityCards.length - 1
    initSlider(curentIndex);
})

arrowRight.addEventListener('click', () => {
    curentIndex !== cityCards.length - 1 ? curentIndex += 1 : curentIndex = 0
    initSlider(curentIndex);
})

navigateElements.forEach((item) => {
    item.addEventListener('click', (event) => {
        console.log(event.target.getAttribute('data-index'))
        curentIndex = Number(event.target.getAttribute('data-index'))
        initSlider(curentIndex);
    })
})