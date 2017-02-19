export const RECIEVED_EDIT = 'RECIEVED_EDIT';
export function recievedEdit(edit: string) {
  return {
    type: RECIEVED_EDIT,
    edit
  };
}
