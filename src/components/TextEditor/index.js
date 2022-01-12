import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
export default function index({ editorState, setEditorStateHandle }) {
  return (
    <>
      <div
        style={{
          border: "1px solid #d9d9d9",
          padding: "2px",
          minHeight: "350px",
        }}
      >
        <Editor
          editorState={editorState}
          onEditorStateChange={setEditorStateHandle}
          toolbar={{
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
          }}
        />
      </div>
    </>
  );
}
