export default {
  namespaced: true,
  state() {
    return {
      products: [
        {
          id: "l1",
          name: "ASUS VivoBook 15 Core i3 10th Gen",
          price: 800,
          description:
            "15.6 inch HD LED Backlit Anti-glare Display (16:9 Aspect Ratio, 45% NTSC Color Gamut, 200 nits Brightness, 83% Screen-to-body Ratio)",
          imgUrl:
            "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGxhcHRvcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: "l2",
          name: "HP 15s Core i5 11th Gen",
          price: 900,
          description:
            "Stylish & Portable Thin and Light Laptop 15.6 inch Full HD LED Backlit Anti-glare IPS Micro-edge Display (250 nits Brightness, 45% NTSC Color Gamut, 141 PPI)",
          imgUrl:
            "https://images.unsplash.com/photo-1593642702909-dec73df255d7?ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: "l3",
          name: "Lenovo IdeaPad 3 Core i3 10th Gen",
          price: 600,
          description:
            "Light Laptop without Optical Disk Drive. 15.6 inch Full HD TN 220nits Anti-glare. Stylish & Portable Thin and Light Laptop",
          imgUrl:
            "https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: "m1",
          name: "APPLE iPhone 12 (Black, 128 GB)",
          price: 900,
          description:
            "12MP TrueDepth Front Camera with Night Mode, 4K Dolby Vision HDR Recording, All Screen OLED Display, Ceramic Shield",
          imgUrl:
            "https://images.unsplash.com/photo-1567581935884-3349723552ca?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW9iaWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
        },
      ],
    };
  },
  getters: {
    products(state) {
      return state.products;
    },
  },
};
