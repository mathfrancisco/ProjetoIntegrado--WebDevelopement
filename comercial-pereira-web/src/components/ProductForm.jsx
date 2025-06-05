import React, { useState } from 'react';
import { X, Save, AlertCircle } from 'lucide-react';

const ProductForm = ({ product, onSave, onCancel }) => {
    const categories = [
        'Equipamentos Domésticos',
        'Embalagens',
        'Cosméticos',
        'Cama, Mesa e Banho',
        'Papelaria',
        'Ferragens',
        'Material Elétrico',
        'Armarinho'
    ];

    const [formData, setFormData] = useState(
        product || {
            name: '',
            description: '',
            price: '',
            category: 'Equipamentos Domésticos',
            quantity: '',
            code: ''
        }
    );

    const [errors, setErrors] = useState({});

    const validateProduct = (data) => {
        const errors = {};

        if (!data.name?.trim()) errors.name = 'Nome é obrigatório';
        if (!data.description?.trim()) errors.description = 'Descrição é obrigatória';
        if (!data.price || isNaN(data.price) || parseFloat(data.price) <= 0) {
            errors.price = 'Preço deve ser um número válido maior que zero';
        }
        if (!data.quantity || isNaN(data.quantity) || parseInt(data.quantity) < 0) {
            errors.quantity = 'Quantidade deve ser um número válido';
        }
        if (!data.code?.trim()) errors.code = 'Código é obrigatório';

        return {
            isValid: Object.keys(errors).length === 0,
            errors
        };
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validation = validateProduct(formData);

        if (validation.isValid) {
            onSave({
                ...formData,
                price: parseFloat(formData.price),
                quantity: parseInt(formData.quantity)
            });
        } else {
            setErrors(validation.errors);
        }
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900">
                            {product ? 'Editar produto' : 'Novo produto'}
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">
                            {product ? 'Atualize as informações do produto' : 'Preencha os dados do novo produto'}
                        </p>
                    </div>
                    <button
                        onClick={onCancel}
                        className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Form */}
                <div className="overflow-y-auto max-h-[calc(90vh-140px)]">
                    <div className="p-6 space-y-6">
                        {/* Nome */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Nome do produto *
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                                    errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
                                }`}
                                placeholder="Digite o nome do produto"
                            />
                            {errors.name && (
                                <div className="flex items-center space-x-1 mt-1">
                                    <AlertCircle className="h-4 w-4 text-red-500" />
                                    <p className="text-sm text-red-600">{errors.name}</p>
                                </div>
                            )}
                        </div>

                        {/* Descrição */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Descrição *
                            </label>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                rows={3}
                                className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none ${
                                    errors.description ? 'border-red-300 bg-red-50' : 'border-gray-300'
                                }`}
                                placeholder="Digite a descrição do produto"
                            />
                            {errors.description && (
                                <div className="flex items-center space-x-1 mt-1">
                                    <AlertCircle className="h-4 w-4 text-red-500" />
                                    <p className="text-sm text-red-600">{errors.description}</p>
                                </div>
                            )}
                        </div>

                        {/* Preço e Quantidade */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Preço (R$) *
                                </label>
                                <input
                                    type="number"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    step="0.01"
                                    min="0"
                                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                                        errors.price ? 'border-red-300 bg-red-50' : 'border-gray-300'
                                    }`}
                                    placeholder="0,00"
                                />
                                {errors.price && (
                                    <div className="flex items-center space-x-1 mt-1">
                                        <AlertCircle className="h-4 w-4 text-red-500" />
                                        <p className="text-sm text-red-600">{errors.price}</p>
                                    </div>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Quantidade *
                                </label>
                                <input
                                    type="number"
                                    name="quantity"
                                    value={formData.quantity}
                                    onChange={handleChange}
                                    min="0"
                                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                                        errors.quantity ? 'border-red-300 bg-red-50' : 'border-gray-300'
                                    }`}
                                    placeholder="0"
                                />
                                {errors.quantity && (
                                    <div className="flex items-center space-x-1 mt-1">
                                        <AlertCircle className="h-4 w-4 text-red-500" />
                                        <p className="text-sm text-red-600">{errors.quantity}</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Categoria e Código */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Categoria *
                                </label>
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                                >
                                    {categories.map((category) => (
                                        <option key={category} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Código *
                                </label>
                                <input
                                    type="text"
                                    name="code"
                                    value={formData.code}
                                    onChange={handleChange}
                                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors font-mono ${
                                        errors.code ? 'border-red-300 bg-red-50' : 'border-gray-300'
                                    }`}
                                    placeholder="Ex: PRD001"
                                />
                                {errors.code && (
                                    <div className="flex items-center space-x-1 mt-1">
                                        <AlertCircle className="h-4 w-4 text-red-500" />
                                        <p className="text-sm text-red-600">{errors.code}</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-end space-x-3 p-6 border-t border-gray-200 bg-gray-50">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        Cancelar
                    </button>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                    >
                        <Save className="h-4 w-4 mr-2" />
                        {product ? 'Atualizar' : 'Salvar'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductForm;