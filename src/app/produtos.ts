export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    desconto?: number;    
    imagem: string;
}

export const produtos: IProduto[] = [
    { id: 1, descricao: "Mouse Y.K", preco: 439.00, descricaoPreco: "À vista no PIX", imagem: "assets/mouse-3.jpg", quantidadeEstoque: 13 },
    { id: 2, descricao: "imac 24 polegadas Core i7 32Gb Ram SSD 500 GB", preco: 1200.50, descricaoPreco: "À vista no PIX", desconto: 2000.00, imagem: "assets/monitor-1.jpg", quantidadeEstoque: 15 },
    { id: 3, descricao: "Teclado excelente", preco: 749.99, descricaoPreco: "À vista no PIX", imagem: "assets/teclado-1.jpg", quantidadeEstoque: 18 },
    { id: 4, descricao: "Fone para quem joga FPS", preco: 599.99, descricaoPreco: "À vista no PIX", imagem: "assets/fone-de-ouvido-2.jpg", quantidadeEstoque: 24 },
    { id: 5, descricao: "Alexa", preco: 250.00, descricaoPreco: "18X sem juros", imagem: "assets/alexa.jpg", quantidadeEstoque: 48 },
    { id: 6, descricao: "Cadeira Gamer", preco: 250.00, descricaoPreco: "18X sem juros", imagem: "assets/cadeira gamer.jpg", quantidadeEstoque: 778 },
    { id: 7, descricao: "Iphone", preco: 250.00, descricaoPreco: "18X sem juros", imagem: "assets/iphone-12-.jpg", quantidadeEstoque: 100 },
    { id: 8, descricao: "PlayStation", preco: 350.00, descricaoPreco: "18X sem juros", imagem: "assets/playstation.jpg", quantidadeEstoque: 9 },
    { id: 9, descricao: "Ipad", preco: 1400.00 , descricaoPreco: "18X sem juros", imagem: "assets/ipad.jpg", quantidadeEstoque: 66 },

    { id: 10, descricao: "Fone de ouvido", preco: 299.99, descricaoPreco: "À vista no PIX", imagem: "assets/fone-de-ouvido-1.jpg", quantidadeEstoque: 73 },
    { id: 11, descricao: "Fone de ouvido bom", preco: 399.99, descricaoPreco: "À vista no PIX", imagem: "assets/fone-de-ouvido-3.jpg", quantidadeEstoque: 67 },
    { id: 12, descricao: "HD 1TB", preco: 499.99, descricaoPreco: "À vista no PIX", imagem: "assets/hd.jpg", quantidadeEstoque: 10 },
    { id: 13, descricao: "Combo de placa de vídeos", preco: 18449.99, descricaoPreco: "À vista no PIX", imagem: "assets/placa-video.jpg", quantidadeEstoque: 10 },
    { id: 14, descricao: "Processador Ryzen", preco: 1000, descricaoPreco: "À vista no PIX", imagem: "assets/processador.jpg", quantidadeEstoque: 10 },
    { id: 15, descricao: "Notebook bom", preco: 2500, descricaoPreco: "À vista no PIX", imagem: "assets/laptop-1.jpg", quantidadeEstoque: 10 },
    { id: 16, descricao: "Notebook excelente", preco: 4500, descricaoPreco: "À vista no PIX", imagem: "assets/laptop-2.jpg", quantidadeEstoque: 10 },
    { id: 17, descricao: "Mouse barato", preco: 20, descricaoPreco: "À vista no PIX", imagem: "assets/mouse-1.png", quantidadeEstoque: 10 },
    { id: 18, descricao: "Mouse ótimo", preco: 200, descricaoPreco: "À vista no PIX", imagem: "assets/mouse-2.jpg", quantidadeEstoque: 10 },
    { id: 19, descricao: "Mouse pequeno", preco: 50, descricaoPreco: "À vista no PIX", imagem: "assets/mouse-4.jpg", quantidadeEstoque: 10 },
    { id: 20, descricao: "Teclado bom", preco: 159.99, descricaoPreco: "À vista no PIX", imagem: "assets/teclado-2.jpg", quantidadeEstoque: 10 },
]