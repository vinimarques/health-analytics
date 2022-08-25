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

export type SetModalType = (value: boolean) => void;

export interface ActivitiesContextState {
  activities: ActivitiesType;
  addActivities: AddActivitiesType;
  setModal: SetModalType;
  isActive: boolean;
  modalActived: boolean;
  startDate: Date | null;
  finalDate: Date | null;
}

export interface ModalType {
  actived: boolean;
}

export interface DotType {
  actived: boolean;
}
