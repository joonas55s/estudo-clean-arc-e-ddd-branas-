import Item from "../../../domain/entity/Item";
import ItemRepository from "../../../domain/repository/ItemRepository";

export default class ItemRepositoryMemory implements ItemRepository {
    private items: Item[]

    constructor() {
        this.items = [
            new Item(1, "Música", "CD", 30),
            new Item(2, "Vídeo", "DVD", 50),
            new Item(3, "Música", "MP3", 10),
            new Item(4, "Instrumentos musicais", "violão", 1000, 100, 30, 10, 3),
            new Item(5, "Instrumentos musicais", "amplificador", 5000, 100, 50, 50, 20),
            new Item(6, "Instrumentos musicais", "cabo", 30, 10, 10, 10, 0.9)
        ]
    }

    findById(idItem: number): Promise<Item | undefined> {
        const item = this.items.find(item => item.idItem === idItem)
        return Promise.resolve(item)
    }

}