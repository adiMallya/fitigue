import { ActivityData } from "src/features/activity/types";
import { FoodData } from "src/features/food/types";

type ArrayType = ActivityData | FoodData;

export function sortByCreatedTime(data: ArrayType[]): ArrayType[] {
    return data.sort((a, b) => {
        const dateA = new Date(a?.createdAt);
        const dateB = new Date(b?.createdAt);

        return dateB.getTime() - dateA.getTime();
    })
}