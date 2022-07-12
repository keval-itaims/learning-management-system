import { Chapters } from "./chapters";
import { ReviewResponse } from "./review-response";

export class CourseResponse{
    courseId!: number;
    courseName!: string;
    courseDescription!: string;
    coursePrice!: number;
    courseDuration!: number;
    courseDate!: Date;
    courseRating!: number;
    courseStatus!: string;
    courseImage!: string;
    userId!: number;
    tutorName!: string;
    tutorImage!: string;
    chapters!: Chapters[]
    reviews!:ReviewResponse[]
}
