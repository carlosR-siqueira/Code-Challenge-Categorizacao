
function normalizeTitle(title) {
    return title
        .toLowerCase()
        .replace(/[\s-]+/g, " ") 
        .replace(/\b1 litro\b/g, "1l")
        .replace(/\b2 litros\b/g, "2l")
        .replace(/\b1 quilo\b/g, "1kg")
        .replace(/\b2 quilos\b/g, "2kg")
        .replace(/\bintegral\b/g, "integral")  
        .replace(/\bdesnatado\b/g, "desnatado")  
        .replace(/\bsemi-?desnatado\b/g, "semi desnatado")  
        .trim();
}

function generateCategoryKey(title) {
    return normalizeTitle(title)
        .split(" ")
        .sort()  
        .join(" ");
}

function categorizeProducts(products) {
    const categories = {};

    products.forEach(({ title, supermarket }) => {
        const key = generateCategoryKey(title);

        if (!categories[key]) {
            categories[key] = {
                category: title,
                count: 0,
                products: [],
            };
        }

        categories[key].count++;
        categories[key].products.push({ title, supermarket });
    });

    return Object.values(categories);
}

export default categorizeProducts;
