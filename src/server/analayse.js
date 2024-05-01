const BASE_API_URL = "https://api.meaningcloud.com/sentiment-2.1";
const axios = require("axios");

const analyze = async (url, key) => {
    try {
        const response = await axios.get(`${BASE_API_URL}?key=${key}&url=${url}&lang=en`);
        const { code } = response.data.status;
        
        if (code === 100) {
            throw new Error("Please enter a valid URL");
        } else if (code === 212) {
            throw new Error(response.data.status.msg);
        }
    
        return successResponse(response.data);
    } catch (error) {
        return handleError(error.message);
    }
};

const handleError = (msg) => {
    return {
        error: {
            code: 400,
            message: msg
        }
    };
};

const successResponse = (data) => {
    const { score_tag, agreement, subjectivity, confidence, irony } = data;
    const sample = {
        score_tag: score_tag,
        agreement: agreement,
        subjectivity: subjectivity,
        confidence: confidence,
        irony: irony
    };
    return {
        sample: sample,
        status: 200
    };
};

module.exports = {
    analyze
};
