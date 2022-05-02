import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
    return (
        <div className='notes__main-content'>
            <NotesAppBar />

            <div className="notes__content">
                <input 
                    type="text"
                    placeholder='Some awesome title'
                    className='notes__title-input'
                    autoComplete='off'
                />

                <textarea
                    placeholder='What happened today?'
                    className='notes__textarea'
                >
                </textarea>

                <div className="notes__image">
                    <img 
                        alt='landscape'
                        src='https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q='
                    />
                </div>
            </div>
        </div>
    )
}
