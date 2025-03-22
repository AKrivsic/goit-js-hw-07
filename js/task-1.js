const categories = document.querySelector("#categories");

const categoriesItem = categories.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesItem.length}`);

categoriesItem.forEach(item => {
    const title = item.querySelector("h2").textContent;
    const elements = item.querySelectorAll("ul li").length;
console.log(`Category: ${title}`);
console.log(`Elements: ${elements}`);
});

