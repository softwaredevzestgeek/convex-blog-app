import UploadIcon from "./uploadIcon";

interface ImageUploadButtonProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImageUploadButton: React.FC<ImageUploadButtonProps> = ({ onChange }) => {
  return (
    <div className="flex items-center justify-center w-full">
      <label htmlFor="image" className="image-label">
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <UploadIcon />
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span>
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            SVG, PNG, JPG or GIF
          </p>
        </div>
        <input id="image" type="file" onChange={onChange} className="hidden" />
      </label>
    </div>
  );
};

export default ImageUploadButton;
