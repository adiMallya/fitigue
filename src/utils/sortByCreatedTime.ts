import { ActivityData } from "src/features/activity/types";

export function sortByCreatedTime(activites: ActivityData[]): ActivityData[] {
    return activites.sort((a, b) => {
        const dateA = new Date(a?.createdAt);
        const dateB = new Date(b?.createdAt);

        return dateB.getTime() - dateA.getTime();
    })
}