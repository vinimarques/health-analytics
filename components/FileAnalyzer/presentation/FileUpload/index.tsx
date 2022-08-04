import { useContext } from 'react';
import Image from 'next/image';
import Papa from 'papaparse';

import { FileWrapper } from './style';
import UploadImage from '@public/assets/img/upload.png';
import { ActivitiesContext } from '@context';
import { ActivityType } from '@constants/types';

const FileUpload = () => {
  const { addActivities } = useContext(ActivitiesContext);

  const fileChangeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    if (files) {
      Papa.parse(files[0], {
        header: true,
        skipEmptyLines: true,
        complete: (response) => {
          const { data } = response;
          addActivities(data as ActivityType[]);
        },
      });
    }
  };

  return (
    <FileWrapper>
      <input
        size={60}
        type="file"
        name="file"
        onChange={fileChangeEvent}
        accept=".csv"
      />
      <p>Select CSV File</p>
      <Image src={UploadImage} width="80" height="80" alt="Upload file" />
    </FileWrapper>
  );
};

export default FileUpload;
