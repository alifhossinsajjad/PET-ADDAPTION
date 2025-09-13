const petContainer = document.getElementById('petContainer');


const petCardContainer = document.getElementById("petCardContainer");


const loadPetCategory = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.categories);
      const categories = data.categories
      showPetCategory(categories);
    })
    .catch((error) => {
        console.log(error);
    })
}

const showPetCategory = (categories) => {
    console.log(categories);
    categories.forEach((category) => {
        petContainer.innerHTML += `
        <div class="flex justify-center items-center border border-green-100 hover:bg-[#0E7A81] mb-4 hover:text-white cursor-pointer px-7 py-3  rounded-xl">
        <img src="${category.category_icon}">
        <li onclick = 'loadPetsByCategory("${category.category}")' id='${category.id}'>
        ${category.category}
        </li>
        </div>
        `
    });

    // petContainer.addEventListener('click', (e) => {
    //     const allLi = document.querySelectorAll("li");
    //     allLi.forEach((li) => {
    //         li.classList.remove("bg-[#0E7A81]", "text-white")
    //     })
    //     if(e.target.category === 'li'){
    //         e.target.classList.add("bg-[#0E7A81]", "text-white");
    //     }

    // })
}



// const loadPetDetails = async (id) => {
//     const ulr = `https://openapi.programming-hero.com/api/peddy/pets/${id}`
//     console.log(ulr)
//     const res = await fetch(ulr);
//     const data = await res.json();
//     console.log(data.pets)
//     petsDisplayDetails(data.pets)
// };

// const petsDisplayDetails = (pets) => {
//     console.log(pets)

//     // const petDetailsCardBox = document.getElementById("")
// }

const loadPetsByCategory = (petId) => {
    console.log(petId)
    const url = petId ? `https://openapi.programming-hero.com/api/peddy/category/${petId.toLowerCase()}` : `
    https://openapi.programming-hero.com/api/peddy/pets`


    fetch(url)
    .then((res) => {
        return res.json()})
    .then((data) => {
        console.log(data)
        const pets = data.pets ? data.pets : data.data
        showPetsByCategory(pets)
    })
    .catch((error) =>{
        console.log(error)
    })
}


const showPetsByCategory = (pets) => {
    petCardContainer.innerHTML = " ";
    pets.forEach((pet) => {
        petCardContainer.innerHTML += `
        
        `
    })
}



loadPetsByCategory();
loadPetCategory();