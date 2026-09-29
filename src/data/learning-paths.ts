export interface LearningPath {
  id: string;
  title: string;
  icon: string; // Icon identifier for Lucide mapping
}

export const LEARNING_PATHS: LearningPath[] = [
  {
    id: "design",
    title: "Design",
    icon: "Palette",
  },
  {
    id: "development",
    title: "Development",
    icon: "Code2",
  },
  {
    id: "it-software",
    title: "IT & Software",
    icon: "Monitor",
  },
  {
    id: "business",
    title: "Business",
    icon: "Briefcase",
  },
  {
    id: "marketing",
    title: "Marketing",
    icon: "Megaphone",
  },
  {
    id: "photography",
    title: "Photography",
    icon: "Camera",
  },
];
