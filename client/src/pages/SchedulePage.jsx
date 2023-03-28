import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSchedule, listSchedules } from "../store/scheduleSlice";
import { Button, Divider, Input } from 'antd'

const dummySchedules = [
    {
        id: 1,
        title: "Google PM Mock",
        date: "2023-04-01",
        time: "10:00",
        meetLink: "",
    },
    {
        id: 2,
        title: "Apple SDE Mock",
        date: "2023-04-03",
        time: "14:00",
        meetLink: "",
    },
];

const SchedulePage = () => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [meetLink, setMeetLink] = useState("");

    const dispatch = useDispatch();
    let schedules = useSelector(listSchedules);
    schedules = dummySchedules;

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    };

    const handleMeetLinkChange = (event) => {
        setMeetLink(event.target.value);
    };

    const handleAddSchedule = (event) => {
        event.preventDefault();
        dispatch(addSchedule({ title, date, time, meetLink }));
        setTitle("");
        setDate("");
        setTime("");
        setMeetLink("");
    };

    return (
        <div>
            <h1>Meeting Schedule</h1>
            <ul>
                {schedules.map((schedule) => (
                    <li key={schedule.id}>
                        <strong>{schedule.title}</strong> - {schedule.date} - {schedule.time}{" "}
                        -{" "}
                        <a href={schedule.meetLink} target="_blank" rel="noopener noreferrer">
                            Join
                        </a>
                    </li>
                ))}
            </ul>
            <Divider />
            <form onSubmit={handleAddSchedule}>
                <label>
                    Title:
                    <Input type="text" value={title} onChange={handleTitleChange} />
                </label>
                <br />
                <label>
                    Date:
                    <Input type="date" value={date} onChange={handleDateChange} />
                </label>
                <br />
                <label>
                    Time:
                    <Input type="time" value={time} onChange={handleTimeChange} />
                </label>
                <br />
                <label>
                    Meet Link:
                    <Input type="text" value={meetLink} onChange={handleMeetLinkChange} />
                </label>
                <br />
                <Button type="primary">Add Schedule</Button>
            </form>
        </div>
    );
};

export default SchedulePage;