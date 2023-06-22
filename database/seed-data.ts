interface SeedData{
    entries: SeedEntry[]
}

interface SeedEntry {
    description:string
    createdAt:number
    status:string
}

export const seedData:SeedData = {
    entries: [
        {
            description:'Pendiente: Sunt in excepteur magna eu in sunt velit magna culpa do velit reprehenderit.',
            createdAt:Date.now(),
            status:'pending'
        },
        {
            description:'En-Progreso: Laboris laborum do ipsum sunt consequat laborum.',
            createdAt:Date.now() + 1000000,
            status:'in-progress'
        },
        {
            description:'Terminadas: Est et dolor labore nulla magna ullamco do nulla exercitation aliquip cillum ut Lorem.',
            createdAt:Date.now() + 100000,
            status:'finished'
        },
    ]
}