import { Download, Github, LinkedinIcon, Mail } from "lucide-react";
import { ModeToggle } from "./components/modeToggle";

import { Badge } from "./components/ui/badge";
import myResume from "./assets/files/ay_resume_2024.pdf";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./components/ui/navigation-menu";
import { useRef } from "react";

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
      <header className="border-b-2  p-3 flex fixed top-0 right-0 left-0 justify-between">
        <NavigationMenu>
          <NavigationMenuList className="gap-x-3">
            <NavigationMenuItem>
              <NavigationMenuLink
                onClick={() => {
                  aboutRef.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                onClick={() => {
                  projectsRef.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Projects
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                onClick={() => {
                  coursesRef.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Courses
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                onClick={() => {
                  skillsRef.current?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Skills
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <ModeToggle />
      </header>
      <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
        <section ref={aboutRef} id="about">
          <h1 className="mt-16 mb-4 font-bold text-6xl">Nana Osei Asiedu</h1>
          <p className="mb-4 text-3xl text-muted-foreground">
            Junior at Calvin University with a passion for frontend development
            and design. Sometimes I take pictures.
          </p>
        </section>
        <section ref={projectsRef} id="projects" className="my-8">
          <h3 className="mb-4 font-semibold text-3xl">Projects</h3>
          <a
            className="flex flex-col gap-y-1 mb-4"
            target="_blank"
            href="https://github.com/cs262k-2024"
          >
            <div className="w-full flex flex-col gap-x-0 md:gap-x-2">
              <p className="text-lg font-medium text-foreground text-nowrap">
                KnightConnect 🕸️
              </p>
              <p className="text-lg text-muted-foreground m-0">
                A mobile application to view, schedule and set reminders for
                school events and gatherings.
              </p>
            </div>
          </a>
          <a
            className="flex flex-col gap-y-1 mb-4"
            target="_blank"
            href="https://github.com/NanaAY/luhu-app"
          >
            <div className="w-full flex flex-col gap-x-0 md:gap-x-2">
              <p className="text-lg font-medium text-foreground text-nowrap">
                Luhu App 🎬
              </p>
              <p className="text-lg text-muted-foreground m-0">
                A website to display movie and tv show info. Made with vanilla
                javascript.
              </p>
            </div>
          </a>
          <a
            className="flex flex-col gap-y-1 mb-4"
            target="_blank"
            href="https://github.com/NanaAY/pwp-capstones/tree/master/codecademy%20final%20project"
          >
            <div className="w-full flex flex-col gap-x-0 md:gap-x-2">
              <p className="text-lg font-medium text-nowrap text-foreground">
                Murder Mystery 💬
              </p>
              <p className="text-lg text-muted-foreground">
                A natural language processing engine to analyze various writing
                samples text analysis.
              </p>
            </div>
          </a>
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
