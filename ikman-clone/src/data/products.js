export const PRODUCTS = [
    // Cars
    { id: 'p1', categoryId: 'cars', title: 'Toyota Axio 2016', price: 6850000, image: 'https://i.postimg.cc/Zqm6BhJ8/Toyota-Axio-1-a3edf969a2.jpg', description: 'Well maintained, full option, single owner.' },
    { id: 'p2', categoryId: 'cars', title: 'Honda Fit 2015', price: 6150000, image: 'https://i.postimg.cc/mDX95zCj/new-honda-fit-hybrid-japan-only-model-100434009.jpg', description: 'Hybrid, great fuel economy.' },
    { id: 'p3', categoryId: 'cars', title: 'Suzuki Alto 2018', price: 3150000, image: 'https://i.postimg.cc/2y1WRkxD/alto-800-21-491c.jpg', description: 'Low mileage, manual transmission.' },

    // Electronics
    { id: 'p4', categoryId: 'electronics', title: 'iPhone 13 Pro', price: 295000, image: 'https://i.postimg.cc/V6d91WYp/d7-Tn-NWgh-Tjvx-Ci9-S84y-X6-H.jpg', description: '128GB, excellent condition.' },
    { id: 'p5', categoryId: 'electronics', title: 'Dell XPS 13', price: 415000, image: 'https://i.postimg.cc/hj6LGQvj/Dell-XPS-13-9340-laptop.jpg', description: '13” ultrabook, 16GB RAM.' },
    { id: 'p6', categoryId: 'electronics', title: 'Samsung 55” Smart TV', price: 185000, image: 'https://i.postimg.cc/59Q5RgKF/UA55-DU7500-RXSG-1-1733916201.jpg', description: '4K UHD, with warranty.' },

    // Jobs
    { id: 'p7', categoryId: 'jobs', title: 'Junior React Developer', price: 0, image: 'https://i.postimg.cc/W4rF7Y12/images.png', description: 'Full-time, hybrid in Colombo.' },
    { id: 'p8', categoryId: 'jobs', title: 'Data Entry Clerk', price: 0, image: 'https://i.postimg.cc/vBs12745/1692976437805.jpg', description: 'Part-time, remote.' },
    { id: 'p9', categoryId: 'jobs', title: 'Marketing Executive', price: 0, image: 'https://i.postimg.cc/qvW6yH0b/IMG-20241021-WA0030-1022x1024.jpg', description: 'Full-time, travel required.' },

    // Property
    { id: 'p10', categoryId: 'property', title: '2BR Apartment - Dehiwala', price: 32000000, image: 'https://i.postimg.cc/v8SYcLGX/486918162.jpg', description: 'Sea view, parking included.' },
    { id: 'p11', categoryId: 'property', title: 'House for Rent - Kottawa', price: 95000, image: 'https://i.postimg.cc/qqY4S01W/7034.jpg', description: '3 bed, 2 bath, yard.' },
    { id: 'p12', categoryId: 'property', title: 'Commercial Shop - Galle', price: 15000000, image: 'https://i.postimg.cc/yxW7LWyF/Whats-App-Image-2024-11-14-at-1-24-04-PM.jpg', description: 'Prime location, 1000 sqft.' },

    // Furniture (new)
    { id: 'p13', categoryId: 'furniture', title: 'Wooden Dining Table', price: 65000, image: 'https://i.postimg.cc/J7yn3d6S/wcf-9527-edit.jpg', description: 'Seats 6, solid mahogany.' },
    { id: 'p14', categoryId: 'furniture', title: 'Office Chair - Ergonomic', price: 25000, image: 'https://i.postimg.cc/rz675pny/71m901l-XAr-L.jpg', description: 'Adjustable, mesh back.' },
    { id: 'p15', categoryId: 'furniture', title: 'Queen Bed with Mattress', price: 85000, image: 'https://i.postimg.cc/x8NWkmPF/2-K8-A9803-Both-Premier-1web.jpg', description: 'Modern design, storage drawers.' },

    // Fashion (new)
    { id: 'p16', categoryId: 'fashion', title: 'Men’s Leather Jacket', price: 18000, image: 'https://i.postimg.cc/7ZqXT7Ht/91pr7-Nn-B7-PL-AC-SL1500.jpg', description: 'Genuine leather, size L.' },
    { id: 'p17', categoryId: 'fashion', title: 'Women’s Handbag', price: 12000, image: 'https://i.postimg.cc/jdHZ5vbJ/d7383167cee00a90c0df7a36913bbe09-jpg-720x720q80.jpg', description: 'Designer inspired, brand new.' },
    { id: 'p18', categoryId: 'fashion', title: 'Sneakers - Unisex', price: 9500, image: 'https://i.postimg.cc/WbL5TCQv/LATEST-TRENDY-UNISEX-TRAINER-SNEAKERS.jpg', description: 'Comfortable, all sizes available.' },

    // Pets (new)
    { id: 'p19', categoryId: 'pets', title: 'Golden Retriever Puppy', price: 85000, image: 'https://i.postimg.cc/nrtqfbMS/media-16e89029edcc85076147cda767a7cd26d98767af3.png', description: 'Healthy, vaccinated, 3 months old.' },
    { id: 'p20', categoryId: 'pets', title: 'Persian Cat', price: 45000, image: 'https://i.postimg.cc/3RG2qJrD/Persian-cat-900x600.jpg', description: 'White coat, litter trained.' },
    { id: 'p21', categoryId: 'pets', title: 'Aquarium Fish Set', price: 12000, image: 'https://i.postimg.cc/nLgvTQxJ/fish.png', description: 'Includes tank and accessories.' },

    // Services (new)
    { id: 'p22', categoryId: 'services', title: 'House Cleaning Service', price: 5000, image: 'https://i.postimg.cc/VkTrcQV9/house-cleaning-services-big.jpg', description: 'Per session, Colombo area.' },
    { id: 'p23', categoryId: 'services', title: 'Wedding Photography', price: 95000, image: 'https://i.postimg.cc/GpyBL7WW/questions-to-asj-wedding-photographer-recirc-getty-images-61ea34e9e287426d9ca41ae4615e964a.jpg', description: 'Full-day package with album.' },
    { id: 'p24', categoryId: 'services', title: 'Tutoring - Mathematics', price: 2000, image: 'https://i.postimg.cc/7ZbGcYmY/online-math-tutoring-1695370217.jpg', description: 'Per hour, O/L & A/L levels.' },
];
