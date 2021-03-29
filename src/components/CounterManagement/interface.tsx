export interface CounterManagementProps {
  ownerName: string;
} 
export interface CounterManagementState {
  counter: number;
  user: number;
  userData: UserData;
}

export interface UserData {
id: number,
email: string,
first_name: string,
last_name: string,
avatar: string
}
export interface UserDataAPI {
  data: UserData;
}