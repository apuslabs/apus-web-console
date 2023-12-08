'use client'

import {useLayoutEffect, useRef, useState} from 'react'
import {Card, Col, Layout, Row, Statistic, Tooltip} from "antd";
import ReactEChartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import {LineChart} from 'echarts/charts';
import {
    TooltipComponent
} from 'echarts/components';
import {
    CanvasRenderer,
    // SVGRenderer,
} from 'echarts/renderers';

import 'echarts/theme/dark-blue'
import {
    useAssignedTaskCount,
    useAvailableClientCount,
    useAvgProofTime,
    useAvgReward,
    useTaskCount,
    useTasks,
    useTotalClient
} from "@/contexts/useContract";
import {useWeb3Context,TaskContract} from "@/contexts/web3";
import Header from '../../components/header';
import {QuestionCircleOutlined} from "@ant-design/icons";

echarts.use(
    [TooltipComponent, LineChart, CanvasRenderer]
);

function useChartData(taskContract?: TaskContract) {
    const tasks = useTasks(taskContract)
    let chartData = []
    for (let i = 0; i < tasks.length; i++) {
        // first is today, second is yesterday, and so on, gen chart data
        let date = new Date(Date.now() - i * 24 * 60 * 60 * 1000)
        let dateStr = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
        chartData.push({
            date: dateStr,
            value: tasks[i].toString()
        })
    }
    chartData = chartData.reverse()
    // 提取日期和数值
    var dates = chartData.map(function(item) {
        return item.date;
    });
    var values = chartData.map(function(item) {
        return item.value;
    });
    const chartOptions = {
        backgroundColor: 'transparent',
        xAxis: {
            type: 'category',
            data: dates,
            show: false, // 不显示横轴
        },
        yAxis: {
            type: 'value',
            min: 0,
            show: false, // 不显示纵轴
        },
        grid: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        },
        tooltip: {
            trigger: 'axis',
        },
        series: [
            {
                type: 'line',
                smooth: true, // 光滑的折线
                data: values,
                areaStyle: {},
            },
        ],
    }

    const cardRef = useRef<HTMLDivElement>(null)
    const [chartWidth, setChartWidth] = useState(0)
    useLayoutEffect(() => {
        if (cardRef.current) {
            setChartWidth(cardRef.current.clientWidth - 48)
        }
    }, []);
    return {
        cardRef,
        chartWidth,
        chartOptions,
        todayProofs: tasks[tasks.length - 1]
    }
}

export default function Explorer() {
    const { taikoMarketQueryContract, taikoTaskContract} = useWeb3Context()
    const {chartOptions, todayProofs, cardRef, chartWidth} = useChartData(taikoTaskContract.current)
    const totalClient = useTotalClient(taikoMarketQueryContract.current)
    const availableClient = useAvailableClientCount(taikoMarketQueryContract.current)
    const taskCount = useTaskCount(taikoTaskContract.current)
    const pendingTask = useAssignedTaskCount(taikoTaskContract.current)
    const avgProofTime = useAvgProofTime(taikoTaskContract.current)
    const avgReward = useAvgReward(taikoTaskContract.current)

    return <LayoutWithHeader>
        <Card ref={cardRef} bordered={false}>
            <h3>Daily proofs</h3>
            <h1 className=" text-4xl">{todayProofs}</h1>
            <ReactEChartsCore
                style={{width: chartWidth, height: 300}}
                echarts={echarts}
                option={chartOptions}
                notMerge={true}
                lazyUpdate={true}
                theme={"dark-blue"}
            />
        </Card>
        <Row gutter={[16, 16]} className={"mt-4"}>
            {
                [
                    { title: <div>Total Provers <Tooltip title={"All running provers which means max proof at same time."}><QuestionCircleOutlined /></Tooltip></div>, value: totalClient },
                    { title: <div>Total Tasks <Tooltip title={"All tasks whatever it's status"}><QuestionCircleOutlined /></Tooltip></div>, value: taskCount },
                    { title: <div>Avg Proof Time <Tooltip title={"All submitted tasks average proof time."}><QuestionCircleOutlined /></Tooltip></div>, value: Math.floor(avgProofTime / 60) + 'm' + avgProofTime % 60 + 's' },
                    { title: <div>Avg Reward <Tooltip title={"All submitted tasks average reward amount."}><QuestionCircleOutlined /></Tooltip></div>, value: avgReward + 'wei' },
                    { title: <div>Idle Provers <Tooltip title={"Provers currently available for proof."}><QuestionCircleOutlined /></Tooltip></div>, value: availableClient },
                    { title: <div>Assigned Tasks <Tooltip title={"Tasks has beed dispatched to client but not yet submit proof, equal to running tasks + expired tasks."}><QuestionCircleOutlined /></Tooltip></div>, value: pendingTask },
                ].map((item, index) => {
                    return <Col span={6} key={index}>
                        <Card bordered={false} style={{backgroundColor: '#262626'}}>
                            <Statistic title={item.title} value={item.value} />
                        </Card>
                    </Col>
                })
            }
        </Row>
    </LayoutWithHeader>
}

function LayoutWithHeader({ children }: { children: React.ReactNode}) {
    return <Layout className="h-screen flex flex-col">
        <div style={{ flexGrow: 0, flexShrink: 0 }}>
            <Header showConsole />
        </div>
        <div className={"flex-1 flex flex-col w-full p-6"} style={{ overflow: "scroll" }}>{children}</div></Layout>
}