export const products = [
    // Garrafas Domésticas
    {
        id: 1,
        name: 'Garrafa Repsol NEL',
        description: 'Modelo NEL com tara leve, oferecendo maior comodidade face às garrafas convencionais. Garrafa de Butano para uso doméstico, perfeita para garantir conforto e eficiência.',
        capacity: 12,
        type: 'butano',
        image: 'NEL.png',
        features: ['Cozinha', 'Aquecimento', 'Banho'],
    },
    {
        id: 2,
        name: 'Garrafa Repsol K6',
        description: 'É pequena, leve, prática e portátil. Com um design inovador, é ideal para uso doméstico. É uma excelente opção de consumo de gás butano para o inverno, para o verão, tanto dentro de casa como ao ar livre. Ideal para campismo.',
        capacity: 6,
        type: 'butano',
        image: 'k6.png',
        features: ['Casa','Portátil', 'Aquecimento', 'Campismo'],
    },
    {
        id: 3,
        name: 'Garrafa Butano 13kg',
        description: 'É utilizada principalmente em ambientes domésticos. Ideal para cozinhar, aquecer água e proporcionar aquecimento ambiente.',
        capacity: 13,
        type: 'butano',
        image: 'butano13kg.png',
        features: ['Aquecimento', 'Casa', 'Banho'],
    },
    {
        id: 4,
        name: 'Garrafa Butano 12.5kg',
        description: 'É utilizada principalmente em ambientes domésticos. Ideal para cozinhar, aquecer água e  aquecimento ambiente.',
        capacity: 12.5,
        type: 'butano',
        image: 'butano12,5.png',
        features: ['Banho', 'Casa', 'Aquecimento'],
    },
    {
        id: 5,
        name: 'Garrafa Propano 11kg',
        description: 'Tem uma variedade de usos no lar e nas empresas: cozinhar, água quente, aquecimento, churrasco, aquecedor de esplanada. O calor que gera este tipo de gás permite que mais rapidamente os alimentos se cozinhem ou aqueça a casa.',
        capacity: 11,
        type: 'propano',
        image: 'propano11kg.png',
        features: ['Cozinha', 'Casa', 'Aquecimento'],
    },
    {
        id: 6,
        name: 'Garrafa LA',
        description: 'Garrafa de gás usada essencialmente em empilhadoras.',
        capacity: 13,
        type: 'butano',
        image: 'garrafaLA.png',
        features: ['Empilhadores', 'Máquinas Industriais'],
    },

    // Garrafas Industriais
    {
        id: 7,
        name: 'Garrafa Propano 45kg',
        description: 'A garrafa de gás propano de 45kg. Devido à sua longa duração no consumo de aquecimento, cozinha e água quente, é a opção ideal para casas de maior dimensão. É também a mais adequada para o uso em empresas.',
        capacity: 45,
        type: 'propano',
        image: 'propano45kg.png',
        features: ['Hotelaria e Restauração', 'Empresas', 'Exterior'],
    },
    {
        id: 8,
        name: 'Garrafa Propano 35kg',
        description: 'Devido à sua longa duração no consumo de aquecimento, cozinha e água quente, é a opção ideal para casas de maior dimensão. É também a mais adequada para o uso em empresas.',
        capacity: 35,
        type: 'propano',
        image: 'propano35kg.png',
        features: ['Hotelaria e Restauração', 'Empresas', 'Exterior'],
    },

    // Acessórios
    {
        id: 9,
        name: 'Tubo de Gás',
        description: 'Tubo de borracha flexível para ligação de gás.',
        capacity: 0,
        type: 'acessorio',
        image: 'tubogas.png',
        features: ['Ligação Segura', 'Certificado'],
    },
    {
        id: 10,
        name: 'Trempe',
        description: 'Trempe metálica para fogão a gás.',
        capacity: 0,
        type: 'acessorio',
        image: 'trempe.png',
        features: ['Estabilidade', 'Resistente'],
    },
    {
        id: 11,
        name: 'Redutor Click Propano',
        description: 'Redutor/Adaptador tipo Click para garrafas de gás propano.',
        capacity: 0,
        type: 'acessorio',
        image: 'clickpropano.png',
        features: ['Fácil Instalação', 'Segurança'],
    },
    {
        id: 12,
        name: 'Redutor Click Butano',
        description: 'Redutor/Adaptador tipo Click para garrafas de gás butano.',
        capacity: 0,
        type: 'acessorio',
        image: 'clickbutano.png',
        features: ['Fácil Instalação', 'Segurança'],
    },
];

// Helper para baralhar array (Fisher-Yates shuffle)
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

export const getFeaturedProducts = (count = 4) => {
    // Destaques: mistura Butano e Propano
    const relevant = products.filter(p => ['butano', 'propano', 'acessorio'].includes(p.type));
    return shuffle([...relevant]).slice(0, count);
};

export const getRelatedProducts = (currentProduct, count = 4) => {
    // Relacionados: mesmo tipo, exclui o próprio
    const relevant = products.filter(p => p.id !== currentProduct.id);
    return shuffle([...relevant]).slice(0, count);
};
