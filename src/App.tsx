import { useRef } from "react";
import { Download, Github, LinkedinIcon, Mail } from "lucide-react";

import myResume from "./assets/files/ay_resume_2024.pdf";
import myJPG from "./assets/images/IMG_3797.jpg";

import { ModeToggle } from "./components/modeToggle";
import ProjectsTreeWrapper from "./components/projects-tree";

import { Badge } from "./components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import { Button } from "./components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./components/ui/navigation-menu";

//TODO: Add avatar
function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const coursesRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  interface Skill {
    id: number;
    name: string;
  }

  const skills: Skill[] = [
    { id: 1, name: "Javascript/Typescript" },
    { id: 2, name: "Python" },
    { id: 3, name: "HTML/CSS" },
    { id: 4, name: "Tailwind" },
    { id: 5, name: "SQL/Postgres" },
    { id: 6, name: "React/React Native" },
    { id: 7, name: "Expo" },
    { id: 8, name: "Node.js" },
    { id: 9, name: "Jest" },
    { id: 10, name: "Git" },
    { id: 11, name: "Vscode" },
  ];

  interface Course {
    id: number;
    name: string;
  }

  const courses: Course[] = [
    { id: 1, name: "Data Structures & Algorithms" },
    { id: 2, name: "Web Development" },
    { id: 3, name: "Programming Language Concepts" },
    { id: 4, name: "Software Engineering" },
    { id: 5, name: "Operating Systems & Networking" },
  ];

  return (
    <>
      <header className=" bg-transparent backdrop-blur-md px-6 py-3 flex fixed top-0 right-0 left-0 justify-between">
        <NavigationMenu>
          <NavigationMenuList className="gap-x-3">
            <NavigationMenuItem>
              <Button
                className="bg-transparent border-0"
                variant={"linkHover2"}
              >
                <NavigationMenuLink
                  onClick={() => {
                    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  About
                </NavigationMenuLink>
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button
                className="bg-transparent border-0"
                variant={"linkHover2"}
              >
                <NavigationMenuLink
                  onClick={() => {
                    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Projects
                </NavigationMenuLink>
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button
                className="bg-transparent border-0"
                variant={"linkHover2"}
              >
                <NavigationMenuLink
                  onClick={() => {
                    coursesRef.current?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Courses
                </NavigationMenuLink>
              </Button>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button
                className="bg-transparent border-0"
                variant={"linkHover2"}
              >
                <NavigationMenuLink
                  onClick={() => {
                    skillsRef.current?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Skills
                </NavigationMenuLink>
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <ModeToggle />
      </header>
      <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
        <section ref={aboutRef} id="about">
          <Avatar className="size-24 mt-16 animate-slidein [--slidein-delay:300ms]">
            <AvatarImage src={myJPG} />
            <AvatarFallback>NA</AvatarFallback>
          </Avatar>

          <h1 className="mt-16 mb-4 font-bold text-7xl animate-slidein [--slidein-delay:500ms] opacity-0">
            Nana Osei Asiedu
          </h1>
          <p className="mb-4 text-3xl text-muted-foreground animate-slidein [--slidein-delay:700ms] opacity-0">
            Junior at Calvin University with a passion for Software development
            and design. Photographer by choice.
          </p>
        </section>
        <section ref={projectsRef} id="projects" className="my-8">
          <h3 className="mb-4 font-semibold text-3xl">Projects</h3>
          <ProjectsTreeWrapper />
        </section>
        <section ref={coursesRef} id="courses" className="mb-8">
          <h2 className="mb-4 font-semibold text-2xl">Relevant Courses</h2>
          <ul className="mb-4 flex flex-wrap gap-2">
            {courses.map((course: Course) => (
              <li key={course.id}>
                <Badge className="text-base px-5" variant="secondary">
                  {course.name}
                </Badge>
              </li>
            ))}
          </ul>
        </section>
        <section ref={skillsRef} id="skills" className="mb-12">
          <h2 className="mb-4 font-semibold text-2xl">Skills/Tools</h2>
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill: Skill) => (
              <li key={skill.id}>
                <Badge className="text-base px-5" variant="secondary">
                  {skill.name}
                </Badge>
              </li>
            ))}
          </ul>
        </section>
        <footer className="mb-16 flex flex-row justify-between">
          <ul className="flex flex-col mt-8 gap-x-0 gap-y-2 md:flex-row md:gap-x-4 md:gap-y-0">
            <li>
              <a
                className="flex items-center"
                target="_blank"
                href="https://github.com/NanaAY"
              >
                <Github size={16} />
                <p className="ml-2">Github</p>
              </a>
            </li>
            <li>
              <a
                className="flex items-center"
                target="_blank"
                href="https://linkedin.com/in/nanaoseiay"
              >
                <LinkedinIcon size={16} />
                <p className="ml-2">Linkedin</p>
              </a>
            </li>
            <li>
              <a
                className="flex items-center"
                target="_blank"
                href="mailto:na29@calvin.edu"
              >
                <Mail size={16} />
                <p className="ml-2">Mail</p>
              </a>
            </li>
          </ul>
          <a
            className="items-center flex flex-col mt-8 gap-x-0 gap-y-2 md:flex-row md:gap-x-4 md:gap-y-0"
            target="_blank"
            href={myResume}
            download={myResume}
          >
            <Download size={16} />
            <p className="ml-2">Download resume</p>
          </a>
        </footer>
      </main>
    </>
  );
}

export default App;
