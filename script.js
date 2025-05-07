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

  // Di file script.js atau dalam tag <script>
document.addEventListener('DOMContentLoaded', function() {
  const categoryBoxes = document.querySelectorAll('.category-box');
  const viewAllText = document.getElementById('view-all-text');
  
  // Default text
  let currentCategory = 'All';
  viewAllText.textContent = `${currentCategory}`;
  
  categoryBoxes.forEach(box => {
      box.addEventListener('click', function(e) {
          e.preventDefault();
          
          // Dapatkan nama kategori dari data attribute atau teks span
          const category = this.getAttribute('data-category');
          
          // Ubah teks sesuai kategori
          switch(category) {
              case 'espresso':
                  currentCategory = 'Espresso Based';
                  break;
              case 'flavor':
                  currentCategory = 'Coffee Flavors';
                  break;
              case 'powder':
                  currentCategory = 'Powder Based';
                  break;
              case 'tea':
                  currentCategory = 'Tea Series';
                  break;
              case 'brew':
                  currentCategory = 'Manual Brewing';
                  break;
              case 'snack':
                  currentCategory = 'Snacks';
                  break;
              default:
                  currentCategory = 'All';
          }
          
          viewAllText.textContent = `${currentCategory}`;
          
          // Tambahkan logika filter produk di sini jika diperlukan
          // filterProducts(category);
      });
  });
});

// Tambahkan di script.js
document.addEventListener('DOMContentLoaded', function() {
  const categoryBoxes = document.querySelectorAll('.category-box');
  
  categoryBoxes.forEach(box => {
      box.addEventListener('click', function(e) {
          e.preventDefault();
          
          // Hapus class active dari semua kategori
          categoryBoxes.forEach(b => {
              b.classList.remove('active');
          });
          
          // Tambahkan class active ke kategori yang diklik
          this.classList.add('active');
          
          // Di sini bisa tambahkan logika untuk filter produk
          const category = this.getAttribute('data-category');
          filterProducts(category);
      });
  });
  
  // Fungsi untuk filter produk (opsional)
  function filterProducts(category) {
      const products = document.querySelectorAll('.product-box');
      
      products.forEach(product => {
          if (category === 'all' || product.getAttribute('data-category') === category) {
              product.style.display = 'block';
          } else {
              product.style.display = 'none';
          }
      });
  }
  
  // Set kategori 'All' sebagai aktif secara default
  document.querySelector('.category-box[data-category="all"]').classList.add('active');
});
