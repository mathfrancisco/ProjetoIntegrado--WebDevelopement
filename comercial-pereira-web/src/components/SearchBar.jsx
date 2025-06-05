import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ searchTerm, onSearchChange, selectedCategory, onCategoryChange }) => {
    const categories = [
        'Todas',
        'Equipamentos Domésticos',
        'Embalagens',
        'Cosméticos',
        'Cama, Mesa e Banho',
        'Papelaria',
        'Ferragens',
        'Material Elétrico',
        'Armarinho'
    ];

    return (
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
            <div className="space-y-4">
                {/* Barra de pesquisa */}
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <input
                        type="text"
                        placeholder="Buscar produtos..."
                        value={searchTerm}
                        onChange={(e) => onSearchChange(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors placeholder-gray-500"
                    />
                </div>

                {/* Filtros de categoria */}
                <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => onCategoryChange(category)}
                            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                                selectedCategory === category
                                    ? 'bg-gray-900 text-white'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchBar;