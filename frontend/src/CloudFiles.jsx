import { useState, useEffect } from "react";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";

function CloudFiles() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [files, setFiles] = useState([]);

  const loadFiles = async () => {
    try {
      const folderRef = ref(storage, "food-images/");
      const result = await listAll(folderRef);

      const fileList = await Promise.all(
        result.items.map(async (item) => {
          const url = await getDownloadURL(item);

          return {
            name: item.name,
            url: url,
          };
        })
      );

      setFiles(fileList);
    } catch (error) {
      console.log("Error loading files:", error);
    }
  };

  useEffect(() => {
    loadFiles();
  }, []);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file first!");
      return;
    }

    try {
      const fileRef = ref(
        storage,
        "food-images/" + selectedFile.name
      );

      await uploadBytes(fileRef, selectedFile);

      alert("File uploaded successfully!");

      loadFiles();
    } catch (error) {
      console.log("Upload Error:", error);
      alert("Upload failed: " + error.message);
    }
  };

  return (
    <div>
      <h1>Cloud Files</h1>

      <h3>Upload Food / Meal Image</h3>

      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
      />

      <br />
      <br />

      <button onClick={handleUpload}>
        Upload File
      </button>

      {selectedFile && (
        <p>
          Selected File: <b>{selectedFile.name}</b>
        </p>
      )}

      {files.length > 0 && (
        <div>
          <h3>Uploaded Files</h3>

          {files.map((file, index) => (
            <div key={index}>
              <p>{file.name}</p>

              <a
                href={file.url}
                target="_blank"
                rel="noreferrer"
              >
                View File
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CloudFiles;