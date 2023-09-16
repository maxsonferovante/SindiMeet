export interface IAuthenticateUserResponseDTO {
    user: {
        name: string;
        email: string;
    };
    token: string;
}