const petContainer = document.getElementById('petContainer');





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
    categories.forEach((category) => {
        petContainer.innerHTML += `
        <li onclick = 'clickCategory(${category.id})' id='${category.id}' class="border border-green-100 hover:bg-[#0E7A81] mb-4 hover:text-white cursor-pointer px-7 py-3  rounded-xl "><i class=" ${category.category_icon}"></i>
        ${category.category}
        </li>
        
        `
    });
}








loadPetCategory();