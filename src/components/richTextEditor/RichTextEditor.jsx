import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const formats = ["bold", "italic", "underline", "strike", "image", "list"];

const modules = {
  toolbar: [
    ["bold", "italic", "underline", "strike"],
    [],
    [{ list: "ordered" }, { list: "bullet" }],
    [],
    ["image"],
  ],
};

const RichTextEditor = () => {
  return (
    <ReactQuill
      theme="snow"
      formats={formats}
      modules={modules}
      placeholder="Add note text here....."
      className="rich-text-edior"
    />
  );
};

export { RichTextEditor };
