import {
  Tree,
  TreeViewElement,
  File,
  Folder,
  CollapseButton,
} from "./tree-view-api";

type TOCProps = {
  toc: TreeViewElement[];
};

const TOC = ({ toc }: TOCProps) => {
  return (
    <Tree className="w-full h-60 bg-background p-2 rounded-md" indicator={true}>
      {toc.map((element, _) => (
        <TreeItem key={element.id} elements={[element]} />
      ))}
      <CollapseButton elements={toc} expandAll={true} />
    </Tree>
  );
};

type TreeItemProps = {
  elements: TreeViewElement[];
};

export const TreeItem = ({ elements }: TreeItemProps) => {
  return (
    <ul className="w-full gap-y-1">
      {elements.map((element) => (
        <li key={element.id} className="w-full gap-y-2">
          {element.children && element.children?.length > 0 ? (
            <Folder
              element={element.name}
              value={element.id}
              isSelectable={element.isSelectable}
              className="px-px pr-1 text-2xl bg-transparent border-0"
            >
              <TreeItem
                key={element.id}
                aria-label={`folder ${element.name}`}
                elements={element.children}
              />
            </Folder>
          ) : (
            <a target="_blank" href={element.link}>
              <File
                key={element.id}
                value={element.id}
                isSelectable={element.isSelectable}
                className="text-lg text-left leading-5 bg-transparent border-0"
              >
                <span>{element?.name}</span>
              </File>
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

const ProjectsTreeWrapper = () => {
  const toc = [
    {
      id: "1",
      name: "Projects",
      children: [
        {
          id: "2",
          name: "KnightConnect 🕸️",
          children: [
            {
              id: "3",
              name: " Mobile app to view, schedule and set reminders for school events & gatherings.",
              link: "https://github.com/cs262k-2024",
            },
          ],
        },
        {
          id: "4",
          name: "Luhu-App 🎬",
          children: [
            {
              id: "5",
              name: " A website to display movie and tv show info. Made with vanilla javascript.",
              link: "https://github.com/NanaAY/luhu-app",
            },
          ],
        },
        {
          id: "6",
          name: "Murder Mystery 💬",
          children: [
            {
              id: "7",
              name: "Natural language processing engine to analyze various writing samples using text analysis.",
              link: "https://github.com/NanaAY/luhu-app",
            },
          ],
        },
      ],
    },
  ];
  return <TOC toc={toc} />;
};

export default ProjectsTreeWrapper;
