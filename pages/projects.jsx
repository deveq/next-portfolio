import Head from "next/head";
import Layout from "../components/Layout";
import ProjectItem from "../components/projects/ProjectItem";
import { DATABASE_ID, NOTION_TOKEN } from "../config";

export default function Projects({ projects = [] }) {
  console.log(projects);
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen px-5 mb-10 px-6">
        <h1 className="text-4xl font-bold sm:text-6xl">총 프로젝트 : 
            <span className="pl-4 text-blue-500 ">{projects.length}</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 py-10 gap-8 w-full">
        {projects.map((project, index) => {
          return (
            <ProjectItem 
                key={project.id}
                project={project}
            />
          );
        })}

        </div>
      </div>
    </Layout>
  );
}

// 빌드 타임에 호출
export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${NOTION_TOKEN}`,
    },
    body: JSON.stringify({ 
        page_size: 100,
        sorts: [
            {
                "property": "title",
                "direction": "descending"
            }
        ]
    }),
  };

  try {
    const res = await fetch(
      `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
      options
    );
    const { results } = await res.json();
    return {
      props: {
        projects: results,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
