import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import { initialProducts } from './data/mockData';
import { filterProductsBySearch, filterProductsByCategory, generateUniqueId } from './utils/helpers';
import Footer from "./components/Footer";

const App = () => {
  const [products, setProducts] = useState(initialProducts);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  // Filtrar produtos
  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filtrar por termo de busca
    filtered = filterProductsBySearch(filtered, searchTerm);

    // Filtrar por categoria
    filtered = filterProductsByCategory(filtered, selectedCategory);

    return filtered;
  }, [products, searchTerm, selectedCategory]);

  // Adicionar produto
  const handleAddProduct = () => {
    setEditingProduct(null);
    setShowForm(true);
  };

  // Editar produto
  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  // Salvar produto
  const handleSaveProduct = (productData) => {
    if (editingProduct) {
      // Atualizar produto existente
      setProducts(prev => prev.map(p =>
          p.id === editingProduct.id ? { ...productData, id: editingProduct.id } : p
      ));
    } else {
      // Adicionar novo produto
      setProducts(prev => [...prev, { ...productData, id: generateUniqueId() }]);
    }
    setShowForm(false);
    setEditingProduct(null);
  };

  // Excluir produto
  const handleDeleteProduct = (id) => {
    if (window.confirm('Tem certeza que deseja excluir este produto?')) {
      setProducts(prev => prev.filter(p => p.id !== id));
    }
  };

  // Cancelar formulário
  const handleCancelForm = () => {
    setShowForm(false);
    setEditingProduct(null);
  };

  return (
      <div className="min-h-screen bg-gray-50">
        <Header onAddProduct={handleAddProduct} />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <SearchBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
          />

          <ProductList
              products={filteredProducts}
              totalProducts={products.length}
              onEdit={handleEditProduct}
              onDelete={handleDeleteProduct}
          />
        </main>

        {showForm && (
            <ProductForm
                product={editingProduct}
                onSave={handleSaveProduct}
                onCancel={handleCancelForm}
            />
        )}
        <Footer />
      </div>
  );
};

export default App;