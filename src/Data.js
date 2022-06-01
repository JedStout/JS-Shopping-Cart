let shopItemsData = fetch('https://fakestoreapi.com/products?limit=50')
.then(res=>res.json())
.then(res=>console.log(res));

// let shopItemsData = [

// { id: 1, title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", price: 109.95 } ,
// { id: 2, title: "Mens Casual Premium Slim Fit T-Shirts ", price: 22.3 } ,
// { id: 3, title: "Mens Cotton Jacket", price: 55.99 } ,
// { id: 4, title: "Mens Casual Slim Fit", price: 15.99 } ,
// { id: 5, title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet", price: 695 } ,
// { id: 6, title: "Solid Gold Petite Micropave ", price: 168 } ,
// { id: 7, title: "White Gold Plated Princess", price: 9.99 } ,
// { id: 8, title: "Pierced Owl Rose Gold Plated Stainless Steel Double", price: 10.99 } ,
// { id: 9, title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ", price: 64 } ,
// { id: 10, title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s", price: 109 } ,
// { id: 11, title: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5", price: 109 } ,
// { id: 12, title: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive", price: 114 } ,
// { id: 13, title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin", price: 599 } ,
// { id: 14, title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ", price: 999.99 } ,
// { id: 15, title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats", price: 56.99 } ,
// { id: 16, title: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket", price: 29.95 } ,
// { id: 17, title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats", price: 39.99 } ,
// { id: 18, title: "MBJ Women's Solid Short Sleeve Boat Neck V ", price: 9.85 } ,
// { id: 19, title: "Opna Women's Short Sleeve Moisture", price: 7.95 } ,
// { id: 20, title: "DANVOUY Womens T Shirt Casual Cotton Short", price: 12.99 }
// ]

// console.log(shopItemsData);