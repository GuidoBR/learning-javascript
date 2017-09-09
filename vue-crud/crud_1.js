var products = [
    {id: 4, name: 'Scutum', numero_tombo: "#234523", numero_registro: "132130", objeto: "Escudo", outros_numeros: "c", titulo: "Scutum Romanus", descricao: "Escudo retangular em formato arqueado. Frente em fundo vermelho com decoração de linhas e formatos de aves no topo. Ao centro três retângulos sobrepostos ladeados por margem ornamentada com folhas de louro. Verso, haste de madeira fixada por pequenos cilindros de metal em sua ponta.", dimensao: "105,5 x 41 x 30 cm", material: "Madeira, Bronze, Tinta", procedencia: "Dura-Europos - Síria", aquisicao:       "a", proprietario: "a", estado_conservacao: "a", data_aquisicao: "12/08/1962", objetos_associados: "a", exposicoes: "Nome da Exposição 1, Nome da exposição 2", publicacoes: "AUTOR. Título: subtítulo. Edição. Cidade onde foi publicado: Editora, ano de publicação. Total de Páginas.", pesquisa: "Nome de Pesquisas Relacionadas", observacao: "Notas de Observação",  autorizacao_uso: "Public Domain", restauro: "Dossiês de Restauro/Breve Resumo das atividades realizadas", periodo: "Século III A.C.", referencias: "AUTOR. Título: subtítulo. Edição. Cidade onde foi publicado: Editora, ano de publicação. Total de Páginas.", registrado_por: "Nome do Funcionário", data_registro: "XX/XX/XX"}

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
    return {product: {name: '', numero_tombo: "", numero_registro: "", objeto: "", outros_numeros: "", titulo: "", descricao: "", dimensao: "", material: "", procedencia: "", aquisicao: "", proprietario: "", estado_conservacao: "", data_aquisicao: "", objetos_associados: "", exposicoes: "", publicacoes: "", pesquisa: "", observacao: "",  autorizacao_uso: "", restauro: "", periodo: "", referencias: "", registrado_por: "", data_registro: ""}}
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
