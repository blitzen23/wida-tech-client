const initialState = {
    labels: [],
    datasets: [
        {
            label: '',
            backgroundColor: '',
            borderColor: '',
            data: [],
        },
    ],
    data: [],
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'GET_PROJECT_REVENUE':
            return {
                ...state,
                data: payload.data,
            };
        case 'SET_DAILY':
        case 'SET_MONTHLY':
        case 'SET_WEEKLY':
            return {
                ...state,
                labels: payload.labels,
                datasets: payload.datasets,
            };
        default:
            return state;
    }
}
