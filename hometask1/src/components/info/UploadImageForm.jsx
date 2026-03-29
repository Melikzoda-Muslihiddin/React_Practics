import { useState } from "react";
import Button from "@mui/material/Button";

const UploadImageForm = ({ onUpload, loading }) => {
  const [files, setFiles] = useState([]);

  const handleChange = (e) => {
    const selectedFiles = Array.from(e.target.files || []);
    setFiles(selectedFiles);
  };

  const handleSubmit = () => {
    if (files.length === 0) {
      alert("Choose at least one image");
      return;
    }

    onUpload(files);
    setFiles([]);
  };

  return (
    <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#ff3b3f]">
        Images
      </p>

      <h2 className="mb-4 text-2xl font-black uppercase">
        Upload multiple images
      </h2>

      <div className="flex flex-col gap-4">
        <input type="file" multiple accept="image/*" onChange={handleChange} />

        {files.length > 0 && (
          <div className="rounded-2xl bg-[#f7f7f7] p-4">
            <p className="mb-2 font-semibold">Selected files: {files.length}</p>

            <div className="flex flex-col gap-1 text-sm text-black/70">
              {files.map((file, index) => (
                <span key={`${file.name}-${index}`}>{file.name}</span>
              ))}
            </div>
          </div>
        )}

        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={loading}
          sx={{
            backgroundColor: "#ff3b3f",
            "&:hover": { backgroundColor: "#e43337" },
          }}
        >
          {loading ? "Uploading..." : "Upload Images"}
        </Button>
      </div>
    </div>
  );
};

export default UploadImageForm;
