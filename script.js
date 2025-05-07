const categoryBoxes = document.querySelectorAll('.category-box');
  const productBoxes = document.querySelectorAll('.product-box');

  categoryBoxes.forEach(box => {
    box.addEventListener('click', (e) => {
      e.preventDefault();
      const selectedCategory = box.getAttribute('data-category');

      productBoxes.forEach(product => {
        const productCategory = product.getAttribute('data-category');
        if (selectedCategory === "all" || selectedCategory === productCategory) {
          product.style.display = "block";
        } else {
          product.style.display = "none";
        }
      });
    });
  });