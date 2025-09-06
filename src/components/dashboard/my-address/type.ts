export type detailsTypes = {
    name: string,
    value: string,
    placeholder: string,
} 

export type ModalStateType = {
  closed: boolean;
  opened: boolean;
  editType: string;
  formData: detailsTypes[];
};