import { ImageSourcePropType } from "react-native";

type coffee = {
    id: number;
    image: ImageSourcePropType;
    name: string;
    origin: string;
    made_of: string;
    rating: number;
    description: string;
    size: number;
    price: number;
}

export default coffee;