import React from 'react';
import { Package, Plus, Layers } from 'lucide-react';
import ProductCard from './ProductCard';

const ProductList = ({ products = [], totalProducts = 0, onEdit = () => {}, onDelete = () => {} }) => {
    // Mock data for demonstration
    const mockProducts = products.length > 0 ? products : [
        { id: 1, name: 'Mouse Wireless Logitech', category: 'Equipamentos', price: 149.99, quantity: 25, code: 'EQ001' },
        { id: 2, name: 'Shampoo Pantene 400ml', category: 'Cosméticos', price: 18.90, quantity: 50, code: 'COS002' },
        { id: 3, name: 'Caderno Universitário 10 Matérias', category: 'Papelaria', price: 12.50, quantity: 100, code: 'PAP003' },
        { id: 4, name: 'Parafuso Phillips M6', category: 'Ferragens', price: 0.85, quantity: 500, code: 'FER004' },
        { id: 5, name: 'Saco Plástico 30x40cm', category: 'Embalagens', price: 0.15, quantity: 1000, code: 'EMB005' },
        { id: 6, name: 'Linha de Costura Preta', category: 'Armarinho', price: 3.20, quantity: 80, code: 'ARM006' },
    ];

    const displayProducts = mockProducts;
    const displayTotal = totalProducts || mockProducts.length;

    if (displayProducts.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center py-24 px-6">
                <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                    <Package className="h-10 w-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Nenhum produto encontrado
                </h3>
                <p className="text-gray-500 text-center mb-8 max-w-md">
                    {totalProducts === 0
                        ? 'Comece adicionando seu primeiro produto ao sistema'
                        : 'Tente ajustar os filtros de busca'
                    }
                </p>
                <button className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                    <Plus className="h-4 w-4 mr-2" />
                    Adicionar Produto
                </button>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header com estatísticas */}
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                        <Layers className="h-4 w-4 text-gray-600" />
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold text-gray-900">
                            {displayProducts.length} produtos
                        </h2>
                        <p className="text-sm text-gray-500">
                            {displayTotal} total no sistema
                        </p>
                    </div>
                </div>

                <div className="flex items-center space-x-6 text-sm">
                    <div className="text-center">
                        <div className="font-semibold text-gray-900">R$ 47.2k</div>
                        <div className="text-gray-500">Valor total</div>
                    </div>
                    <div className="w-px h-8 bg-gray-200"></div>
                    <div className="text-center">
                        <div className="font-semibold text-gray-900">8</div>
                        <div className="text-gray-500">Categorias</div>
                    </div>
                </div>
            </div>

            {/* Grid de produtos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {displayProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProductList;