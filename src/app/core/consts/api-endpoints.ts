
export class ApiEndpoints {
    static readonly Generic = {
        Actions: {
            GetAll: 'all',
            GetPaged: 'paged',
            Get: (id: string | number) => `/${id}`,
            Create: 'create',
            Update: 'update',
            Delete: (id: string | number) => `/${id}`,
        }
    };

    static readonly AUTH = {
        Controller: 'auth',
        Actions: {
            Login: 'login',
            RefreshToken: 'refresh-token',
            ForgetPassword: (email: string) => `forget-password/${email}`,
        }
    };

}