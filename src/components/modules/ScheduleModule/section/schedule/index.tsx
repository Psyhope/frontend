'use client'
import React from 'react'
import Image from 'next/image'
import { dayNames } from '../../const'

export const ScheduleSection: React.FC = () => {

    const getDay = () => {
        return (new Date).getDay()
    }

    const getDayName = () => {
        return dayNames[getDay()]
    }
    
    return (
        <div>
            <button onClick={() => {
                console.log(getDay())
                console.log(getDayName())
            }}>
                klik
            </button>
        </div>
    )
}
