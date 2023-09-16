export interface IAuthenticateUserResponseDTO {
    user: {
        nickname: string;
        email: string;

    };
    token: string;
}