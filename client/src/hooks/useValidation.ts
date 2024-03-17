const useValidation = () => {
    const validationParams = {
        user: {
            nameRegex: /^[a-zA-Z0-9]+$/,
            emailRegex: /^[a-zA-Z0-9.]+@[a-zA-Z0-9-]+.(com|mx)$/,
        },
        password: {
            regex: /^[^<>\s\\]+$/,
            minLength: 8,
        },
    };

    const userValidation = (input: string, type: string) => {
        if (type === "email") {
            return validationParams.user.emailRegex.test(input);
        } else if (type === "name") {
            return validationParams.user.nameRegex.test(input);
        }
        return false;
    };

    const passValidation = (password: string) => {
        return (
            password.length >= validationParams.password.minLength &&
            validationParams.password.regex.test(password)
        );
    };

    return { userValidation, passValidation };
};

export default useValidation;
