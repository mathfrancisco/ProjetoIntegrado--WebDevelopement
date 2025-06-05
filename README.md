# Sistema de Gestão de Produtos - Comercial Pereira - Projeto Integrado Web Developement

## Realizador por : Matheus Francisco RA 24001882

## 📋 Sobre o Projeto

Sistema web desenvolvido para a **Comercial Pereira**, empresa especializada em comércio atacadista e varejista de diversos produtos como equipamentos domésticos, embalagens, cosméticos, artigos de cama/mesa/banho, papelaria, ferragens e material elétrico.

## 🎯 Funcionalidades

### Módulo de Produtos
- ✅ **Listagem de Produtos**: Visualização completa do estoque
- ✅ **Cadastro de Produtos**: Adicionar novos itens ao catálogo
- ✅ **Edição de Produtos**: Atualizar informações existentes
- ✅ **Exclusão de Produtos**: Remover itens do sistema
- ✅ **Busca e Filtros**: Localizar produtos por nome ou categoria
- ✅ **Categorização**: Organização por tipos de produtos da empresa

### Interface e Experiência
- 📱 **Design Responsivo**: Funciona em desktop, tablet e mobile
- 🎨 **Interface Moderna**: Design limpo e profissional
- ⚡ **Performance Otimizada**: Carregamento rápido e fluido
- 🔍 **Navegação Intuitiva**: Menu simples e funcional

### Dados e Categorias
O sistema trabalha com as seguintes categorias baseadas nas atividades da empresa:
- **Equipamentos Domésticos**: Eletrodomésticos e utensílios
- **Embalagens**: Caixas, sacolas e materiais de embalagem
- **Cosméticos e Higiene**: Produtos de beleza e higiene pessoal
- **Cama, Mesa e Banho**: Lençóis, toalhas e acessórios
- **Papelaria**: Artigos de escritório e papelaria
- **Ferragens**: Ferramentas e acessórios
- **Material Elétrico**: Componentes e equipamentos elétricos
- **Armarinho**: Linhas, botões e acessórios de costura

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React 19**: Framework principal para construção da interface
- **TailwindCSS**: Framework CSS para estilização
- **Lucide React**: Biblioteca de ícones
- **JavaScript ES6+**: Linguagem de programação

### Estrutura e Organização
- **Arquitetura por Componentes**: Código modular e reutilizável
- **Hooks do React**: useState para gerenciamento de estado
- **Responsive Design**: Layout adaptativo para todos os dispositivos

## 📁 Estrutura do Projeto

```
sistema-gestao-produtos/
├── src/
│   ├── components/
│   │   ├── ProductList.jsx      # Lista de produtos
│   │   ├── ProductForm.jsx      # Formulário de cadastro/edição
│   │   ├── ProductCard.jsx      # Card individual do produto
│   │   ├── SearchBar.jsx        # Barra de busca
│   │   └── Header.jsx           # Cabeçalho da aplicação
│   ├── data/
│   │   └── mockData.js          # Dados simulados
│   ├── utils/
│   │   └── helpers.js           # Funções auxiliares
│   └── App.jsx                  # Componente principal
├── public/
│   └── index.html               # Arquivo HTML base
└── README.md                    # Este arquivo
```

## 🚀 Como Usar o Sistema

### Instalação
```bash
git clone https://github.com/seu-usuario/sistema-gestao-produtos.git
cd sistema-gestao-produtos
```

### Executar a Aplicação
```bash
npm install
npm start
```

### 1. Página Inicial
- Ao abrir o sistema, você verá a lista completa de produtos
- Use a barra de busca para encontrar produtos específicos
- Clique nos filtros de categoria para visualizar produtos por tipo

### 2. Cadastrar Novo Produto
- Clique no botão "**+ Novo Produto**" no topo da página
- Preencha todos os campos obrigatórios:
  - **Nome**: Nome do produto
  - **Descrição**: Descrição detalhada
  - **Preço**: Valor em reais
  - **Categoria**: Selecione uma das categorias disponíveis
  - **Quantidade**: Estoque disponível
  - **Código**: Código interno do produto
- Clique em "**Salvar**" para adicionar o produto

### 3. Editar Produto
- Na lista de produtos, clique no ícone de "**editar**" (lápis)
- Modifique as informações desejadas
- Clique em "**Salvar**" para confirmar as alterações

### 4. Excluir Produto
- Na lista de produtos, clique no ícone de "**excluir**" (lixeira)
- Confirme a exclusão quando solicitado
- O produto será removido permanentemente

### 5. Buscar Produtos
- Use a barra de busca no topo da página
- Digite o nome do produto que deseja encontrar
- Os resultados aparecerão em tempo real

### 6. Filtrar por Categoria
- Use os botões de filtro abaixo da barra de busca
- Clique em "**Todas**" para ver todos os produtos
- Clique em uma categoria específica para filtrar

## 💾 Dados do Sistema

### Produtos Pré-cadastrados
O sistema vem com produtos de exemplo em todas as categorias:

**Equipamentos Domésticos:**
- Liquidificador Industrial
- Panela de Pressão 10L
- Fritadeira Elétrica

**Embalagens:**
- Caixa de Papelão 30x30x30
- Sacola Plástica Reforçada
- Papel Kraft 80g

**E mais produtos em todas as outras categorias...**

## 📱 Responsividade

O sistema é totalmente responsivo e funciona perfeitamente em:
- **Desktop**: Layout completo com 3-4 produtos por linha
- **Tablet**: Layout adaptado com 2 produtos por linha
- **Mobile**: Layout vertical com 1 produto por linha
- **Menu mobile**: Navegação otimizada para telas pequenas

## 🔧 Configuração Técnica

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexão com internet (para fonts e ícones)

### Instalação Local
1. Faça o download dos arquivos do projeto
2. Abra o arquivo `index.html` em um navegador
3. O sistema estará pronto para uso

### Hospedagem
O sistema pode ser facilmente hospedado em:
- **Netlify**: Drag & drop dos arquivos
- **Vercel**: Deploy automático
- **GitHub Pages**: Hospedagem gratuita

## 📊 Dados e Funcionalidades Técnicas

### Gerenciamento de Estado
- Utiliza React Hooks (useState) para controle de estado
- Estado local para dados dos produtos
- Atualizações em tempo real na interface

### Validações
- Campos obrigatórios marcados
- Validação de preço (apenas números)
- Validação de quantidade (números inteiros)
- Mensagens de erro claras

### Performance
- Filtragem em tempo real sem recarregamento
- Busca instantânea conforme digitação
- Renderização otimizada de listas




