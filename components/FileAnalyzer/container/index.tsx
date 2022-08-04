import { useContext } from 'react';
import { FileUpload, ListActivities } from '../presentation';
import { ActivitiesContext } from '@context';

const FileAnalyzer = () => {
  const { isActive } = useContext(ActivitiesContext);
  if (isActive) return <ListActivities />;
  return <FileUpload />;
};

export default FileAnalyzer;
