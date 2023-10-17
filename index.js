const data = [
    {
        flavor: "strawberry",
        describe:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id voluptatibus animi facilis in adipisci a culpa recusandae libero atque itaque.",
        calories: {
            number: 140,
            percentage: 6,
        },
        fat: {
            number: 0,
            percentage: 0,
        },
        sodium: {
            number: 0,
            percentage: 0,
        },
        carb: {
            number: 35,
            percentage: 13,
        },
        protein: {
            number: 0,
            percentage: 0,
        },
        photo:"./assets/img/strawberry.png"
    },
    {
        flavor: "mango",
        describe:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id voluptatibus animi facilis in adipisci a culpa recusandae libero atque itaque.",
        calories: {
            number: 140,
            percentage: 6,
        },
        fat: {
            number: 0,
            percentage: 0,
        },
        sodium: {
            number: 0,
            percentage: 0,
        },
        carb: {
            number: 35,
            percentage: 13,
        },
        protein: {
            number: 0,
            percentage: 0,
        },
        photo:"./assets/img/grape.png"
    },
    {
        flavor: "grape",
        describe:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id voluptatibus animi facilis in adipisci a culpa recusandae libero atque itaque.",
        calories: {
            number: 140,
            percentage: 6,
        },
        fat: {
            number: 0,
            percentage: 0,
        },
        sodium: {
            number: 0,
            percentage: 0,
        },
        carb: {
            number: 35,
            percentage: 13,
        },
        protein: {
            number: 0,
            percentage: 0,
        },
        photo:"./assets/img/sprite.png"
    },
    {
        flavor: "peach",
        describe:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id voluptatibus animi facilis in adipisci a culpa recusandae libero atque itaque.",
        calories: {
            number: 140,
            percentage: 6,
        },
        fat: {
            number: 0,
            percentage: 0,
        },
        sodium: {
            number: 0,
            percentage: 0,
        },
        carb: {
            number: 35,
            percentage: 13,
        },
        protein: {
            number: 0,
            percentage: 0,
        },
        photo:"./assets/img/apple.png"
    },
    {
        flavor: "orange",
        describe:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id voluptatibus animi facilis in adipisci a culpa recusandae libero atque itaque.",
        calories: {
            number: 140,
            percentage: 6,
        },
        fat: {
            number: 0,
            percentage: 0,
        },
        sodium: {
            number: 0,
            percentage: 0,
        },
        carb: {
            number: 35,
            percentage: 13,
        },
        protein: {
            number: 0,
            percentage: 0,
        },
        photo:"./assets/img/orange.png"
    }
];

const container = document.querySelector(".container");
const navigation = container.querySelector(".navigation");
const content = container.querySelector(".content");
const sliderWrapper = container.querySelector(".slider .slider-wrapper");

container.classList.add(`${data[0].flavor}`);
navigation.innerHTML = "";
content.innerHTML = "";
sliderWrapper.innerHTML = "";

for (let i=0; i < data.length; i++){
    navigation.innerHTML += `
        <li class=navigation-item>
            <span></span>
            <span>0${i+1}</span>
        </li>
    `;

    const currentData = data[i];
    content.innerHTML += `
        <div class="content-wrapper">
            <h1 class="juice-flavor">${currentData.flavor}</h1>

            <p class="juice-describe">${currentData.describe}</p>

            <div class="juice-nutrition">
                <h4>Nutrition Facts</h4>
                <ul class="juice-nutrition-items">
                    <li class="juice-nutrition-item">
                        <span>Calories</span>
                        <span>${currentData.calories.number}</span>
                        <span>${currentData.calories.percentage}</span>
                    </li>
                    <li class="juice-nutrition-item">
                        <span>Total Fat</span>
                        <span>${currentData.fat.number}</span>
                        <span>${currentData.fat.percentage}</span>
                    </li>
                    <li class="juice-nutrition-item">
                        <span>Sodium</span>
                        <span>${currentData.sodium.number}</span>
                        <span>${currentData.sodium.percentage}</span>
                    </li>
                    <li class="juice-nutrition-item">
                        <span>Total Carb</span>
                        <span>${currentData.carb.number}</span>
                        <span>${currentData.carb.percentage}</span>
                    </li>
                    <li class="juice-nutrition-item">
                        <span>Protein</span>
                        <span>${currentData.protein.number}</span>
                        <span>${currentData.protein.percentage}</span>
                    </li>                                                                       
                </ul>
            </div>

            <div class="add-to-cart">
                <div class="add-to-cart-btn">
                    <span>Add to cart</span>
                    <span class="cart-icon">
                        <i class="fa-solid fa-cart-plus"></i>
                    </span>
                </div>
                <span class="heart">
                    <i class="fa-regular fa-heart"></i>
                </span>
            </div>
        </div>
    `;

    sliderWrapper.innerHTML += `
        <li class="slider-item">
            <img src="${currentData.photo}" alt=""/>
        </li>
    `;
}

navigation.children[0].classList.add("active");
content.children[0].classList.add("show");
sliderWrapper.children[0].classList.add("active");

var prevIndex = 0;
var currentIndex = 0;

const handleTransition = (prevIndex, currentIndex) => {
    container.classList.add(`${data[currentIndex].flavor}`);
    container.classList.remove(`${data[prevIndex].flavor}`);

    content.children[prevIndex].classList.remove("show");
    content.children[currentIndex].classList.add("show");

    navigation.children[prevIndex].classList.remove("active");
    navigation.children[currentIndex].classList.add("active");

    sliderWrapper.style = `--index: ${currentIndex}`;
}

const prevBtn = container.querySelector(".prev-btn");
const nextBtn = container.querySelector(".next-btn");
prevBtn.disabled = true;
nextBtn.disabled = false;

nextBtn.addEventListener("click", () => {
    prevIndex = currentIndex;
    if (currentIndex < data.length - 1){
        prevBtn.disabled = false;
        nextBtn.disabled = false;
        currentIndex++;
        sliderWrapper.children[prevIndex].classList.remove("active");
        sliderWrapper.children[currentIndex].classList.add("active");
    }

    if (currentIndex == data.length - 1) {
        nextBtn.disabled = true;
    }

    handleTransition(prevIndex, currentIndex);
})

prevBtn.addEventListener("click", () => {
    prevIndex = currentIndex;
    if (currentIndex > 0){
        prevBtn.disabled = false;
        nextBtn.disabled = false;
        currentIndex--;
        sliderWrapper.children[prevIndex].classList.remove("active");
        sliderWrapper.children[currentIndex].classList.add("active");
    }

    if (currentIndex == 0) {
        prevBtn.disabled = true;
    }

    handleTransition(prevIndex, currentIndex);
})