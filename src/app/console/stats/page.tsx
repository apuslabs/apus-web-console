'use client'

import React, {useEffect} from 'react'
import {Card, Col, Row, Statistic} from "antd";
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
    useAvgReward, useLatestTaskId,
    useTaskCount,
    useTotalClient
} from "@/contexts/useContract";
import {useWeb3Context} from "@/contexts/web3";

echarts.use(
    [TooltipComponent, LineChart, CanvasRenderer]
);

export default function Explorer() {
    // 模拟的数据
    var mockData = [
        { date: '2023-11-24', value: 0 },
        { date: '2023-11-25', value: 2 },
        { date: '2023-11-026', value: 1 },
        // ...
    ];

// 提取日期和数值
    var dates = mockData.map(function(item) {
        return item.date;
    });
    var values = mockData.map(function(item) {
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
            max: 2000,
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

    const cardRef = React.useRef<HTMLDivElement>(null)
    const [, setChartWidth] = React.useState(0)
    useEffect(() => {
        if (cardRef.current) {
            setChartWidth(cardRef.current.clientWidth)
        }
    }, []);
    const { marketContract, taskContract} = useWeb3Context()
    const totalClient = useTotalClient(marketContract.current)
    const availableClient = useAvailableClientCount(marketContract.current)
    const taskCount = useTaskCount(taskContract.current)
    const pendingTask = useAssignedTaskCount(taskContract.current)
    const avgProofTime = useAvgProofTime(taskContract.current)
    const avgReward = useAvgReward(taskContract.current)
    const latestTaskId = useLatestTaskId(taskContract.current)


    return <>
        <Card ref={cardRef} bordered={false}>
            <h3>Daily proofs</h3>
            <h1 className=" text-4xl">{mockData[0].value}</h1>
            <ReactEChartsCore
                style={{width: '100%', height: 300}}
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
                    { title: "Total Provers", value: totalClient },
                    { title: "Total Tasks", value: taskCount },
                    { title: "Avg Proof Time", valueL: avgProofTime },
                    { title: "Avg Reward", value: avgReward },
                    { title: "Available Instances", value: availableClient },
                    { title: "Pending Tasks", value: pendingTask },
                    { title: "Latest TaskID", value: latestTaskId },
                ].map((item, index) => {
                    return <Col span={6} key={index}>
                        <Card bordered={false} style={{backgroundColor: '#262626'}}>
                            <Statistic title={item.title} value={item.value} />
                        </Card>
                    </Col>
                })
            }
        </Row>
    </>
}