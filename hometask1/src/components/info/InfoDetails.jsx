import Chip from "@mui/material/Chip";

const InfoDetails = ({ todo }) => {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm border border-black/10">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#ff3b3f]">
        Todo Details
      </p>

      <h1 className="mb-6 text-4xl font-black uppercase md:text-5xl">
        {todo?.name || "Untitled Todo"}
      </h1>

      <div className="mb-6 flex flex-wrap gap-3">
        <div className="rounded-full border border-black/10 px-4 py-2 text-sm font-medium">
          ID: {todo?.id}
        </div>

        {todo?.isCompleted ? (
          <Chip label="Completed" color="success" />
        ) : (
          <Chip label="Active" color="warning" />
        )}
      </div>

      <div className="rounded-2xl bg-[#f7f7f7] p-5">
        <h2 className="mb-2 text-lg font-bold">Description</h2>
        <p className="leading-7 text-black/70">
          {todo?.description || "No description"}
        </p>
      </div>
    </div>
  );
};

export default InfoDetails;
