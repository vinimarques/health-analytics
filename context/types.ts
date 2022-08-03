export type ActivitiesType = {
  Type: string;
}[];

export type AddActivitiesType = (list: ActivitiesType) => void;

export type ActivitiesContextState = {
  activities: ActivitiesType;
  addActivities: AddActivitiesType;
};
