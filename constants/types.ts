export interface ActivitiesItemType {
  type: string;
  list: ActivityType[];
}

export type ActivitiesType = ActivitiesItemType[];

export interface ActivityType {
  Type: string;
  Start: Date;
  'Total Energy': string;
  Duration: string;
}

export type AddActivitiesType = (list: ActivityType[]) => void;

export interface ActivitiesContextState {
  activities: ActivitiesType;
  addActivities: AddActivitiesType;
  isActive: boolean;
  startDate: Date | null;
  finalDate: Date | null;
}
