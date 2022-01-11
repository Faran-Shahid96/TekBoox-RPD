import { wrapper } from "../wrapper";

export function getRoles() {
  return wrapper.get(`accounts/get_roles_list`);
}
export function AddRoles(values) {
  return wrapper.post(`accounts/add_role`, values);
}
export function UpdateRoles(id, values) {
  return wrapper.put(`accounts/update_role?role_id=${id}`, values);
}
export function DeleteRole(id) {
  return wrapper.remove(`accounts/delete_role?role_id=${id}`);
}
