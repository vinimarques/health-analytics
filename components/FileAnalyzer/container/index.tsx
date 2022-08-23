import { useContext } from 'react';
import { FileUpload, ListActivities } from '../presentation';
import { AppContext } from '@context';

const FileAnalyzer = () => {
  const { isActive } = useContext(AppContext);
  if (isActive) return <ListActivities />;
  return <FileUpload />;
};

export default FileAnalyzer;
