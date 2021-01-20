export interface User {
    id: string
    name: {
        given: string
        surname: string
    }
    points: number
    animals: string[]
    isActive: boolean
    age: number
}