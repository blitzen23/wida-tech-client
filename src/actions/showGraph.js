import axios from 'axios';

export const dailyRevenue = () => async (dispatch, getState) => {
    const state = getState();
    const data = state.showGraph.data;
    const dict = {};
    for (let i = 1; i < 31; i++) {
        dict[i] = 0;
    }
    const result = data.reduce((result, item) => {
        const date = new Date(item.date);
        const day = date.getDate();
        result[day] = (result[day] || 0) + item.total_price;
        return result;
    }, dict);
    dispatch({
        type: 'SET_DAILY',
        payload: {
            labels: Object.keys(result),
            datasets: [
                {
                    label: 'Project Revenue Daily',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: result,
                },
            ],
        },
    });
};

export const monthlyRevenue = () => async (dispatch, getState) => {
    const state = getState();
    const data = state.showGraph.data;
    const dict = {};
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];
    for (let i = 0; i < 12; i++) {
        dict[months[i]] = 0;
    }
    const result = data.reduce((result, item) => {
        const date = new Date(item.date);
        const month = date.getMonth();
        result[months[month]] = (result[months[month]] || 0) + item.total_price;
        return result;
    }, dict);
    dispatch({
        type: 'SET_MONTHLY',
        payload: {
            labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December',
            ],
            datasets: [
                {
                    label: 'Project Revenue Monthly',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: result,
                },
            ],
        },
    });
};

export const weeklyRevenue = () => async (dispatch, getState) => {
    const state = getState();
    const data = state.showGraph.data;
    const dict = {};
    const result = data.reduce((result, item) => {
        const date = new Date(item.date);
        const tempDate = new Date(date.getFullYear(), 0, 1);
        const millisecondsInADay = 86400000;
        const week = Math.ceil(
            ((date - tempDate) / millisecondsInADay + tempDate.getDay() + 1) / 7
        );
        result[week] = (result[week] || 0) + item.total_price;
        return result;
    }, dict);
    const max = Object.keys(result);
    const length = max[max.length - 1];
    for (let i = 1; i <= length; i++) {
        if (!result.hasOwnProperty(i)) {
            result[i] = 0;
        }
    }
    dispatch({
        type: 'SET_WEEKLY',
        payload: {
            labels: Object.keys(result),
            datasets: [
                {
                    label: 'Project Revenue Weekly',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: result,
                },
            ],
        },
    });
};

export const getProjectRevenue = () => async (dispatch) => {
    try {
        const response = await axios.get(
            'http://localhost:5000/api/get-project-revenue'
        );
        dispatch({
            type: 'GET_PROJECT_REVENUE',
            payload: {
                data: response.data['data'],
            },
        });

        dispatch(dailyRevenue());
    } catch (error) {
        console.error('Error:', error);
    }
};
