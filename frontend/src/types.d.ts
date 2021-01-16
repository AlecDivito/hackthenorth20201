interface User {
    name: string;
    location: boolean; // can change later
}

type AddUser = (name: string, location: boolean) => void;