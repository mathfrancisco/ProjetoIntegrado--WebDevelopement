
// Formatar preço para exibição em Real brasileiro
export const formatPrice = (price) => {
    return `R$ ${price.toFixed(2).replace('.', ',')}`;
};

// Filtrar produtos por termo de busca
export const filterProductsBySearch = (products, searchTerm) => {
    if (!searchTerm) return products;

    const term = searchTerm.toLowerCase();
    return products.filter(product =>
        product.name.toLowerCase().includes(term) ||
        product.description.toLowerCase().includes(term) ||
        product.code.toLowerCase().includes(term)
    );
};

// Filtrar produtos por categoria
export const filterProductsByCategory = (products, category) => {
    if (category === 'Todas') return products;
    return products.filter(product => product.category === category);
};

// Validar dados do produto
export const validateProduct = (productData) => {
    const errors = {};

    if (!productData.name?.trim()) {
        errors.name = 'Nome é obrigatório';
    }

    if (!productData.description?.trim()) {
        errors.description = 'Descrição é obrigatória';
    }

    if (!productData.price || isNaN(productData.price) || parseFloat(productData.price) <= 0) {
        errors.price = 'Preço deve ser um número válido maior que 0';
    }

    if (!productData.quantity || isNaN(productData.quantity) || parseInt(productData.quantity) < 0) {
        errors.quantity = 'Quantidade deve ser um número válido maior ou igual a 0';
    }

    if (!productData.code?.trim()) {
        errors.code = 'Código é obrigatório';
    }

    return {
        isValid: Object.keys(errors).length === 0,
        errors
    };
};

// Gerar ID único para novos produtos
export const generateUniqueId = () => {
    return Date.now();
};

// Verificar se o estoque está baixo
export const isLowStock = (quantity, threshold = 20) => {
    return quantity < threshold;
};

// Ordenar produtos por nome
export const sortProductsByName = (products) => {
    return [...products].sort((a, b) => a.name.localeCompare(b.name));
};

// Contar produtos por categoria
export const countProductsByCategory = (products) => {
    return products.reduce((acc, product) => {
        acc[product.category] = (acc[product.category] || 0) + 1;
        return acc;
    }, {});
};

// Calcular valor total do estoque
export const calculateTotalStockValue = (products) => {
    return products.reduce((total, product) => {
        return total + (product.price * product.quantity);
    }, 0);
};