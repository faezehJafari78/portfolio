interface Project {
  name: string;
  favicon: string;
  imageUrl: string[];
  description: string;
  sourceCodeHref: string;
  liveWebsiteHref?: string;
}
interface Props {
  item: Project;
}

export const Contents = ({ item }: Props) => {
  return (
    <div className="flex flex-col">
      <div className="mt-4 flex items-center text-[21px] font-semibold">
        <span className="text-2xl">🧑‍💻</span> <span>Name:</span>&nbsp;
        <h1 className="mx-1 font-semibold">{item.name}</h1>
      </div>
      <div className="mt-4 text-[18px]">
        <span className="text-2xl">👩‍💼</span>
        <span>Employer:</span>&nbsp;
        <span>{item.description}</span>
      </div>
      <div className="mt-4 text-[17px]">
        <span className="text-2xl">📝</span> <span>Platform:</span>&nbsp;
        <span>{item.description}</span>
      </div>
      <div className="mt-4 text-[17px]">
        <span className="text-2xl">🤖</span> <span>Technology:</span>&nbsp;
        <span>{item.description}</span>
      </div>
      <div className="mt-4 text-[16px]">
        <span className="text-2xl">📜</span> <span>Description:</span>&nbsp;
        <span className=""> {item.description}</span>
      </div>
      <div className="my-4 text-[15px]">
        <span className="text-2xl">🔭</span> <span>Live project:</span>&nbsp;
        <a
          title="Live project"
          className="text-blue-400 hover:border-b-2 hover:text-blue-300 "
          href={item.sourceCodeHref}
        >
          {item.description}
        </a>
      </div>
      <hr />
    </div>
  );
};
