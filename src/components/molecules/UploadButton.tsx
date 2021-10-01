import React from 'react';
import { BaseButton } from '../uiParts/index';
import AddIcon from '@material-ui/icons/Add';

type TProps = {
  name: string;
  componentRef?: (instance: HTMLInputElement | null) => void;
  handleFile: any;
};

const UploadButton = ({ name, componentRef, handleFile }: TProps) => {
  return (
    <BaseButton className="px-4 text-black rounded-3xl shadow-md" startIcon={<AddIcon />}>
      UPLOAD
      <input
        className="absolute w-full opacity-0 appearance-none"
        type="file"
        name={name}
        id={name}
        ref={componentRef}
        accept="image/*"
        onChange={handleFile}
        multiple
      />
    </BaseButton>
  );
};

export default UploadButton;
