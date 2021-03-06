/**
 * A basic model for an AddUserRequest. We can change this as needed. For now
 * it is just set up like this for test purposes (getting and displaying
 * AddUserRequests).
 */
export class AddUserRequest {
    inviteeEmail: string;
    inviterEmail: string;
    teamId: number;
    isAuthorized: boolean;

    constructor() {}
}
