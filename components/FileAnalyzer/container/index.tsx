import { useContext } from 'react';
import { FileUpload, ListActivities } from '../presentation';
import { ActivitiesContext } from '@context';

const FileAnalyzer = () => {
  const { activities } = useContext(ActivitiesContext);
  if (activities.length) return <ListActivities />;
  return <FileUpload />;
};

export default FileAnalyzer;
