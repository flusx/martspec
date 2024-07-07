import { IReviewData } from "@/data/IReviewData";
import { IReviewWithFiller } from "@/data/IReviewWithFiller";
import { fillerArray } from "./fillerArray";

interface IValidateReviewData {
    reviewData: IReviewData["feed"]["entry"];
    arrLength: number;
}

type TValidateReviewData = (props: IValidateReviewData) => Promise<IReviewWithFiller>;

export const validateReviewData: TValidateReviewData = async ({ reviewData, arrLength }) => {
    if (!reviewData) {
        return fillerArray(arrLength);
    }

    if (!Array.isArray(reviewData)) {
        return [reviewData, ...fillerArray(arrLength - 1)];
    }

    if (reviewData.length < arrLength) {
        return [...reviewData, ...fillerArray(arrLength - reviewData.length)];
    }

    return reviewData.slice(0, arrLength);
};
