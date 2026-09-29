export interface Course {
  id: string;
  title: string;
  image: string;
  lessons: number;
  duration: string;
  comments: number;
  rating: number;
  instructor: string;
  level: string;
  avatars: string[];
  students: string;
  price: number;
  category: string;
}

export const CATEGORIES: string[] = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
  "+ More",
];

export const COURSES: Course[] = [
  {
    id: "course-1",
    title: "Learn Figma from Basic",
    image: "/images/courses/course-1.svg",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    rating: 4.5,
    instructor: "purepearl studio",
    level: "Beginner",
    avatars: [
      "/images/hero/avatar1.svg",
      "/images/hero/avatar2.svg",
      "/images/hero/avatar3.svg",
      "/images/hero/avatar4.svg",
    ],
    students: "26+",
    price: 25,
    category: "UI/UX Design",
  },
  {
    id: "course-2",
    title: "Build Digital Asset",
    image: "/images/courses/course-2.svg",
    lessons: 24,
    duration: "3 hours 45 mins",
    comments: 82,
    rating: 4.8,
    instructor: "purepearl studio",
    level: "Beginner",
    avatars: [
      "/images/hero/avatar2.svg",
      "/images/hero/avatar3.svg",
      "/images/hero/avatar4.svg",
      "/images/hero/avatar5.svg",
    ],
    students: "42+",
    price: 32,
    category: "Graphic Design",
  },
  {
    id: "course-3",
    title: "the Power of Big Data",
    image: "/images/courses/course-3.svg",
    lessons: 30,
    duration: "5 hours 10 mins",
    comments: 114,
    rating: 4.9,
    instructor: "purepearl studio",
    level: "Beginner",
    avatars: [
      "/images/hero/avatar1.svg",
      "/images/hero/avatar3.svg",
      "/images/hero/avatar4.svg",
      "/images/hero/avatar5.svg",
    ],
    students: "95+",
    price: 45,
    category: "Data Science",
  },
  {
    id: "course-4",
    title: "Balancing Productivity and Focus",
    image: "/images/courses/course-4.svg",
    lessons: 15,
    duration: "1 hour 50 mins",
    comments: 41,
    rating: 4.6,
    instructor: "purepearl studio",
    level: "Beginner",
    avatars: [
      "/images/hero/avatar1.svg",
      "/images/hero/avatar2.svg",
      "/images/hero/avatar4.svg",
      "/images/hero/avatar5.svg",
    ],
    students: "18+",
    price: 20,
    category: "Productivity",
  },
  {
    id: "course-5",
    title: "Mastering Money Management",
    image: "/images/courses/course-5.svg",
    lessons: 22,
    duration: "3 hours 12 mins",
    comments: 76,
    rating: 4.7,
    instructor: "purepearl studio",
    level: "Beginner",
    avatars: [
      "/images/hero/avatar1.svg",
      "/images/hero/avatar2.svg",
      "/images/hero/avatar3.svg",
      "/images/hero/avatar5.svg",
    ],
    students: "35+",
    price: 28,
    category: "Freelance & Entrepreneurship",
  },
  {
    id: "course-6",
    title: "From Idea to Startup Success",
    image: "/images/courses/course-6.svg",
    lessons: 28,
    duration: "4 hours 20 mins",
    comments: 93,
    rating: 4.9,
    instructor: "purepearl studio",
    level: "Beginner",
    avatars: [
      "/images/hero/avatar1.svg",
      "/images/hero/avatar2.svg",
      "/images/hero/avatar3.svg",
      "/images/hero/avatar4.svg",
    ],
    students: "50+",
    price: 39,
    category: "Marketing",
  },
];
