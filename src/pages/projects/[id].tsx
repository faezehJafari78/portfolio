import { Gallery } from "@/components/projects/gallery";
import { Contents } from "@/components/projects/contents";
import { useRouter } from "next/router";
import { PROJECTS_CARD } from "@/data/projects";
import { useEffect, useState } from "react";
import { ProjectCardProps } from "@/components/projects/project-card";

const Id = () => {
  const router = useRouter();
  const [projectData, setProjectData] = useState<ProjectCardProps | null>(null);

  useEffect(() => {
    if (router.query.id) {
      const data = PROJECTS_CARD.find(
        (project) => project.name === router.query.id,
      );
      setProjectData(data || null);
    }
  }, [router.query.id]);

  return (
    <div className="mx-auto flex flex-col justify-around pb-6 pt-20 md:flex-row md:pt-28">
      <div className="mx-auto w-[90%] md:w-[42%]">
        <Gallery items={projectData?.imageUrl} />
      </div>
      <div className="mx-auto w-[90%] md:w-[48%]">
        <Contents item={projectData} />
      </div>
    </div>
  );
};

export default Id;
