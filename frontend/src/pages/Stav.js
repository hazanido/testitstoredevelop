import React from "react";
import { Link } from "react-router-dom";
import { addProducts } from "../services/prodService";

const Stav = () => {
    async function addData() {
        const data = [
            {
                "id": 1,
                "title": "Lenovo V15 G2 15.6 inch Laptop",
                "description": "Lenovo V15 G2 15.6 Laptop Computer - Black; Intel Core i5 11th Gen 1135G7 2.4GHz Processor; 16GB DDR4-3200 RAM; 1TB Solid State Drive; Intel Iris Xe Graphics",
                "img": "https://90a1c75758623581b3f8-5c119c3de181c9857fcb2784776b17ef.ssl.cf2.rackcdn.com/0660281_515403.jpg",
                "category": "laptop",
                "brand": "lenovo",
                "price": "500 $",
                "rating": "4.8/5"
            },
            {
                "id": 2,
                "title": "Inspiron 14 Laptop",
                "description": "12th Generation Intel® Core™ i5-1235U Windows 11 Home Single Language Intel® Iris®Graphics 16 GB, 2 x 8 GB, DDR4, 3200 MHz  512 GB, M.2, PCIe NVMe, SSD 35.5-cm. display Full HD (1920X1200)",
                "img": "https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/in-dhs-inspiron-14-5420-pp-grey.png",
                "category": "laptop",
                "brand": "dell",
                "price": "599 $",
                "rating": "4.9/5"
            },
            {
                "id": 3,
                "title": "G15 Gaming Laptop",
                "description": "12th Gen Intel® Core™ i7-12700H Windows 11 Home Single Language NVIDIA® GeForce RTX™ 3050 Ti, 4 GB GDDR6 16GB, 2x8GB, DDR5, 4800MHz 512 GB, M.2, PCIe, SSD 39.6-cm. display Full HD (1920X1080) 120Hz",
                "img": "https://i.dell.com/sites/csimages/Banner_Imagery/en/indhs-g-series-15-5520-laptop-btc-D560822WIN9B.png",
                "category": "laptop",
                "brand": "Dell",
                "price": "699 $",
                "rating": "4.6/5"
            },
            {
                "id": 4,
                "title": "Vostro 3510 Laptop",
                "description": "11th Gen Intel® Core™ i5-1135G7 Windows 11 Home Single Language Intel® UHD Graphics 8 GB, 1 x 8 GB, DDR4, 2666 MHz 256GB M.2 PCIe NVMe Solid State Drive (Boot) + 1TB 5400 rpm 2.5inch SATA Hard Drive (Storage) 39.6-cm. display Full HD (1920X1080) Starting at 1.69 kg",
                "img": "https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/in-dhs-vostro-3510-grey-pp.png",
                "category": "laptop",
                "brand": "HP",
                "price": "699 $",
                "rating": "4.6/5"
            },
            {
                "id": 5,
                "title": "Apple MacBook Air 13.3-Inch",
                "description": "(MGN63) Space Gray Processor: Apple M1 chip with 8-core CPU and 7-core GPU RAM: 8GB, Storage: 256GB SSD Display: 13.3-inch 2560x1600 LED-backlit Retina Features: Backlit Magic Keyboard",
                "img": "https://www.startech.com.bd/image/cache/catalog/laptop/apple/macbook-air/space-gray/13-inch/macbook-air-13-3-inch-228x228.webp",
                "category": "laptop",
                "brand": "apple",
                "price": "999 $",
                "rating": "4.9/5"
            },
            {
                "id": 6,
                "title": "Apple MacBook Pro 13.3-Inch",
                "description": " SSD Silver (MNEP3) Processor: Apple M2 chip, 8-core CPU with 4 performance & 4 efficiency cores RAM: 8GB , Storage: 256GB SSD Display: 13.3-inch (diagonal) LED-backlit display with IPS technology Features: Magic Keyboard and the Touch Bar",
                "img": "https://www.startech.com.bd/image/cache/catalog/laptop/apple/macbook-pro/m2-chip/macbook-pro-13-inch-m2-silver-228x228.jpg",
                "category": "laptop",
                "brand": "apple",
                "price": "909 $",
                "rating": "4.9/5"
            },
            {
                "id": 7,
                "title": "Apple iPhone 14 Plus",
                "description": " 256GB SSD Silver (MNEP3) Processor: Apple M2 chip, 8-core CPU with 4 performance & 4 efficiency cores RAM: 8GB , Storage: 256GB SSD Display: 13.3-inch (diagonal) LED-backlit display with IPS technology Features: Magic Keyboard and the Touch Bar",
                "img": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-plus.jpg",
                "category": "smartphone",
                "brand": "apple",
                "price": "899 $",
                "rating": "4.8/5"
            },
            {
                "id": 8,
                "title": "samsung-galaxy-s23-ultra-5g",
                "description": " M2 Chip 8GB RAM 256GB SSD Silver (MNEP3) Processor: Apple M2 chip, 8-core CPU with 4 performance & 4 efficiency cores RAM: 8GB , Storage: 256GB SSD Display: 13.3-inch (diagonal) LED-backlit display with IPS technology Features: Magic Keyboard and the Touch Bar",
                "img": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23-ultra-5g.jpg",
                "category": "smartphone",
                "brand": "samsung",
                "price": "409 $",
                "rating": "4.9/5"
            },
            {
                "id": 9,
                "title": "Huawei P60 Pro",
                "description": "Display M2 Chip 8GB RAM 256GB SSD Silver (MNEP3) Processor: Apple M2 chip, 8-core CPU with 4 performance & 4 efficiency cores RAM: 8GB , Storage: 256GB SSD Display: 13.3-inch (diagonal) LED-backlit display with IPS technology Features: Magic Keyboard and the Touch Bar",
                "img": "https://fdn2.gsmarena.com/vv/bigpic/huawei-p60-pro.jpg",
                "category": "smartphone",
                "brand": "Huawei",
                "price": "499 $",
                "rating": "4.9/5"
            },
            {
                "id": 10,
                "title": "Huawei Pocket S",
                "description": "8GB RAM 256GB SSD Silver (MNEP3) Processor: Apple M2 chip, 8-core CPU with 4 performance & 4 efficiency cores RAM: 8GB , Storage: 256GB SSD Display: 13.3-inch (diagonal) LED-backlit display with IPS technology Features: Magic Keyboard and the Touch Bar",
                "img": "https://fdn2.gsmarena.com/vv/bigpic/huawei-pocket-s.jpg",
                "category": "smartphone",
                "brand": "Huawei",
                "price": "309 $",
                "rating": "4.9/5"
            },
            {
                "id": 11,
                "title": "Colorful GeForce GT710-2GD3-V 2GB Graphics Card",
                "description": "Single Fan No Power Supply Powered by GeForce GT710 Integrated with 2GB GDDR5 64-bit performance & 4 efficiency cores RAM: 8GB , Storage: 256GB SSD Display: 13.3-inch (diagonal) LED-backlit display with IPS technology Features: Magic Keyboard and the Touch Bar",
                "img": "https://www.startech.com.bd/image/cache/catalog/graphics-card/colorful/geforce-gt710-2gd3/geforce-gt710-2gd3-1-228x228.jpg",
                "category": "graphics card",
                "brand": "intel",
                "price": "50 $",
                "rating": "4/5"
            },
            {
                "id": 12,
                "title": "Intel Arc A750 Limited Edition 8GB GDDR6 Graphics Card",
                "description": "28 Xe Cores, 448 XMX Engines Xe HPG Microarchitecture 64-bit performance & 4 efficiency cores RAM: 8GB , Storage: 256GB SSD Display: 13.3-inch (diagonal) LED-backlit display with IPS technology Features: Magic Keyboard and the Touch Bar",
                "img": "https://www.startech.com.bd/image/cache/catalog/graphics-card/intel/arc-a750/arc-a750-01-228x228.jpg",
                "category": "graphics card",
                "brand": "intel",
                "price": "60 $",
                "rating": "4.7/5"
            },
            {
                "id": 13,
                "title": "Colorful GeForce GT730K LP 4GD3-V 4GB Graphics Card",
                "description": " 448 XMX Engines Xe HPG Microarchitecture 64-bit performance & 4 efficiency cores RAM: 8GB , Storage: 256GB SSD Display: 13.3-inch (diagonal) LED-backlit display with IPS technology Features: Magic Keyboard and the Touch Bar",
                "img": "https://www.startech.com.bd/image/cache/catalog/graphics-card/colorful/geforce-gt730k-lp-4gd3-v/geforce-gt730k-lp-4gd3-v-01-228x228.jpg",
                "category": "graphics card",
                "brand": "Gigabyte",
                "price": "70 $",
                "rating": "4.9/5"
            },
            {
                "id": 14,
                "title": "Colorful GeForce GTX 1650 NB DDR6 4GB-V Graphics Card",
                "description": " 4Colorful GeForce GTX 1650 NB DDR6 4GB-V Graphics Card Mi 64-bit performance & 4 efficiency cores RAM: 8GB , Storage: 256GB SSD Display: 13.3-inch (diagonal) LED-backlit display with IPS technology Features: Magic Keyboard and the Touch Bar",
                "img": "https://www.startech.com.bd/image/cache/catalog/graphics-card/colorful/geforce-gtx-1650-nb-4gb-v/geforce-gtx-1650-nb-4gb-v-01-228x228.jpg",
                "category": "graphics card",
                "brand": "geforce",
                "price": "70 $",
                "rating": "4.9/5"
            },
            {
                "id": 15,
                "title": "Colorful GeForce  8GB GDDR6 Graphics Card",
                "description": " Colorful GeForce RTX 3060 NB DUO 8GB-V 8GB GDDR6 Graphics Card RAM: 8GB , Storage: 256GB SSD Display: 13.3-inch (diagonal) LED-backlit display with IPS technology Features: Magic Keyboard and the Touch Bar",
                "img": "https://www.startech.com.bd/image/cache/catalog/graphics-card/colorful/geforce-rtx-3060-nb-duo-8gb-v/geforce-rtx-3060-nb-duo-8gb-v-01-228x228.webp",
                "category": "graphics card",
                "brand": "NUI",
                "price": "70 $",
                "rating": "4.9/5"
            },
            {
                "id": 16,
                "title": "G-TiDE S1 Lite Bluetooth Calling Smartwatch",
                "description": " Colorful GeForce RTX 3060 NB DUO 8GB-V 8GB GDDR6 Graphics Card RAM: 8GB , Storage: 256GB SSD Display: 13.3-inch (diagonal) LED-backlit display with IPS technology Features: Magic Keyboard and the Touch Bar",
                "img": "https://www.startech.com.bd/image/cache/catalog/smart-watch/g-tide/s1-lite/s1-lite-01-228x228.webp",
                "category": "smartwatch",
                "brand": "apple",
                "price": "30 $",
                "rating": "4.5/5"
            },
            {
                "id": 17,
                "title": "WiWU SW01 Ultra Bluetooth Calling Sports Smart Watch",
                "description": " WiWU SW01 Ultra Bluetooth Calling Sports Smart Watch RAM: 8GB , Storage: 256GB SSD Display: 13.3-inch (diagonal) LED-backlit display with IPS technology Features: Magic Keyboard and the Touch Bar",
                "img": "https://www.startech.com.bd/image/cache/catalog/smart-watch/wiwu/sw01-ultra/sw01-ultra-01-228x228.webp",
                "category": "smartwatch",
                "brand": "WiWU",
                "price": "35 $",
                "rating": "4.6/5"
            },
            {
                "id": 18,
                "title": "DIZO Watch 2 Sports Smartwatch",
                "description": " DIZO Watch 2 Sports Smartwatch RAM: 8GB , Storage: 256GB SSD Display: 13.3-inch (diagonal) LED-backlit display with IPS technology Features: Magic Keyboard and the Touch Bar",
                "img": "https://www.startech.com.bd/image/cache/catalog/smart-watch/realme/dizo-watch-2-sports/dizo-watch-2-sports-red-228x228.webp",
                "category": "smartwatch",
                "brand": "DIZO",
                "price": "56 $",
                "rating": "4.8/5"
            },
            {
                "id": 19,
                "title": "Kieslect KR Bluetooth Calling Smart Watch Orchid Pink",
                "description": " Kieslect KR Bluetooth Calling Smart Watch Orchid Pink 13.3-inch (diagonal) LED-backlit display with IPS technology Features: Magic Keyboard and the Touch Bar",
                "img": "https://www.startech.com.bd/image/cache/catalog/gadget/smart-watch/kr-calling-smart-watch/kieslect-kr-calling-smart-watch-01-228x228.webp",
                "category": "smartwatch",
                "brand": "Kieslect",
                "price": "60 $",
                "rating": "4.9/5"
            },
            {
                "id": 20,
                "title": "Mibro T1 Calling Amoled Smart Watch",
                "description": "Mibro T1 Calling Amoled Smart Watch h (diagonal) LED-backlit display with IPS technology Features: Magic Keyboard and the Touch Bar",
                "img": "https://www.startech.com.bd/image/cache/catalog/smart-watch/mibro/mibro-t1/mibro-t1-01-228x228.webp",
                "category": "smartwatch",
                "brand": "Mibro",
                "price": "65 $",
                "rating": "4.9/5"
            },
            {
                "id": 21,
                "title": "Edifier TWS1 Pro True Wireless Stereo Earbuds",
                "description": "Mibro T1 Calling Amoled Smart Watch h (diagonal) LED-backlit display with IPS technology Features: Magic Keyboard and the Touch Bar",
                "img": "https://www.startech.com.bd/image/cache/catalog/earphone/edifier/tws1-pro/tws1-pro-01-228x228.jpg",
                "category": "earbuds",
                "brand": "Edifier",
                "price": "46 $",
                "rating": "4.5/5"
            },
            {
                "id": 22,
                "title": "Havit HV-TW935 True Wireless Earbuds",
                "description": "Havit T1 Calling Amoled Smart Watch h (diagonal) LED-backlit display with IPS technology Features: Magic Keyboard and the Touch Bar",
                "img": "https://www.startech.com.bd/image/cache/catalog/earphone/havit/hv-tw935/hv-tw935-true-wireless-earbuds-01-228x228.jpg",
                "category": "earbuds",
                "brand": "Havit",
                "price": "49 $",
                "rating": "4.6/5"
            },
            {
                "id": 23,
                "title": "UiiSii GM40 Pro True Wireless Earbuds",
                "description": "UiiSii GM40 Pro True Wireless Earbuds (diagonal) LED-backlit display with IPS technology Features: Magic Keyboard and the Touch Bar",
                "img": "https://www.startech.com.bd/image/cache/catalog/earbuds/uiisii/gm40-pro/gm40-pro-01-228x228.webp",
                "category": "earbuds",
                "brand": "UiiSii",
                "price": "60 $",
                "rating": "4.8/5"
            },
            {
                "id": 24,
                "title": "HiFuture FlyBuds PRO True Wireless Earbuds",
                "description": "HiFuture FlyBuds PRO True Wireless Earbuds(diagonal) LED-backlit display with IPS technology Features: Magic Keyboard and the Touch Bar",
                "img": "https://www.startech.com.bd/image/cache/catalog/HiFuture/%20FlyBuds/FlyBuds%20PRO-01-228x228.webp",
                "category": "earbuds",
                "brand": "HiFuture",
                "price": "70 $",
                "rating": "4.8/5"
            },
            {
                "id": 25,
                "title": "Baseus Bowie E9 True Wireless Earbuds",
                "description": "Baseus Bowie E9 True Wireless EarbudsLED-backlit display with IPS technology Features: Magic Keyboard and the Touch Bar",
                "img": "https://www.startech.com.bd/image/cache/catalog/earbuds/uiisii/gm40-pro/gm40-pro-01-228x228.webp",
                "category": "earbuds",
                "brand": "Baseus",
                "price": "100 $",
                "rating": "4.9/5"
            },
            {
                "id": 26,
                "title": "CASIO SA-46 32-key Portable Musical Mini Keyboard",
                "description": "CASIO SA-46 32-key Portable Musical Mini Keyboard EarbudsLED-backlit display with IPS technology Features: Magic Keyboard and the Touch Bar",
                "img": "https://www.startech.com.bd/image/cache/catalog/gadget/studio-equipment/casio/sa46/sa46-01-228x228.jpg",
                "category": "Keyboard",
                "brand": "CASIO",
                "price": "10 $",
                "rating": "4.8/5"
            },
            {
                "id": 27,
                "title": "Logitech K120 Usb Keyboard With Bangla Black (920-008363)",
                "description": "Logitech K120 Usb Keyboard With Bangla Black (920-008363) EarbudsLED-backlit display with IPS technology Features: Magic Keyboard and the Touch Bar",
                "img": "https://www.startech.com.bd/image/cache/data/K120-228x228.png",
                "category": "Keyboard",
                "brand": "Logitech",
                "price": "20 $",
                "rating": "4.7/5"
            },
            {
                "id": 28,
                "title": "Meetion MT-K800 Colored Big Keys Kids Keyboard",
                "description": "Meetion MT-K800 Colored Big Keys Kids Keyboard With Bangla Black (920-008363) EarbudsLED-backlit display with IPS technology Features: Magic Keyboard and the Touch Bar",
                "img": "https://www.startech.com.bd/image/cache/catalog/keyboard/meetion/mt-k800/mt-k800-01-228x228.jpg",
                "category": "Keyboard",
                "brand": "Meetion",
                "price": "25 $",
                "rating": "4.6/5"
            },
            {
                "id": 29,
                "title": "Havit KB278GCM Wireless Keyboard & Mouse Combo With Bangla",
                "description": "Havit KB278GCM Wireless Keyboard & Mouse Combo With Bangla Black (920-008363) EarbudsLED-backlit display with IPS technology Features: Magic Keyboard and the Touch Bar",
                "img": "https://www.startech.com.bd/image/cache/catalog/keyboard/havit/kb278gcm/kb278gcm-01-228x228.webp",
                "category": "Keyboard",
                "brand": "Havit",
                "price": "35 $",
                "rating": "4.8/5"
            },
            {
                "id": 30,
                "title": "Laptop Keyboard For Lenovo G-430",
                "description": "Laptop Keyboard For Lenovo G-430 Bangla Black (920-008363) EarbudsLED-backlit display with IPS technology Features: Magic Keyboard and the Touch Bar",
                "img": "https://www.startech.com.bd/image/cache/catalog/laptop-accessories/keyboard/lenovo-g-430/lenovo-g-430-01-228x228.webp",
                "category": "Keyboard",
                "brand": "Havit",
                "price": "79 $",
                "rating": "4.9/5"
            }
        ]


        const res = await addProducts(data);
        if (res && res.status === 200)
            console.log('Products added successfully')
        else
            console.log('error message when trying to add products: ' + res);
        console.log(res);

    }

    return (
        <div className="h-screen w-full flex justify-center items-center">
            <div className="flex flex-col gap-4">
                <h2 className="text-3xl"> Stav's feature</h2>
                {/*<button onClick={addData}>here</button>*/}
                <Link
                    to="/"
                    className="text-xl hover:text-cyan-500 duration-300 select-none"
                >
                    &larr; Go to Home
                </Link>
            </div>
        </div>
    );
};

export default Stav;