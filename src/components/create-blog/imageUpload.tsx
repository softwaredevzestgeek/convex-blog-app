import ImageUploadButton from "./imageUploadButton";

interface ImageUploadProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  imagePreview: string | null;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  onChange,
  imagePreview,
}) => {
  return (
    <div className="mb-4">
      <label htmlFor="image" className="block mb-2 text-sm font-medium">
        Image :
      </label>
      <ImageUploadButton onChange={onChange} />
      {imagePreview && (
        <img
          src={imagePreview}
          alt="Preview"
          className="mt-4 rounded-lg"
          style={{ maxWidth: "100%", maxHeight: "146px", width: "100%" }}
        />
      )}
    </div>
  );
};

export default ImageUpload;
