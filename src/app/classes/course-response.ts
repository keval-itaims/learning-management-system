import { Chapters } from "./chapters";

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
    tutorName!: string;
    tutorImage!: string;
    chapters!: Chapters[]
}