import { UserDetails } from "./user-details.model";

export interface User {

    isAuthenticated: boolean;
    details?: UserDetails;
}