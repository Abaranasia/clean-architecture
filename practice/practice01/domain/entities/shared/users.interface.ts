import { Id } from "../../value-objects/Id";
import { Name } from "../../value-objects/Name";
import { Email } from "../../value-objects/Email";
import { Password } from "../../value-objects/Password";

export interface UserObjectData {
  id: Id;
  name: Name;
  email: Email;
  password: Password;
}

export interface UserData {
  id?: string,
  name: string;
  email: string;
  password: string;
}

export type UsersArrayData = UserObjectData[];
  
 export interface UsersObjectData {
   // [key: string]: UserObjectData,
   [key: string]: UserObjectData,
} 