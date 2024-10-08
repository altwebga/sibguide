export type ListingType = {
  id: number;
  value: string;
  label: string;
};

export type UserRoleValue = "admin" | "user" | "owner";

export type UserRoleType = {
  label: string;
  value: UserRoleValue;
};
