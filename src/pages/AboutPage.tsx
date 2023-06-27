import React from 'react'
import { useNavigate } from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const navigate = useNavigate()
    return (
        <>
            <h1>Страница информации</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque illo perferendis voluptatem earum maiores ipsum suscipit, unde necessitatibus impedit itaque ducimus vel, sit eaque minima tempore. Quia ut delectus eius?</p>
            <button className='btn' onClick={() => navigate('/')}>Назад к списку дел</button>
        </>
    )
}
