import Link from "next/link";
import Image from "next/legacy/image";

export default function ProjectItem({project}) {
    const {properties, cover} = project;
    const title = properties.name.title[0].plain_text;
    const github = properties.Github.url;
    const description = properties.description.rich_text[0].plain_text
    const imgSrc = cover.file?.url || cover.external.url;
    const demo = properties.demo.url;
    const tags = properties.tags.multi_select;
    const {end, start} = properties.workPeriod.date; // {end, start "2022-12-08"}

    const calculatedPeriod = (start, end) => {
        if (!end) return '';
        const startDate = new Date(start);
        const endDate = new Date(end);
        const diff = (endDate - startDate) / 1000 / 60 / 60 / 24;
        return `${diff}일`;
    }

    return (
        <div className="project-card">
            <Image 
                className="rounded-t-xl"
                src={imgSrc}
                alt="project cover"
                layout="responsive"
                objectFit="cover"
                width="100%"
                height="60%"
                quality={50}
            />

            <div className="p-4 flex flex-col">
                <h1 className="text-2xl font-bold">{title}</h1>
                <Link className="mt-4 text-xl" href={github} target="_blank" rel="noreferrer">깃허브 바로가기</Link>
                <h3 className="mt-1 text-xl">{description}</h3>
                <p className="mt-1">
                    작업기간 : {start} ~ {end} ({calculatedPeriod(start, end)})
                </p>
                <div className="flex items-start mt-2">
                    {tags.map(tag => (
                        <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700" key={tag.id}>{tag.name}</h1>
                    ))}
                </div>
              
            </div>

             
        </div>
    )
}