import React from 'react';
import { Edit, Trash2, Package, AlertTriangle } from 'lucide-react';

// Helper functions (normalmente importados de utils/helpers.js)
const formatPrice = (price) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(price);
};

const isLowStock = (quantity, threshold = 20) => {
    return quantity < threshold;
};

const ProductCard = ({ product, onEdit, onDelete }) => {
    const lowStock = isLowStock(product.quantity);

    return (
        <div className={`bg-white border rounded-xl p-4 hover:shadow-md transition-all duration-200 group ${
            lowStock ? 'border-red-200 bg-red-50/30' : 'border-gray-200'
        }`}>
            {/* Header do card */}
            <div className="flex items-start justify-between mb-3">
                <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 truncate text-sm">
                        {product.name}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 font-mono">
                        {product.code}
                    </p>
                </div>
                <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                        onClick={() => onEdit(product)}
                        className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Editar produto"
                    >
                        <Edit className="h-3.5 w-3.5" />
                    </button>
                    <button
                        onClick={() => onDelete(product.id)}
                        className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Excluir produto"
                    >
                        <Trash2 className="h-3.5 w-3.5" />
                    </button>
                </div>
            </div>

            {/* Preço - usando helper formatPrice */}
            <div className="mb-3">
                <div className="text-lg font-semibold text-gray-900">
                    {formatPrice(product.price)}
                </div>
            </div>

            {/* Descrição */}
            <div className="mb-3">
                <p className="text-xs text-gray-600 line-clamp-2">
                    {product.description}
                </p>
            </div>

            {/* Informações secundárias */}
            <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                    <span className="text-gray-500">Estoque</span>
                    <div className="flex items-center space-x-1">
                        {lowStock && (
                            <AlertTriangle className="h-3 w-3 text-red-500" />
                        )}
                        <span className={`font-medium ${
                            lowStock ? 'text-red-600' : 'text-gray-900'
                        }`}>
                            {product.quantity} un
                        </span>
                    </div>
                </div>

                <div className="pt-2 border-t border-gray-100">
                    <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                        {product.category}
                    </span>
                </div>
            </div>

            {/* Indicador de estoque baixo - usando helper isLowStock */}
            {lowStock && (
                <div className="mt-3 flex items-center space-x-2 p-2 bg-red-50 border border-red-200 rounded-lg">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-red-700 font-medium">
                        Estoque abaixo de 20 unidades
                    </span>
                </div>
            )}

            {/* Valor total do produto no estoque */}
            <div className="mt-2 pt-2 border-t border-gray-100">
                <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-500">Valor total</span>
                    <span className="font-medium text-gray-700">
                        {formatPrice(product.price * product.quantity)}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;