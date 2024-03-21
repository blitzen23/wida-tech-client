import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import {
    dailyRevenue,
    getProjectRevenue,
    monthlyRevenue,
    weeklyRevenue,
} from '../actions/showGraph';
import { connect } from 'react-redux';
import zoomPlugin, { zoom } from 'chartjs-plugin-zoom';

function ShowGraph({
    showGraph: { labels, datasets },
    getProjectRevenue,
    dailyRevenue,
    monthlyRevenue,
    weeklyRevenue,
}) {
    Chart.register(zoomPlugin);
    const options = {
        plugins: {
            zoom: {
                zoom: {
                    wheel: {
                        enabled: true,
                    },
                    pinch: {
                        enabled: true,
                    },
                    mode: 'xy',
                },
                pan: {
                    enabled: true,
                    mode: 'xy',
                },
            },
        },
    };
    useEffect(() => {
        getProjectRevenue();
    }, []);
    return (
        <div className='p-32 w-5/6 h-5/6 flex justify-center items-center lg:flex-row flex-col'>
            <div className='flex flex-col items-stretch justify-star gap-y-5'>
                <button
                    className='px-5 py-3 bg-slate-400'
                    onClick={dailyRevenue}
                >
                    Daily
                </button>
                <button
                    className='px-5 py-3 bg-slate-400'
                    onClick={weeklyRevenue}
                >
                    Weekly
                </button>
                <button
                    className='px-5 py-3 bg-slate-400'
                    onClick={monthlyRevenue}
                >
                    Monthly
                </button>
            </div>
            <Line
                data={{ labels: labels, datasets: datasets }}
                options={options}
                className=''
            />
        </div>
    );
}

const mapStateToProps = (state) => ({
    showGraph: state.showGraph,
});

export default connect(mapStateToProps, {
    getProjectRevenue,
    dailyRevenue,
    weeklyRevenue,
    monthlyRevenue,
})(ShowGraph);
