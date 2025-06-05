import React from 'react';
import { Plus, Store } from 'lucide-react';

const Header = ({ onAddProduct }) => (
    <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center">
                        <Store className="h-4 w-4 text-white" />
                    </div>
                    <div>
                        <h1 className="text-lg font-semibold text-gray-900">Comercial Pereira</h1>
                        <p className="text-xs text-gray-500">Gestão de Produtos</p>
                    </div>
                </div>
                <button
                    onClick={onAddProduct}
                    className="inline-flex items-center px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-800 transition-colors"
                >
                    <Plus className="h-4 w-4 mr-2" />
                    Novo Produto
                </button>
            </div>
        </div>
    </header>
);

export default Header;