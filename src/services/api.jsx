import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://127.0.0.1:3001/apiLearningBack/v1",
    timeout: 4000,
    httpsAgent: false,
});

export const getCourses = async () => {
    try {
        return await apiClient.get("/courses/");
    } catch (error) {
        return { 
            error: true,
            message: error.message,
        };
    }
}

export const getPublications = async () => {
    try {
        return await apiClient.get("/publications/");
    } catch (error) {
        return { 
            error: true,
            message: error.message,
        };
    }
}

export const getComments = async (uid) => {
    try {
        return await apiClient.get(`/comments/get/${uid}`);
    } catch (error) {
        return { 
            error: true,
            message: error.message,
        };
    }
}