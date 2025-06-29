document.addEventListener('DOMContentLoaded', () => {
    // Data produk (bisa diambil dari API nyata di aplikasi yang lebih kompleks)
    const products = [
        {
            id: 1,
            name: 'Kemeja Katun Pria',
            price: 'Rp 150.000',
            image: 'https://via.placeholder.com/300x200?text=Kemeja' // Placeholder image
        },
        {
            id: 2,
            name: 'Celana Jeans Wanita',
            price: 'Rp 220.000',
            image: 'https://via.placeholder.com/300x200?text=Celana' // Placeholder image
        },
        {
            id: 3,
            name: 'Sepatu Sneakers Unisex',
            price: 'Rp 350.000',
            image: 'https://via.placeholder.com/300x200?text=Sepatu' // Placeholder image
        },
        {
            id: 4,
            name: 'Tas Selempang Kulit',
            price: 'Rp 180.000',
            image: 'https://via.placeholder.com/300x200?text=Tas' // Placeholder image
        },
        {
            id: 5,
            name: 'Jam Tangan Digital',
            price: 'Rp 95.000',
            image: 'https://via.placeholder.com/300x200?text=Jam' // Placeholder image
        },
        {
            id: 6,
            name: 'Topi Baseball Keren',
            price: 'Rp 60.000',
            image: 'https://via.placeholder.com/300x200?text=Topi' // Placeholder image
        }
    ];

    const productGrid = document.getElementById('productGrid');

    // Fungsi untuk memuat produk ke DOM
    function loadProducts() {
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h4>${product.name}</h4>
                <p class="price">${product.price}</p>
                <button class="btn-add-to-cart" data-id="${product.id}">Tambah ke Keranjang</button>
            `;
            productGrid.appendChild(productCard);
        });
    }

    // Panggil fungsi untuk memuat produk saat halaman dimuat
    loadProducts();

    // Event listener untuk tombol "Tambah ke Keranjang" (contoh sederhana)
    productGrid.addEventListener('click', (event) => {
        if (event.target.classList.contains('btn-add-to-cart')) {
            const productId = event.target.dataset.id;
            const productName = event.target.parentNode.querySelector('h4').textContent;
            alert(`"${productName}" (ID: ${productId}) ditambahkan ke keranjang! (Ini adalah contoh, belum ada fungsionalitas keranjang sebenarnya)`);
        }
    });

    // Fungsionalitas Toggle Menu Navbar untuk Responsif
    const navbar = document.querySelector('.navbar');
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.navbar nav ul');

    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('active'); // Menambah class 'active' ke navbar
        navLinks.classList.toggle('show'); // Menambah class 'show' ke nav ul (untuk styling CSS)
    });

    // Opsional: Tutup menu saat link diklik (untuk mobile)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) { // Hanya berlaku di ukuran mobile
                navbar.classList.remove('active');
                navLinks.classList.remove('show');
            }
        });
    });

    // Fungsionalitas tombol "Belanja Sekarang"
    const btnShopNow = document.querySelector('.btn-shop-now');
    if (btnShopNow) {
        btnShopNow.addEventListener('click', () => {
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        });
    }
});
