import React, { useEffect, useState } from 'react'
import { Container, Content, Ul, Li, TitleProject, Url, Created_at } from '../style-project'
import ProgressBar from 'react-bootstrap/ProgressBar';



export default function Softskill() {
    const progressBar = {
        height: '30px',
    };
    const containerStyles = {
        height: 20,
        width: '80%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 50
    }

    const fillerStyles = {
        height: '90%',
        width: '100%',
        backgroundColor: "#13E4F9",
        borderRadius: 'inherit',
        textAlign: 'right'
    }
    const fillerStyles2 = {
        height: '100%',
        width: '80%',
        backgroundColor: "#13E4F9",
        borderRadius: 'inherit',
        textAlign: 'right'
    }
    const fillerStyles3 = {
        height: '100%',
        width: '60%',
        backgroundColor: "#13E4F9",
        borderRadius: 'inherit',
        textAlign: 'right'
    }

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold',
        fontFamily: 'Rubik'
    }


    return (
        <>
            <h1>SKILLS</h1>
            <Ul>
                <Li>
                    Front-end :
                    <div style={containerStyles}>
                        <div style={fillerStyles}>
                            <span style={labelStyles}>{90}</span>
                        </div>
                    </div>
                </Li>
                <Li>
                    Back-end :
                    <div style={containerStyles}>
                        <div style={fillerStyles}>
                            <span style={labelStyles}>{90}</span>
                        </div>
                    </div>
                </Li>
                <Li>
                    Web :
                    <div style={containerStyles}>
                        <div style={fillerStyles2}>
                            <span style={labelStyles}>{80}</span>
                        </div>
                    </div>
                </Li>
                <Li>
                    AWS :
                    <div style={containerStyles}>
                        <div style={fillerStyles3}>
                            <span style={labelStyles}>{60}</span>
                        </div>
                    </div>
                </Li>
            </Ul>


        </>
    )
}