import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import { Box } from "@mui/material";
import { info } from "../../info/Info";


export default function About() {

    let booksRed = ['The Complete Software Developer\'s Career Guide', 'Clean code'];

    function aboutMeText() {
        return <>
            <p >
                Hello and welcome on my website! <br></br><br></br>
                I'm a Software Engineer who loves to learn and face new challenges.
                If you are passionated about tech like me feel free to send a message <br></br><br></br>
                I'm not currently open for new opportunities
            </p>
        </>;
    }

    function skillsText() {
        return <>
            <p style={{ color: info.baseColor }}> Proficient With</p>
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <p style={{ color: info.baseColor }}> Currently Improving</p>
            <ul className={Style.skills}>
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    }

    function bookSection() {
        return <>
            <p style={{ color: info.baseColor }}> Books related to work red</p>
            <ul className={Style.skills}>
                {booksRed.map((book, index) => <li key={index}>{book}</li>)}
            </ul>
            <p style={{ color: info.baseColor }}> Currently reading </p>
            <p>
                Effective Java, third edition
            </p>
        </>;
    }

    function hobbies() {
        return <>
            <ul className={Style.skills}>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={aboutMeText()} title="Presentation" />
            <Terminal text={skillsText()} title="Skills" />
            <Terminal text={bookSection()} title="Book section" />
            <Terminal text={hobbies()} title="Hobbies" />
        </Box>
    )
}