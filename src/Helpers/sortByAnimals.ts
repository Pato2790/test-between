import { SortUsersByAnimal } from './../Models/sortAnimal';
import { User } from "../Models/user";

const sortUsersByAnimals = (users: User[], showOffline: boolean = false) => {
    const mapSortedUsersByAnimals: SortUsersByAnimal[] = [];

    const sortedUsersByAnimals = users.reduce((acc: Map<string, User[]>, user: User) => {
        user.animals.forEach((animal: string) => {
            if (!acc.has(animal)) {
                acc.set(animal, new Array<User>(user));
            } else {
                if (user.isActive || showOffline) {
                    acc.get(animal)?.push(user);
                    acc.get(animal)?.sort((lastUser: User, nextUser: User) => {
                        return nextUser.points - lastUser.points
                    });
                }
            }
        })

        return acc
    }, new Map<string, User[]>());

    sortedUsersByAnimals.forEach((users: User[], animal: string) => {
        mapSortedUsersByAnimals.push({ animal, users });
    });

    return mapSortedUsersByAnimals;
}

export { sortUsersByAnimals };