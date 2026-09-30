import type { Metadata } from "next";
import { COURSES } from "@/data/courses";
import CourseDetailsClientPage from "./CourseDetailsClientPage";

interface CourseDetailsPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: CourseDetailsPageProps): Promise<Metadata> {
  const { id } = await params;
  const course = COURSES.find((c) => c.id === id) || COURSES[0];
  return {
    title: course.title,
  };
}

export default async function CourseDetailsPage({
  params,
}: CourseDetailsPageProps) {
  const { id } = await params;
  const course = COURSES.find((c) => c.id === id) || COURSES[0];

  return <CourseDetailsClientPage course={course} />;
}
