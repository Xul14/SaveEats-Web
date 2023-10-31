//Inport react e bibliotecas do antd
import React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import 'dayjs/locale/pt-br';
import dayLocaleData from 'dayjs/plugin/localeData';
import { Calendar, Col, Radio, Row, Select, Typography, theme } from 'antd';

//Import css
import './CalendarFuncionamento.css'

dayjs.extend(dayLocaleData);
dayjs.locale('pt-br');

export const CalendarFuncionamento = () => {

    const { token } = theme.useToken();
    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };

    const wrapperStyle = {
        width: 380,
        border: `1px solid ${token.colorBorderSecondary}`,
        borderRadius: token.borderRadiusLG,
        boxShadow: '3px 3px 15px #AFACAB',
    };

    const currentMonthName = dayjs().format('MMMM');
    // const weekdaysMin = dayjs().localeData().weekdaysMin();

    return (
        <div style={wrapperStyle}>
            <Calendar
                fullscreen={false}
                headerRender={({ value, type, onChange, onTypeChange }) => {

                    const start = 0;
                    const end = 12;
                    const monthOptions = [];

                    let current = value.clone();

                    const localeData = value.localeData();
                    const months = [];

                    for (let i = 0; i < 12; i++) {
                        current = current.month(i);
                        months.push(localeData.monthsShort(current));
                    }

                    for (let i = start; i < end; i++) {
                        monthOptions.push(
                            <Select.Option key={i} value={i} className="month-item">
                                {months[i]}
                            </Select.Option>,
                        );
                    }

                    const year = value.year();
                    const month = value.month();
                    const options = [];
                    for (let i = year - 10; i < year + 10; i += 1) {
                        options.push(
                            <Select.Option key={i} value={i} className="year-item">
                                {i}
                            </Select.Option>,
                        );
                    }

                    return (
                        <div style={{ padding: 8, }}>

                            <Typography.Title className='title-mounth' level={4}>{currentMonthName}</Typography.Title>

                        </div>
                    );
                }}
                onPanelChange={onPanelChange}
            />
        </div>
    );
};