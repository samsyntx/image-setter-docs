import { UploadDragDropIcon } from "../assets";

const DragDrop = () => {
  return (
    <div>
      <label
        htmlFor="videoFile"
        className="flex flex-col justify-center items-center w-100 h-[250px] outline-dashed rounded-xl outline-[var(--light-gray)] my-5"
      >
        <div className="bg-[#ebebeb] w-16 h-16 flex justify-center items-center rounded-full">
          <UploadDragDropIcon />
        </div>
        <p className="text-base text-gray-800 leading-6 font-semibold mt-4">
          Drag & drop Files to upload
        </p>
        <p style={{ fontSize: "12px", color: "#777" }}>
          mp4 OR mkv files ( Max 25 gb)
        </p>
      </label>

      {/* Hidden iframe and input */}
      <input
        type="file"
        id="videoFile"
        accept="video/*"
        style={{ display: "none" }}
      />
    </div>
  );
};

export default DragDrop;
