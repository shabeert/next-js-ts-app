export interface CourseProps  {
    id: string;
    classtime: string;
    description: string;
    image: string;
    isfeatured: boolean;
    name: string;
  };

  export interface CoursesListProps {
    courses: CourseProps[];
  };