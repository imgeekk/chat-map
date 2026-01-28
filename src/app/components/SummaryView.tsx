import { GeneratedOutput } from "@/types/output";

const SummaryView = ({ data }: { data: GeneratedOutput }) => {
  return (
    <div className="w-full lg:w-250 px-5 mt-20 mb-30 font-[inter-regular]">
      <h1 className="text-xl font-bold">{data.title}</h1>
      <br></br>
      <p className="text-black/80">{data.summary}</p>
      <br></br>

      {data.sections.map((sec, i) => (
        <div key={i} className="my-5">
          <h2 className="text-lg font-[inter-bold]">{sec.heading}</h2>
          <ul>
            {sec.points.map((p, idx) => (
              <li key={idx} className="text-md">{`> ` + p}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SummaryView;
