// Función para redirigir a la página de detalles del producto
function viewProduct(title, description, price, image) {
    // Guarda los detalles del producto en localStorage
    localStorage.setItem('productTitle', title);
    localStorage.setItem('productDescription', description);
    localStorage.setItem('productPrice', price);
    localStorage.setItem('productImage', image);

    // Redirige a la página de detalles del producto
    window.location.href = 'Visualizador_Productos.html';
}

// Función para cargar los detalles del producto en la página de detalles
function loadProductDetails() {
    // Obtén los detalles del producto desde localStorage
    const title = localStorage.getItem('productTitle');
    const description = localStorage.getItem('productDescription');
    const price = localStorage.getItem('productPrice');
    const image = localStorage.getItem('productImage');

    // Actualiza los elementos de la página con los detalles del producto
    document.getElementById('product-title').textContent = title;
    document.getElementById('product-description').textContent = description;
    document.getElementById('product-price').textContent = price;
    document.getElementById('product-image').src = image;
}

// Llama a la función `loadProductDetails` cuando se cargue la página de detalles
if (window.location.pathname.includes('Visualizador_Productos.html')) {
    loadProductDetails();
}

// Modifica los productos generados automáticamente para que redirijan al Visualizador_Productos.html
document.addEventListener("DOMContentLoaded", () => {
    const productosContainer = document.querySelector(".productos");
    const searchBar = document.querySelector(".barra-de-busqueda");
    const categoriaBanners = document.querySelectorAll(".categorias-banners .banner");
    observer = new IntersectionObserver(entries => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const delay = index * 100;
            entry.target.style.setProperty('--delay', `${delay}ms`);
            entry.target.classList.add("visible");
          } else {
            entry.target.classList.remove("visible");
          }
        });
      }, {
        threshold: 0.1
    });
    

    const productos = [
        /*PRODUCTO 1*/
        {
            nombre: "DDR3 8G (1600L)",
            descripcion: "SAMSUNG PULL(USADA).",
            precio: "$89",
            imagen: "https://tse1.mm.bing.net/th?id=OIP.r6pgJhWL117SbMLiXEs5QgHaGk&pid=Api&P=0&h=180",
            categoria: "RAM"
            
        },
        /*PRODUCTO 2*/
        {
            nombre: "DDR4 8G (3200)",
            descripcion: "CORSAIR VENGEANCE LPX.",
            precio: "$95",
            imagen: "https://powerdeal.com.co/cdn/shop/files/Disenosintitulo_2_096eca4d-f9b9-411d-9816-b13abf6f2f17.jpg?v=1689107078",
            categoria: "RAM"
        },
        /*PRODUCTO 3*/
        {
            nombre: "DDR4 8G (3200)",
            descripcion: "KINGSTON FURY BEAST NO RGB.",
            precio: "$95",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwaebvxoKbKqfkw5sWQ4SBaorE2_oPHLvAdg&s",
            categoria: "RAM"
        },
        /*PRODUCTO 4*/
        {
            nombre: "DDR4 8G (3200)",
            descripcion: "VIPER PATRIOT STEEL RGB.",
            precio: "$99",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_664834-MLU74224831369_012024-O.webp",
            categoria: "RAM"
        },
        /*PRODUCTO 5*/
        {
            nombre: "DDR4 8G (3200)",
            descripcion: "ADATA XPG SPECTRIX D35G RGB.",
            precio: "$99",
            imagen: "https://webapi3.adata.com/storage/product/d35g_2000x2000_1_black.png",
            categoria: "RAM"
        },
        /*PRODUCTO 6*/
        {
            nombre: "DDR4 8G (3200)",
            descripcion: "CORSAIR VENGEANCE RS RGB.",
            precio: "$117",
            imagen: "https://assets.corsair.com/image/upload/c_pad,q_85,h_1100,w_1100,f_auto/products/Memory/CMW8GX4M1E3200C16/Gallery/Vengeance_RGB_Pro_01.webp",
            categoria: "RAM"
        },
        /*PRODUCTO 7*/
        {
            nombre: "DDR4 8G (3200)",
            descripcion: "KINGSTON FURY BEAST RGB.",
            precio: "$117",
            imagen: "https://cdn.salla.sa/KOPVE/1BCd3VZZhfRCnYyO6WQ1zAOLuncz81m6ns9yHouK.png",
            categoria: "RAM"
        },
        /*PRODUCTO 8*/
        {
            nombre: "DDR4 8G (3200)",
            descripcion: "CORSAIR VENGEANCE RGB PRO.",
            precio: "$119",
            imagen: "https://www.devicedeal.com.au/assets/full/CMH16GX4M2E3200C16W.jpg?20210514123828",
            categoria: "RAM"
        },
        /*PRODUCTO 9*/
        {
            nombre: "DDR4 16G (3200)",
            descripcion: "VIPER PATRIOT STEEL NO RGB.",
            precio: "$149",
            imagen: "https://pcmastersbogota.com.co/wp-content/uploads/2021/07/81uNMePCgoL._AC_SL1500_-1-975x1024.jpg",
            categoria: "RAM"
        },
        /*PRODUCTO 10*/
        {
            nombre: "DDR4 16G (3600)",
            descripcion: "CORSAIR VENGEANCE LPX NO RGB.",
            precio: "$157",
            imagen: "https://etechdevices.lk/wp-content/uploads/2019/07/CMK8GX4M1A2400C14-Gallery-VENG-LPX-BLK-01-504x504.png",
            categoria: "RAM"
        },
        /*PRODUCTO 11*/
        {
            nombre: "DDR4 16G (3200)",
            descripcion: "KINGSTON FURY BEAST NO RGB.",
            precio: "$159",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIzBYoHqjhx8sceeBSK2JTimrtsASiVbBL_Q&s",
            categoria: "RAM"
        },
        /*PRODUCTO 12*/
        {
            nombre: "DDR4 16G (3200)",
            descripcion: "VIPER PATRIOT STEEL RGB.",
            precio: "$165",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMusO7fL1MwddLdCkmre6wcw6L5Pufe-jJog&s",
            categoria: "RAM"
        },
        /*PRODUCTO 13*/
        {
            nombre: "DDR4 16G (3200)",
            descripcion: "ADATA XPG SPECTRIX D35G RGB.",
            precio: "$165",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7pnX_yVIKZwbtCRHUzQZtd1jEpG749f4Owg&s",
            categoria: "RAM"
        },
        /*PRODUCTO 14*/
        {
            nombre: "DDR4 16G (3200)",
            descripcion: "CORSAIR VENGEANCE RGB RS.",
            precio: "$189",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWUWm_yOqP1w68tj6ya1A7QC7F8RBiVGW_-g&s",
            categoria: "RAM"
        },
        /*PRODUCTO 15*/
        {
            nombre: "DDR4 16G (3200)",
            descripcion: "KINGSTON FURY BEAST RGB.",
            precio: "$195",
            imagen: "https://media.solotodo.com/media/products/1819087_picture_1695496351.jpg",
            categoria: "RAM"
        },
        /*PRODUCTO 16*/
        {
            nombre: "DDR4 16G (3600)",
            descripcion: "CORSAIR VENGEANCE PRO SL RGB.",
            precio: "$197",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_769990-MLU79133248153_092024-O.webp",
            categoria: "RAM"
        },
        /*PRODUCTO 17*/
        {
            nombre: "DDR4 32G (3200)",
            descripcion: "CORSAIR VENGEANCE RGB PRO SL.",
            precio: "$325",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_684097-CBT53449178804_012023-O.webp",
            categoria: "RAM"
        },
        /*PRODUCTO 18*/
        {
            nombre: "DDR4 32G (3200)",
            descripcion: "KINGSTON FURY BEAST RGB.",
            precio: "$325",
            imagen: "https://www.invidcomputers.com/images/000000000041395178609kingston-ddr4-fury-beast-rgb-single-550x550.jpg",
            categoria: "RAM"
        },
        /*PRODUCTO 19*/
        {
            nombre: "DDR5 16G (5200)",
            descripcion: "CORSAIR VENGEANCE RGB.",
            precio: "$265",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_646759-MLA79613095266_102024-O.webp",
            categoria: "RAM"
        },
        /*PRODUCTO 20*/
        {
            nombre: "DDR5 16G (5600)",
            descripcion: "VIPER PATRIOT VENOM.",
            precio: "$219",
            imagen: "https://symcomputadores.com/wp-content/uploads/2022/10/4.jpg",
            categoria: "RAM"
        },
        /*PRODUCTO 21*/
        {
            nombre: "DDR5 16G (5600)",
            descripcion: "KINGSTON FURY BEAST.",
            precio: "$269",
            imagen: "https://www.dmi.es/photo/911/89038/84048644/bg/ddr5-kingston-2x-16gb-5600-fury-beast.jpg",
            categoria: "RAM"
        },
        /*PRODUCTO 22*/
        {
            nombre: "DDR5 16G (5600)",
            descripcion: "CORSAIR VENGEANCE.",
            precio: "$269",
            imagen: "https://m.media-amazon.com/images/I/51mEWBFy7cL._AC_SY879_.jpg",
            categoria: "RAM"
        },
        /*PRODUCTO 23*/
        {
            nombre: "DDR5 16G (5600)",
            descripcion: "PATRIOT VIPER BLANCA ELITE 5 RGB.",
            precio: "$249",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/47774014/51gqseRi_NL._AC_SL1200_.jpg?1714499867",
            categoria: "RAM"
        },
        /*PRODUCTO 24*/
        {
            nombre: "DDR5 16G (5600)",
            descripcion: "CORSAIR VENGEANCE RGB.",
            precio: "$285",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_646759-MLA79613095266_102024-O.webp",
            categoria: "RAM"
        },
        /*PRODUCTO 25*/
        {
            nombre: "DDR5 16G (5600)",
            descripcion: "KINGSTON FURY BEAST RGB.",
            precio: "$290",
            imagen: "https://media.kingston.com/kingston/product/FURY_Beast_White_RGB_DDR5_1-zm-lg.jpg",
            categoria: "RAM"
        },
        /*PRODUCTO 26*/
        {
            nombre: "DDR5 16G (6000)",
            descripcion: "VIPER PATRIOT VENOM.",
            precio: "$259",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_C1sXK9sxZZbLMvxUFB1_fcAlMi8KN_wkLA&s",
            categoria: "RAM"
        },
        /*PRODUCTO 27*/
        {
            nombre: "DDR5 16G (6000)",
            descripcion: "CORSAIR VENGEANCE.",
            precio: "$275",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_818470-MLU74427876100_022024-O.webp",
            categoria: "RAM"
        },
        /*PRODUCTO 28*/
        {
            nombre: "DDR5 16G (6000)",
            descripcion: "KINGSTON FURY BEAST.",
            precio: "$279",
            imagen: "https://media.kingston.com/kingston/product/FURY_Beast_White_RGB_DDR5_2_angle-zm-lg.jpg",
            categoria: "RAM"
        },
        /*PRODUCTO 29*/
        {
            nombre: "DDR5 16G (6000)",
            descripcion: "PATRIOT VIPER BLANCA ELITE 5 RGB.",
            precio: "$269",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/43715149/resize/610/610?1709952871",
            categoria: "RAM"
        },
        /*PRODUCTO 30*/
        {
            nombre: "DDR5 16G (6000)",
            descripcion: "CORSAIR VENGEANCE RGB.",
            precio: "$299",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXWfZLprkZ9dRVilc99dwoWcQfE1aHqwi2vg&s",
            categoria: "RAM"
        },
        /*PRODUCTO 31*/
        {
            nombre: "DDR5 16G (6000)",
            descripcion: "KINGSTON FURY BEAST RGB.",
            precio: "$309",
            imagen: "https://clonesyperifericos.com/wp-content/uploads/Kingston-32gb-expo-5600mhz2.jpg",
            categoria: "RAM"
        },
        /*PRODUCTO 32*/
        {
            nombre: "DDR5 16G (6000)",
            descripcion: "GSKILL RIPJAWS M5 RGB.",
            precio: "$309",
            imagen: "https://m.media-amazon.com/images/I/61SnWLuAPyL._AC_UF894,1000_QL80_.jpg",
            categoria: "RAM"
        },
        /*PRODUCTO 33*/
        {
            nombre: "DDR5 16G (6400)",
            descripcion: "GSKILL RIPJAWS M5 RGB.",
            precio: "$346",
            imagen: "https://www.gskill.com/_upload/images/2405271705350.png",
            categoria: "RAM"
        },
        /*PRODUCTO 34*/
        {
            nombre: "DDR5 16G (6400)",
            descripcion: "KINGSTON RENEGADE RGB.",
            precio: "$359",
            imagen: "https://media.kingston.com/kingston/product/FURY_Renegade_Silver_White_DDR5_1_angle-sm.jpg",
            categoria: "RAM"
        },
        /*PRODUCTO 35*/
        {
            nombre: "DDR5 16G (6800)",
            descripcion: "KINGSTON FURY RENEGADE RGB.",
            precio: "$379",
            imagen: "https://media.kingston.com/kingston/product/FURY_Renegade_Silver_White_RGB_DDR5_1-sm.jpg",
            categoria: "RAM"
        },
        /*PRODUCTO 36*/
        {
            nombre: "DDR5 16G (7200)",
            descripcion: "CORSAIR VENGEANCE RGB.",
            precio: "$399",
            imagen: "https://assets.corsair.com/image/upload/c_pad,q_auto,h_1024,w_1024,f_auto/products/Memory/vengeance-rgb-ddr5-blk-config/Gallery/Vengeance-RGB-DDR5-2UP-BLACK_10.webp",
            categoria: "RAM"
        },
        /*PRODUCTO 37*/
        {
            nombre: "DDR5 32G (5600)",
            descripcion: "CORSAIR VENGEANCE.",
            precio: "$475",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_701500-CBT50638838962_072022-O.webp",
            categoria: "RAM"
        },
        /*PRODUCTO 38*/
        {
            nombre: "DDR5 32G (5600)",
            descripcion: "KINGSTON FURY BEAST.",
            precio: "$479",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_911249-MCO80716364330_112024-O.webp",
            categoria: "RAM"
        },
        /*PRODUCTO 39*/
        {
            nombre: "DDR5 32G (5600)",
            descripcion: "PATRIOT VIPER BLANCA ELITE 5 RGB.",
            precio: "$459",
            imagen: "https://statics.globaldrop.com.ar/bartez-02-2024/1002_17-04-2024-10-04-58-c1709f6c-8417-4694-ae66-b58cefe943fd_4_1697450184.jpg",
            categoria: "RAM"
        },
        /*PRODUCTO 40*/
        {
            nombre: "DDR5 32G (5600)",
            descripcion: "KINGSTON FURY BEAST RGB.",
            precio: "$503",
            imagen: "https://media.kingston.com/kingston/product/FURY_Beast_Black_RGB_DDR5_4_angle-zm-lg.jpg",
            categoria: "RAM"
        },
        /*PRODUCTO 41*/
        {
            nombre: "DDR5 32G (5600)",
            descripcion: "CORSAIR VENGEANCE RGB.",
            precio: "$503",
            imagen: "https://assets.corsair.com/image/upload/c_pad,q_auto,h_1024,w_1024,f_auto/products/Memory/vengeance-rgb-ddr5-wht-config/Gallery/Vengeance-RGB-DDR5-2UP-WHITE_10.webp",
            categoria: "RAM"
        },
        /*PRODUCTO 42*/
        {
            nombre: "DDR5 32G (6000)",
            descripcion: "VIPER PATRIOT VENOM RGB.",
            precio: "$479",
            imagen: "https://themark.com.co/wp-content/uploads/2024/09/1200.webp",
            categoria: "RAM"
        },
        /*PRODUCTO 43*/
        {
            nombre: "DDR5 32G (6000)",
            descripcion: "GSKILL RIPJAWS M5 RGB BLANCA.",
            precio: "$519",
            imagen: "https://media.materiel.net/r150/products/MN0006158073.jpg",
            categoria: "RAM"
        },
        /*PRODUCTO 44*/
        {
            nombre: "DDR5 32G (6000)",
            descripcion: "KINGSTON FURY BEAST.",
            precio: "$525",
            imagen: "https://tse1.mm.bing.net/th?id=OIP.r6pgJhWL117SbMLiXEs5QgHaGk&pid=Api&P=0&h=180",
            categoria: "RAM"
        },
        /*PRODUCTO 45*/
        {
            nombre: "DDR5 32G (6000)",
            descripcion: "KINGSTON FURY BEAST RGB.",
            precio: "$559",
            imagen: "https://www.invidcomputers.com/images/000000000041664584095KF560C36BWE2K2-32.png",
            categoria: "RAM"
        },
        /*PRODUCTO 46*/
        {
            nombre: "DDR5 32G (6000)",
            descripcion: "KINGSTON FURY RENEGADE RGB.",
            precio: "$559",
            imagen: "https://media.kingston.com/kingston/product/FURY_Renegade_Silver_White_RGB_CUDIMM_DDR5_2_angle-zm-lg.jpg",
            categoria: "RAM"
        },
        /*PRODUCTO 47*/
        {
            nombre: "DDR5 32G (6000)",
            descripcion: "CORSAIR VENGEANCE RGB.",
            precio: "$515",
            imagen: "https://media.lifeinformatica.com/cdn-cgi/image/sharpen=0.5,f=auto/contents/Life/CORSAIR-CMH32GX5M2B6000C40/imgs/CMH32GX5M2B6000C40-01.jpg",
            categoria: "RAM"
        },
        /*PRODUCTO 48*/
        {
            nombre: "DDR5 32G (6000)",
            descripcion: "VIPER PATRIOT VENOM RGB.",
            precio: "$479",
            imagen: "https://www.syntech.co.za/wp-content/uploads/2024/11/PVVR516G60C30_wr_01.jpg",
            categoria: "RAM"
        },
        /*PRODUCTO 49*/
        {
            nombre: "DDR5 32G (6000)",
            descripcion: "GSKILL RIPJAWS M5 RGB BLANCA.",
            precio: "$519",
            imagen: "https://www.impacto.com.pe/storage/products/sm/174076486169769.webp",
            categoria: "RAM"
        },
        /*PRODUCTO 50*/
        {
            nombre: "DDR5 32G (6000)",
            descripcion: "KINGSTON FURY BEAST.",
            precio: "$525",
            imagen: "https://www.invidcomputers.com/images/000000000041664584095KF560C36BWE2K2-32.png",
            categoria: "RAM"
        },
        /*PRODUCTO 51*/
        {
            nombre: "DDR5 32G (6000)",
            descripcion: "KINGSTON FURY BEAST RGB.",
            precio: "$559",
            imagen: "https://media.kingston.com/kingston/product/FURY_Beast_Black_RGB_DDR5_4_angle-zm-lg.jpg",
            categoria: "RAM"
        },
        /*PRODUCTO 52*/
        {
            nombre: "DDR5 32G (6000)",
            descripcion: "KINGSTON FURY RENEGADE RGB.",
            precio: "$559",
            imagen: "https://media.kingston.com/kingston/product/FURY_Renegade_Silver_White_RGB_CUDIMM_DDR5_2_angle-zm-lg.jpg",
            categoria: "RAM"
        },
        /*PRODUCTO 53*/
        {
            nombre: "KIT D5 32G (5200)",
            descripcion: "CORSAIR VENGEANCE RGB AMD (16X2).",
            precio: "$515",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsQWL4woB4wYAK_il_TzD2Vsqx7ZDacGaZxg&s",
            categoria: "RAM"
        },
        /*PRODUCTO 54*/
        {
            nombre: "KIT DDR5 32G (6000)",
            descripcion: "VIPER PATRIOT VENOM RGB (16X2).",
            precio: "$499",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/58575141/resize/610/610?1735071693",
            categoria: "RAM"
        },
        /*PRODUCTO 55*/
        {
            nombre: "KT DR5 32 (6000)",
            descripcion: "CORSAIR DOMINATOR PLATINO RGB (16X2).",
            precio: "$615",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_867399-MLU69018004482_042023-O.webp",
            categoria: "RAM"
        },
        /*PRODUCTO 56*/
        {
            nombre: "KT DR5 32 (6000)",
            descripcion: "COR DOMINATOR PLAT CL36 RGB (16X2).",
            precio: "$669",
            imagen: "https://m.media-amazon.com/images/I/61Ry4NxmHRL.jpg",
            categoria: "RAM"
        },
        /*PRODUCTO 57*/
        {
            nombre: "KT DR5 32 (6000)",
            descripcion: "CORSAIR DOMINATOR TITANIO RGB (16X2).",
            precio: "$729",
            imagen: "https://content.app-sources.com/s/06812195814293589/uploads/Memoria_RAM/CORSAIR_Dominator_Titanium_RGB_DDR5_RAM_32_GB_2_x_16_GB-1219226.png?format=webp",
            categoria: "RAM"
        },
        /*PRODUCTO 58*/
        {
            nombre: "KIT DDR5 32G (6800)",
            descripcion: "VIPER PATRIOT VENOM RGB (16X2).",
            precio: "$579",
            imagen: "https://themark.com.co/wp-content/uploads/2024/09/516gMXiRCFL._AC_SL1200_.jpg",
            categoria: "RAM"
        },
        /*PRODUCTO 59*/
        {
            nombre: "KIT DDR5 32G (7200)",
            descripcion: "COR DOMINATOR PLATINO RGB (16X2).",
            precio: "$859",
            imagen: "https://webobjects2.cdw.com/is/image/CDW/7470206?wid=784&hei=477&resMode=bilin&fit=fit,1",
            categoria: "RAM"
        },
        /*PRODUCTO 60*/
        {
            nombre: "KIT DDR5 32G (7200)",
            descripcion: "COR DOMINATOR TITANIO RGB BLC (16X.",
            precio: "$895",
            imagen: "https://assets.corsair.com/image/upload/c_pad,q_auto,h_1024,w_1024,f_auto/products/Memory/Dominator%20Titanium/Gallery/DOMINATOR_TITANIUM_RGB_BLACK_RENDER_09.webp",
            categoria: "RAM"
        },
        /*PRODUCTO 61*/
        {
            nombre: "KIT DDR5 32G (7200)",
            descripcion: "COR DOMINATOR TITANIO RGB (16X2).",
            precio: "$895",
            imagen: "https://m.media-amazon.com/images/I/31HoNqjy7hL._QL92_SH45_SS200_.jpg",
            categoria: "RAM"
        },
        /*PRODUCTO 62*/
        {
            nombre: "KIT DDR5 48G (6000)",
            descripcion: "PATRIOT VIPER ELITE 5 TUF BC(24x2).",
            precio: "$850",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/47774014/51gqseRi_NL._AC_SL1200_.jpg?1714499867",
            categoria: "RAM"
        },
        /*PRODUCTO 63*/
        {
            nombre: "KIT DDR5 64G (6000)",
            descripcion: "CORSAIR VENGEANCE RGB (32X2).",
            precio: "$995",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/59457907/61L8HPVBoUL._AC_SL1500_.jpg?1737676172",
            categoria: "RAM"
        },
        /*PRODUCTO 64*/
        {
            nombre: "KT DR5 64 (6000)",
            descripcion: "CORSAIR DOMINATOR TITANIO RGB (32X2).",
            precio: "$1309",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/61693811/resize/300/300?1742811767",
            categoria: "RAM"
        },
        /*PRODUCTO 65*/
        {
            nombre: "KIT DDR5 96G (5200)",
            descripcion: "CORSAIR VENGEANCE RGB (48x2).",
            precio: "$1230",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/42944688/resize/300/300?1709950968",
            categoria: "RAM"
        },
        /*PRODUCTO 66*/
        {
            nombre: "KIT DDR5 96G (7000)",
            descripcion: "COR DOMINATOR TITANIO RGB (48X2).",
            precio: "$1659",
            imagen: "https://assets.corsair.com/image/upload/c_pad,q_auto,h_1024,w_1024,f_auto/products/Memory/Dominator%20Titanium/enhanced%20images/black/2UP/DOMINATOR_TITANIUM_RGB_DDR5_BLACK_2UP_Artboard07_AA.webp",
            categoria: "RAM"
        },
        /*PRODUCTO 67*/
        {
            nombre: "PORTATIL DDR3 4G (1600-L) ",
            descripcion: "SAMSUNG PULL USADO.",
            precio: "$59",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQbJmKcfCy00LPMgXBKEHigfRtE9ECYpD_yg&s",
            categoria: "RAM"
        },
        /*PRODUCTO 68*/
        {
            nombre: "PORTATIL DDR3 8G (1600-L)",
            descripcion: "SAMSUNG PULL USADO.",
            precio: "$85",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEP37oXUPPSjlFbAYkgGoPtJGnlChz9hPoKg&s",
            categoria: "RAM"
        },
        /*PRODUCTO 69*/
        {
            nombre: "PORTATIL DDR4 8GB (3200)",
            descripcion: "ADATA.",
            precio: "$75",
            imagen: "https://symcomputadores.com/wp-content/uploads/2023/01/2.webp",
            categoria: "RAM"
        },
        /*PRODUCTO 70*/
        {
            nombre: "PORTATIL DDR4 8GB (3200)",
            descripcion: "CRUCIAL.",
            precio: "$85",
            imagen: "https://pcsforall.co/cdn/shop/files/RAM-DCR-1242-Top_grande.png?v=1739487792",
            categoria: "RAM"
        },
        /*PRODUCTO 71*/
        {
            nombre: "PORTATIL DDR4 8GB (3200)",
            descripcion: "CORSAIR VENGEANCE.",
            precio: "$89",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4tCPKePJ6HNgvzj_j5IN5oO1D-NmU4Ax8fA&s",
            categoria: "RAM"
        },
        /*PRODUCTO 72*/
        {
            nombre: "PORTATIL DDR4 16G (3200)",
            descripcion: "ADATA.",
            precio: "$129",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjutXY3AvECsfw10UwwRaLEaErBcUdoKSWUg&s",
            categoria: "RAM"
        },
        /*PRODUCTO 73*/
        {
            nombre: "PORTATIL DDR4 16G (3200)",
            descripcion: "CORSAIR VENGEANCE.",
            precio: "$145",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS953tePAO6YM1vuQO2jT_xt5OStp2MlLh6LQ&s",
            categoria: "RAM"
        },
        /*PRODUCTO 74*/
        {
            nombre: "PORTATIL DDR4 16G (3200)",
            descripcion: "CRUCIAL.",
            precio: "$149",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx2wgvIhzFwaEoV9vdULpWOdtXriJJSdkNlQ&s",
            categoria: "RAM"
        },
        /*PRODUCTO 75*/
        {
            nombre: "PORTATIL DDR5 8G (5600)",
            descripcion: "SK HYNIX.",
            precio: "$119",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_mpN6C5vRlKjERc5C3yeiUx9IXKkTUp3Wjg&s",
            categoria: "RAM"
        },
        /*PRODUCTO 76*/
        {
            nombre: "PORTATIL DDR5 16G (4800)",
            descripcion: "ADATA.",
            precio: "$199",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfJeZesJ_CjFySNcHfxds_aBhyExePad2AdA&s",
            categoria: "RAM"
        },
        /*PRODUCTO 77*/
        {
            nombre: "PORTATIL DDR5 16G (4800)",
            descripcion: "CORSAIR VENGEANCE.",
            precio: "$225",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6VlYsw0ZuGF0MxXwMFIBPjUxQoOvjCciIOg&s",
            categoria: "RAM"
        },
        /*PRODUCTO 78*/
        {
            nombre: "PORTATIL DDR5 16G (5600)",
            descripcion: "PATRIOT.",
            precio: "$225",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/52411086/resize/610/610?1725138581",
            categoria: "RAM"
        },
        /*PRODUCTO 79*/
        {
            nombre: "PORTATIL DDR5 16G (5600)",
            descripcion: "KINGSTON.",
            precio: "$245",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR60GsNOzS7r9Q_0Qeohslu4ch4Xksy5qmW1Q&s",
            categoria: "RAM"
        },
        /*PRODUCTO 80*/
        {
            nombre: "PORTATIL DDR5 32G (5200)",
            descripcion: "KINGSTON.",
            precio: "$415",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0U0EbxMhwvg9OStKFW8gI3QKZNmgIFKRlyw&s",
            categoria: "RAM"
        },
        /*PRODUCTO 81*/
        {
            nombre: "PORTATIL DDR5 32G (5600)",
            descripcion: "PATRIOT.",
            precio: "$399",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyEEcAAzvCJuwnfuwmGIVvqh759hGV9uQGJg&s",
            categoria: "RAM"
        },
        /*PRODUCTO 82*/
        {
            nombre: "PORTATIL DDR5 32G (5600)",
            descripcion: "CORSAIR VENGEANCE.",
            precio: "$415",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/46260112/resize/1200/1200?1714498984",
            categoria: "RAM"
        },
        /*PRODUCTO 83*/
        {
            nombre: "PORTATIL DDR5 32G (5600)",
            descripcion: "KINGSTON.",
            precio: "$425",
            imagen: "https://frontier.com.co/content/product/0017647_memoria-ram-kingston-32gb-ddr5-5600mhz-non-ecc-cl46-so-dimm_415.jpeg",
            categoria: "RAM"
        },
        /*PRODUCTO 84*/
        {
            nombre: "MICRO SD 64GB",
            descripcion: "KINGSTON CANVAS CLASE 10.",
            precio: "$25",
            imagen: "https://exitocol.vtexassets.com/arquivos/ids/23153495/memoria-kingston-micro-sd-64-gb-clase-10-adaptador-sd.jpg?v=638538236614600000",
            categoria: "RAM"
        },
        /*PRODUCTO 85*/
        {
            nombre: "MICRO SD 128GB",
            descripcion: "KINGSTON CANVAS CLASE 10.",
            precio: "$42",
            imagen: "https://panamericana.vtexassets.com/arquivos/ids/357306/memoria-microsd-kingston-128gb-clase-10-1-740617298703.jpg?v=637315513279730000",
            categoria: "RAM"
        },
        /*PRODUCTO 86*/
        {
            nombre: "MICRO SD 256GB",
            descripcion: "KINGSTON CANVAS CLASE 10.",
            precio: "$75",
            imagen: "https://panamericana.vtexassets.com/arquivos/ids/357306/memoria-microsd-kingston-128gb-clase-10-1-740617298703.jpg?v=637315513279730000",
            categoria: "RAM"
        },
        /*PRODUCTO 87*/
        {
            nombre: "MICRO SD 128GB",
            descripcion: "KINGSTON CANVAS GO 170Mb/s 4K.",
            precio: "$60",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6GMRII4HUNEBcdZaiezoP41c3CZp46pF6eA&s",
            categoria: "RAM"
        },
        /*PRODUCTO 88*/
        {
            nombre: "USB 64GB",
            descripcion: "KINGSTON DT EXODIA NEGRA ONYX.",
            precio: "$23",
            imagen: "https://todotintasysuministros.com/assets/media/usb-kingston-datatraveler-exodia-onyx-64gb.jpg?u=1716657271",
            categoria: "RAM"
        },
        /*PRODUCTO 89*/
        {
            nombre: "USB 64GB",
            descripcion: "KINGSTON DT EXODIA M NEGRA AZUL.",
            precio: "$23",
            imagen: "https://todotintasysuministros.com/assets/media/memoria-usb-kingston-datatraveler-exodia-m-flash-64gb-azul-negro_extraLargeThumb.webp",
            categoria: "RAM"
        },
        /*PRODUCTO 90*/
        {
            nombre: "USB 128GB",
            descripcion: "KINGSTON DT EXODIA NEGRA ONYX.",
            precio: "$35",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK512w6RKCbF5G9hOOILiRk5JCoq58Qy5WEw&s",
            categoria: "RAM"
        },
        /*PRODUCTO 91*/
        {
            nombre: "USB 128GB",
            descripcion: "KINGSTON DT EXODIA M NEGRA-ROJA.",
            precio: "$35",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrc0B8K1h9lIYTMO8hXtxWTpMde_uZpV5ABQ&s",
            categoria: "RAM"
        },
        /*PRODUCTO 92*/
        {
            nombre: "USB 256GB",
            descripcion: "KINGSTON DT EXODIA M BLACK/TEAL.",
            precio: "$69",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1jzQ0PqLYxqW00gF3j209SHp_oTFiyH-L_g&s",
            categoria: "RAM"
        },
        /*PRODUCTO 93*/
        {
            nombre: "USB 256GB",
            descripcion: "KINGSTON DT EXODIA NEGRA ONYX.",
            precio: "$69",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaMH0WLjMVf19VhPBy064pw4Xth3XsCmxRyQ&s",
            categoria: "RAM"
        },
        /*PRODUCTO 94*/
        {
            nombre: "INTEL CORE i5",
            descripcion: "12400F(2,5-18M-6COR).",
            precio: "$649",
            imagen: "https://m.media-amazon.com/images/I/61pG8k-KDiL.jpg",
            categoria: "PROCESADORES"
        },
        /*PRODUCTO 95*/
        {
            nombre: "INTEL CORE i5",
            descripcion: "12400 (2,5-18M-6CORE).",
            precio: "$799",
            imagen: "https://m.media-amazon.com/images/I/41ujMDrnWxL.jpg",
            categoria: "PROCESADORES"
        },
        /*PRODUCTO 96*/
        {
            nombre: "INTEL CORE i7",
            descripcion: "12700F (2,1Gz-25M-12CR.",
            precio: "$1424",
            imagen: "https://m.media-amazon.com/images/I/51uaa0aiPnL._AC_UF350,350_QL80_.jpg",
            categoria: "PROCESADORES"
        },
        /*PRODUCTO 97*/
        {
            nombre: "INTEL CORE i7",
            descripcion: "12700 (2,1Gz-25M-12COR).",
            precio: "$",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoRHBJ-7SHW1HdrOQCOGbzz9orNi6LXTwJkg&s",
            categoria: "PROCESADORES"
        },
        /*PRODUCTO 98*/
        {
            nombre: "INTEL CORE i3",
            descripcion: "14100F (4,7-12M-4COR).",
            precio: "$639",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-g7lln2hsrscDRbuWo1TGcIR6uh9WiOCGIQ&s",
            categoria: "PROCESADORES"
        },
        /*PRODUCTO 99*/
        {
            nombre: "INTEL CORE i3",
            descripcion: "14100 (4,7-12M-4COR).",
            precio: "$",
            imagen: "https://i.ebayimg.com/images/g/BH4AAeSw1ZFn~uWd/s-l225.jpg",
            categoria: "PROCESADORES"
        },
        /*PRODUCTO 100*/
        {
            nombre: "INTEL CORE i5",
            descripcion: "14400F (2,5-9,5M-10COR).",
            precio: "$885",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_678024-MLU79303876887_092024-O.webp",
            categoria: "PROCESADORES"
        },
        /*PRODUCTO 101*/
        {
            nombre: "INTEL CORE i5",
            descripcion: "14400 (2,5-9,5M-10COR).",
            precio: "$",
            imagen: "https://http2.mlstatic.com/D_Q_NP_976887-MLU74201867543_012024-O.webp",
            categoria: "PROCESADORES"
        },
        /*PRODUCTO 102*/
        {
            nombre: "INTEL CORE i5",
            descripcion: "14600KF (3,5-24M-14COR).",
            precio: "$1175",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/61496082/resize/1200/1200?1742331342",
            categoria: "PROCESADORES"
        },
        /*PRODUCTO 103*/
        {
            nombre: "INTEL CORE i5",
            descripcion: "14600K (3,5-24M-14COR).",
            precio: "$1299",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/61496056/resize/1200/1200?1742331236",
            categoria: "PROCESADORES"
        },
        /*PRODUCTO 104*/
        {
            nombre: "INTEL CORE i7",
            descripcion: "14700F (2,1-33M-20COR).",
            precio: "$1749",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCVAT3Kn0e-A7LFl9uJy7zAiMDhbA_0hWq8g&s",
            categoria: "PROCESADORES"
        },
        /*PRODUCTO 105*/
        {
            nombre: "INTEL CORE i7",
            descripcion: "14700  (3,4-33M-20COR).",
            precio: "$1859",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/42811685/resize/610/610?1742330939",
            categoria: "PROCESADORES"
        },
        /*PRODUCTO 106*/
        {
            nombre: "INTEL CORE i7",
            descripcion: "14700KF (3,4-33M-20COR).",
            precio: "$1959",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThqovqUO7tdsqznCnvAm5RZUeLyHBzaPHo9A&s",
            categoria: "PROCESADORES"
        },
        /*PRODUCTO 107*/
        {
            nombre: "INTEL CORE i7",
            descripcion: "14700K (3,4-33M-20COR).",
            precio: "$2079",
            imagen: "https://m.media-amazon.com/images/I/51seOKbqbcL._AC_SY200_QL15_.jpg",
            categoria: "PROCESADORES"
        },
        /*PRODUCTO 108*/
        {
            nombre: "INTEL CORE i9",
            descripcion: "14900KF (3,2-36M-24COR).",
            precio: "$2575",
            imagen: "https://i.blogs.es/b734a7/intelcorei9-14900k-ap/1366_2000.jpeg",
            categoria: "PROCESADORES"
        },
        /*PRODUCTO 109*/
        {
            nombre: "INTEL CORE i9",
            descripcion: "14900K (3,2-36M-24COR).",
            precio: "$",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQghv2mVk-YjCEUNTTxrqUDeXabst6rJlU4HQ&s",
            categoria: "PROCESADORES"
        },
        /*PRODUCTO 110*/
        {
            nombre: "INTEL CORE ULTRA 5 ",
            descripcion: "245KF (4,2-26M-14COR).",
            precio: "$1619",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKSP212YK-Kf2p2tGM0b7Uf1y9j957gjkhEA&s",
            categoria: "PROCESADORES"
        },
        /*PRODUCTO 111*/
        {
            nombre: "INTEL CORE ULTRA 5",
            descripcion: "245K (4,2-26M-14COR) NO FAN.",
            precio: "$1709",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_617672-MLA80247038561_102024-O.webp",
            categoria: "PROCESADORES"
        },
        /*PRODUCTO 112*/
        {
            nombre: "INTEL CORE ULTRA 7",
            descripcion: "265F (2,4-36M-20COR).",
            precio: "$1829",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/58022099/resize/1200/1200?1733335760",
            categoria: "PROCESADORES"
        },
        /*PRODUCTO 113*/
        {
            nombre: "INTEL CORE ULTRA 7",
            descripcion: "265 (2,4-36M-20COR).",
            precio: "$1939",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/58022071/resize/610/610?1742330154",
            categoria: "PROCESADORES"
        },
        /*PRODUCTO 114*/
        {
            nombre: "INTEL CORE ULTRA 7",
            descripcion: "265KF (3,9-30M-20COR).",
            precio: "$2079",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS5gP-FpYWcw60M59Y9H-FH9_NLkAMWjT69g&s",
            categoria: "PROCESADORES"
        },
        /*PRODUCTO 115*/
        {
            nombre: "INTEL CORE ULTRA 7",
            descripcion: "265K (3,9-30M-20COR).",
            precio: "$2205",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHX8i_r1ydRLr_UgkCxnIuF3frT5KDfFFumA&s",
            categoria: "PROCESADORES"
        },
        /*PRODUCTO 116*/
        {
            nombre: "INTEL CORE ULTRA 9",
            descripcion: "285  (2,5-36M-24COR).",
            precio: "$3079",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwO03f-2GYpZKQelEXnrCkyDwE17GGr-tX1w&s",
            categoria: "PROCESADORES"
        },
        /*PRODUCTO 117*/
        {
            nombre: "AMD RYZEN 5-4500",
            descripcion: "(3,6-6CORE) AM4.",
            precio: "$715",
            imagen: "https://http2.mlstatic.com/D_Q_NP_608450-MLU74291700062_022024-O.webp",
            categoria: "PROCESADORES"
        },
        /*PRODUCTO 118*/
        {
            nombre: "AMD RYZEN 5-5600X",
            descripcion: "(3,7-32M-6CORE) AM4.",
            precio: "$799",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS26nL8e89FxJNlHxfcfC41FrRST4g2IINAug&s",
            categoria: "PROCESADORES"
        },
        /*PRODUCTO 119*/
        {
            nombre: "AMD RYZEN 7-5700G",
            descripcion: "(3,8-8CORE-RADEON) AM4.",
            precio: "$929",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrYH9fw7KBj_qhRrgOElCJVbK-BN1uzzi3hA&s",
            categoria: "PROCESADORES"
        },
        /*PRODUCTO 120*/
        {
            nombre: "AMD RYZEN 7-5700X",
            descripcion: "(3,4-32M-8CORE) AM4 NOFAN.",
            precio: "$959",
            imagen: "https://m.media-amazon.com/images/I/51+D-WUnGtL.jpg_BO30,255,255,255_UF900,850_SR1910,1000,0,C_QL100_.jpg",
            categoria: "PROCESADORES"
        },
        /*PRODUCTO 121*/
        {
            nombre: "AMD RYZEN 7-5800X",
            descripcion: "(3,8-32M-8CORE) AM4 NOFAN.",
            precio: "$1119",
            imagen: "https://www.xtremetecpc.com/images/media/2022/11/7-5800X-3.jpg",
            categoria: "PROCESADORES"
        },
        /*PRODUCTO 122*/
        {
            nombre: "AMD RYZEN 7-5800XT",
            descripcion: "(3,8-32M-8CORE) AM4 NOFAN/NOVD.",
            precio: "$1265",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp1tfvAb5x87WnT8EQE_UPe3BOW2Y5TX2iIA&s",
            categoria: "PROCESADORES"
        },
        /*PRODUCTO 123*/
        {
            nombre: "AMD RYZEN 5-7600X",
            descripcion: "(4,7-6CORE RADEON)AM5 NOFAN.",
            precio: "$1197",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Oaqnqzn4GWwuUf0oqsSu9N6W0tGDBpwMkg&s",
            categoria: "PROCESADORES"
        },
        /*PRODUCTO 124*/
        {
            nombre: "AMD RYZEN 7-7700",
            descripcion: "(3,8-8CORE-RADEON)AM5.",
            precio: "$1625",
            imagen: "https://jactechnologystore.com/wp-content/uploads/2024/07/PROCESADOR-AMD-RYZEN-7-7700-38Gz-8CORE-RADEON-AM5-11.png",
            categoria: "PROCESADORES"
        },
        /*PRODUCTO 125*/
        {
            nombre: "AMD RYZEN 7-7700X",
            descripcion: "(4,5Gz-8CR-RADEON)AM5 NO FAN.",
            precio: "$1669",
            imagen: "https://static.wixstatic.com/media/5fc14a_b82f2f8f493745b38661ce358cc34acf~mv2.png/v1/fill/w_980,h_980,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/5fc14a_b82f2f8f493745b38661ce358cc34acf~mv2.png",
            categoria: "PROCESADORES"
        },
        /*PRODUCTO 126*/
        {
            nombre: "AMD RYZEN 9-7900X",
            descripcion: "(4,7Gz-12CR RADEON)AM5 NO FAN.",
            precio: "$2070",
            imagen: "https://m.media-amazon.com/images/I/41V3kZjfIZL.jpg_BO30,255,255,255_UF900,850_SR1910,1000,0,C_QL100_.jpg",
            categoria: "PROCESADORES"
        },
        /*PRODUCTO 127*/
        {
            nombre: "AMD RYZEN 9-7950X",
            descripcion: "(4,5Gz-16CR RADEON)AM5 NO FAN.",
            precio: "$2909",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVTYXOiYPCu_EeTj2-aVG3aFUYyQD3odKgVA&s",
            categoria: "PROCESADORES"
        },
        /*PRODUCTO 128*/
        {
            nombre: "AMD RYZEN 9-7950X 3D",
            descripcion: "(4,2Gz-16CR-RADEON)AM5 NOFAN.",
            precio: "$3289",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/28453921/resize/610/610?1665956635",
            categoria: "PROCESADORES"
        },
        /*PRODUCTO 129*/
        {
            nombre: "AMD RYZEN 5 8500G",
            descripcion: "(3,5-6COR-RADEON)AM5.",
            precio: "$819",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4MWW9asMtXsdE6HR3RGfj_7ur9yQiUH0Txw&s",
            categoria: "PROCESADORES"
        },
        /*PRODUCTO 130*/
        {
            nombre: "AMD RYZEN 5 8600G",
            descripcion: "(4,3-6CORE-RADEON)AM5.",
            precio: "$1009",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHgMgBHvFgJgHCbgAUFihLI8WEzqyNDoPctg&s",
            categoria: "PROCESADORES"
        },
        /*PRODUCTO 131*/
        {
            nombre: "AMD RYZEN 7 8700G",
            descripcion: "(4,2-8CORE-RADEON)AM5.",
            precio: "$1499",
            imagen: "https://acdn-us.mitiendanube.com/stores/001/474/949/products/r7-8700g-c3b3ad7e2fe82dbb9f17251340298034-640-0.jpg",
            categoria: "PROCESADORES"
        },
        /*PRODUCTO 132*/
        {
            nombre: "AMD RYZEN 5 9600X",
            descripcion: "(5,4-6CORE-RADEON)AM5 NO FAN.",
            precio: "$1429",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuKxD55BJFWjnfHMIhvUBNqyA-KhBC7rCeZQ&s",
            categoria: "PROCESADORES"
        },
        /*PRODUCTO 133*/
        {
            nombre: "AMD RYZEN 7 9700X",
            descripcion: "(5,5-8CORE-RADEON)AM5 NO FAN.",
            precio: "$1849",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/52410478/resize/610/610?1725136260",
            categoria: "PROCESADORES"
        },
        /*PRODUCTO 134*/
        {
            nombre: "AMD RYZEN 7 9800X 3D",
            descripcion: "(5,2-8CORE-RADEON)AM5 NO FAN.",
            precio: "$2919",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR84A5Hrx_uVMDm1TS7Pq50wtj6lWw3C2jB-g&s",
            categoria: "PROCESADORES"
        },
        /*PRODUCTO 135*/
        {
            nombre: "AMD RYZEN 9 9900X",
            descripcion: "(5,6-12COR-RADEON) AM5 NO FAN.",
            precio: "$2339",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_707178-MLU78734405414_092024-O.webp",
            categoria: "PROCESADORES"
        },
        /*PRODUCTO 136*/
        {
            nombre: "AMD RYZEN 9 9900X 3D",
            descripcion: "(5,5-12COR-RADEON) AM5 NO FAN.",
            precio: "$3429",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSktG2KNmNERvezHbVTVikbVXRqyxj8TAXDAQ&s",
            categoria: "PROCESADORES"
        },
        /*PRODUCTO 137*/
        {
            nombre: "AMD RYZEN 9 9950X",
            descripcion: "(5,7-16COR-RADEON)AM5 NO FAN.",
            precio: "$3199",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCgcOqC3H61Uy53_5OPLhb5MJn4bbUHi1S7Q&s",
            categoria: "PROCESADORES"
        },
        /*PRODUCTO 138*/
        {
            nombre: "AMD RYZEN 9 9950X 3D",
            descripcion: "(5,7-16COR-RADEON)AM5 NO FAN.",
            precio: "$3899",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOOtP0k9x1ZtX1rhbctAcit-FEKXPk2mV6wA&s",
            categoria: "PROCESADORES"
        },
        /*PRODUCTO 139*/
        {
            nombre: "SOLIDO SATA (SSD)",
            descripcion: "240GB CRUCIAL BX500.",
            precio: "$89",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZJXqXqKULuDVzlVPzmybbENb-Vm_mGpZfOw&s",
            categoria: "DISCOS DUROS"
        },
        /*PRODUCTO 140*/
        {
            nombre: "SOLIDO SATA (SSD)",
            descripcion: "500GB CRUCIAL BX500.",
            precio: "$156",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/14237540/resize/610/610?1654106866",
            categoria: "DISCOS DUROS"
        },
        /*PRODUCTO 141*/
        {
            nombre: "SOLIDO SATA (SSD)",
            descripcion: "512GB P220 PATRIOT.",
            precio: "$145",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/48105913/resize/300/300?1714517488",
            categoria: "DISCOS DUROS"
        },
        /*PRODUCTO 142*/
        {
            nombre: "SOLIDO SATA (SSD)",
            descripcion: "960GB KINGSTON A400.",
            precio: "$245",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpL7tD0uS8qHb47FFC6JZwXs-b4KexqLa1IA&s",
            categoria: "DISCOS DUROS"
        },
         /*PRODUCTO 143*/
        {
            nombre: "SOLIDO SATA (SSD)",
            descripcion: "1TB CRUCIAL BX500.",
            precio: "$259",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/8155564/CRUCIAL_BX500.jpg?1654106754",
            categoria: "DISCOS DUROS"
        },
         /*PRODUCTO 144*/
        {
            nombre: "SOLIDO SATA (SSD)",
            descripcion: "2TB P220 PATRIOT.",
            precio: "$449",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_600752-MLU69721545861_052023-O.webp",
            categoria: "DISCOS DUROS"
        },
         /*PRODUCTO 145*/
        {
            nombre: "SOLIDO SATA (SSD)",
            descripcion: "2TB CRUCIAL BX500.",
            precio: "$515",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/14237538/CRUCIAL_BX500.jpg?1654106866",
            categoria: "DISCOS DUROS"
        },
         /*PRODUCTO 146*/
        {
            nombre: "SSD (M2)",
            descripcion: "256GB PATRIOT P320.",
            precio: "$99",
            imagen: "https://cdn.prod.website-files.com/671ef22d67b95ce128c2186f/671ef22d67b95ce128c2288b_product_gallery_P320_01.jpg",
            categoria: "DISCOS DUROS"
        },
         /*PRODUCTO 147*/
        {
            nombre: "SSD (M2)",
            descripcion: "500GB CRUCIAL P3 PLUS.",
            precio: "$189",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/47793595/resize/1200/1200?1713490325",
            categoria: "DISCOS DUROS"
        },
         /*PRODUCTO 148*/
        {
            nombre: "SSD (M2)",
            descripcion: "500GB KINGSTON NV3.",
            precio: "$209",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkG7jZ-fWyzZKpymLoc4uM4ASf5W9D5b9fYw&s",
            categoria: "DISCOS DUROS"
        },
         /*PRODUCTO 149*/
        {
            nombre: "SSD (M2)",
            descripcion: "500G KINGSTON RENEGADE.",
            precio: "$299",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr2YsQZV-4gYzDOfsNvCj94PIoj0hFOMkvnw&s",
            categoria: "DISCOS DUROS"
        },
         /*PRODUCTO 150*/
        {
            nombre: "SSD (M2)",
            descripcion: "512GB PATRIOT P320.",
            precio: "$165",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/54389534/resize/610/610?1728412808",
            categoria: "DISCOS DUROS"
        },
         /*PRODUCTO 151*/
        {
            nombre: "SSD (M2)",
            descripcion: "1TB CRUCIAL P3 PLUS.",
            precio: "$290",
            imagen: "https://symcomputadores.com/wp-content/uploads/2024/04/Crucial-m2-1TB-P3-Plus.png",
            categoria: "DISCOS DUROS"
        },
         /*PRODUCTO 152*/
        {
            nombre: "SSD (M2)",
            descripcion: "1TB KINGSTON NV3.",
            precio: "$309",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR29AC8YzDr6-5qSBBRKUoErfppVAb6oDZzmA&s",
            categoria: "DISCOS DUROS"
        },
         /*PRODUCTO 153*/
        {
            nombre: "SSD (M2)",
            descripcion: "1TB PATRIOT VIPER VP4300 LITE.",
            precio: "$399",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUXaSTeIJRKbV228tPhlW09jgHlpXHdYtKIg&s",
            categoria: "DISCOS DUROS"
        },
         /*PRODUCTO 154*/
        {
            nombre: "SSD (M2)",
            descripcion: "1TB KINGSTON RENEGADE.",
            precio: "$480",
            imagen: "https://media.kingston.com/kingston/product/ktc-product-ssd-sfyrs-1000gb-3-zm-lg.jpg",
            categoria: "DISCOS DUROS"
        },
         /*PRODUCTO 155*/
        {
            nombre: "SSD (M2)",
            descripcion: "1TB SN850X WESTER BLACK.",
            precio: "$515",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/48105708/resize/610/610?1714516770",
            categoria: "DISCOS DUROS"
        },
         /*PRODUCTO 156*/
        {
            nombre: "SSD (M2)",
            descripcion: "1TB SAMSUNG 990 PRO PS5.",
            precio: "$619",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/50097697/resize/1200/1200?1742445257",
            categoria: "DISCOS DUROS"
        },
         /*PRODUCTO 157*/
        {
            nombre: "SSD (M2)",
            descripcion: "1TB CORSAIR MP700 PRO.",
            precio: "$779",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/62976220/resize/1200/1200?1745822146",
            categoria: "DISCOS DUROS"
        },
         /*PRODUCTO 158*/
        {
            nombre: "SSD (M2)",
            descripcion: "1TB CORSAIR MP700 PRO DISIPADO.",
            precio: "$895",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/62976221/71J4nUviF2L._AC_UF894_1000_QL80_.jpg?1745822184",
            categoria: "DISCOS DUROS"
        },
         /*PRODUCTO 159*/
        {
            nombre: "SSD (M2)",
            descripcion: "2TB PATRIOT P320.",
            precio: "$485",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/58911045/61mLgfAd5QL._AC_UF894_1000_QL80_.jpg?1736325153",
            categoria: "DISCOS DUROS"
        },
         /*PRODUCTO 160*/
        {
            nombre: "SSD (M2)",
            descripcion: "2TB PATRIOT P400 LITE.",
            precio: "$515",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/49890414/51XkBpBnzrL.jpg?1718819384",
            categoria: "DISCOS DUROS"
        },
         /*PRODUCTO 161*/
        {
            nombre: "SSD (M2)",
            descripcion: "2TB CRUCIAL P3 PLUS.",
            precio: "$570",
            imagen: "https://themark.com.co/wp-content/uploads/2024/09/Crucial-m2-2TB-P3-Plus.png",
            categoria: "DISCOS DUROS"
        },
         /*PRODUCTO 162*/
        {
            nombre: "SSD (M2)",
            descripcion: "2TB CORSAIR MP600 CORE XT.",
            precio: "$609",
            imagen: "https://m.media-amazon.com/images/I/51i9IAmE2ML._AC_UF894,1000_QL80_FMwebp_.jpg",
            categoria: "DISCOS DUROS"
        },
         /*PRODUCTO 163*/
        {
            nombre: "SSD (M2)",
            descripcion: "2TB KINGSTON NV3.",
            precio: "$609",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz9BaCWxKPtLbbVZVdBUUmnr4iQD4_K6dw8g&s",
            categoria: "DISCOS DUROS"
        },
         /*PRODUCTO 164*/
        {
            nombre: "SSD (M2)",
            descripcion: "2TB PATRIOT VIPER VP4300 LITE.",
            precio: "$649",
            imagen: "https://content.app-sources.com/s/06812195814293589/uploads/Almacenamiento_SSD/SSD_1TB_Patriot_Viper_VP4300_Lite-5052113.png?format=webp",
            categoria: "DISCOS DUROS"
        },
         /*PRODUCTO 165*/
        {
            nombre: "SSD (M2)",
            descripcion: "2TB SAMSUNG 990 PRO.",
            precio: "$969",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/54387594/resize/610/610?1728412046",
            categoria: "DISCOS DUROS"
        },
         /*PRODUCTO 166*/
        {
            nombre: "SSD (M2)",
            descripcion: "2TB CORSAIR MP700 PRO GEN5.",
            precio: "$1209",
            imagen: "https://http2.mlstatic.com/D_Q_NP_716577-MLU74163815015_012024-O.webp",
            categoria: "DISCOS DUROS"
        },
         /*PRODUCTO 167*/
        {
            nombre: "SSD (M2)",
            descripcion: "2TB CORSAIR MP700 PRO DISIPADO.",
            precio: "$1275",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/62976224/resize/1200/1200?1745822642",
            categoria: "DISCOS DUROS"
        },
         /*PRODUCTO 168*/
        {
            nombre: "SSD (M2)",
            descripcion: "4TB CRUCIAL P3 PLUS.",
            precio: "$1189",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/53810553/resize/610/610?1727309719",
            categoria: "DISCOS DUROS"
        },
         /*PRODUCTO 169*/
        {
            nombre: "SSD (M2)",
            descripcion: "4TB PATRIOT VIPER VP4300 LITE.",
            precio: "$1219",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/47793585/resize/1200/1200?1713490233",
            categoria: "DISCOS DUROS"
        },
         /*PRODUCTO 170*/
        {
            nombre: "SSD (M2)",
            descripcion: "4TB KINGSTON NV3.",
            precio: "$1255",
            imagen: "https://media.kingston.com/kingston/product/SNV3S_2000GB-zm-lg.jpg",
            categoria: "DISCOS DUROS"
        },
         /*PRODUCTO 171*/
        {
            nombre: "4 TERAS SATA WESTERN DIGITAL",
            descripcion: "CAVIAR PURPURA 24/7.",
            precio: "$469",
            imagen: "https://syacomputadores.com/wp-content/uploads/2024/05/1500665267633.jpg",
            categoria: "DISCOS DUROS"
        },
         /*PRODUCTO 172*/
        {
            nombre: "6 TERAS SATA WESTERN DIGITAL",
            descripcion: "CAVIAR PURPLE 24/7.",
            precio: "$735",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/50518796/disco-duro-western-digital-purple-6tb-para-videovigilancia-interfaz-sata-iii-60-gbs-.webp?1720540911",
            categoria: "DISCOS DUROS"
        },
         /*PRODUCTO 173*/
        {
            nombre: "SSD USB-C 1TB",
            descripcion: "KINGSTON XS1000R ROJO.",
            precio: "$335",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcfC_J3NFhb_wWe5n0P2kFcf7TXKFHb6u2xQ&s",
            categoria: "DISCOS DUROS"
        },
         /*PRODUCTO 174*/
        {
            nombre: "SSD USB-C 1TB",
            descripcion: "KINGSTON XS1000 NEGRO.",
            precio: "$335",
            imagen: "https://exitocol.vtexassets.com/arquivos/ids/24659052/disco-externo-ssd-kingston-xs1000-1tb-usb-32-gen-2.jpg?v=638620976329970000",
            categoria: "DISCOS DUROS"
        },
         /*PRODUCTO 175*/
        {
            nombre: "SSD USB-C 1TB",
            descripcion: "KINGSTON XS2000.",
            precio: "$435",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/50518907/resize/610/610?1720541313",
            categoria: "DISCOS DUROS"
        },
         /*PRODUCTO 176*/
        {
            nombre: "SSD USB-C 1TB",
            descripcion: "CORSAIR GEN2X2.",
            precio: "$445",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_670347-MLU78115468279_082024-O.webp",
            categoria: "DISCOS DUROS"
        },
         /*PRODUCTO 177*/
        {
            nombre: "SSD USB-C 2TB",
            descripcion: "KINGSTON XS1000 NEGRO.",
            precio: "$525",
            imagen: "https://powertech.com.co/hq/156-large_default/externo-kingston-xs1000.jpg",
            categoria: "DISCOS DUROS"
        },
         /*PRODUCTO 178*/
        {
            nombre: "SSD USB-C 2TB",
            descripcion: "KINGSTON XS1000R ROJO.",
            precio: "$535",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_656045-MLA84540040046_052025-O.webp",
            categoria: "DISCOS DUROS"
        },
         /*PRODUCTO 179*/
        {
            nombre: "SSD USB-C 2 T",
            descripcion: "ADATA SD810 ANTI GOLPE/AGUA.",
            precio: "$695",
            imagen: "https://webapi3.adata.com/storage/product/11_sd810_pk_2000x1000_bk_500gb.png",
            categoria: "DISCOS DUROS"
        },
         /*PRODUCTO 180*/
        {
            nombre: "SSD USB-C 2TB",
            descripcion: "CORSAIR  GEN2X2.",
            precio: "$695",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_818716-MCO73277666747_122023-O.webp",
            categoria: "DISCOS DUROS"
        },
         /*PRODUCTO 181*/
        {
            nombre: "SSD USB-C 2TB",
            descripcion: "KINGSTON XS2000.",
            precio: "$715",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/50518907/resize/610/610?1720541313",
            categoria: "DISCOS DUROS"
        },
         /*PRODUCTO 182*/
        {
            nombre: "SSD USB-C 4TB",
            descripcion: "KINGSTON XS2000.",
            precio: "$1345",
            imagen: "https://tauretcomputadores.com/images/products/Product_202304271140181363298765.XS200-portada.webp",
            categoria: "DISCOS DUROS"
        },
         /*PRODUCTO 183*/
        {
            nombre: "CAJA ANTEC AX81 ELITE",
            descripcion: "VID. TEMP. + 4 FAN ARGB.",
            precio: "$310",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/59812101/resize/610/610?1738625167",
            categoria: "CAJAS"
        },
         /*PRODUCTO 184*/
        {
            nombre: "CAJA ANTEC CX500M",
            descripcion: "VIDRIO TEMPLADO + 3 ARGB NEGRO.",
            precio: "$375",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_971009-MCO82374739049_022025-O.webp",
            categoria: "CAJAS"
        },
         /*PRODUCTO 185*/
        {
            nombre: "CAJA ANTEC CX600M TRIO",
            descripcion: "VID. TEMP + 3 ARGB NEGRO.",
            precio: "$405",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_819335-MLA81587580042_012025-O.webp",
            categoria: "CAJAS"
        },
         /*PRODUCTO 186*/
        {
            nombre: "CAJA ANTEC CX600M",
            descripcion: "WOOD MADERA VID. TEMP. + 3 ARGB NEGRA.",
            precio: "$405",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_998769-MCO82374734625_022025-O.webp",
            categoria: "CAJAS"
        },
         /*PRODUCTO 187*/
        {
            nombre: "CAJA ANTEC CX700",
            descripcion: "VID. TEMP. + 3ARGB NEGRA.",
            precio: "$415",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBfvVa4p6lfqCYQ8qUhjBrOvYw4tPUz69pSg&s",
            categoria: "CAJAS"
        },
         /*PRODUCTO 188*/
        {
            nombre: "CAJA ANTEC DF700 FLUX",
            descripcion: "VID. TEMP BLANCA 3ARGB+2.",
            precio: "$569",
            imagen: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/131802971_01/w=800,h=800,fit=pad",
            categoria: "CAJAS"
        },
         /*PRODUCTO 189*/
        {
            nombre: "CAJA ANTEC DF800 FLUX",
            descripcion: "VID. TEMP 3ARGB+2.",
            precio: "$569",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_887953-MCO79881908993_102024-O.webp",
            categoria: "CAJAS"
        },
         /*PRODUCTO 190*/
        {
            nombre: "CAJA ANTEC C8",
            descripcion: "VIDRIO TEMPLADO BLANCO.",
            precio: "$579",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_839891-MLU78091574605_072024-O.webp",
            categoria: "CAJAS"
        },
         /*PRODUCTO 191*/
        {
            nombre: "CAJA ANTEC C5",
            descripcion: "VIDRIO TEMPLADO + 7 ARGB BLANCO.",
            precio: "$635",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_612611-MCO83917774559_042025-O.webp",
            categoria: "CAJAS"
        },
         /*PRODUCTO 192*/
        {
            nombre: "CAJA ANTEC C7",
            descripcion: "V.T. + 3 ARGB 120m + 1 ARGB 140m NEGRO.",
            precio: "$695",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_704493-MCO82036129130_022025-O.webp",
            categoria: "CAJAS"
        },
         /*PRODUCTO 193*/
        {
            nombre: "CAJA ANTEC C8",
            descripcion: "V.T. + 2 ARGB 160m + 1 ARGB 140m NEGRO.",
            precio: "$759",
            imagen: "https://www.pcmontajes.com/123054-large_default/caja-antec-c8-atx-2xusb3-0-1xusbc-sin-fuente-negro.jpg",
            categoria: "CAJAS"
        },
        /*PRODUCTO 194*/
        {
            nombre: "CAJA ANTEC TORQUE BE EXPLOSIVE",
            descripcion: "VID TEMP  NEGRA / ROJA.",
            precio: "$2069",
            imagen: "https://tiendaakiba.com/wp-content/uploads/caja-atx-antec-torque-mid-tower-negro-foto-2.webp",
            categoria: "CAJAS"
        },
        /*PRODUCTO 195*/
        {
            nombre: "CAJA ANTEC TORQUE BE EXPLOSIVE",
            descripcion: "VID .TEMP NEGRA / BLANCA.",
            precio: "$2089",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/45090271/resize/610/610?1706710876",
            categoria: "CAJAS"
        },
        /*PRODUCTO 196*/
        {
            nombre: "CAJA ASUS TUF GAMING GT301",
            descripcion: "VID. TEMP + 3ARGB.",
            precio: "$520",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYqtE14wftd2VJMLulftuxqOL3LGihNm70RQ&s",
            categoria: "CAJAS"
        },
        /*PRODUCTO 197*/
        {
            nombre: "CAJA COOLER MASTER CMP 320 ",
            descripcion: "VID. TEM. + 2 FAN ARGB.",
            precio: "$279",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_955566-MCO53948102653_022023-O.webp",
            categoria: "CAJAS"
        },
        /*PRODUCTO 198*/
        {
            nombre: "CAJA COOLER MASTER TD300",
            descripcion: "MESH VT+2ARGB BLANCA.",
            precio: "$310",
            imagen: "https://clonesyperifericos.com/wp-content/uploads/2022/10/0-10.webp",
            categoria: "CAJAS"
        },
        /*PRODUCTO 200*/
        {
            nombre: "CAJA COOLER MASTER TD300 MESH VT+2ARGB BLANCA",
            descripcion: "REFRIGERACION COOLER MASTER LIQUID 240L CORE ARGB BLCA.",
            precio: "$685",
            imagen: "https://tecnomarketink.co/wp-content/uploads/2023/06/chasis-masterbox-td300-mesh-mini-blanco-cooler-master-tecnomarketink.png",
            categoria: "CAJAS"
        },
        /*PRODUCTO 201*/
        {
            nombre: "CAJA COOLER MASTER",
            descripcion: "MB320L VID. TEM. + 2 ARGB.",
            precio: "$310",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_905375-MCO45143226725_032021-O.webp",
            categoria: "CAJAS"
        },
        /*PRODUCTO 202*/
        {
            nombre: "CAJA COOLER MASTER",
            descripcion: "MASTERBOX MB311L ARGB.",
            precio: "$329",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_972799-MLU54983885319_052023-O.webp",
            categoria: "CAJAS"
        },
        /*PRODUCTO 203*/
        {
            nombre: "CAJA COOLER MASTER",
            descripcion: "MASTERBOX 500 V.T.ARGB.",
            precio: "$395",
            imagen: "https://acf.geeknetic.es/imgw/imagenes/auto/2021/4/16/l70-nuevas-cajas-cooler-master-con-tiras-frontales-argb-o-elegante-frontal-de-aluminio-pulido.jpg?f=webp",
            categoria: "CAJAS"
        },
        /*PRODUCTO 204*/
        {
            nombre: "CAJA COOLER MASTER",
            descripcion: "BOX 520 MESH V.T.3ARGB BLANCO.",
            precio: "$415",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_775236-MLU71249460657_082023-T.webp",
            categoria: "CAJAS"
        },
        /*PRODUCTO 205*/
        {
            nombre: "CAJA COOLER MASTER BOX 520 MESH V.T.3ARGB BLANCO",
            descripcion: "REFRIGERACION COOLER MASTER LIQUID 240L CORE ARGB BLCA.",
            precio: "$789",
            imagen: "https://speedlogic.com.co/wp-content/uploads/2025/02/16392-11142.png",
            categoria: "CAJAS"
        },
        /*PRODUCTO 206*/
        {
            nombre: "CAJA COOLER",
            descripcion: "MASTER BOX MB511 V.T.3ARGB.",
            precio: "$425",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_2X_775236-MLU71249460657_082023-T.webp",
            categoria: "CAJAS"
        },
        /*PRODUCTO 207*/
        {
            nombre: "CAJA COOLER MASTER",
            descripcion: "BOX 520 V.T.3ARGB.",
            precio: "$449",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlZkCBgI6MV1GzdkDHJckU9jIUeP4hzxExNw&s",
            categoria: "CAJAS"
        },
        /*PRODUCTO 208*/
        {
            nombre: "CAJA COOLER MASTER",
            descripcion: "MASTERBOX 540 V.T.ARGB.",
            precio: "$459",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9hTKWbdx2Y2CJS6zNNFf3wQ1GAs2WMy3EyA&s",
            categoria: "CAJAS"
        },
        /*PRODUCTO 209*/
        {
            nombre: "CAJA COOLER",
            descripcion: "MASTER BOX 520 V.T.3ARGB BLANCO.",
            precio: "$459",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI9Zfuvw7dmVs8GkYrF4qC2oKczr5KbGplMA&s",
            categoria: "CAJAS"
        },
        /*PRODUCTO 210*/
        {
            nombre: "CAJA COOLER MASTER BOX 520 V.T.3ARGB BLANCO ",
            descripcion: "REFRIGERACION COOLER MASTER LIQUID 240L CORE ARGB BLCA.",
            precio: "$830",
            imagen: "https://speedlogic.com.co/wp-content/uploads/2025/02/16392-11142.png",
            categoria: "CAJAS"
        },
        /*PRODUCTO 211*/
        {
            nombre: "CAJA COOLER",
            descripcion: "MASTERFRAME 700 FULL TORRE.",
            precio: "$779",
            imagen: "https://tecnomarketink.co/wp-content/uploads/2023/06/tecnomarket-Chasis-coolermaster-masterframe-700-full-tower-1024x1024.png",
            categoria: "CAJAS"
        },
        /*PRODUCTO 212*/
        {
            nombre: "CAJA COOLER MASTER",
            descripcion: "COSMOS C700M RGB+4FAN BLANCA.",
            precio: "$1965",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/30048148/resize/610/610?1733882439",
            categoria: "CAJAS"
        },
        /*PRODUCTO 213*/
        {
            nombre: "CAJA CORSAIR 480T",
            descripcion: "VID. TEMP.  AIRFLOW + 3ARGB AR120 NGA.",
            precio: "$315",
            imagen: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/140768328_01/w=1500,h=1500,fit=pad",
            categoria: "CAJAS"
        },
        /*PRODUCTO 214*/
        {
            nombre: "CAJA CORSAIR 3000D",
            descripcion: "AIRFLOW VID. TEMP.2FAN BLANCA.",
            precio: "$289",
            imagen: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/131797712_01/w=800,h=800,fit=pad",
            categoria: "CAJAS"
        },
        /*PRODUCTO 215*/
        {
            nombre: "CAJA CORSAIR 3000D",
            descripcion: "AIRFLOW VID. TEMP.3ARGB BLANCA.",
            precio: "$385",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_816934-MCO79636427002_102024-O.webp",
            categoria: "CAJAS"
        },
        /*PRODUCTO 216*/
        {
            nombre: "CAJA CORSAIR 3000D",
            descripcion: "AIRFLOW VID. TEMP.3ARGB NEGRA.",
            precio: "$385",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqcQ-pzChbbedwcj5UawSLiJoNJ5vry16fjg&s",
            categoria: "CAJAS"
        },
        /*PRODUCTO 217*/
        {
            nombre: "CAJA CORSAIR 4000D",
            descripcion: "VID TEM AIRFLOW NEGRA + 2.",
            precio: "$405",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtZMqL0xO8j8fLFQkSzsrhwlD3-5u-ID3jag&s",
            categoria: "CAJAS"
        },
        /*PRODUCTO 218*/
        {
            nombre: "CAJA CORSAIR 4000X",
            descripcion: "V.T.3RGB BLANCA.",
            precio: "$519",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM-coW6qmGoU6AIVedS226Q-Wz6TlRgTVSAg&s",
            categoria: "CAJAS"
        },
        /*PRODUCTO 219*/
        {
            nombre: "CAJA CORSAIR 3500X",
            descripcion: "V.T. + 3ARGB NEGRA.",
            precio: "$469",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_747072-MLU78951072728_092024-O.webp",
            categoria: "CAJAS"
        },
        /*PRODUCTO 220*/
        {
            nombre: "CAJA CORSAIR 5000D",
            descripcion: "AIRFLOW CORE V.T. NEGRO.",
            precio: "$589",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_914516-MLU69083272591_042023-O.webp",
            categoria: "CAJAS"
        },
        /*PRODUCTO 221*/
        {
            nombre: "CAJA CORSAIR 3500X",
            descripcion: "VID.TEMP. + 3ARGB BLANCA.",
            precio: "$619",
            imagen: "https://assets.corsair.com/image/upload/c_pad,q_auto,h_1024,w_1024,f_auto/products/Cases/3500x/3500x-argb/White/gallery/3500X_ARGB_WHT_01.webp",
            categoria: "CAJAS"
        },
        /*PRODUCTO 222*/
        {
            nombre: "CAJA CORSAIR 3500X",
            descripcion: "CAJA CORSAIR 3500X VID. TEMP. + 3ARGB NEGRA.",
            precio: "$619",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/61329912/resize/610/610?1741942978",
            categoria: "CAJAS"
        },
        /*PRODUCTO 223*/
        {
            nombre: "CAJA CORSAIR 2500X",
            descripcion: "VIDRIO TEMPLADO NEGRA.",
            precio: "$695",
            imagen: "https://assets.corsair.com/image/upload/c_pad,q_auto,h_1024,w_1024,f_auto/products/Cases/2500D/CC-9011265-WW/2500X_BLACK_HERO_01_AA.webp",
            categoria: "CAJAS"
        },
        /*PRODUCTO 224*/
        {
            nombre: "CAJA CORSAIR 2500X",
            descripcion: "VIDRIO TEMPLADO BLANCA.",
            precio: "$695",
            imagen: "https://assets.corsair.com/image/upload/c_pad,q_85,h_1100,w_1100,f_auto/products/Cases/2500D/CC-9011266-WW/Gallery/2500X_WHITE_HERO_01_AA.webp",
            categoria: "CAJAS"
        },
        /*PRODUCTO 223*/
        {
            nombre: "CAJA COUGAR MX360",
            descripcion: "VID. TEMP + 1 FAN ARGB.",
            precio: "$259",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSyxZs2WcQv9dcok-lOeGMG6WCzrMWJTSdtw&s",
            categoria: "CAJAS"
        },
        /*PRODUCTO 224*/
        {
            nombre: "CAJA COUGAR ARCHON-2 ",
            descripcion: "VID. TEMP.+3ARGB BLANCA.",
            precio: "$279",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_716245-MLU72955963727_112023-O.webp",
            categoria: "CAJAS"
        },
        /*PRODUCTO 225*/
        {
            nombre: "CAJA COUGAR ARCHON-2 MESH",
            descripcion: "VID. TEMP.+3ARGB BLANCO.",
            precio: "$279",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_716245-MLU72955963727_112023-O.webp",
            categoria: "CAJAS"
        },
        /*PRODUCTO 226*/
        {
            nombre: "CAJA COUGAR MX220",
            descripcion: "VIDRIO TEMPLADO + 4ARGB NEGRA.",
            precio: "$310",
            imagen: "https://http2.mlstatic.com/D_Q_NP_872241-MLA80085468567_102024-O.webp",
            categoria: "CAJAS"
        },
        /*PRODUCTO 227*/
        {
            nombre: "CAJA COUGAR MX220",
            descripcion: "VIDRIO TEMPLADO + 4ARGB BLANCA.",
            precio: "$310",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRttj3be8aj7KqURzHUphTMYkFx4k8_8DhWdg&s",
            categoria: "CAJAS"
        },
        /*PRODUCTO 228*/
        {
            nombre: "CAJA COUGAR DUOFACE",
            descripcion: "VID. TEMP. + 3 FAN RGB NEGRA.",
            precio: "$310",
            imagen: "https://themark.com.co/wp-content/uploads/2024/07/DUOFACE-RGB-01.jpg",
            categoria: "CAJAS"
        },
        /*PRODUCTO 229*/
        {
            nombre: "CAJA COUGAR DUOFACE",
            descripcion: "PRO V.T.+ 4 FAN ARGB BLANCA.",
            precio: "$395",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/38881776/resize/610/610?1693025796",
            categoria: "CAJAS"
        },
        /*PRODUCTO 230*/
        {
            nombre: "CAJA COUGAR DUOFACE",
            descripcion: "PRO V.T.+ 4 FAN ARGB NEGRA.",
            precio: "$395",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFB6UbYHwTRsvXd_2SXFFKN-vs9shW5Rd1VA&s",
            categoria: "CAJAS"
        },
        /*PRODUCTO 231*/
        {
            nombre: "CAJA COUGAR MX600",
            descripcion: "FULL TOWER V.T. + 4RGB BLANCA.",
            precio: "$415",
            imagen: "https://cdnx.jumpseller.com/abw-soluciones/image/57637194/MX600RGB-01-w.jpg?1732660944",
            categoria: "CAJAS"
        },
        /*PRODUCTO 232*/
        {
            nombre: "CAJA COUGAR AIRFACE",
            descripcion: "ECO V.T. + 1ARGB  120m +2ARGB 180m.",
            precio: "$469",
            imagen: "https://cougargaming.com/_cgrwdr_/wwdpp/wp-content/uploads/2024/09/AIRFACE-ECO_B_01.png",
            categoria: "CAJAS"
        },
        /*PRODUCTO 233*/
        {
            nombre: "CAJA COUGAR FV270",
            descripcion: "VIDRIO TEMPLADO + 4 ARGB  BLANCO.",
            precio: "$789",
            imagen: "https://cougargaming.com/_cgrwdr_/wwdpp/wp-content/uploads/2024/03/FV270-RGB-01-w.jpg",
            categoria: "CAJAS"
        },
        /*PRODUCTO 234*/
        {
            nombre: "CAJA COUGAR FV270",
            descripcion: "V.T. + 4 ARGB + NGA.",
            precio: "$859",
            imagen: "https://cougargaming.com/_cgrwdr_/wwdpp/wp-content/uploads/2024/03/FV270-RGB-01.jpg",
            categoria: "CAJAS"
        },
        /*PRODUCTO 235*/
        {
            nombre: "CAJA COUGAR FV270",
            descripcion: "V.T. + 4 ARGB + BLA.",
            precio: "$",
            imagen: "https://cougargaming.com/_cgrwdr_/wwdpp/wp-content/uploads/2024/03/FV270-RGB-01.jpg",
            categoria: "CAJAS"
        },
        /*PRODUCTO 236*/
        {
            nombre: "CAJA COUGAR CONQUER",
            descripcion: "V.T. FULL TW.",
            precio: "$935",
            imagen: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/131791480_01/w=800,h=800,fit=pad",
            categoria: "CAJAS"
        },
        /*PRODUCTO 237*/
        {
            nombre: "CAJA COUGAR CONQUER 2",
            descripcion: "V. T. FULL TW RGB.",
            precio: "$1320",
            imagen: "https://cougargaming.com/_cgrwdr_/wwdpp/wp-content/uploads/2019/11/product-section-01.png",
            categoria: "CAJAS"
        },
        /*PRODUCTO 238*/
        {
            nombre: "CAJA COUGAR GAMER CRATUS",
            descripcion: "V.T. + 3ARGB.",
            precio: "$1549",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/36324885/resize/1200/1200?1686510184",
            categoria: "CAJAS"
        },
        /*PRODUCTO 239*/
        {
            nombre: "CAJA XPG VALOR AIR",
            descripcion: "VID. TEMP. + 4 FAN BLANCO.",
            precio: "$235",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAOZPX7j6vxMhumHWE1o5dw-ryJZl2YsT7rQ&s",
            categoria: "CAJAS"
        },
        /*PRODUCTO 240*/
        {
            nombre: "CAJA XPG VALOR STORM",
            descripcion: "VIDRIO TEMPLADO+ 4 FAN NEGRA.",
            precio: "$249",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_893144-MCO79639968942_102024-O.webp",
            categoria: "CAJAS"
        },
        /*PRODUCTO 241*/
        {
            nombre: "CAJA XPG STARKER",
            descripcion: "VID. TEM.+ 1ARGB NEGRA.",
            precio: "$259",
            imagen: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/131790917_01/w=800,h=800,fit=pad",
            categoria: "CAJAS"
        },
        /*PRODUCTO 242*/
        {
            nombre: "CAJA XPG STARKER",
            descripcion: "VID. TEM.+ 1ARGB BLANCO.",
            precio: "$259",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9kZm2HOG-yu0z9NZiL7gY04nzDGE68LuKww&s",
            categoria: "CAJAS"
        },
        /*PRODUCTO 243*/
        {
            nombre: "CAJA XPG STARKER AIR",
            descripcion: "VID. TEM. +1ARGB NEGRA.",
            precio: "$279",
            imagen: "https://tecnomarketink.co/wp-content/uploads/2023/06/chasis-starker-air-negro-xpg-tecnomarketink-scaled.webp",
            categoria: "CAJAS"
        },
        /*PRODUCTO 244*/
        {
            nombre: "CAJA XPG STARKER AIR",
            descripcion: "VID. TEM. +1ARGB BLANCA.",
            precio: "$279",
            imagen: "https://www.apcomputadores.com/wp-content/uploads/starker_air_wh_02_png.png",
            categoria: "CAJAS"
        },
        /*PRODUCTO 245*/
        {
            nombre: "CAJA XPG INVADER",
            descripcion: "VID.TEMP. ARGB NEGRA.",
            precio: "$299",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaxandMKKFXzx5qsYaDRLty5mAZaB-wCHoow&s",
            categoria: "CAJAS"
        },
        /*PRODUCTO 246*/
        {
            nombre: "CAJA XPG INVADER",
            descripcion: "VID.TEMP. ARGB BLANCA.",
            precio: "$299",
            imagen: "https://tauretcomputadores.com/images/products/Product_20200203164401493350955.jpg",
            categoria: "CAJAS"
        },
        /*PRODUCTO 247*/
        {
            nombre: "CAJA XPG CRUISER",
            descripcion: "VID.TEMP.+ 3ARGB NEGRA.",
            precio: "$375",
            imagen: "https://www.quaddrix.com.co/wp-content/uploads/2025/02/16344.4-600x600-1.png",
            categoria: "CAJAS"
        },
        /*PRODUCTO 248*/
        {
            nombre: "CAJA XPG CRUISER",
            descripcion: "VID.TEMP.+ 3ARGB BLANCA.",
            precio: "$375",
            imagen: "https://www.quaddrix.com.co/wp-content/uploads/2025/02/16345.4-600x600-1.png",
            categoria: "CAJAS"
        },
        /*PRODUCTO 249*/
        {
            nombre: "CAJA XPG DEFENDER PRO",
            descripcion: "VID. TEMP+3ARGB BLANCO.",
            precio: "$395",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/35888596/dpro_wht_01__78639.jpg?1685472813",
            categoria: "CAJAS"
        },
        /*PRODUCTO 250*/
        {
            nombre: "CAJA XPG DEFENDER PRO",
            descripcion: "VID. TEMP+3ARGB NEGRO.",
            precio: "$405",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_858920-MCO49207146541_022022-O.webp",
            categoria: "CAJAS"
        },
        /*PRODUCTO 251*/
        {
            nombre: "CAJA XPG BATTLECRUISER",
            descripcion: "VID. TEM. + 4 FAN ARGB BLANCA.",
            precio: "$519",
            imagen: "https://tauretcomputadores.com/images/products/Product_20240123095342918523557.xpg_battlecruiser_ii_rgb_v02_wh.webp",
            categoria: "CAJAS"
        },
        /*PRODUCTO 252*/
        {
            nombre: "CAJA XPG BATTLECRUISER II",
            descripcion: "V.T.+4ARGB BLANCA.",
            precio: "$625",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/43696490/resize/610/610?1702933515",
            categoria: "CAJAS"
        },
        /*PRODUCTO 253*/
        {
            nombre: "CAJA XPG INVADER X NEGRA",
            descripcion: "VID. TEM. + 5 ARGB + RISER 4.0.",
            precio: "$709",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN7P8H7xz96qfqMtdqbWpnQ0ZDPlW2HrzVBg&s",
            categoria: "CAJAS"
        },
        /*PRODUCTO 254*/
        {
            nombre: "CAJA XPG INVADER X BLANCA",
            descripcion: "VID. TEMP + 5ARGB.",
            precio: "$729",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/50963257/Chasis-XPG-Mid-Tower-INVADER-X-White-5.jpg?1721628793",
            categoria: "CAJAS"
        },
        /*PRODUCTO 255*/
        {
            nombre: "CAJA ASUS TUF GAMING GT301",
            descripcion: "V.T.+ 3ARGB+CORSAIR 650W.",
            precio: "$799",
            imagen: "https://speedlogic.com.co/wp-content/uploads/2022/08/16359.png",
            categoria: "CAJAS"
        },
        /*PRODUCTO 256*/
        {
            nombre: "CORSAIR 480T V.T. AIRFLOW",
            descripcion: "3ARGB AR120 NGA 650W.",
            precio: "$545",
            imagen: "https://speedlogic.com.co/wp-content/uploads/2025/02/16549.png",
            categoria: "CAJAS"
        },
        /*PRODUCTO 257*/
        {
            nombre: "CAJA CORSAIR 3000D AIRFLOW",
            descripcion: "V.T.2FAN BLCA+COR 650W.",
            precio: "$545",
            imagen: "https://speedlogic.com.co/wp-content/uploads/2024/11/16467-14203.png",
            categoria: "CAJAS"
        },
        /*PRODUCTO 258*/
        {
            nombre: "CAJA CORSAIR 3000D AIRFLOW",
            descripcion: "V.T.3ARGB BLC+COR 650W.",
            precio: "$639",
            imagen: "https://speedlogic.com.co/wp-content/uploads/2024/11/16467-14203.png",
            categoria: "CAJAS"
        },
        /*PRODUCTO 259*/
        {
            nombre: "CORSAIR 4000D V.T. AIRFLOW NGA",
            descripcion: "2 FAN +650W.",
            precio: "$659",
            imagen: "https://speedlogic.com.co/wp-content/uploads/2025/03/16256-14245.png",
            categoria: "CAJAS"
        },
        /*PRODUCTO 260*/
        {
            nombre: "CAJA CORSAIR 4000X V.T.3RGB BLANCA",
            descripcion: "CORSAIR 650W.",
            precio: "$775",
            imagen: "https://speedlogic.com.co/wp-content/uploads/2025/03/16259-14245.png",
            categoria: "CAJAS"
        },
        /*PRODUCTO 261*/
        {
            nombre: "CORSAIR 5000D AIRFLOW CORE V.T.",
            descripcion: "NEGRO+650W.",
            precio: "$839",
            imagen: "https://http2.mlstatic.com/D_Q_NP_914516-MLU69083272591_042023-O.webp",
            categoria: "CAJAS"
        },
        /*PRODUCTO 262*/
        {
            nombre: "CAJA CORSAIR 2500X VID.TEMP",
            descripcion: "NEGRA+COR 650W.",
            precio: "$945",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/58512498/2500_Cases_Main_Visual_1.width-1000.format-webp.webp?1737310978",
            categoria: "CAJAS"
        },
        /*PRODUCTO 263*/
        {
            nombre: "CAJA CORSAIR 2500X VID.TEMP.",
            descripcion: "BLANCA+COR 650W.",
            precio: "$945",
            imagen: "https://assets.corsair.com/image/upload/c_pad,q_85,h_1100,w_1100,f_auto/products/Cases/2500D/CC-9011266-WW/Gallery/2500X_WHITE_HERO_01_AA.webp",
            categoria: "CAJAS"
        },
        /*PRODUCTO 264*/
        {
            nombre: "CAJA C. MASTER CMP 320",
            descripcion: "V. T. + 2 FAN ARGB+COR 650W.",
            precio: "$559",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPiJ9XLSEbhkLveFzIGjMFce1hjEuqmRDzUQ&s",
            categoria: "CAJAS"
        },
        /*PRODUCTO 265*/
        {
            nombre: "CAJA C. MASTER TD300 MESH",
            descripcion: "VT+2ARGB BLCA+COR 650W.",
            precio: "$589",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8DflUsZyyHsLPHWjIA1hb6HYHIU2TkbZXSw&s",
            categoria: "CAJAS"
        },
        /*PRODUCTO 266*/
        {
            nombre: "CAJA COOLER MASTER MB320L",
            descripcion: "V.T. + 2ARGB+COR 650W.",
            precio: "$589",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/16056329/resize/610/610?1656127729",
            categoria: "CAJAS"
        },
        /*PRODUCTO 267*/
        {
            nombre: "CAJA COOLER MASTER MASTERBOX",
            descripcion: "MB311L ARGB+CGR 750W.",
            precio: "$619",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfbC3zlMBNCqB1NQRFRwkA1PL3G3IhlUVViQ&s",
            categoria: "CAJAS"
        },
        /*PRODUCTO 268*/
        {
            nombre: "CAJA COOLER MASTER MASTERBOX 500",
            descripcion: "V.T.ARGB+CGR 750W.",
            precio: "$685",
            imagen: "https://speedlogic.com.co/wp-content/uploads/2022/11/16391.3.png",
            categoria: "CAJAS"
        },
        /*PRODUCTO 269*/
        {
            nombre: "CAJA C. MASTER BOX 520 MESH",
            descripcion: "V.T.3ARGB BLC+CGR 750W.",
            precio: "$709",
            imagen: "https://speedlogic.com.co/wp-content/uploads/2025/03/16392-14203.png",
            categoria: "CAJAS"
        },
        /*PRODUCTO 270*/
        {
            nombre: "CAJA COOLER MASTER BOX 520",
            descripcion: "V.T.3ARGB+COUGAR 750W.",
            precio: "$739",
            imagen: "https://speedlogic.com.co/wp-content/uploads/2025/03/16392-14203.png",
            categoria: "CAJAS"
        },
        /*PRODUCTO 271*/
        {
            nombre: "CAJA C. MASTER MASTERBOX 540",
            descripcion: "V.T.ARGB+CGR 750W.",
            precio: "$749",
            imagen: "https://speedlogic.com.co/wp-content/uploads/2025/03/16352-14203.png",
            categoria: "CAJAS"
        },
        /*PRODUCTO 272*/
        {
            nombre: "CAJA COOLER MASTER BOX MB511",
            descripcion: "V.T.3ARGB+CGR 750W.",
            precio: "$719",
            imagen: "https://speedlogic.com.co/wp-content/uploads/2025/03/16214-14203.png",
            categoria: "CAJAS"
        },
        /*PRODUCTO 273*/
        {
            nombre: "CAJA XPG STARKER",
            descripcion: "V.T.+ 1ARGB NEGRA+COR 650W.",
            precio: "$539",
            imagen: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/131790917_01/w=1500,h=1500,fit=pad",
            categoria: "CAJAS"
        },
        /*PRODUCTO 274*/
        {
            nombre: "CAJA XPG STARKER",
            descripcion: "V.T.+ 1ARGB BLANCO+COR 650W.",
            precio: "$539",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMPbsD0Z3TJBGISmJFZem4fuDBudJP9qZSHA&s",
            categoria: "CAJAS"
        },
        /*PRODUCTO 275*/
        {
            nombre: "CAJA XPG DEFENDER PRO",
            descripcion: "V.T.+3ARGB BLCO+COR 650W.",
            precio: "$675",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/35888596/resize/1200/1200?1685472813",
            categoria: "CAJAS"
        },
        /*PRODUCTO 276*/
        {
            nombre: "CAJA XPG DEFENDER PRO",
            descripcion: "V.T.+3ARGB NGR+COR 650W.",
            precio: "$685",
            imagen: "https://futuratecnologia.com.co/wp-content/uploads/2025/04/16308-14245.png",
            categoria: "CAJAS"
        },
        /*PRODUCTO 277*/
        {
            nombre: "CAJA XPG BATTLECRUISER",
            descripcion: "V.T. + 4ARGB BLC+COR 650W.",
            precio: "$859",
            imagen: "https://tauretcomputadores.com/images/products/Product_20240123095342918523557.xpg_battlecruiser_ii_rgb_v02_wh.webp",
            categoria: "CAJAS"
        },
        /*PRODUCTO 278*/
        {
            nombre: "CAJA XPG STARKER",
            descripcion: "V.T.+ 1ARGB NEGRA+CGR 750W.",
            precio: "$579",
            imagen: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/131790917_01/w=1500,h=1500,fit=pad",
            categoria: "CAJAS"
        },
        /*PRODUCTO 279*/
        {
            nombre: "CAJA XPG STARKER",
            descripcion: "V.T.+ 1ARGB BLANCO+CGR 750W.",
            precio: "$579",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSecUbM0eHwEdAb45HOtwWee4KndAmgbXqnFw&s",
            categoria: "CAJAS"
        },
        /*PRODUCTO 280*/
        {
            nombre: "CAJA XPG DEFENDER PRO",
            descripcion: "V.T.+3ARGB BLCO+CGR 750W.",
            precio: "$739",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/35888596/resize/1200/1200?1685472813",
            categoria: "CAJAS"
        },
        /*PRODUCTO 281*/
        {
            nombre: "CAJA XPG DEFENDER PRO",
            descripcion: "V.T.+3ARGB NGR+CGR 750W.",
            precio: "$739",
            imagen: "https://www.quaddrix.com.co/wp-content/uploads/2025/02/16308.3-600x600-1.png",
            categoria: "CAJAS"
        },
        /*PRODUCTO 282*/
        {
            nombre: "CAJA XPG BATTLECRUISER",
            descripcion: "V.T. + 4ARGB BLC+CGR 750W.",
            precio: "$810",
            imagen: "https://tauretcomputadores.com/images/products/Product_20230712165940445926518.Battlecruiser-Blanco.webp",
            categoria: "CAJAS"
        },
        /*PRODUCTO 283*/
        {
            nombre: "REGULADOR UNITEC",
            descripcion: "995VA/ 450W / 8TOMAS.",
            precio: "$47",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_841877-MCO46508111389_062021-O.webp",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 284*/
        {
            nombre: "REGULADOR WATTANA",
            descripcion: "1200VA / 8TOMAS.",
            precio: "$62",
            imagen: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/135506387_01/w=800,h=800,fit=pad",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 285*/
        {
            nombre: "REGULADOR WATTANA",
            descripcion: "2000VA / 8TOMAS.",
            precio: "$69",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/51434829/resize/1200/1200?1722886841",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 286*/
        {
            nombre: "UPS CDP INTERACTIVA",
            descripcion: "1000VA / 500W / 8TOMAS.",
            precio: "$209",
            imagen: "https://lasus.com.co/227820-large_default/ups-cdp-interactiva-1000va-500w-8-tomas.jpg",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 287*/
        {
            nombre: "UPS INTERACTIVA HIKVISION",
            descripcion: "600VA / 360W.",
            precio: "$166",
            imagen: "https://www.computerworking.com.co/uploads/productos/big/sml_2297.jpg",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 288*/
        {
            nombre: "ASUS PRIME H610M-K",
            descripcion: "DDR5 PCIEXP XII.",
            precio: "$449",
            imagen: "https://dlcdnwebimgs.asus.com/gain/720544b2-a1e1-4f18-a567-e291a1478814/",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 289*/
        {
            nombre: "ASUS/B760M-A D4 3GPU USB3",
            descripcion: "2 Tipo-C 4DDR4 XII.",
            precio: "$615",
            imagen: "https://dlcdnwebimgs.asus.com/gain/48925aaa-88fd-4f69-9e73-3598a9c6fb1b/",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 290*/
        {
            nombre: "ASUS B760M-A AX6 II WIFI",
            descripcion: "4GPU USB3,2 XII.",
            precio: "$829",
            imagen: "https://dlcdnwebimgs.asus.com/files/media/1e39f4e4-625b-4819-8ffc-cb3efdc91c6d/img/fan/fan-1.png",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 291*/
        {
            nombre: "ASUS/ROG B760-I ITX",
            descripcion: "GAMING WiFi XII.",
            precio: "$965",
            imagen: "https://dlcdnwebimgs.asus.com/files/media/620E2CDE-9776-43C3-A42A-7C71FA472699/v1/img/performance/cooling/header-pd.png",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 291*/
        {
            nombre: "ASUS/TUF B760M-PLUS",
            descripcion: "GAMING WiFi II XII.",
            precio: "$1029",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_623794-MLU77800144371_072024-O.webp",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 292*/
        {
            nombre: "ASUS/ROG B760-A",
            descripcion: "GAMING WIFI 2GPU XII.",
            precio: "$1219",
            imagen: "https://dlcdnwebimgs.asus.com/files/media/35738687-93B3-4728-A64D-F9923E5FD2DB/v1/img/performance/cooling/header-pd.png",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 293*/
        {
            nombre: "ASUS ROG Z790-A STRIX",
            descripcion: "GAMING WiFi II XII.",
            precio: "$1749",
            imagen: "https://content.app-sources.com/s/06812195814293589/uploads/TARJETAS_MADRES/asus_rog_strix_z790_f_gaming_wifi_6e_lga_1700-removebg-preview-0049239.png",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 294*/
        {
            nombre: "GIGABYTE/B760M DS3H",
            descripcion: "DDR4 Pciex A V R 4DDR4 XII.",
            precio: "$599",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_876496-MLU69760508007_062023-O.webp",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 295*/
        {
            nombre: "GIGABYTE B760M DS3H",
            descripcion: "A V R Pciexp XII.",
            precio: "$649",
            imagen: "https://static.gigabyte.com/StaticFile/Image/Global/74a19f09cebd58831e913703ba3e065c/Product/33481/Png",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 296*/
        {
            nombre: "MSI PRO B760M-P DDR4",
            descripcion: "Pciex A V R 4DDR4 XII.",
            precio: "$539",
            imagen: "https://storage-asset.msi.com/global/picture/image/feature/mb/B760M/PRO-B760M-P-DDR4/images/msi-pro_b760m-p_ddr4-3d2.png",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 297*/
        {
            nombre: "MSI PRO B760M-P PCIEX",
            descripcion: "USB3,2 XII.",
            precio: "$629",
            imagen: "https://asset.msi.com/resize/image/global/product/product_1678156201865f2c1fd6cb72cfa66a2eef7fa8588b.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 298*/
        {
            nombre: "MSI B760M GAMING PLUS",
            descripcion: "WIFI 2GPU XII.",
            precio: "$779",
            imagen: "https://storage-asset.msi.com/global/picture/image/feature/mb/B760/b760m-gaming-plus-wifi/msi-b760m-gaming-plus-wifi-kv.png",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 299*/
        {
            nombre: "MSI PRO B760 GAMING PLUS",
            descripcion: "WiFi 5GPU 4DDR5.",
            precio: "$909",
            imagen: "https://storage-asset.msi.com/global/picture/image/feature/mb/B760/b760-gaming-plus-wifi/modelblock-gaming-pd.png",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 300*/
        {
            nombre: "ASUS PRIME B860M-A",
            descripcion: "2GPU USB-C PCI 5,0.",
            precio: "$885",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9z7bwAl0LXjw0CZs9YhJ7E2yMhgmd2T3zHQ&s",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 301*/
        {
            nombre: "ASUS ROG B860-A STRIX",
            descripcion: "GAMING WIFI PC5,0 BLCA.",
            precio: "$1389",
            imagen: "https://dlcdnwebimgs.asus.com/files/media/d9a03cb2-aa93-4b92-b62e-4375823bf07e/v1/img/kv/pd.png",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 302*/
        {
            nombre: "ASUS ROG B860-F STRIX GAMING",
            descripcion: "WiFi PCI5,0.",
            precio: "$1489",
            imagen: "https://dlcdnwebimgs.asus.com/files/media/e8dbbbed-36ec-48c9-9446-1ef1bc95523a/v1/img/kv/pd.png",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 303*/
        {
            nombre: "ASUS Z890 AYW GAMING",
            descripcion: "WIFI W 4GPU USB-C BLANCA.",
            precio: "$1219",
            imagen: "https://mediawebimg.asus.com/files/media/1f2adb0d-bb3b-4380-aaa1-dfa06ceff573/v1/features/images/large/s5/btn_bg.webp",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 304*/
        {
            nombre: "ASUS PRIME Z890M PLUS",
            descripcion: "WIFI 4GPU DP USB-C.",
            precio: "$1255",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/58059495/resize/610/610?1733437708",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 305*/
        {
            nombre: "ASUS PRIME Z890-P",
            descripcion: "WIFI 4 GPU THUNDERBOLT.",
            precio: "$1379",
            imagen: "https://dlcdnwebimgs.asus.com/files/media/abed2382-14a8-41dd-844d-6a980145df26/v1/features/images/large/s1/pd.webp",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 306*/
        {
            nombre: "ASUS TUF Z890-PLUS",
            descripcion: "GAMING WIFI 2GPU.",
            precio: "$1689",
            imagen: "https://dlcdnwebimgs.asus.com/gain/e8c6fe24-aba5-44cf-a13e-abef2679fdd2/",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 307*/
        {
            nombre: "ASUS ROG STRIX Z890-F",
            descripcion: "GAMING WiFi. 2 GPU.",
            precio: "$2229",
            imagen: "https://dlcdnwebimgs.asus.com/files/media/323f61e0-6b1c-4c8d-954b-3f392e7b5696/v1/img/spec/immersion.png",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 308*/
        {
            nombre: "GIGABYTE B860M GAMING X",
            descripcion: "WiFi 2 GPU PCI 5,0.",
            precio: "$929",
            imagen: "https://www.gigabyte.com/FileUpload/Global/KeyFeature/3815/innergigabyte/images/product/diagram_connectivity.png",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 309*/
        {
            nombre: "GIGABYTE B860 EAGLE",
            descripcion: "WiFi 3 GPU PCI 5,0.",
            precio: "$1009",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEBRgv_q1W2EU3OTRBxufap0hHTeIHgDBTWg&s",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 310*/
        {
            nombre: "GIGABYTE B860M AORUS ELITE",
            descripcion: "WiFi 2 GPU PCI 5,0.",
            precio: "$1085",
            imagen: "https://www.gigabyte.com/FileUpload/Global/KeyFeature/3813/innergigabyte/images/product/hero.png",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 311*/
        {
            nombre: "GIGABYTE B860 AORUS ELITE",
            descripcion: "WiFi ICE PCI 5,0 BLANCA.",
            precio: "$1179",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLC2rLGAclz1nrsUxNXmfPuipRLXVVK9tH9Q&s",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 312*/
        {
            nombre: "GIGABYTE Z890M GAMING",
            descripcion: "2 GPU PCI 5,0.",
            precio: "$1049",
            imagen: "https://futuratecnologia.com.co/wp-content/uploads/2025/05/33384.1-600x600.png",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 313*/
        {
            nombre: "GIGABYTE Z890 GAMING",
            descripcion: "WiFi  3GPU PCI 5,0.",
            precio: "$1339",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTcumh4OeqE2Q4Ji8jKx0bk7xJ-9yPB7Bkwg&s",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 314*/
        {
            nombre: "GIGABYTE Z890M AORUS ELITE",
            descripcion: "WiFi ICE 2 GPU BLANCA.",
            precio: "$1339",
            imagen: "https://m.media-amazon.com/images/I/81s+Y6POxxL._AC_UF894,1000_QL80_.jpg",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 315*/
        {
            nombre: "GIGABYTE Z890 AORUS ELITE",
            descripcion: "WiFi ICE 3 GPU BLANCA.",
            precio: "$1449",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWdx1ci3fCk8QDFbQTIR4hu7G55v2c9Q--tQ&s",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 316*/
        {
            nombre: "MSI B860M GAMING PLUS",
            descripcion: "WIFI 4 GPU THUNDERBOLT.",
            precio: "$1040",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJAMLT_p4t6dJ37TZYVdH-rR9U9nDqwgOww&s",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 317*/
        {
            nombre: "MSI B860 GAMING PLUS",
            descripcion: "WIFI 4 GPU THUNDERBOLT.",
            precio: "$1119",
            imagen: "https://storage-asset.msi.com/global/picture/image/feature/mb/B860/b860-gaming-plus-wifi/kv-pd.png",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 318*/
        {
            nombre: "MSI PRO Z890-S",
            descripcion: "WIFI 4 GPU THUNDERBOLT.",
            precio: "$1265",
            imagen: "https://storage-asset.msi.com/global/picture/image/feature/mb/z890/pro-z890-s-wifi/kv-pd.png",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 319*/
        {
            nombre: "MSI PRO Z890-P",
            descripcion: "WIFI 3 GPU USB-C THUNDERBOLT.",
            precio: "$1319",
            imagen: "https://storage-asset.msi.com/global/picture/image/feature/mb/z890/pro-z890-p-wifi/images/kv-pd.png",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 320*/
        {
            nombre: "ASUS PRIME A520M-K Micro 3,2",
            descripcion: "HDMIA V R Pciexp 2DDR4 RYZ.",
            precio: "$325",
            imagen: "https://dlcdnimgs.asus.com/websites/global/products/klnhxkefsyvowbzy/intro-main.png",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 321*/
        {
            nombre: "ASUS/PRIME A520M-A II CSM Mic U3,2",
            descripcion: "A V R Pciexp 4DDR4 RYZ.",
            precio: "$415",
            imagen: "https://dlcdnwebimgs.asus.com/gain/d8be9585-c151-49e6-8474-0d095b3620e8/w800",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 322*/
        {
            nombre: "ASUS PRIME B550M A AC WIFI MICRO",
            descripcion: "A.V.R Pciexp 4DDR4 RYZ.",
            precio: "$549",
            imagen: "https://dlcdnimgs.asus.com/websites/global/products/c1xc5wovtrrlf3do/img/heatsinks/fan.png",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 323*/
        {
            nombre: "ASUS TUF B550M PLUS WIFI II",
            descripcion: "2 GPU A.R 4 DDR4 RZ.",
            precio: "$779",
            imagen: "https://www.asus.com/websites/global/products/upuagcxvdypsklzj/img/kv/x570.png",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 324*/
        {
            nombre: "ASUS/TUF B550 GAMING PLUS",
            descripcion: "WiFi II 2GPU 4DDR4 RYZ.",
            precio: "$869",
            imagen: "https://dlcdnwebimgs.asus.com/gain/22bd771c-1a57-439b-97d2-ef75363fe11a/",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 325*/
        {
            nombre: "ASUS ROG B550-F STRIX GAMING",
            descripcion: "WiFi II 2 GPU A.R 4DDR4 RZ.",
            precio: "$975",
            imagen: "https://dlcdnwebimgs.asus.com/files/media/A9730D0E-D1A6-40C1-9282-F1BA1B13BFB4/v1/img/performance/cooler-base.png",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 326*/
        {
            nombre: "GIGABYTE  A520M-K V2 PCIEX",
            descripcion: "A.V.R USB 3,2 2DDR4 RYZ.",
            precio: "$309",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/45581324/resize/1200/1200?1708033734",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 327*/
        {
            nombre: "GIGABYTE A520M DS3H AC WIFI",
            descripcion: "A.V.R PCIEXP 4DDR4 RYZ.",
            precio: "$435",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBj1UcAN0ITi73wgzO1EkeeL5P9eJM77rAwg&s",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 328*/
        {
            nombre: "GIGABYTE B550M-K Pciexp",
            descripcion: "A V R 4DDR4 RYZ.",
            precio: "$449",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/60685064/resize/1200/1200?1740679391",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 329*/
        {
            nombre: "GIGABYTE B550M DS3H AC WiFi",
            descripcion: "2GPU USB3,2 4DDR4 RYZ.",
            precio: "$525",
            imagen: "https://futuratecnologia.com.co/wp-content/uploads/2024/04/500.png",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 330*/
        {
            nombre: "GIGABYTE B550M AORUS ELITE",
            descripcion: "AX WiFi 2 GPU 4DDR4 RYZ.",
            precio: "$659",
            imagen: "https://static.gigabyte.com/StaticFile/Image/Global/03314d3e151a0d97e927edd961f2232c/Product/34371",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 331*/
        {
            nombre: "MSI A520M-A PRO",
            descripcion: "A V R Pciexp 2DDR4 RYZEN.",
            precio: "$325",
            imagen: "https://asset.msi.com/resize/image/global/product/product_1_20200818095720_5f3b3580dc762.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 332*/
        {
            nombre: "MSI B550 GAMING PLUS CROSS",
            descripcion: "A.V.R 4DDR4 RYZ.",
            precio: "$749",
            imagen: "https://futuratecnologia.com.co/wp-content/uploads/2024/04/500-3.png",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 333*/
        {
            nombre: "ASUS PRIME A620M-K",
            descripcion: "PCIEXP HDMI VGA TIPO-A RYZ.",
            precio: "$469",
            imagen: "https://dlcdnwebimgs.asus.com/gain/9e892470-c894-429f-be7f-53ab61483d99/w800",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 334*/
        {
            nombre: "ASUS PRIME A620M-A",
            descripcion: "CSM PCIEX USB 3,2 RYZ.",
            precio: "$670",
            imagen: "https://dlcdnwebimgs.asus.com/gain/40fa567d-d24c-4086-8284-19f75a3623bb/w800",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 335*/
        {
            nombre: "ASUS TUF A620M",
            descripcion: "GAMING PLUS WIFI USB3,2 RYZ.",
            precio: "$799",
            imagen: "https://agaval.vtexassets.com/arquivos/ids/2684792/image-0cf4659fe83d4764b7d322d7e5f1eae6.jpg?v=638850744984200000",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 336*/
        {
            nombre: "ASUS PRIME B650M-A AX6 II",
            descripcion: "WiFi 3 GPU USB3,2 RYZ.",
            precio: "$819",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3RurXbfMj6AurFGI40wFs6HO3cwu4EddQnw&s",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 337*/
        {
            nombre: "ASUS TUF B650 PLUS GAMING",
            descripcion: "WiFi 2 GPU RYZ.",
            precio: "$1085",
            imagen: "https://dlcdnwebimgs.asus.com/files/media/2b278afc-50b2-452f-9fae-ec2825d27632/V1/img/performance/Cooler.jpg",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 338*/
        {
            nombre: "ASUS ROG B650-A STRIX GAMING",
            descripcion: "WiFi 2GPU RYZ.",
            precio: "$1230",
            imagen: "https://dlcdnwebimgs.asus.com/gain/8B4FE1A6-E69B-4214-A278-8FB708F3AD97/w717/h525",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 339*/
        {
            nombre: "ASUS ROG B650E-F STRIX GAMING",
            descripcion: "WiFi 2GPU RYZ.",
            precio: "$1489",
            imagen: "https://dlcdnwebimgs.asus.com/files/media/398D9060-E4B9-4A5E-B3AC-53FE4DC9144E/v1/img/kv/ROG-Strix-B650E-F-Gaming.png",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 340*/
        {
            nombre: "ASUS PRIME B840M-A",
            descripcion: "WIFI 3 GPU PCI 5,0 RYZ.",
            precio: "$895",
            imagen: "https://dlcdnwebimgs.asus.com/files/media/2aaf3a73-17ba-467d-80db-98ecb4743811/v1/features/images/large/s5/btn_bg.webp",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 341*/
        {
            nombre: "ASUS B840-PLUS",
            descripcion: "WiFi 4GPU PCI5,0 RYZ.",
            precio: "$995",
            imagen: "https://dlcdnwebimgs.asus.com/files/media/e1a1505c-6da4-4371-8f9a-86459288148a/v1/features/images/large/s1/pd.webp",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 342*/
        {
            nombre: "ASUS TUF B850M-PLUS GAMING",
            descripcion: "WiFi PCI 5,0 RYZ.",
            precio: "$1199",
            imagen: "https://dlcdnwebimgs.asus.com/files/media/c002c3dc-b089-41bd-a022-475addbd7f74/V1/img/performance/connectivity.webp",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 343*/
        {
            nombre: "ASUS ROG B850-F STRIX GAMING",
            descripcion: "WiFi 2GPU RYZ.",
            precio: "$1609",
            imagen: "https://dlcdnwebimgs.asus.com/files/media/8e23bd7f-41d6-4ca8-bf39-de8fa4eafbe8/v1/img/kv/pd.png",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 344*/
        {
            nombre: "ASUS TUF GAMING X670E-PLUS",
            descripcion: "WIFI 2GPU RYZ.",
            precio: "$1555",
            imagen: "https://dlcdnwebimgs.asus.com/files/media/64eb117e-8a3d-469b-a324-b0bb824e627a/V1/img/kv-main.png",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 345*/
        {
            nombre: "ASUS PRIME X870-P",
            descripcion: "WiFi 4 GPU 3 M.2 HDMI 4DDR5 RYZ.",
            precio: "$1289",
            imagen: "https://dlcdnwebimgs.asus.com/gain/64c2d66b-18b4-4df7-90ac-3e67a4255f8e/w800",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 346*/
        {
            nombre: "ASUS TUF X870 GAMING PLUS",
            descripcion: "WIFI 2GPU 4DDR5 RYZ.",
            precio: "$1569",
            imagen: "https://mediawebimg.asus.com/files/media/074e8ea2-05b9-4f74-bee4-fa2ad2e81c21/V1/img/spec/spec-gaming.webp",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 347*/
        {
            nombre: "GIGABYTE B650M D3HP AX",
            descripcion: "WiFi A V R Pciexp RYZ.",
            precio: "$715",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKHPqvR7ji1Cp2se4LkHINPQ9X6Bjf249C1Q&s",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 348*/
        {
            nombre: "GIGABYTE B650M GAMING PLUS",
            descripcion: "WiFi Pciexp RYZ.",
            precio: "$749",
            imagen: "https://www.gigabyte.com/FileUpload/Global/KeyFeature/3660/innergigabyteimages/smartfan.png",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 349*/
        {
            nombre: "GIGABYTE B650 EAGLE AX",
            descripcion: "WiFi 4 GPU RYZ.",
            precio: "$869",
            imagen: "https://www.gigabyte.com/FileUpload/Global/KeyFeature/3563/innergigabyteimages/kf-img.png",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 350*/
        {
            nombre: "GIGABYTE B650M AORUS ELITE",
            descripcion: "AX ICE 2GPU RYZ BLCA.",
            precio: "$1009",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnXlfHoLs79JSdsFfrv4Jau8lGuG4NUhIkOg&s",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 351*/
        {
            nombre: "GIGABYTE B850 GAMING",
            descripcion: "WiFi6 A V R 4PCIExp RYZ.",
            precio: "$895",
            imagen: "https://www.gigabyte.com/FileUpload/Global/KeyFeature/3882/innergigabyte/images/product/hero.png",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 352*/
        {
            nombre: "GIGABYTE B850M GAMING X",
            descripcion: "WiFi6 A.V.R 2Pciexp RYZ.",
            precio: "$1049",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStXG7RhEI5ObsEB1bh82qYEbujXn7v4qziXQ&s",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 353*/
        {
            nombre: "GIGABYTE B650 AORUS ELITE AX",
            descripcion: "WiFi V2 3GPU RYZ.",
            precio: "$1209",
            imagen: "https://www.gigabyte.com/FileUpload/Global/KeyFeature/2192/innergigabyteimages/smartfan601.png",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 354*/
        {
            nombre: "GIGABYTE X870 GAMING",
            descripcion: "WIFI6 3GPU PCI5,0 4DDR5 RYZ.",
            precio: "$1219",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/60076780/resize/1200/1200?1739333301",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 355*/
        {
            nombre: "GIGABYTE X870E AORUS ELITE",
            descripcion: "WIFI 7 1.2 3 GPU 4DDR5 RYZ.",
            precio: "$1599",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIqH-Kz6xk4MuhYhVhSfmU2TYakM8v3PiNhA&s",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 356*/
        {
            nombre: "MSI PRO B650M-P A.V.R",
            descripcion: "Pciexp RYZEN.",
            precio: "$599",
            imagen: "https://storage-asset.msi.com/global/picture/image/feature/mb/B650M/PRO-B650M-P/kv.png",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 357*/
        {
            nombre: "MSI MAG B650 TOMAHAWK",
            descripcion: "WiFi 2GPU RYZEN.",
            precio: "$1175",
            imagen: "https://storage-asset.msi.com/global/picture/image/feature/mb/B650/MAG-B650-TOMAHAWK-WIFI/mag-b650-tomahawk-wifi.png",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 358*/
        {
            nombre: "MSI PRO B850-P",
            descripcion: "WIFI 4 GPU PCI5,0 USB-C RYZEN.",
            precio: "$1065",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlVr9zpxlV0H3O7_5nmZ1fBIn2A38btDXSCA&s",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 359*/
        {
            nombre: "MSI B850 GAMING PLUS",
            descripcion: "WIFI 4 GPU PCI5,0 RYZEN.",
            precio: "$1139",
            imagen: "https://storage-asset.msi.com/global/picture/image/feature/mb/B850/b850-gaming-plus-wifi/images/kv-pd.png",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 360*/
        {
            nombre: "MSI X870 GAMING PLUS",
            descripcion: "WIFI 4 GPU PCI5,0 RYZEN.",
            precio: "$1419",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9FqyuI0Udb8SMO5grzckdVQpyxUB74AQusw&s",
            categoria: "REGULADORES"
        },
        /*PRODUCTO 361*/
        {
            nombre: "6 GIGAS MSI GEFORCE RTX-3050",
            descripcion: "LP OC BRACKET INCLUIDO.",
            precio: "$985",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNpPExgpv4v3rUlWKb_MYmNw3aGsphuzWGew&s",
            categoria: "GRAFICAS"
        },
        /*PRODUCTO 362*/
        {
            nombre: "6 GIGAS GIGABYTE GEF.RTX-3050",
            descripcion: "LOW PROFILE OC 2X.",
            precio: "$995",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/58615787/1000.webp?1735251149",
            categoria: "GRAFICAS"
        },
        /*PRODUCTO 363*/
        {
            nombre: "6 GIGAS MSI GEFORCE RTX-3050",
            descripcion: "VENTUS OC 2X.",
            precio: "$995",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_811202-MLU74251698202_022024-O.webp",
            categoria: "GRAFICAS"
        },
        /*PRODUCTO 364*/
        {
            nombre: "6 GIGAS GIGABYTE GEF.RTX-3050",
            descripcion: "WINDFORCE 2FAN OC.",
            precio: "$1029",
            imagen: "https://static.gigabyte.com/StaticFile/Image/Global/0c7eee0a51b3b015b8458289ea78f0a4/Product/39615/Png",
            categoria: "GRAFICAS"
        },
        /*PRODUCTO 365*/
        {
            nombre: "6 GIGAS MSI GEFORCE RTX-3050",
            descripcion: "GAMING X.",
            precio: "$1040",
            imagen: "https://asset.msi.com/resize/image/global/product/product_16413511096ea340341cd52321e842637f99163c16.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
            categoria: "GRAFICAS"
        },
        /*PRODUCTO 366*/
        {
            nombre: "6 GIGAS ASUS GEFORCE RTX-3050",
            descripcion: "DUAL OC AUTO EX.",
            precio: "$1040",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2qMyK_wQPtkl1scpy4QN2_llmXMKeEteT5g&s",
            categoria: "GRAFICAS"
        },
        /*PRODUCTO 367*/
        {
            nombre: "8 GIGAS ASUS AMD RADEON RX7600",
            descripcion: "DUAL EVO OC V2.",
            precio: "$1715",
            imagen: "https://wuuju.co/cdn/shop/files/ProyectoQuitarfondo_02409dbe-ee35-40e3-a231-e20241d5edc0_1024x1024.png?v=1701888629",
            categoria: "GRAFICAS"
        },
        /*PRODUCTO 368*/
        {
            nombre: "8 GIGAS MSI GEFORCE RTX-3050",
            descripcion: "VENTUS 2X XS OC.",
            precio: "$1339",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_811202-MLU74251698202_022024-O.webp",
            categoria: "GRAFICAS"
        },
        /*PRODUCTO 369*/
        {
            nombre: "8 GIGAS MSI GEFORCE RTX-4060",
            descripcion: "VENTUS 2X OC NEGRO.",
            precio: "$2015",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_866216-MLA74805961331_022024-O.webp",
            categoria: "GRAFICAS"
        },
        /*PRODUCTO 370*/
        {
            nombre: "8 GIGAS MSI GEFORCE RTX-4060",
            descripcion: "VENTUS 2X OC BLANCA.",
            precio: "$2015",
            imagen: "https://http2.mlstatic.com/D_Q_NP_981713-MLU72365427055_102023-O.webp",
            categoria: "GRAFICAS"
        },
        /*PRODUCTO 371*/
        {
            nombre: "8 GIGAS ASUS GEFORCE RTX-4060",
            descripcion: "DUAL OC GAMING.",
            precio: "$2029",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSchMCGTI6BkMt3RFV_xFwpg8gmDG6isfFWMg&s",
            categoria: "GRAFICAS"
        },
        /*PRODUCTO 372*/
        {
            nombre: "8 GIGAS ASUS GEFORCE RTX-4060Ti",
            descripcion: "DUAL EVO OC.",
            precio: "$2599",
            imagen: "https://http2.mlstatic.com/D_Q_NP_890457-MLU78161073117_082024-O.webp",
            categoria: "GRAFICAS"
        },
        /*PRODUCTO 373*/
        {
            nombre: "PARA GPU ANTEC",
            descripcion: "ARGB SUPPORT BRACKET.",
            precio: "$95",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/52366565/61SwW8zquvL.jpg?1729631222",
            categoria: "GRAFICAS"
        },
        /*PRODUCTO 374*/
        {
            nombre: "PARA GPU BRACKET",
            descripcion: "ARGB COOLER MASTER.",
            precio: "$95",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/46459657/0-3.jpg?1710395269",
            categoria: "GRAFICAS"
        },
        /*PRODUCTO 375*/
        {
            nombre: "PARA GPU TEMPERED",
            descripcion: "GLASS ANTEC HOLDER ARGB.",
            precio: "$105",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpmBqHvTWiPTZdsW5trYNoHk-ZtG1APx0Mcw&s",
            categoria: "GRAFICAS"
        },
        /*PRODUCTO 376*/
        {
            nombre: "PARA GPU BRACKET",
            descripcion: "ARGB ASUS ROG HERCULX XH01.",
            precio: "$165",
            imagen: "https://dlcdnwebimgs.asus.com/files/media/16BA5F53-45C3-4120-A934-4C3543284536/v1/img/kv.jpg",
            categoria: "GRAFICAS"
        },
        /*PRODUCTO 377*/
        {
            nombre: "PARA GPU BRACKET",
            descripcion: "ARGB COOLER MASTER ATLAS.",
            precio: "$165",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_799246-MLU76279739109_052024-O.webp",
            categoria: "GRAFICAS"
        },
        /*PRODUCTO 378*/
        {
            nombre: "12 GIGAS MSI GEFORCE RTX-3060",
            descripcion: "VENTUS 2X OC.",
            precio: "$1779",
            imagen: "https://asset.msi.com/resize/image/global/product/product_1610443907b48feb29b4a49834f4b19e35c5511db6.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
            categoria: "GRAFICAS"
        },
        /*PRODUCTO 379*/
        {
            nombre: "12 GIGAS MSI GEFORCE RTX-5070",
            descripcion: "VENTUS 2X OC.",
            precio: "$4020",
            imagen: "https://tauretcomputadores.com/images/products/Product_2025042317062553073550.PERFIL-PNG.webp",
            categoria: "GRAFICAS"
        },
        /*PRODUCTO 380*/
        {
            nombre: "12 GIGAS MSI GEFORCE RTX-5070",
            descripcion: "GAMING TRIO OC 3X RGB.",
            precio: "$4359",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX4pvY39OKZoq-4gxQ9kY5mM0nGLrJzCRthg&s",
            categoria: "GRAFICAS"
        },
        /*PRODUCTO 381*/
        {
            nombre: "16 G GIGABYTE AMD RADEON RX 9070XT",
            descripcion: "GAMING WNIF OC 3X.",
            precio: "$4469",
            imagen: "https://static.gigabyte.com/StaticFile/Image/Global/66783da65984230650f1241875f506f9/Product/44351/Png",
            categoria: "GRAFICAS"
        },
        /*PRODUCTO 382*/
        {
            nombre: "16 G GIGABYTE AMD RADEON RX 9070XT",
            descripcion: "AORUS ELITE OC WF 3X.",
            precio: "$4580",
            imagen: "https://static.gigabyte.com/StaticFile/Image/Global/7edbf65520fd742b3685cb09accb7b80/Product/44340/Png",
            categoria: "GRAFICAS"
        },
        /*PRODUCTO 383*/
        {
            nombre: "16 GIGAS GIGABYTE GEF. RTX-5070Ti",
            descripcion: "AERO OC 3X BLANCA.",
            precio: "$5809",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqTBNx27eClEoVd_rP7vudjhctySYejIP7zg&s",
            categoria: "GRAFICAS"
        },
        /*PRODUCTO 384*/
        {
            nombre: "16 GIGAS MSI GEFORCE RTX-5080",
            descripcion: "SHADOW 3X OC.",
            precio: "$7269",
            imagen: "https://tauretcomputadores.com/images/products/Product_20250405165317250181628.PERFIL.webp",
            categoria: "GRAFICAS"
        },
        /*PRODUCTO 385*/
        {
            nombre: "16 GIGAS MSI GEFORCE RTX-5080",
            descripcion: "INSPIRE 3X OC.",
            precio: "$7599",
            imagen: "https://tauretcomputadores.com/images/products/Product_202502201633341515652098.5080.webp",
            categoria: "GRAFICAS"
        },
        /*PRODUCTO 386*/
        {
            nombre: "16 GIGAS GIGABYTE GEF. RTX-5080",
            descripcion: "GAMING OC WINF 3X.",
            precio: "$7719",
            imagen: "https://static.gigabyte.com/StaticFile/Image/Global/38af2d89471f6b313a828c2825305f27/Product/43884/Png",
            categoria: "GRAFICAS"
        },
        /*PRODUCTO 387*/
        {
            nombre: "16 GIGAS GIGABYTE GEF. RTX-5080",
            descripcion: "AERO OC SFF BLANCO.",
            precio: "$7719",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAKkhK9MZYHhomFCOkZkdNHhITYRHFAHnfpg&s",
            categoria: "GRAFICAS"
        },
        /*PRODUCTO 388*/
        {
            nombre: "16 GIGAS ASUS TUF GEFORCE RTX-5080",
            descripcion: "OC GAMING 3FAN.",
            precio: "$8165",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/60550863/descarga.png?1740512624",
            categoria: "GRAFICAS"
        },
        /*PRODUCTO 389*/
        {
            nombre: "16 GIGAS GIGABYTE GEF. RTX-5080",
            descripcion: "AORUS MASTER 3X WF.",
            precio: "$8389",
            imagen: "https://pcgamermedellin.com/wp-content/uploads/2025/01/gpu-tarjeta-grafica-nvidia-geforce-rtx-5080-gigabyte-aorus-master-16gb-gddr7-1.jpg",
            categoria: "GRAFICAS"
        },
        /*PRODUCTO 390*/
        {
            nombre: "16 GIGAS GIGABYTE GEF. RTX-5080",
            descripcion: "AORUS OC ICE WF 3X BLCO.",
            precio: "$8500",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnAZoRuUivUVDX59-F9B429VRr2R-YMb1Tow&s",
            categoria: "GRAFICAS"
        },
        /*PRODUCTO 391*/
        {
            nombre: "32 GIGAS ZOTAC SOLID GEFORCE RTX-5090",
            descripcion: "OC 3 FAN.",
            precio: "$14885",
            imagen: "https://gtech.systems/wp-content/uploads/2025/02/RTX5090-Zotac-solid-OC-3.png",
            categoria: "GRAFICAS"
        },
        /*PRODUCTO 392*/
        {
            nombre: "32 GIGAS MSI GEFORCE RTX-5090",
            descripcion: "VENTUS 3X OC.",
            precio: "$14885",
            imagen: "https://asset.msi.com/resize/image/global/product/product_17373640990ca0a03d5837c522f92eb9d1f487b252.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png",
            categoria: "GRAFICAS"
        },
        /*PRODUCTO 393*/
        {
            nombre: "32 GIGAS GIGABYTE GEF.RTX-5090",
            descripcion: "AORUS MASTER BLANCA 3X.",
            precio: "$16340",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStdqRANOlBIW7eWIj3gJZAxAZkPE63ut2pUg&s",
            categoria: "GRAFICAS"
        },
        /*PRODUCTO 394*/
        {
            nombre: "GAFAS VR META QUEST 3S",
            descripcion: "128GB JUEGO INCLUIDO.",
            precio: "$2185",
            imagen: "https://tecnoimportaciones.com/wp-content/uploads/2024/11/1727279252_IMG_2344548.jpg",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 395*/
        {
            nombre: "GAFAS VR META QUEST 3S",
            descripcion: "256GB JUEGO INCLUIDO.",
            precio: "$2849",
            imagen: "https://www.technologyvideo.co/cdn/shop/files/1_024dedb6-e8ed-4319-a480-2c408c03506b.png?v=1729553570",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 396*/
        {
            nombre: "GAFAS VR META QUEST 3",
            descripcion: "512GB 4K JUEGO INCLUIDO.",
            precio: "$3699",
            imagen: "https://http2.mlstatic.com/D_Q_NP_796334-MLU73466072850_122023-O.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 397*/
        {
            nombre: "COMBO LOGITECH TECLADO",
            descripcion: "MOUSE MK120 USB.",
            precio: "$63",
            imagen: "https://www.alkosto.com/medias/097855088802-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wyNTk2NHxpbWFnZS93ZWJwfGFHTmxMMmhsWkM4eE5EYzNNRFUwTmpnd01qY3hPQzh3T1RjNE5UVXdPRGc0TURKZk1EQXhYemMxTUZkNE56VXdTQXxiN2FiNjY1MTMzNDI5MmIzYzU1MDY5MTUwNWIxYzRkM2VmOWYxYjdkNWI4ODMxZGFkNGI0NGRhN2IxYjliYzk2",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 398*/
        {
            nombre: "COMBO LOGITECH TECLADO",
            descripcion: "MOUSE MK220.",
            precio: "$80",
            imagen: "https://todotintasysuministros.com/assets/media/productos/987/987_extraLargeThumb.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 399*/
        {
            nombre: "COMBO LOGITECH TECLADO",
            descripcion: "MOUSE MK235.",
            precio: "$83",
            imagen: "https://www.korolos.com.co/wp-content/uploads/2020/11/KORO-3-18.jpg",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 400*/
        {
            nombre: "COMBO LOGITECH TECLADO",
            descripcion: "MOUSE MK270.",
            precio: "$99",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQheIfG47UkxG86haMBHj7FjNeyK7xf1QM-tA&s",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 401*/
        {
            nombre: "COMBO LOGITECH TECLADO",
            descripcion: "MOUSE MK295.",
            precio: "$105",
            imagen: "https://technologystore2006.com/wp-content/uploads/2022/12/ComboLogitechMk295-01.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 402*/
        {
            nombre: "COMBO LOGITECH TECLADO",
            descripcion: "MOUSE MK470.",
            precio: "$159",
            imagen: "https://www.alkosto.com/medias/097855152206-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxNjU1MHxpbWFnZS93ZWJwfGFHVmtMMmd4TXk4eE5ETXdNVEl6TVRZM056UTNNQzh3T1RjNE5UVXhOVEl5TURaZk1EQXhYemMxTUZkNE56VXdTQXw1ZDEzNWYwNDFkOTM5M2Y3ZWE1OWJlMzNjNTg4YjQ4ZjVhNmJlY2Y3Y2Q1YTliNzEwZGU1YTc5NjFkNWMwZTg2",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 403*/
        {
            nombre: "COMBO LOGITECH TECL",
            descripcion: "MSE ROSADO+BLANCO.",
            precio: "$399",
            imagen: "https://megacomputer.com.co/wp-content/uploads/2024/12/2-68.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 404*/
        {
            nombre: "COMBO TRUST TECLADO PRIMO",
            descripcion: "MOUSE BASI USB.",
            precio: "$55",
            imagen: "https://basevirtual.com.co/wp-content/uploads/2022/12/combo-trust-primo-2.jpg",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 405*/
        {
            nombre: "DIADEMA LOGITECH",
            descripcion: "H151.",
            precio: "$84",
            imagen: "https://teratech.com.co/wp-content/uploads/2023/09/356892-1200-auto.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 406*/
        {
            nombre: "DIADEMA LOGITECH",
            descripcion: "ZONE VIBE 100.",
            precio: "$389",
            imagen: "https://megacomputer.com.co/wp-content/uploads/2024/05/ZONE-VIBE-3.png",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 407*/
        {
            nombre: "MOUSE ACER",
            descripcion: "RF2.4G GRIS.",
            precio: "$49",
            imagen: "https://www.mtm.com.co/wp-content/uploads/2023/05/2697.jpg",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 408*/
        {
            nombre: "MOUSE GENIUS",
            descripcion: "NX-7000.",
            precio: "$39",
            imagen: "https://panamericana.vtexassets.com/arquivos/ids/323260/mouse-genius-inalambrico-nx-7000-negro-4710268250074.jpg?v=636937804481370000",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 409*/
        {
            nombre: "MOUSE X-KIM",
            descripcion: "HIPERX RECARGABLE.",
            precio: "$39",
            imagen: "https://technologystore2006.com/wp-content/uploads/2025/01/7AL333-IMG-1.jpg",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 410*/
        {
            nombre: "MOUSE LOGITECH",
            descripcion: "M110 SILENT USB GRIS.",
            precio: "$34",
            imagen: "https://http2.mlstatic.com/D_Q_NP_846670-MLU70461275898_072023-O.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 411*/
        {
            nombre: "MOUSE LOGITECH",
            descripcion: "M196.",
            precio: "$55",
            imagen: "https://tecnoplaza.com.co/cdn/shop/files/910-007456-1-e4cae607-b270-4417-a038-6699edee004e.jpg?v=1743708532",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 412*/
        {
            nombre: "MOUSE LOGITECH",
            descripcion: "POP ROSADO+FUCSIA.",
            precio: "$125",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_938701-MLA84545086506_052025-O.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 413*/
        {
            nombre: "MOUSE LOGITECH",
            descripcion: "LIFT VERTICAL ERGONOMIC.",
            precio: "$279",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDDeUkVca6GoVOu7K1Ofeo9kFSq6AtHWzu5w&s",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 414*/
        {
            nombre: "MOUSE LOGITECH",
            descripcion: "MX ANYWHERE 3S BLANCO.",
            precio: "$309",
            imagen: "https://megacomputer.com.co/wp-content/uploads/2023/10/MX-ANYWHERE-3s-BLANCO.jpg.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 415*/
        {
            nombre: "MOUSE LOGITECH",
            descripcion: "MX ANYWHERE 3S ROSA.",
            precio: "$309",
            imagen: "https://megacomputer.com.co/wp-content/uploads/2022/05/MOUSE-MX-ANYWHERE-3.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 416*/
        {
            nombre: "MOUSE STARTEC",
            descripcion: "ST-MO-91.",
            precio: "$34",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPEeWLNa_RkgynsFgvIzs9FNX5xF3D-f2ecw&s",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 417*/
        {
            nombre: "MOUSE TRUST BAYO II VERTICAL",
            descripcion: "ERGONOMICO USB BLANCO.",
            precio: "$82",
            imagen: "https://todotintasysuministros.com/assets/media/mouse-vertical-trust-bayo-ii-blanco-alambrico_extraLargeThumb.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 418*/
        {
            nombre: "MOUSE TRUST BAYO II VERTICAL",
            descripcion: "ERGONOMICO USB NEGRO.",
            precio: "$82",
            imagen: "https://panamericana.vtexassets.com/arquivos/ids/537949/mouse-alambrico-trust-usb-diseno-vertical-2-8713439246353.jpg?v=638490652537370000",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 419*/
        {
            nombre: "MOUSE TRUST VERTO VERTICAL",
            descripcion: "ERGONOMIC USB NEGRO.",
            precio: "$82",
            imagen: "https://todotintasysuministros.com/assets/media/verto-alambrico.jpg?u=1716657270",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 420*/
        {
            nombre: "MOUSE TRUST VERRO VERTICAL",
            descripcion: "ERGONOMICO.",
            precio: "$95",
            imagen: "https://exitocol.vtexassets.com/arquivos/ids/17016490/mouse-vertical-inalambrico-trust-verro-ergonomico.jpg?v=638145164373370000",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 421*/
        {
            nombre: "MOUSE TRUST VERTO",
            descripcion: "ERGONOMICO NEGRO.",
            precio: "$102",
            imagen: "https://ehcolombia.com/wp-content/uploads/2019/01/Mouse-Ergonomico-Verto.jpg",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 422*/
        {
            nombre: "MOUSE TRUST VERTO",
            descripcion: "ERGONOMICO BLANCO.",
            precio: "$102",
            imagen: "https://panamericana.vtexassets.com/arquivos/ids/537952-800-auto?v=638490652661900000&width=800&height=auto&aspect=true",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 423*/
        {
            nombre: "TECLADO LOGITECH",
            descripcion: "K120 USB.",
            precio: "$54",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZalYbek1xLuHqae_9exqYAVQc_CAoIPqloQ&s",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 424*/
        {
            nombre: "TECLADO LOGITECH",
            descripcion: "K400 TOUCH SMART TV.",
            precio: "$155",
            imagen: "https://teknopolis.vtexassets.com/arquivos/ids/161200/TECLADO_LOGITECH_INALAMBRICO_K400_SMART_TV_PLUS_1.jpg?v=636044626548230000",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 425*/
        {
            nombre: "TECLADO LOGITECH",
            descripcion: "K480 MULTI-DEVICE NEGRO.",
            precio: "$175",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_885593-MLA51246880563_082022-O.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 426*/
        {
            nombre: "TECLADO LOGITECH",
            descripcion: "WAVE ERGO PARA EMPRESA NEG.",
            precio: "$219",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7LvqHJ-2xYH03pEsvH2YGd1gPiYwffBck4Q&s",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 427*/
        {
            nombre: "TECLADO LOGITECH",
            descripcion: "POP KEYS LILA+VERDE.",
            precio: "$299",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb_X6wrpvGo_uN-RBw_rkmOP0VFgBEoGmWcQ&s",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 428*/
        {
            nombre: "TECLADO LOGITECH",
            descripcion: "POP KEYS ROSADO+BLANCO.",
            precio: "$299",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyiBLIrFPn1L6yhFUkv9yN-jCkKWmbPftTCQ&s",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 429*/
        {
            nombre: "COUGAR TECLADO",
            descripcion: "MOUSE COMBAT RGB.",
            precio: "$249",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/62675283/combo-gamer-combat-cougar-teclado-mouse-rgb-combo-cougar-combat-teclado-mouse.jpg?1745244182",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 430*/
        {
            nombre: "MOUSE LOGITECH G502 X NEGRO",
            descripcion: "PAD MOUSE G640 SE.",
            precio: "$519",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_aTPLHxFVGhzuQb-QB9Qoe6AS3zYzOFq1gA&s",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 431*/
        {
            nombre: "MOUSE REDRAGON",
            descripcion: "PAD MOUSE M601WL-BA.",
            precio: "$65",
            imagen: "https://redragon.es/content/uploads/2021/05/M601-WL.png",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 432*/
        {
            nombre: "TECLADO",
            descripcion: "MOUSE REDRAGON S136 RGB.",
            precio: "$285",
            imagen: "https://redragon.es/content/uploads/2024/05/S136-PNGHQ-1.png",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 433*/
        {
            nombre: "CONTROL GAME PAD",
            descripcion: "ASUS ROG RAIKIRI NEGRO.",
            precio: "$469",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/54997349/material-1.jpg?1728683314",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 434*/
        {
            nombre: "CONTROL GAME PAD",
            descripcion: "ASUS ROG RAIKIRI PRO NEGRO.",
            precio: "$649",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_774405-MLU77806886594_072024-O.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 435*/
        {
            nombre: "CONTROL GAME PAD",
            descripcion: "LOGITECH F710.",
            precio: "$125",
            imagen: "https://tecnomarketink.co/wp-content/uploads/2024/03/mando-inalambrico-wireless-control-gamepad-f710-precision-vibracion-pc-logitech-tecnomarketink-6.png",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 436*/
        {
            nombre: "CONTROL GAME PAD",
            descripcion: "MSI FORCE GC30 V2 BLANCO.",
            precio: "$159",
            imagen: "https://asset.msi.com/resize/image/global/product/product_16261719975153c706245f12426d1735c7f8042df4.png62405b38c58fe0f07fcef2367d8a9ba1/600.png",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 437*/
        {
            nombre: "CONTROL GAME PAD",
            descripcion: "TRUST GXT545 YULA.",
            precio: "$120",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_624884-MLA45315505363_032021-O.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 438*/
        {
            nombre: "CONTROL RAZER",
            descripcion: "KISHI V2 UNIVERSAL MOBILE.",
            precio: "$310",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/25575152/resize/610/610?1715631539",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 439*/
        {
            nombre: "CONTROL GAME PAD",
            descripcion: "REDRAGON PC PS3 G807 SATURN.",
            precio: "$79",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_934261-MCO31354257487_072019-O.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 440*/
        {
            nombre: "CONTROL GAME PAD",
            descripcion: "REDRAGON G808 PRO HARROW.",
            precio: "$135",
            imagen: "https://exitocol.vtexassets.com/arquivos/ids/23139963/control-inalambrico-para-pc-y-ps3-gamepad-redragon-g808-pro.jpg?v=638537369081200000",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 441*/
        {
            nombre: "CONTROL GAME PAD",
            descripcion: "REDRAGON G818 JUNO PC/PS3/PS4.",
            precio: "$145",
            imagen: "https://http2.mlstatic.com/D_Q_NP_668560-MLU75288302941_032024-O.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 442*/
        {
            nombre: "CONTROL GAME PAD",
            descripcion: "DUALSENSE SONY NEGRO PS5.",
            precio: "$274",
            imagen: "https://audiocolor.co/cdn/shop/files/Control-PS5-Dualsense-Midnight-Negro-1_111fc06a-887a-4922-89e4-f5b81e09b863.jpg?v=1726336494",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 443*/
        {
            nombre: "CONTROL GAME PAD",
            descripcion: "DUALSENSE SONY BLANCO PS5.",
            precio: "$274",
            imagen: "https://cosonyb2c.vtexassets.com/arquivos/ids/345373/PS5_DS_Pshot_A.jpg?v=637363940945300000",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 444*/
        {
            nombre: "CONTROL GAME PAD",
            descripcion: "XBOX BLANCO.",
            precio: "$289",
            imagen: "https://www.alkosto.com/medias/889842654691-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxMjI2MnxpbWFnZS93ZWJwfGFHUmhMMmd6TXk4eE5ETTJNRFkyTVRVMU56STNPQzg0T0RrNE5ESTJOVFEyT1RGZk1EQXhYemMxTUZkNE56VXdTQXw4NzNjYzA5ZDM0MTk0ODVmYTY4NmY3M2ZjMmE2MTFlOTA0MzI0NTRkOGFmY2RhN2RiYjExZDM5M2NkNzYwN2Qw",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 445*/
        {
            nombre: "CONTROL GAME PAD",
            descripcion: "XBOX NEGRO.",
            precio: "$289",
            imagen: "https://www.alkosto.com/medias/889842654776-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxNjkwOHxpbWFnZS93ZWJwfGFEa3hMMmd6TkM4eE5ETTFNakF3TXpBd05qUTVOQzg0T0RrNE5ESTJOVFEzTnpaZk1EQXhYemMxTUZkNE56VXdTQXwwZjQ1YWQyOGU4ZTNlNThjMzU5YWFhZWIxNDQzYTFkMzcxZjdlZTZjNGEzNDAwZDkyYzdkYjkxMmVhYTVjN2Vk",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 446*/
        {
            nombre: "CONTROL GAME PAD",
            descripcion: "XBOX VERDE.",
            precio: "$289",
            imagen: "https://www.alkomprar.com/medias/889842896473-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxOTg0NnxpbWFnZS93ZWJwfGFHSTJMMmhsTUM4eE5ETTBOek13TVRRMU16ZzFOQzg0T0RrNE5ESTRPVFkwTnpOZk1EQXhYemMxTUZkNE56VXdTQXxkNDBlMGM1ZDY5Y2IzZTJkZmU1ZGEyZGNjYzMyM2Y3M2IwOTI5ODY3NmU2ZDM3YmFlNzc3MTA3ZTJhYjY2ZDAw",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 447*/
        {
            nombre: "CONTROL GAME PAD",
            descripcion: "XBOX AZUL.",
            precio: "$289",
            imagen: "https://www.korolos.com.co/wp-content/uploads/2021/12/CONTROL-XBOX-AZUL-KOROLOS-1-700x700.jpg",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 448*/
        {
            nombre: "CONTROL GAME",
            descripcion: "XBOX VERDE VELOCITY.",
            precio: "$289",
            imagen: "https://www.alkosto.com/medias/889842896473-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxOTg0NnxpbWFnZS93ZWJwfGFHSTJMMmhsTUM4eE5ETTBOek13TVRRMU16ZzFOQzg0T0RrNE5ESTRPVFkwTnpOZk1EQXhYemMxTUZkNE56VXdTQXxkNDBlMGM1ZDY5Y2IzZTJkZmU1ZGEyZGNjYzMyM2Y3M2IwOTI5ODY3NmU2ZDM3YmFlNzc3MTA3ZTJhYjY2ZDAw",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 449*/
        {
            nombre: "CONTROL GAME PAD",
            descripcion: "XBOX ROJO.",
            precio: "$289",
            imagen: "https://www.alkosto.com/medias/889842707106-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wxNzIyNnxpbWFnZS93ZWJwfGFEbG1MMmd4WlM4eE5ESTVPVEV4T0RjNU5qZ3pNQzg0T0RrNE5ESTNNRGN4TURaZk1EQXhYemMxTUZkNE56VXdTQXw1Y2I1NmRmMTI2ODFhNWJkNjBkZjdhODc2ODBmMDI1OTBiY2U2YjNlY2Q0MjU3NjU3OTNiY2MzNTU5YzI1NmZi",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 450*/
        {
            nombre: "CONTROL GAME PAD",
            descripcion: "XBOX PURPURA.",
            precio: "$289",
            imagen: "https://comprandoando.vtexassets.com/arquivos/ids/361785/QAU-00068-CONTROL-XBOX--ED-ESPECIAL-1.jpg?v=638483776001770000",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 451*/
        {
            nombre: "CONTROL GAME PAD",
            descripcion: "XBOX ROSA.",
            precio: "$289",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9V0wbfrGWRW_vAvlSdK3oAzR6NIGL2A4GCw&s",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 452*/
        {
            nombre: "CONTROL GAME PAD",
            descripcion: "XBOX PULSE CIPHER.",
            precio: "$329",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHNFfMUL0Jn7tepcE9_USkI_e4OQ2aCKD0Ag&s",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 453*/
        {
            nombre: "CONTROL GAME PAD",
            descripcion: "XBOX GHOST CIPHER.",
            precio: "$329",
            imagen: "https://www.ktronix.com/medias/196388334117-001-1400Wx1400H?context=bWFzdGVyfGltYWdlc3w2MjIyNnxpbWFnZS93ZWJwfGFHTmlMMmhpWVM4eE5EYzNNamt3TkRVNU1UTTVNQzh4T1RZek9EZ3pNelF4TVRkZk1EQXhYekUwTURCWGVERTBNREJJfDk0NmU3YTcxNWRkZDM2MjcyZDFhYzU1OWQ1NWM1OTk3NDFjZTA2OGUxN2U5ZTRkNzVjYWU5ZDYxOWZlNjM0ODY",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 454*/
        {
            nombre: "JOYSTICK LOGITECH",
            descripcion: "EXTREME 3D PRO USB.",
            precio: "$219",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_660204-MLA84832203037_052025-O.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 455*/
        {
            nombre: "COOLER MASTER",
            descripcion: "PARA GAME PAD O DIADEMA NEGRO.",
            precio: "$145",
            imagen: "https://www.intelec.co.cr/wp-content/uploads/2024/02/MCA-U000R-KPHK00.jpg",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 456*/
        {
            nombre: "COOLER MASTER",
            descripcion: "PARA GAME PAD O DIADEMA  BLANCO.",
            precio: "$145",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_987994-MLA82435690953_022025-O.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 457*/
        {
            nombre: "ASUS ROG",
            descripcion: "CETRA TRUE NEGRO.",
            precio: "$359",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_638682-MLA82486439379_022025-O.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 458*/
        {
            nombre: "ASUS ROG",
            descripcion: "CETRA TRUE BLANCO.",
            precio: "$359",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_792259-MLA71900822944_092023-O.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 459*/
        {
            nombre: "DIADEMA ASUS ROG",
            descripcion: "DELTA S 7.1 CORE NEGRA ROJO.",
            precio: "$359",
            imagen: "https://m.media-amazon.com/images/I/71Dn0hpa81L.jpg",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 460*/
        {
            nombre: "DIADEMA ASUS ROG",
            descripcion: "A501 PELTA NEGRA.",
            precio: "$435",
            imagen: "https://dlcdnwebimgs.asus.com/gain/12207FD7-ACCF-46BA-A872-911775664ED2",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 461*/
        {
            nombre: "DIADEMA CORSAIR",
            descripcion: "HS35 V2 NEGRO.",
            precio: "$169",
            imagen: "https://http2.mlstatic.com/D_Q_NP_894036-MLA79705870210_102024-O.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 462*/
        {
            nombre: "DIADEMA CORSAIR",
            descripcion: "HS55 STEREO NEGRA.",
            precio: "$269",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_691660-MLU78803025669_082024-O.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 463*/
        {
            nombre: "DIADEMA CORSAIR",
            descripcion: "HS55 STEREO BLANCA.",
            precio: "$269",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_925856-MLU77949881399_072024-O.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 464*/
        {
            nombre: "DIADEMA CORSAIR",
            descripcion: "HS65 SURROUND BLANCO.",
            precio: "$299",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_802837-MLU72566281380_112023-O.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 465*/
        {
            nombre: "DIADEMA CORSAIR",
            descripcion: "HS65 SURROUND NEGRO.",
            precio: "$299",
            imagen: "https://http2.mlstatic.com/D_Q_NP_702740-MLU72637071985_112023-O.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 466*/
        {
            nombre: "DIADEMA CORSAIR",
            descripcion: "HS55 NEGRO.",
            precio: "$409",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_879195-MLU78124082711_082024-O.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 467*/
        {
            nombre: "DIADEMA CORSAIR",
            descripcion: "VOID RGB ELITE NEGRO.",
            precio: "$449",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_979879-MLA72359564584_102023-O.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 468*/
        {
            nombre: "DIADEMA CORSAIR",
            descripcion: " VOID RGB ELITE BLANCA.",
            precio: "$449",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_916368-MCO48420027714_122021-O.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 469*/
        {
            nombre: "DIADEMA CORSAIR",
            descripcion: "VIRTUOSO PRO NEGRO.",
            precio: "$779",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOfqBBj5zHWZ_TfiiwcDMrDWgVZqyKIat72g&s",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 470*/
        {
            nombre: "DIADEMA CORSAIR",
            descripcion: "VIRTUOSO PRO BLANCO.",
            precio: "$779",
            imagen: "https://clonesyperifericos.com/wp-content/uploads/2024/10/VIRTUOSO-PRO-Gaming-and-Streaming-Headset-White-1.jpg",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 471*/
        {
            nombre: "DIADEMA CORSAIR",
            descripcion: "VIRTUOSO RGB BLANCA.",
            precio: "$799",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/59226855/716vTg39ddL._AC_UF894_1000_QL80_.jpg?1737161032",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 472*/
        {
            nombre: "DIADEMA CORSAIR",
            descripcion: "VIRTUOSO RGB NEGRO.",
            precio: "$799",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/59226852/resize/1200/1200?1737161032",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 473*/
        {
            nombre: "DIADEMA LOGITECH",
            descripcion: "G335 NEGRA.",
            precio: "$225",
            imagen: "https://tauretcomputadores.com/images/products/Product_20210928102203338414098.png",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 474*/
        {
            nombre: "DIADEMA LOGITECH",
            descripcion: " G335 BLANCA.",
            precio: "$238",
            imagen: "https://tauretcomputadores.com/images/products/Product_202109281025402071626389.png",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 475*/
        {
            nombre: "DIADEMA LOGITECH",
            descripcion: "G435 NEGRO/AMARILLO.",
            precio: "$302",
            imagen: "https://http2.mlstatic.com/D_Q_NP_732603-MLA84836410911_052025-O.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 476*/
        {
            nombre: "DIADEMA LOGITECH",
            descripcion: "G733 RGB LILA.",
            precio: "$599",
            imagen: "https://megacomputer.com.co/wp-content/uploads/2022/07/DIADEMA-G733-LILA.jpg.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 477*/
        {
            nombre: "DIADEMA LOGITECH",
            descripcion: "G733 RGB AZUL.",
            precio: "$599",
            imagen: "https://megacomputer.com.co/wp-content/uploads/2022/07/DIADEMA-G733-AZUL.jpg.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 478*/
        {
            nombre: "DIAD.LOGITECH A50X",
            descripcion: "LIGHTSPEED NEGRA+BASE.",
            precio: "$1499",
            imagen: "https://megacomputer.com.co/wp-content/uploads/2024/05/ASTRO-A50X-939-002126.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 479*/
        {
            nombre: "DIAD.LOGITECH A50X",
            descripcion: "LIGHTSPEED BLANCA+BASE.",
            precio: "$1499",
            imagen: "https://megacomputer.com.co/wp-content/uploads/2024/12/1-67.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 480*/
        {
            nombre: "RAZER HAMMERHEAD",
            descripcion: "TRUE NEGRO RGB.",
            precio: "$269",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_902054-MCO77823664595_072024-O.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 481*/
        {
            nombre: "DIADEMA RAZER",
            descripcion: "KAIRA X WIRED PS5 NEGRO/BLANCO.",
            precio: "$229",
            imagen: "https://content.app-sources.com/s/06812195814293589/uploads/DIADEMAS/61hcXXyejVL._AC_SL1500_-removebg-preview-0399270.png",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 482*/
        {
            nombre: "DIADEMA REDRAGON",
            descripcion: "ARES H120 RGB.",
            precio: "$65",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/16015140/H120-01.jpg?1625009953",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 483*/
        {
            nombre: "DIADEMA REDRAGON",
            descripcion: "H211 CRONUS RGB NEGRA.",
            precio: "$65",
            imagen: "https://redragon.es/content/uploads/2024/11/Cronus-B.png",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 484*/
        {
            nombre: "DIADEMA REDRAGON",
            descripcion: "H211W CRONUS RGB BLANCA.",
            precio: "$65",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/62007422/49043-producto-redragon-cronus-gorilagames4.jpg?1743549115",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 485*/
        {
            nombre: "DIADEMA REDRAGON",
            descripcion: "H260 RGB HYLAS NEGRA.",
            precio: "$66",
            imagen: "https://compugamercol.com/wp-content/uploads/2024/06/DIADEMA-HYLAS-NEGRA.jpg",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 486*/
        {
            nombre: "DIADEMA REDRAGON",
            descripcion: "H260W-RGB HYLAS BLANCA.",
            precio: "$69",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_622187-MCO49399722203_032022-O.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 487*/
        {
            nombre: "DIADEMA REDRAGON",
            descripcion: "LAMIA2 H320 RGB NEGRA.",
            precio: "$135",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSemv5Ymv9tMZGIGIKL4aWp106zCXYqTGwuQg&s",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 488*/
        {
            nombre: "DIADEMA REDRAGON",
            descripcion: "LAMIA2 H320W-RGB BLANCA.",
            precio: "$135",
            imagen: "https://www.apcomputadores.com/wp-content/uploads/diadema-redragon-lamia-h320w-rgb-blanca-usb-rgb4.jpg",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 489*/
        {
            nombre: "DIADEMA REDRAGON",
            descripcion: "IRE PRO H848 GRIS / BLANCA.",
            precio: "$185",
            imagen: "https://pcgamermedellin.com/wp-content/uploads/2024/09/diadema-headset-gamer-redragon-h848-gris-1.jpg",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 490*/
        {
            nombre: "DIADEMA REDRAGON",
            descripcion: "IRE PRO H848B BLANCA/AZUL.",
            precio: "$185",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_702037-MLU71064830612_082023-O.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 491*/
        {
            nombre: "DIADEMA REDRAGON",
            descripcion: "IRE PRO H848 NEGRA.",
            precio: "$185",
            imagen: "https://compugamercol.com/wp-content/uploads/2024/06/REDRAGON-IRE-INALAMBRICA-2.jpg",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 492*/
        {
            nombre: "DIADEMA REDRAGON",
            descripcion: "H510W-RGB ZEUS X BLANCO.",
            precio: "$215",
            imagen: "https://carulla.vtexassets.com/arquivos/ids/17268259/diadema-redragon-usb-zeus-x-h510w-rgb-virtual-71-blanco.jpg?v=638605676503200000",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 493*/
        {
            nombre: "DIADEMA REDRAGON",
            descripcion: "H510 RGB ZEUS-X NEGRO.",
            precio: "$215",
            imagen: "https://exitocol.vtexassets.com/arquivos/ids/25649049/diadema-gamer-redragon-zeus-x-h510-rgb-negra.jpg?v=638688564778200000",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 494*/
        {
            nombre: "DIADEMA SKULLCANDY",
            descripcion: "HESH EVO NEGRA.",
            precio: "$457",
            imagen: "https://skullcandy.co/cdn/shop/files/Hesh_evo_buy_box_black_1.png?v=1716309879&width=416",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 495*/
        {
            nombre: "DIADEMA SKULLCANDY",
            descripcion: "CRUSHER ANC 2 NEGRA.",
            precio: "$962",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDc65KbyPTrub4LL8AFgzwCDfh4U66FQ6NNQ&s",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 496*/
        {
            nombre: "HYPER-X",
            descripcion: "CIRRO BUDS PRO.",
            precio: "$219",
            imagen: "https://www.hp.com/es-es/shop/Html/Merch/Images/c08492308_1750x1285.jpg",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 497*/
        {
            nombre: "XIAOMI",
            descripcion: "MI IN-EAR HEADPHONES BASIC NEGRO.",
            precio: "$31",
            imagen: "https://exitocol.vtexassets.com/arquivos/ids/10960114/audifonos-xiaomi-mi-in-ear-basic-manos-libre-microfono-color-negro.jpg?v=637731975856500000",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 498*/
        {
            nombre: "XIAOMI",
            descripcion: "MI IN-EAR HEADPHONES BASIC GRIS.",
            precio: "$31",
            imagen: "https://digitalmtx.com/wp-content/uploads/MI-IN-EAR-HEADPHONES-BASIC-SILVER-1.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 499*/
        {
            nombre: "XIAOMI",
            descripcion: "REDMI BUDS 6 PLAY BLANCO.",
            precio: "$59",
            imagen: "https://i02.appmifile.com/96_item_co/07/10/2024/9efb321646a5d0b4df4e1be3ca33631c!400x400!85.png",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 500*/
        {
            nombre: "XIAOMI",
            descripcion: "REDMI BUDS 6 PLAY NEGRO.",
            precio: "$59",
            imagen: "https://exitocol.vtexassets.com/arquivos/ids/25367888/Audifonos-XIAOMI-Redmi-Buds-6-Play-Negro-3625603_a.jpg?v=638647188221870000",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 501*/
        {
            nombre: "XIAOMI",
            descripcion: "REDMI BUDS 6 ACTIVE BLANCO.",
            precio: "$76",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfmHEfbneUdveNKF_TqEddMgERJLDhooSjYA&s",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 502*/
        {
            nombre: "XIAOMI",
            descripcion: "REDMI BUDS 6 ACTIVE AZUL.",
            precio: "$76",
            imagen: "https://www.smartgadgets.com.co/cdn/shop/files/470.png?v=1734210903&width=1445",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 503*/
        {
            nombre: "XIAOMI",
            descripcion: "REDMI BUDS 6 ACTIVE ROSA.",
            precio: "$76",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_794051-MLA82163738760_022025-O.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 504*/
        {
            nombre: "XIAOMI",
            descripcion: "REDMI BUDS 6 ACTIVE NEGRO.",
            precio: "$76",
            imagen: "https://copservir.vtexassets.com/arquivos/ids/1428618/image-c1d7acf5322f4edca7547efd8c1a042d.jpg?v=638596772291800000",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 505*/
        {
            nombre: "XIAOMI REDMI",
            descripcion: "BUDS 6 LITE NEGRO.",
            precio: "$90",
            imagen: "https://exitocol.vtexassets.com/arquivos/ids/24553154/Audifonos-XIAOMI-Redmi-Buds-6-Lite-Inalambricos-Negro-3611290_a.jpg?v=638616851686700000",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 506*/
        {
            nombre: "XIAOMI REDMI",
            descripcion: "BUDS 6 LITE BLANCA.",
            precio: "$90",
            imagen: "https://i02.appmifile.com/850_item_co/07/10/2024/171614f1d57fef42b4d85310929befa2!400x400!85.png",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 507*/
        {
            nombre: "XIAOMI REDMI",
            descripcion: "BUDS 6 LITE AZUL.",
            precio: "$90",
            imagen: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/137831536_01/w=800,h=800,fit=pad",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 508*/
        {
            nombre: "XIAOMI REDMI",
            descripcion: "BUDS 5 SKY AZUL.",
            precio: "$165",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_889806-MLU77518674836_072024-O.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 509*/
        {
            nombre: "XIAOMI REDMI",
            descripcion: "BUDS 5 NEGRA.",
            precio: "$165",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_888913-MLU78217284520_082024-O.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 510*/
        {
            nombre: "XIAOMI REDMI",
            descripcion: "BUDS 5 BLANCOS.",
            precio: "$165",
            imagen: "https://i02.appmifile.com/688_item_co/12/11/2024/15f1860268dc014ebc0cbcb7590c633e!400x400!85.png",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 511*/
        {
            nombre: "XIAOMI REDMI",
            descripcion: "REDMI BUDS 6 CORAL VERDE.",
            precio: "$175",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFssVrAKrOkg_x8A4Qh1WbruHjkw43jSkSyw&s",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 512*/
        {
            nombre: "XIAOMI REDMI",
            descripcion: "REDMI BUDS 6 CLOUD BLANCA.",
            precio: "$175",
            imagen: "https://agaval.vtexassets.com/arquivos/ids/1792657/image-d93ec721c5d8434ab00027395488d0b4.jpg?v=638602897049030000",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 513*/
        {
            nombre: "XIAOMI REDMI",
            descripcion: "REDMI BUDS 6 CLOUD NEGRA.",
            precio: "$175",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_951693-MLU79052671404_092024-O.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 514*/
        {
            nombre: "LED+BASE DIADEM",
            descripcion: "CORSAIR ICUE LT100 RGB.",
            precio: "$477",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsE1QOIhnNPz8rPfOUqoYciv2rfnwY5QstOw&s",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 515*/
        {
            nombre: "COOLER MASTER",
            descripcion: "PARA GAME PAD O DIADEMA NEGRO.",
            precio: "$145",
            imagen: "https://www.intelec.co.cr/wp-content/uploads/2024/02/MCA-U000R-KPHK00.jpg",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 516*/
        {
            nombre: "COOLER MASTER",
            descripcion: "PARA GAME PAD O DIADEMA  BLANCO.",
            precio: "$145",
            imagen: "https://http2.mlstatic.com/D_Q_NP_698952-MLA82152693304_022025-O.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 517*/
        {
            nombre: "DIADEMA CORSAIR",
            descripcion: "ST100 RGB.",
            precio: "$319",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/59240782/resize/1200/1200?1737171879",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 518*/
        {
            nombre: "MOUSE CORSAIR",
            descripcion: "KATAR PRO RGB NEGRO.",
            precio: "$129",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_676196-MCO48109858481_112021-O.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 519*/
        {
            nombre: "MOUSE CORSAIR",
            descripcion: "HARPOON RGB PRO NEGRO.",
            precio: "$165",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_886486-MLU78029400781_072024-O.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 520*/
        {
            nombre: "MOUSE CORSAIR",
            descripcion: "KATAR PRO NEGRO.",
            precio: "$215",
            imagen: "https://http2.mlstatic.com/D_Q_NP_764188-MLA48742123933_012022-O.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 521*/
        {
            nombre: "MOUSE CORSAIR",
            descripcion: "HARPOON RGB NEGRO.",
            precio: "$255",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_676360-MLA48635952869_122021-O.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 522*/
        {
            nombre: "MOUSE CORSAIR",
            descripcion: "M75 AIR NEGRO.",
            precio: "$346",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_818969-CBT79031848073_092024-O.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 523*/
        {
            nombre: "MOUSE COUGAR",
            descripcion: "SURPASSION BACKLIGHT.",
            precio: "$155",
            imagen: "https://cougargaming.com/_cgrwdr_/wwdpp/wp-content/uploads/2019/01/01-15.png",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 524*/
        {
            nombre: "MOUSE HYPERX",
            descripcion: "PULSEFIRE CORE NEGRO RGB.",
            precio: "$119",
            imagen: "https://co-media.hptiendaenlinea.com/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/4/P/4P4F8AA-1_T1679067344.png",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 525*/
        {
            nombre: "MOUSE LOGITECH",
            descripcion: "G203 LIGHTSYNC RGB NEGRO.",
            precio: "$95",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsf4jbHvdw8Gyo9KCR9fvr3ZBIms9w6bmKpQ&s",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 526*/
        {
            nombre: "MOUSE LOGITECH",
            descripcion: "G203 LIGHTSYNC RGB BLANCO.",
            precio: "$95",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_823466-MLA84850903377_052025-O.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 527*/
        {
            nombre: "MOUSE LOGITECH",
            descripcion: "G203 LIGHTSYNC RGB LILA.",
            precio: "$95",
            imagen: "https://megacomputer.com.co/wp-content/uploads/2020/10/mouse-2-1.jpg.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 528*/
        {
            nombre: "MOUSE LOGITECH",
            descripcion: "G203 LIGHTSYNC RGB BLUE.",
            precio: "$95",
            imagen: "https://megacomputer.com.co/wp-content/uploads/2020/10/mouse-2.jpg.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 529*/
        {
            nombre: "MOUSE REDRAGON",
            descripcion: "M916 KING PRO 1K BLANCO USB 2.4HZ.",
            precio: "$155",
            imagen: "https://redragon.es/content/uploads/2024/07/KING-PRO-1K-BLACK-M916.png",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 530*/
        {
            nombre: "MOUSE REDRAGON",
            descripcion: "M916 KING PRO 1K NEGRO USB 2.4HZ.",
            precio: "$155",
            imagen: "https://elektra.vtexassets.com/arquivos/ids/8345499-800-450?v=638671930438730000&width=800&height=450&aspect=true",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 531*/
        {
            nombre: "MOUSE REDRAGON",
            descripcion: "M916W KING PRO 4K BLANCO USB2.4HZ.",
            precio: "$205",
            imagen: "https://gorilagames.com/img/Public/1019/26710-producto-redragon-mouse-king-pro-m916-white-gorila-games-3.jpg",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 532*/
        {
            nombre: "MOUSE REDRAGON",
            descripcion: "M916 KING PRO 4K NEGRO USB 2.4HZ.",
            precio: "$205",
            imagen: "https://elektra.vtexassets.com/arquivos/ids/8345499-800-450?v=638671930438730000&width=800&height=450&aspect=true",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 533*/
        {
            nombre: "MOUSE LOGITECH",
            descripcion: "G305 NEGRO.",
            precio: "$159",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2O5ckFhmD-Ibr6k1_qlWjmdIXy8kow3wZSw&s",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 534*/
        {
            nombre: "MOUSE LOGITECH",
            descripcion: "G305 BLANCO.",
            precio: "$159",
            imagen: "https://megacomputer.com.co/wp-content/uploads/2024/06/G305-Blanco.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 535*/
        {
            nombre: "MOUSE LOGITECH",
            descripcion: "G305 AZUL.",
            precio: "$159",
            imagen: "https://megacomputer.com.co/wp-content/uploads/2023/03/G305-AZUL.jpg",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 536*/
        {
            nombre: "MOUSE LOGITECH",
            descripcion: "G305 LILA.",
            precio: "$159",
            imagen: "https://megacomputer.com.co/wp-content/uploads/2023/03/G305-LILA.jpg",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 537*/
        {
            nombre: "MOUSE LOGITECH",
            descripcion: "G305 MENTA.",
            precio: "$159",
            imagen: "https://basevirtual.com.co/wp-content/uploads/2025/02/BASE-VIRTUAL-MOUSE-G305-MENTA.png",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 538*/
        {
            nombre: "MOUSE LOGITECH",
            descripcion: "G502 HERO RGB.",
            precio: "$199",
            imagen: "https://exitocol.vtexassets.com/arquivos/ids/16509465/mouse-gamer-logitech-g502-hero-rgb-wireless.jpg?v=638113864023400000",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 539*/
        {
            nombre: "MOUSE LOGITECH",
            descripcion: "G309 LIGHTSPEED NEGRO.",
            precio: "$259",
            imagen: "https://megacomputer.com.co/wp-content/uploads/2024/09/Product_202408261227161196795540.perfilPNG.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 540*/
        {
            nombre: "MOUSE LOGITECH",
            descripcion: "G309 LIGHTSPEED BLANCO.",
            precio: "$265",
            imagen: "https://megacomputer.com.co/wp-content/uploads/2024/09/Product_202408261229051216847962.perfilPNG-blanco.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 541*/
        {
            nombre: "MOUSE LOGITECH",
            descripcion: "G502 X HERO NEGRO.",
            precio: "$319",
            imagen: "https://megacomputer.com.co/wp-content/uploads/2023/10/MOUSE-G502-X-ALAMBRICO-NEGRO.jpg.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 542*/
        {
            nombre: "MOUSE LOGITECH",
            descripcion: "G502 X HERO BLANCO.",
            precio: "$319",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/55094962/Logitech-G502X-W-01.jpg?1729026990",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 543*/
        {
            nombre: "MOUSE LOGITECH",
            descripcion: "G502 LIGTHSPEED.",
            precio: "$425",
            imagen: "https://megacomputer.com.co/wp-content/uploads/2021/03/LIGHTSPEED.png",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 544*/
        {
            nombre: "MOUSE LOGITECH",
            descripcion: "G PRO 2 LIGHTSPEED NEGRO.",
            precio: "$499",
            imagen: "https://megacomputer.com.co/wp-content/uploads/2023/10/MOUSE-GAMING-G-PRO-WIRELESS.jpg.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 545*/
        {
            nombre: "MOUSE LOGITECH",
            descripcion: "G PRO 2 LIGHTSPEED BLANCO.",
            precio: "$499",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF1rCK1Yhz38CX0iYVfXngsxV0fS8lmSocAQ&s",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 546*/
        {
            nombre: "MOUSE LOGITECH",
            descripcion: "G502 X LIGHTSPEED BLANCO.",
            precio: "$509",
            imagen: "https://megacomputer.com.co/wp-content/uploads/2023/10/MOUSE-GAMING-G502-X-PLUS-BLANCO.jpg.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 547*/
        {
            nombre: "MOUSE LOGITECH",
            descripcion: "G502 X LIGHTSPEED NEGRO.",
            precio: "$509",
            imagen: "https://megacomputer.com.co/wp-content/uploads/2021/03/LIGHTSPEED.png",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 548*/
        {
            nombre: "MOUSE LOGITECH",
            descripcion: "G502 X PLUS RGB BLANCO.",
            precio: "$539",
            imagen: "https://megacomputer.com.co/wp-content/uploads/2023/10/MOUSE-GAMING-G502-X-PLUS-BLANCO.jpg.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 549*/
        {
            nombre: "MOUSE REDRAGON",
            descripcion: "M656 GAINER NEGRO.",
            precio: "$75",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_751480-MLU78364192841_082024-O.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 550*/
        {
            nombre: "MOUSE REDRAGON",
            descripcion: "M601-RGB CENTROPHORUS2.",
            precio: "$76",
            imagen: "https://http2.mlstatic.com/D_Q_NP_705514-MLA46624313357_072021-O.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 551*/
        {
            nombre: "MOUSE REDRAGON",
            descripcion: "GRIFFIN M607 RGB.",
            precio: "$80",
            imagen: "https://redragon.es/content/uploads/2021/04/GRIFFIN-B.png",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 552*/
        {
            nombre: "MOUSE REDRAGON",
            descripcion: "KING 1K M724 NEGRO.",
            precio: "$83",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_811646-MCO83867919496_042025-O.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 553*/
        {
            nombre: "MOUSE REDRAGON",
            descripcion: "KING 1K M724W BLANCO.",
            precio: "$83",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAvhS1lsCxy-_J8JMjsViO7GiSIQqsm4hQ8Q&s",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 554*/
        {
            nombre: "MOUSE REDRAGON",
            descripcion: "GRIFFIN M607W BLANCO RGB.",
            precio: "$84",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOKUBBhlgsh9D2ofIuyWRqwcLsgLUoMfxLfg&s",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 555*/
        {
            nombre: "MOUSE REDRAGON",
            descripcion: "M808-KS STORM PRO RGB NEGRO.",
            precio: "$135",
            imagen: "https://http2.mlstatic.com/D_Q_NP_977813-MLM50350324300_062022-O.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 556*/
        {
            nombre: "MOUSE REDRAGON",
            descripcion: "M808-KS STORM PRO RGB BLANCO.",
            precio: "$139",
            imagen: "https://http2.mlstatic.com/D_Q_NP_682120-MLU74226071687_012024-O.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 557*/
        {
            nombre: "PAD MOUSE",
            descripcion: "CORSAIR MM300 CLOTH.",
            precio: "$75",
            imagen: "https://m.media-amazon.com/images/I/51xbVURBFQL.jpg",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 558*/
        {
            nombre: "PAD MOUSE",
            descripcion: "CORSAIR MM300 ANTI-FRAY EXTENDED.",
            precio: "$109",
            imagen: "https://m.media-amazon.com/images/I/51xbVURBFQL.jpg",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 559*/
        {
            nombre: "PAD MOUSE",
            descripcion: "CORSAIR MM350 PRO XL.",
            precio: "$150",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_629528-CBT48961301934_012022-O.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 560*/
        {
            nombre: "PAD MOUSE",
            descripcion: "CORSAIR MM700 RGB.",
            precio: "$240",
            imagen: "https://cdnx.jumpseller.com/tienda-gamer-medellin/image/59253096/615s_xM099L._AC_SL1500_.jpg?1737231868",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 561*/
        {
            nombre: "PAD MOUSE",
            descripcion: "CORSAIR MM700 3XL RGB.",
            precio: "$435",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYTKYyEJ-BKk7fbf4X-eg9PJT_DE32BViryw&s",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 562*/
        {
            nombre: "PAD MOUSE",
            descripcion: "LOGITECH G240.",
            precio: "$51",
            imagen: "https://www.ktronix.com/medias/097855177575-001-1400Wx1400H?context=bWFzdGVyfGltYWdlc3wzNDY2OHxpbWFnZS93ZWJwfGFHSTBMMmd3TkM4eE5EUTFNemcyT0RFMk56RTVPQzh3T1RjNE5UVXhOemMxTnpWZk1EQXhYekUwTURCWGVERTBNREJJfDAwMGUwZTg5ZTVjOGM2M2RkNDVkMTE1ZDgwZmEyYmU5MGRhYTIyOTk1MWQ0NTBhM2U5ZDIwZGM4YzVjMDhiNDQ",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 563*/
        {
            nombre: "PAD MOUSE",
            descripcion: "LOGITECH G440.",
            precio: "$63",
            imagen: "https://m.media-amazon.com/images/I/51W5x5aiEyL.jpg",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 564*/
        {
            nombre: "PAD MOUSE",
            descripcion: "REDRAGON P029 FLICK S.",
            precio: "$24",
            imagen: "https://media.falabella.com/falabellaCO/129738274_01/w=1500,h=1500,fit=pad",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 565*/
        {
            nombre: "PAD MOUSE",
            descripcion: "REDRAGON P030 FLICK M.",
            precio: "$29",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_658266-MLU70020662641_062023-O.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 566*/
        {
            nombre: "PAD MOUSE",
            descripcion: "REDRAGON P031 FLICK L.",
            precio: "$45",
            imagen: "https://carulla.vtexassets.com/arquivos/ids/5450219/pad-mouse-gamer-redragon-flick-l-400-x-4500-x-4-mm-p031.jpg?v=637648623555500000",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 567*/
        {
            nombre: "PAD MOUSE",
            descripcion: "XPG BATTLEGROUND L MERA NEGRO / NARANJA.",
            precio: "$49",
            imagen: "https://sedinternationalb2c.vtexassets.com/arquivos/ids/159041/XPG-BATTLEGROUND-L-BKOGCWW-1.jpg?v=638526830246130000",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 568*/
        {
            nombre: "SILLA CORSAIR",
            descripcion: "TC100 RELAXED GRIS/NEGRA TELA CUSTOM.",
            precio: "$929",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw4sDi223v-7NVfWiCmxUOV5PtMYubPdmKdA&s",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 569*/
        {
            nombre: "SILLA GAMER",
            descripcion: "CORSAIR TC100 RELAXED TELA GRIS.",
            precio: "$1209",
            imagen: "https://http2.mlstatic.com/D_Q_NP_929775-MLU74983380438_032024-O.webp",
            categoria: "ACCESORIOS"
        },
        /*PRODUCTO 570*/
        {
            nombre: "ACER ASPIRE 3 15 A315-24PT-R2N3",
            descripcion: "RYZ 5 7520U+16GB D5+NVMe 512GB+AMD GRAPHICS+15,6 FHD TOUCH GRIS  WINDOWS 11 PRO.",
            precio: "$2029",
            imagen: "https://megacomputer.com.co/wp-content/uploads/2025/06/2-2025-06-07T121737.710.webp",
            categoria: "PORTATILES"
        },
        /*PRODUCTO 571*/
        {
            nombre: "ASUS VIVOBOOK GO E1504FA-NJ1555",
            descripcion: "RYZ 5 7520U+16GB D5+NVMe 512GB+AMD GRAPHICS+15,6 FHD NEGRA WINDOWS 11 PRO.",
            precio: "$1839",
            imagen: "https://megacomputer.com.co/wp-content/uploads/2025/03/1-2025-03-22T091807.126.webp",
            categoria: "PORTATILES"
        },
        /*PRODUCTO 572*/
        {
            nombre: "ASUS VIVOBOOK M1502YA-NJ10",
            descripcion: "RYZ 7 7730U+16GB D4+NVMe 512GB+AMD GRAPHICS+15,6 FHD HUELLA GRIS WINDOWS 11 PRO.",
            precio: "$2359",
            imagen: "https://megacomputer.com.co/wp-content/uploads/2025/01/2-80.webp",
            categoria: "PORTATILES"
        },
        /*PRODUCTO 573*/
        {
            nombre: "ASUS VIVOBOOK X1605VA-MB1235",
            descripcion: "CORE i7 13620H+16GB+NVMe 512GB+INTEL GRAPHICS+16 WUXGA HUELLA NEGRO WIND 11 PRO.",
            precio: "$2789",
            imagen: "https://megacomputer.com.co/wp-content/uploads/2025/04/1-2025-04-15T143703.707.webp",
            categoria: "PORTATILES"
        },
        /*PRODUCTO 574*/
        {
            nombre: "ASUS TUF GAMING A15 FA506NF-HN004",
            descripcion: "RYZEN 5 7535HS+16GB D5+NVMe 512GB+4GB RTX-2050+15,6 FHD NEGRO WINDOWS 11 PRO.",
            precio: "$2949",
            imagen: "https://megacomputer.com.co/wp-content/uploads/2024/08/FA506NF-HN004.webp",
            categoria: "PORTATILES"
        },
        /*PRODUCTO 575*/
        {
            nombre: "ASUS VIVOBOOK X1605VA-MB575",
            descripcion: "CORE i9 13900H+16GB D4+NVMe 1TB+INTEL GRAPHICS+16 WUXGA NEGRO WINDOWS 11 PRO.",
            precio: "$3099",
            imagen: "https://technologystore2006.com/wp-content/uploads/2024/02/Screenshot-at-Feb-06-16-16-20.webp",
            categoria: "PORTATILES"
        },
        /*PRODUCTO 576*/
        {
            nombre: "ASUS TUF GAMING A15 FA506NC-HN006",
            descripcion: "RYZEN 5 7535HS+16GB D5+NVMe 512GB+4GB RTX-3050+15,6 FHD NEGRO WINDOWS 11 PRO.",
            precio: "$3159",
            imagen: "https://http2.mlstatic.com/D_NQ_NP_720395-MCO82201651829_012025-O.webp",
            categoria: "PORTATILES"
        },
        /*PRODUCTO 577*/
        {
            nombre: "ASUS ZENBOOK UM3406HA-QD166",
            descripcion: "RYZ 7 8840HS IA+16GB D5+NVMe 1TB+AMD GRAPHICS+14 OLED WUXGA NEGRO WINDOWS 11 PRO.",
            precio: "$4085",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4Wkc2IKmMz0TUPnuDvO_xTrD7NHkSaRlUmA&s",
            categoria: "PORTATILES"
        },
        /*PRODUCTO 578*/
        {
            nombre: "ASUS ZENBOOK UX3405MA-PP1006",
            descripcion: "CORE ULTRA 7 155H+16G D5+NVMe 512G+INTEL GRAPH+14 3K OLED 120Hz 1,2Kg W11 PRO.",
            precio: "$4109",
            imagen: "https://megacomputer.com.co/wp-content/uploads/2025/03/3-2025-03-22T101110.666.webp",
            categoria: "PORTATILES"
        },
        /*PRODUCTO 579*/
        {
            nombre: "ASUS TUF FA507NUR-LP005 A15",
            descripcion: "RYZ 7 7435HS+16GB D5+NVMe 512GB+6GB RTX-4050+15,6 FHD GRIS WINDOWS 11 PRO.",
            precio: "$4995",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAH7V71Fkl8q2AQpIIfCeUyLNSnXuu-G3HVQ&s",
            categoria: "PORTATILES"
        },
        /*PRODUCTO 580*/
        {
            nombre: "ASUS TUF FA507NUR-LP009 A15",
            descripcion: "RYZEN 7 7435HS+16GB D5+NVMe 1TB+6GB RTX-4050+15,6 FHD GRIS WINDOWS 11 PRO.",
            precio: "$4995",
            imagen: "https://www.gamerscolombia.com/img/products/ASUS-FA507NUR-R7-7435HS-16GB-512GB-4050-6GB/17430887612.webp",
            categoria: "PORTATILES"
        },
        /*PRODUCTO 581*/
        {
            nombre: "ASUS VIVOBOOK S S5507QA-MA001W",
            descripcion: "SNAPDRAGON X ELITE X1E78+32GB D5+NVMe 2TB+15,6 3K OLED 120Hz RGB 1.42Kg GRIS+W11PRO.",
            precio: "$5665",
            imagen: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ7DBzegKU_X6IppVjrevxcmUKIvPQGjZnKk0aLWydP4hPfMdawsoUMxfN8lKz8fsVTP1XnCjSYLy7LYgNR9r_djIqXdy4Zx9-QOxk2b6zGOJm0iN-C65ozkg",
            categoria: "PORTATILES"
        },
        /*PRODUCTO 582*/
        {
            nombre: "ASUS ZENBOOK UX3405CA-PZ332W",
            descripcion: "ULTRA 7 255H+16GB D5+NVMe 1TB+INTEL GRAPHICS+14 3K  TOUCH OLED+WIND 11 HOME AZUL  .",
            precio: "$5985",
            imagen: "https://lasus.com.co/228595-large_default/asus-zenbook-14-ux3405ca-pz332w-ultra-portatil-con-pantalla-oled-3k.jpg",
            categoria: "PORTATILES"
        },
        /*PRODUCTO 583*/
        {
            nombre: "ASUS TUF GAMING F15 FX507W-LP142",
            descripcion: "CORE i7 13620H+16GB D5+NVMe 1TB+8GB RTX-4060+15,6 FHD GRIS WINDOWS 11 PRO.",
            precio: "$6195",
            imagen: "https://dlcdnwebimgs.asus.com/files/media/f4299a34-42af-4a93-bb9d-597e0db1710a/v1/images/desktop/design/design_pd_mecha.png",
            categoria: "PORTATILES"
        },
        /*PRODUCTO 584*/
        {
            nombre: "ASUS TUF GAMING F15 FX507VV",
            descripcion: "CORE i7 13620H+16G D5+NVMe 1T+8GB RTX-4060+15,6 IPS FHD 144Hz WINDOWS 11 PRO.",
            precio: "$6299",
            imagen: "https://dlcdnwebimgs.asus.com/gain/f69cfad3-af20-403e-ad93-1ffb91604d82/w185",
            categoria: "PORTATILES"
        },
        /*PRODUCTO 585*/
        {
            nombre: "ASUS ZENBOOK UX8406MA-PZ046W",
            descripcion: "CORE ULTRA 7 155H+32G D5+NVMe1T+PANTALLA DUAL TACTIL 14 3K OLED GRIS W11PRO.",
            precio: "$7929",
            imagen: "https://megacomputer.com.co/wp-content/uploads/2025/02/4-13.webp",
            categoria: "PORTATILES"
        },
        /*PRODUCTO 586*/
        {
            nombre: "ASUS ROG GU605MI-QR049W",
            descripcion: "ULTRA 9 185H+32G D5+NVMe 1T+8GB RTX-4070+16 2,5K OLED WQXGA 240Hz+FUNDA+MSE+W11H GRIS.",
            precio: "$11490",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9DrQanC2y1s8xlzEBJj9ZB0BzP0deG9S1-g&s",
            categoria: "PORTATILES"
        },
        /*PRODUCTO 587*/
        {
            nombre: "DELL INSPIRON 15 JK4PG 3520",
            descripcion: "CORE i3 1215U+16GB D4+NVMe 512GB+INTEL GRAPHICS+15,6 FHD GRIS WINDOWS 11 PRO.",
            precio: "$1549",
            imagen: "https://tauretcomputadores.com/images/products/Product_202404271015321193686397.PORTATIL-7.webp",
            categoria: "PORTATILES"
        },
        /*PRODUCTO 588*/
        {
            nombre: "GIGABYTE AORUS 16X 2024",
            descripcion: "CORE i7 14650HX+32GB D5+NVMe 1TB+8GB RTX-4070+16 2K QHD 165Hz WIN 11 HOME GRIS .",
            precio: "$8569",
            imagen: "https://futuratecnologia.com.co/wp-content/uploads/2025/05/52300.png",
            categoria: "PORTATILES"
        },
        /*PRODUCTO 589*/
        {
            nombre: "HP 245 G10/RYZEN 3 7320U",
            descripcion: "NVMe 512GB+16GB D4+AMD GRAPHICS+14 FULL HD NEGRO WINDOWS 11 PRO.",
            precio: "$1465",
            imagen: "https://technologystore2006.com/wp-content/uploads/2024/12/7H298-IMG-2.jpg",
            categoria: "PORTATILES"
        },
        /*PRODUCTO 590*/
        {
            nombre: "LENOVO V14 G4 AMN",
            descripcion: "RYZ 5 7520U+16GB D5+NVMe 512GB+AMD GRAPCHIS+RJ45+14 FHD GRIS  WINDOWS 11 PRO.",
            precio: "$1755",
            imagen: "https://technologystore2006.com/wp-content/uploads/2024/04/Captura-de-pantalla-2024-08-05-162940-1.webp",
            categoria: "PORTATILES"
        },
        /*PRODUCTO 591*/
        {
            nombre: "LENOVO IDEAPAD SLIM 3 15AMN8",
            descripcion: "RYZ 5 7520U+16GB D5+NVMe 512GB+AMD GRAPHICS+15,6 FHD AZUL WINDOWS 11 PRO .",
            precio: "$1795",
            imagen: "https://panamericana.vtexassets.com/arquivos/ids/543834-800-auto?v=638544071671630000&width=800&height=auto&aspect=true",
            categoria: "PORTATILES"
        },
        /*PRODUCTO 592*/
        {
            nombre: "LENOVO IDEAPAD SLIM 3 15IAH8",
            descripcion: "CORE i5 12450H+16G D5+NVMe 512G+INTEL GRAPHICS+15,6 FHD AZUL  WINDOWS 11 PRO .",
            precio: "$1990",
            imagen: "https://technologystore2006.com/wp-content/uploads/2024/07/Captura-de-pantalla-2024-08-06-161052.webp",
            categoria: "PORTATILES"
        },
        /*PRODUCTO 593*/
        {
            nombre: "LENOVO IDEAPAD SLIM 3 15ABR8",
            descripcion: "RYZ 7 5825U+16GB D4+NVMe 512GB+AMD GRAPHICS+15,6 FHD AZUL.",
            precio: "$1989",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaINmN-HwsQxmFowusgq8v12Cjxm8ixowapA&s",
            categoria: "PORTATILES"
        },
        /*PRODUCTO 594*/
        {
            nombre: "LENOVO IDEAPAD SLIM 3 15AHP10",
            descripcion: "RYZ 5 8640HS IA+16G D5+NVMe 512GB+AMD GRAPHICS+15,3 WUXGA AZUL WINDOWS 11 PRO.",
            precio: "$2095",
            imagen: "https://www.alkosto.com/medias/196803810387-001-750Wx750H?context=bWFzdGVyfGltYWdlc3wyMTg3NnxpbWFnZS93ZWJwfGFHUmxMMmd3Tnk4eE5EWTJNVGcyT1RrNU5EQXhOQzh4T1RZNE1ETTRNVEF6T0RkZk1EQXhYemMxTUZkNE56VXdTQXxhY2JiY2UwN2ZhYTJiNmZhNzM1ODkzMTQxYWViMTE1MDdhZWEyYTZhMzFhMmQ5ZmY2NDEyOGE2ZmU5ZGIzNGFl",
            categoria: "PORTATILES"
        },
        /*PRODUCTO 595*/
        {
            nombre: "LENOVO  IDEAPAD SLIM 3 15IRH10",
            descripcion: "CORE i5 13420H+16G D5+NVMe 512GB+INTEL GRAPHICS+15,3 WUXGA GRIS WINDOWS 11 PRO.",
            precio: "$2095",
            imagen: "https://computadoresenbogota.com/market/wp-content/uploads/2025/05/shopping-3-58.jpg",
            categoria: "PORTATILES"
        },
        /*PRODUCTO 596*/
        {
            nombre: "LENOVO IDEAPAD SLIM 3 15IAH8",
            descripcion: "CORE i5 12450H+16G D5+NVMe 512G+INTEL GRAPCHIS+15,6 FHD TOUCH+HUELLA+W11H GRIS.",
            precio: "$2559",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGOocjU88GYiuvznum9mEZbVL5nsdFZUbvUw&s",
            categoria: "PORTATILES"
        },
        /*PRODUCTO 597*/
        {
            nombre: "LENOVO IDEAPAD SLIM 3 15IRH8",
            descripcion: "CORE i7 13620H+16G D5+NVMe 512G+INTEL GRAPCHIS+15,6 FHD GRIS  WINDOWS 11 PRO.",
            precio: "$2629",
            imagen: "https://technologystore2006.com/wp-content/uploads/2024/05/Captura-de-pantalla-2024-08-06-193020.webp",
            categoria: "PORTATILES"
        },
        /*PRODUCTO 598*/
        {
            nombre: "LENOVO IDEAPAD FLEX 5 14ABR8",
            descripcion: "RYZ 5 7530U+16G D4+NVMe 512G+AMD GRAPHICS+14 WUXGA TOUCH+LAPIZ WIND 11 HOME AZUL.",
            precio: "$2759",
            imagen: "https://www.pcware.com.co/wp-content/uploads/2024/06/ABR8_69.jpg",
            categoria: "PORTATILES"
        },
        /*PRODUCTO 599*/
        {
            nombre: "MSI THIN 15 B12UC -3027XCO",
            descripcion: "CORE i7 12650H+16GB D4+NVMe 512GB+4GB RTX-3050+15,6 FHD  144Hz+MORRAL+ W11P 2 AÑOS DE GTIA 	.",
            precio: "$3519",
            imagen: "https://speedlogic.com.co/wp-content/uploads/2024/10/52263.png",
            categoria: "PORTATILES"
        },
        /*PRODUCTO 600*/
        {
            nombre: "MSI THIN 15 B13VE -2831XCO",
            descripcion: "CORE i5 13420H+16GB D4+NVMe 512GB+6GB RTX-4050+15,6 FHD 144Hz+MORRAL+W11P  2 AÑOS GTIA.",
            precio: "$4039",
            imagen: "https://speedlogic.com.co/wp-content/uploads/2024/10/52262.png",
            categoria: "PORTATILES"
        },
        /*PRODUCTO 601*/
        {
            nombre: "MSI THIN 15 B12VE -2600XCO",
            descripcion: "CORE i7 12650H+16GB D4+NVMe 512GB+6GB RTX-4050+15,6 FHD 144Hz + MORRAL  W11P 2 AÑOS GTIA.",
            precio: "$5039",
            imagen: "https://images-na.ssl-images-amazon.com/images/I/71Fr-EEsp6L._AC_UL210_SR210,210_.jpg",
            categoria: "PORTATILES"
        },
        /*PRODUCTO 602*/
        {
            nombre: "MSI CYBORG 15 A12VF-1403XCO",
            descripcion: "CORE i7 12650H+16G D5+NVMe 512GB+8GB RTX-4060+15,3 FHD 144Hz+MORRAL+W11P 2 AÑOS GTIA.",
            precio: "$5549",
            imagen: "https://megacomputer.com.co/wp-content/uploads/2023/04/PORTATIL-MSI-CYBORG-15-A12VF-1.jpg.webp",
            categoria: "PORTATILES"
        },
        /*PRODUCTO 603*/
        {
            nombre: "MSI KATANA 15 B13VFK-2255XCO",
            descripcion: "CORE i7 13700H+16G D5+NVMe 512GB+8GB RTX-4060+15,6 FHD RGB+MORRAL W11P 2 AÑOS GTIA.",
            precio: "$6245",
            imagen: "https://storage-asset.msi.com/global/picture/image/feature/nb/GF/Katana-15-A13V/cpu15-img.png",
            categoria: "PORTATILES"
        },
        /*PRODUCTO 604*/
        {
            nombre: "MSI CYBORG 15 AI A1VFK-209XCO",
            descripcion: "ULTRA 7 155H+16G D5+NVMe 512G+8G RTX-4060+15,6 FHD 144Hz RGB+MORRAL W11P 2 AÑOS GTIA .",
            precio: "$6455",
            imagen: "https://storage-asset.msi.com/global/picture/image/feature/nb/2023_RPLS/Cyborg-15-AI-A1V/gpu-Cyborg15.png",
            categoria: "PORTATILES"
        },
        /*PRODUCTO 605*/
        {
            nombre: "MSI KATANA A15 AI B8VF-617XCO",
            descripcion: "RYZ 7 8845HS+16GB D5+NVMe 512GB+8GB RTX-4060+15,6 FHD  144Hz+MORRAL W11P 2 AÑOS DE GTIA 	.",
            precio: "$6559",
            imagen: "https://futuratecnologia.com.co/wp-content/uploads/2025/05/52311.1.png",
            categoria: "PORTATILES"
        },
        /*PRODUCTO 606*/
        {
            nombre: "MSI VECTOR 16 HX AI A2XWHG-237CO",
            descripcion: "ULTRA 7 255HX+16G D5+NVMe 1TB+12GB RTX-5070Ti+16 FHD RGB+MORRAL+W11H 2 AÑOS.",
            precio: "$13849",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1tA2qp-lrpw7eeNMU8sBYltKTO8ne2GWb_w&s",
            categoria: "PORTATILES"
        },
        /*PRODUCTO 607*/
        {
            nombre: "MSI VECTOR 16 HX AI A2XWIG-236CO",
            descripcion: "ULTRA 9 275HX+32G D5+NVMe 2TB+16GB RTX-5080+16 2K QHD+RGB+MORRAL+W11H 2 AÑOS.",
            precio: "$20329",
            imagen: "https://www.professionalwireless.com.co/wp-content/uploads/2025/05/Vector-16-HX-AI-A2XWIG-400US_16GB_AF_AA.jpg",
            categoria: "PORTATILES"
        },












    
    

    


       

    ];
    
    

    // Función para renderizar los productos
    function renderProductos(filteredProductos) {
        productosContainer.innerHTML = ""; // Limpia el contenedor antes de agregar productos
        filteredProductos.forEach((producto) => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");

            productCard.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <div class="product-details">
                    <h2>${producto.nombre}</h2>
                    <p class="price">${producto.precio}</p>
                    <p class="description">${producto.descripcion}</p>
                    <button class="view-product">Ver Producto</button>
                    <button class="add-to-cart">Añadir al carrito</button>
                </div>
            `;
            

            productCard.querySelector(".view-product").addEventListener("click", () => {
                viewProduct(producto.nombre, producto.descripcion, producto.precio, producto.imagen);
            });

            productCard.querySelector(".add-to-cart").addEventListener("click", () => {
                addToCart(producto);
            });

            productosContainer.appendChild(productCard);
            
        });
    }

    // Renderiza todos los productos inicialmente
    renderProductos(productos);

    // Filtra los productos según el texto ingresado en la barra de búsqueda
    searchBar.addEventListener("input", (e) => {
        
        const searchText = e.target.value.toLowerCase(); // Convierte el texto a minúsculas
        const filteredProductos = productos.filter((producto) =>
            producto.nombre.toLowerCase().includes(searchText) || // Busca en el nombre
            producto.descripcion.toLowerCase().includes(searchText) // Busca en la descripción
        );
        renderProductos(filteredProductos); // Renderiza los productos filtrados
    });

    // Filtra los productos según la categoría seleccionada
    categoriaBanners.forEach((banner) => {
        banner.addEventListener("click", () => {
            const categoria = banner.querySelector("h3").textContent.toLowerCase(); // Obtiene el nombre de la categoría
            const filteredProductos = productos.filter((producto) =>
                producto.categoria.toLowerCase() === categoria
            );
            renderProductos(filteredProductos); // Renderiza los productos filtrados por categoría
        });
    });

    document.querySelectorAll(".categoria-link").forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Evita que recargue la página
            const categoria = link.textContent.trim().toLowerCase();
            const productosFiltrados = productos.filter((producto) =>
                producto.categoria.toLowerCase() === categoria
            );
            renderProductos(productosFiltrados);
        });
    });

});

//funcion de reseñas
document.addEventListener("DOMContentLoaded", () => {
  const stars = document.querySelectorAll(".star");
  const reviewInput = document.getElementById("review-input");
  const reviewsList = document.getElementById("reviews-list");
  let selectedRating = 0;

  // Recuperar usuario activo
  const usuario = JSON.parse(localStorage.getItem("usuarioActivo"));

  stars.forEach((star) => {
    star.addEventListener("click", () => {
      selectedRating = parseInt(star.getAttribute("data-value"));
      stars.forEach((s) => {
        const starValue = parseInt(s.getAttribute("data-value"));
        s.classList.toggle("selected", starValue <= selectedRating);
      });
    });
  });

  document.getElementById("submit-review").addEventListener("click", () => {
    const reviewText = reviewInput.value.trim();

    if (!usuario) {
      alert("Debes iniciar sesión para dejar una reseña.");
      return;
    }
    if (selectedRating === 0) {
      alert("Por favor, selecciona una calificación de estrellas.");
      return;
    }
    if (reviewText === "") {
      alert("Por favor, escribe una reseña antes de enviarla.");
      return;
    }

    const reviewItem = document.createElement("div");
    reviewItem.classList.add("review-item");
    reviewItem.innerHTML = `
      <div class="review-header">
        <img src="${usuario.avatar || "https://via.placeholder.com/30"}" alt="Avatar" class="review-avatar" />
        <span class="review-user">${usuario.fullname || "Usuario"}</span>
      </div>
      <p><strong>Calificación:</strong> ${"★".repeat(selectedRating)} (${selectedRating}/5)</p>
      <p><strong>Reseña:</strong> ${reviewText}</p>
    `;

    reviewsList.appendChild(reviewItem);

    // Limpiar todo
    selectedRating = 0;
    reviewInput.value = "";
    stars.forEach((star) => star.classList.remove("selected"));
  });
});




function updateCartCount() {
    // Obtén el carrito actual desde localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Calcula la cantidad total de elementos en el carrito
    const totalItems = cart.reduce((count, item) => count + item.quantity, 0);

    // Actualiza el contador en el botón del carrito
    const carritoCount = document.getElementById("carrito-count");
    carritoCount.textContent = totalItems;
}

function addToCart(producto) {
    // Obtén el carrito actual desde localStorage
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Busca si el producto ya está en el carrito
    const existingProduct = cart.find(item => item.nombre === producto.nombre);

    if (existingProduct) {
        // Si el producto ya está en el carrito, incrementa la cantidad
        existingProduct.quantity += 1;
        existingProduct.totalPrice = `$${parseFloat(existingProduct.precio.slice(1)) * existingProduct.quantity}`;
    } else {
        // Si el producto no está en el carrito, añádelo con cantidad 1
        producto.quantity = 1;
        producto.totalPrice = producto.precio;
        cart.push(producto);
    }

    // Guarda el carrito actualizado en localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Actualiza el contador del carrito
    updateCartCount();
}

document.addEventListener("DOMContentLoaded", () => {
    const addToCartButton = document.getElementById("add-to-cart");

    addToCartButton.addEventListener("click", () => {
        // Obtén los detalles del producto desde la página
        const producto = {
            nombre: document.getElementById("product-title").textContent,
            descripcion: document.getElementById("product-description").textContent,
            precio: document.getElementById("product-price").textContent,
            imagen: document.getElementById("product-image").src
        };

        // Llama a la función `addToCart` para añadir el producto al carrito
        addToCart(producto);
    });
});










