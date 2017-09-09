var products = [
  {id: 1, numero_tombo: '#1', numero_registro: '101', objeto: 'Cordão de ouro da Roma Antiga.'},
  {id: 2, numero_tombo: '#2', numero_registro: '201', objeto: 'Espada de um gladiador.'},
  {id: 3, numero_tombo: '#3', numero_registro: '301', objeto: 'Arco Mongol.'},
  {id: 4, name: 'teste', numero_tombo: "#4", numero_registro: "b", objeto: "a", outros_numeros: "c", titulo: "e", descricao_intriseca: "f", dimensao: "g", material: "h", procedencia: "a", aquisicao: "a", proprietario: "a", estado_conservacao: "a", data_aquisicao: "a", objetos_associados: "a", exposicoes: "a", publicacoes: "a", pesquisa: "a", observacao: "a",  autorizacao_uso: "a", restauro: "a", descricao_extrinseca: "a", periodo: "a", referencias: "a", registrado_por: "a", data_registro: "a"}

];

function findProduct (productId) {
  return products[findProductKey(productId)];
};

function findProductKey (productId) {
  for (var key = 0; key < products.length; key++) {
    if (products[key].id == productId) {
      return key;
    }
  }
};

var List = Vue.extend({
  template: '#product-list',
  data: function () {
    return {products: products, searchKey: ''};
  },
  computed: {
    filteredProducts: function () {
      return this.products.filter(function (product) {
        return this.searchKey=='' || product.numero_tombo.indexOf(this.searchKey) !== -1;
      },this);
    }
  }
});

var Product = Vue.extend({
  template: '#product',
  data: function () {
    return {product: findProduct(this.$route.params.product_id)};
  }
});

var ProductEdit = Vue.extend({
  template: '#product-edit',
  data: function () {
    return {product: findProduct(this.$route.params.product_id)};
  },
  methods: {
    updateProduct: function () {
      var product = this.product;
      products[findProductKey(product.id)] = {
        id: product.id,
        numero_tombo: product.numero_tombo,
        objeto: product.objeto,
        price: product.price
      };
      router.push('/');
    }
  }
});

var ProductDelete = Vue.extend({
  template: '#product-delete',
  data: function () {
    return {product: findProduct(this.$route.params.product_id)};
  },
  methods: {
    deleteProduct: function () {
      products.splice(findProductKey(this.$route.params.product_id), 1);
      router.push('/');
    }
  }
});

var AddProduct = Vue.extend({
  template: '#add-product',
  data: function () {
    return {product: {name: '', numero_tombo: "", numero_registro: "", objeto: "", outros_numeros: "", titulo: "", descricao_intriseca: "", dimensao: "", material: "", procedencia: "", aquisicao: "", proprietario: "", estado_conservacao: "", data_aquisicao: "", objetos_associados: "", exposicoes: "", publicacoes: "", pesquisa: "", observacao: "",  autorizacao_uso: "", restauro: "", descricao_extrinseca: "", periodo: "", referencias: "", registrado_por: "", data_registro: ""}}
  },
  methods: {
    createProduct: function() {
      var product = this.product;
      products.push({
        id: Math.random().toString().split('.')[1],
        numero_tombo: product.numero_tombo,
        objeto: product.objeto,
        numero_registro: product.numero_registro,
        outros_numeros: product.outros_numeros,
        titulo: product.titulo,
          descricao_intriseca: product.descricao_intriseca,
          dimensao: product.dimensao,
          material: product.material,
          procedencia: product.procedencia,
          aquisicao: product.aquisicao,
          proprietario: product.proprietario,
          estado_conservacao: product.estado_conservacao,
          data_aquisicao: product.data_aquisicao,
          objetos_associados: product.objetos_associados,
          exposicoes: product.exposicoes,
          publicacoes: product.publicacoes,
          pesquisa: product.pesquisa,
          observacao: product.observacao,
          autorizacao_uso: product.autorizacao_uso,
          restauro: product.restauro,
          periodo: product.periodo,
          referencias: product.referencias,
          registrado_por: product.registrado_por,
          data_registro: product.data_registro
      });
      router.push('/');
    }
  }
});

var router = new VueRouter({routes:[
  { path: '/', component: List},
  { path: '/product/:product_id', component: Product, name: 'product'},
  { path: '/add-product', component: AddProduct},
  { path: '/product/:product_id/edit', component: ProductEdit, name: 'product-edit'},
  { path: '/product/:product_id/delete', component: ProductDelete, name: 'product-delete'}
]});
app = new Vue({
  router:router
}).$mount('#app')
