app.component("ProductDetails", {
  props: {
    details: {},
    template:
      /*html*/
      `<ul>
        <li v-for="detail in details">{{ detail }}</li>
      </ul>`,
  },
});
