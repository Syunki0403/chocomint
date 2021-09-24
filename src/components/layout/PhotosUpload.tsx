import React, { useState } from 'react';
import { UploadButton } from '../molecules/index';

type TProps = {
  name: string;
  componentRef?: (instance: HTMLInputElement | null) => void;
  photos: File[];
  setPhotos: (files: File[]) => void;
};

const PhotosUpload = ({ name, componentRef, photos, setPhotos }: TProps) => {
  const [isSameError, setIsSameError] = useState(false);
  const [isNumberError, setIsNumberError] = useState(false);
  const [isFileTypeError, setIsFileTypeError] = useState(false);

  const resetErrors = () => {
    setIsSameError(false);
    setIsNumberError(false);
    setIsFileTypeError(false);
  };

  const handleFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files === null || event.target.files.length === 0) {
      return;
    }

    const files = Object.values(event.target.files).concat();
    // 初期化することで同じファイルを連続で選択してもonChagngeが発動するように設定し、画像をキャンセルしてすぐに同じ画像を選ぶ動作に対応
    event.target.value = '';
    resetErrors();

    const pickedPhotos = files.filter((file) => {
      // 拡張子がjpeg、png、bmp、gif、svgか
      if (
        !['image/gif', 'image/jpeg', 'image/png', 'image/bmp', 'image/svg+xml'].includes(file.type)
      ) {
        setIsFileTypeError(true);
        return false;
      }

      // 同じ名前の画像が無いか
      const existsSameName = photos.some((photo) => photo.name === file.name);
      if (existsSameName) {
        setIsSameError(true);
        return false;
      }

      return true;
    });

    if (pickedPhotos.length === 0) {
      return;
    }

    const concatPhotos = photos.concat(pickedPhotos);
    if (concatPhotos.length >= 4) {
      setIsNumberError(true);
    }

    setPhotos(concatPhotos.slice(0, 3));
  };

  const handleCancel = (photoIndex: number) => {
    if (confirm('選択した画像を消してよろしいですか？')) {
      resetErrors();
      const modifyPhotos = photos.concat();
      modifyPhotos.splice(photoIndex, 1);
      setPhotos(modifyPhotos);
    }
  };

  return (
    <div>
      {[...Array(3)].map(
        (_: number, index: number) =>
          index < photos.length && (
            <button type="button" key={index} onClick={() => handleCancel(index)}>
              <img
                src={URL.createObjectURL(photos[index])}
                alt={`upload_img ${index + 1}`}
                onLoad={(e: any) => {
                  URL.revokeObjectURL(e.target.src);
                }}
              />
            </button>
          ),
      )}
      {isSameError && (
        <p className="text-red-500 text-sm">※既に選択された画像と同じものは表示されません</p>
      )}
      {isNumberError && (
        <p className="text-red-500 text-sm">※3枚を超えて選択された画像は表示されません</p>
      )}
      {isFileTypeError && (
        <p className="text-red-500 text-sm">
          ※jpeg, png, bmp, gif, svg以外のファイル形式は表示されません
        </p>
      )}
      <div>
        <UploadButton name={name} componentRef={componentRef} handleFile={handleFile} />
      </div>
    </div>
  );
};

export default PhotosUpload;
