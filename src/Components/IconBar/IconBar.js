import React from 'react'
import './IconBar.css'

function IconBar() {
    return (
        <section className='iconBar'>
            <button className='instagram' onMouseDown={() => window.open('https://www.instagram.com/momentifyapp/')}/>
            <button className='facebook' onMouseDown={() => window.open('https://www.facebook.com/Momentify-639689706181516/')}/>
            <button className='twitter' onMouseDown={() => window.open('https://twitter.com/momentifyapp')}/>
        </section>
    )
}

export default IconBar