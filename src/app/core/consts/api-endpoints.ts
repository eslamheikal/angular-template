<<<<<<< HEAD
=======

>>>>>>> 936adaf186c79057ed2c6fc37805da59bab88197
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

<<<<<<< HEAD
    static readonly COURSES = {
        Controller: 'courses',
        Actions: {
            Paged: `paged`,
            Activate: (id: string | number) => `activate/${id}`,
            Deactivate: (id: string | number) => `deactivate/${id}`,
        }
    };
=======
>>>>>>> 936adaf186c79057ed2c6fc37805da59bab88197
}