export default {
  namespaced: true,
  state() {
    return {
      items: [],
      total: 0,
      qty: 0,
    };
  },
  getters: {
    cartTotal(state) {
      return state.total;
    },
    cartQty(state) {
      return state.qty;
    },
    cartItems(state) {
      return state.items;
    },
  },
  actions: {
    addToCart(context, payload) {
      const productDataID = payload.id;
      const products = context.rootGetters["prods/products"];
      const product = products.find((p) => p.id === productDataID);

      context.commit("addProductToCart", product);
    },
    removeFromCart(context, payload) {
      context.commit("removeProductFromCart", payload);
    },
  },
  mutations: {
    addProductToCart(state, payload) {
      const productData = payload;

      const productInCartIndex = state.items.findIndex(
        (ci) => ci.productId === productData.id
      );

      if (productInCartIndex >= 0) {
        state.items[productInCartIndex].qty++;
      } else {
        const newItem = {
          productId: productData.id,
          title: productData.name,
          image: productData.imgUrl,
          price: productData.price,
          qty: 1,
        };
        state.items.push(newItem);
      }
      state.qty++;
      state.total += productData.price;
    },
    removeProductFromCart(state, payload) {
      const prodId = payload.prodId;
      const productInCartIndex = state.items.findIndex(
        (cartItem) => cartItem.productId === prodId
      );
      const prodData = state.items[productInCartIndex];
      state.items.splice(productInCartIndex, 1);
      state.qty -= prodData.qty;
      state.total -= prodData.price * prodData.qty;
    },
  },
};
